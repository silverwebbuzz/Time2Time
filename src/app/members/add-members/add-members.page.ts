import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/_helper/must-match.validator';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.page.html',
  styleUrls: ['./add-members.page.scss'],
})
export class AddMembersPage implements OnInit {

  addmembers_form: FormGroup;
  member_process: boolean;
  permissionlist: any;

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder) {

    this.addmembers_fb();
    this.permissionList()
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
  }

  addmembers_fb(){
    this.addmembers_form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      phone: [null, Validators.required],
      group_id: [null, Validators.required],
      gender: [null, Validators.required],
      confirmpassword: [null, Validators.required]
      },{validator: ConfirmPasswordValidator.MatchPassword});
    };

    permissionList() {
      this.CommonService.getPermisssionList().subscribe(data => {
        this.permissionlist = data.data;
        console.log("per::",this.permissionlist)   
      },
      );
    }

  addMember(){
    for (let v in this.addmembers_form.controls) {
      this.addmembers_form.controls[v].markAsTouched();
    }
    if (this.addmembers_form.valid) {
      this.CommonService.presentLoading();
      this.member_process = true;
      const body = {
          "firstname" : this.addmembers_form.value.firstname,
          "lastname" : this.addmembers_form.value.lastname,
          "username" : this.addmembers_form.value.username,
          "email" : this.addmembers_form.value.email,
          "password" : this.addmembers_form.value.password,
          "phone" : this.addmembers_form.value.phone,
          "group_id" : this.addmembers_form.value.group_id,
          "gender" : this.addmembers_form.value.gender,
      };
      console.log("gidddd",body)
      this.CommonService.memberAdd(body).subscribe(val => {
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

}
