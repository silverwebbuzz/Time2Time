import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator, MustMatch } from 'src/app/_helper/must-match.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.page.html',
  styleUrls: ['./edit-members.page.scss'],
})
export class EditMembersPage implements OnInit {

  editmembers_form: FormGroup;
  memberData: any;
  member_process: boolean;
  group: any;
  permissionlist: any;
  submitted = false;

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    public router: Router,
    private statusBar: StatusBar,
    public CommonService: CommonService,
    private formBuilder: FormBuilder) {

    this.editmembers_fb();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
  }
  get f() { return this.editmembers_form.controls; }

  editmembers_fb(){
    this.editmembers_form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      username: [null, Validators.required],
      email: [null],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      phone: [null, Validators.required],
      id: [null, Validators.required],
      gender: [null, Validators.required],
      // confirmpassword: ['']
      },
      // {validator: MustMatch('password', 'confirmpassword')}
      );

      let reqData = this.route.snapshot.queryParams;
      this.getCompanyDetails(reqData);
    };
    radioButtonValue(val) { if (val != null && val != "") { if (val == 1) { return true; } else { return false; } } else { return ''; } }
    getCompanyDetails(reqData) {
      this.CommonService.memberGet(reqData).subscribe(res => {
        this.memberData = res.data;
        this.group =  this.memberData.user_group.group_name,
        console.log("memberData",  this.memberData)
        
        this.editmembers_form.patchValue({
          firstname: this.memberData.firstname,
          lastname: this.memberData.lastname,
          username: this.memberData.username,
          email: this.memberData.email,
          password: this.memberData.password,
          phone: this.memberData.phone,
          gender:  this.radioButtonValue(this.memberData.gender),
          id: this.memberData.user_group.id
        });
        
      }, error => {
      })
      this. permissionList()
    }

    permissionList() {
      this.CommonService.getPermisssionList().subscribe(data => {
        this.permissionlist = data.data;
       },
      );
    }

   
  editMember(){
    this.submitted = true;
    for (let v in this.editmembers_form.controls) {
      this.editmembers_form.controls[v].markAsTouched();
    }
  
    if (this.editmembers_form.valid) {
      this.CommonService.presentLoading();
      this.member_process = true;
      const body = {
          "firstname" : this.editmembers_form.value.firstname,
          "lastname" : this.editmembers_form.value.lastname,
          "username" : this.editmembers_form.value.username,
          "email" : this.editmembers_form.value.email,
          "password" : this.editmembers_form.value.password,
          "phone" : this.editmembers_form.value.phone,
          "group_id" : this.editmembers_form.value.id,
          "gender" : this.editmembers_form.value.gender,
          "id": this.route.snapshot.queryParams.id,
      };
      console.log("iddd",body)
      this.CommonService.memberEdit(body).subscribe(val => {
        this.member_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.CommonService.presentToastWithOptions(val.message);
         this.router.navigate(['/manage-members']);
        }else{
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
      err =>{
        this.member_process = false;
        this.CommonService.dismissLoading();
        this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
