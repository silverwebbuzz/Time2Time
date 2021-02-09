import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/api/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.page.html',
  styleUrls: ['./edit-brand.page.scss'],
})
export class EditBrandPage implements OnInit {

  editbrand_form: FormGroup;
  brandData: any;
  brand_process: boolean;
  data: string;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public CommonService: CommonService,
    public router: Router,
    private statusBar: StatusBar,
    private route: ActivatedRoute) {

    this.edtbrand_fb();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  isActive(val)
    {
      if(val == 1)
      {
        return 'Active';
      }else{
        return 'Inactive';
      }
    }

  ngOnInit() {
    let reqData = this.route.snapshot.queryParams;
    this.brandDetails(reqData);
  }

  edtbrand_fb(){
    this.editbrand_form = this.formBuilder.group({
      name: [null, Validators.required],
      active: [null, Validators.required]
    });
  }

  brandDetails(reqData){
    this.CommonService.brandGet(reqData).subscribe(res => {
      this.brandData = res.data;
      console.log("::::::",this.brandData)
      this.editbrand_form.patchValue({
        name: this.brandData.name,
        active: this.brandData.active
      });
    },error => {
    })
  }

  editBrand(){
    for (let v in this.editbrand_form.controls) {
      this.editbrand_form.controls[v].markAsTouched();
    }
    if (this.editbrand_form.valid) {
      this.CommonService.presentLoading();
      this.brand_process = true;
      const body = {
          "name" : this.editbrand_form.value.name,
          "active" : this.editbrand_form.value.active,
          "id" : this.route.snapshot.queryParams.id,
      };
      console.log("edit",body)
      this.CommonService.brandEdit(body).subscribe(val => {
        this.brand_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.CommonService.presentToastWithOptions(val.message);
         this.router.navigate(['/brands']);
        }else{
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
      err =>{
        this.brand_process = false;
        this.CommonService.dismissLoading();
        this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
