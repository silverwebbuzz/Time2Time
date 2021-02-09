import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/api/common/common.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.page.html',
  styleUrls: ['./add-brand.page.scss'],
})
export class AddBrandPage implements OnInit {

  addbrand_form: FormGroup;
  brand_process: boolean;
  
  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder) {

    this.addbrand_fb();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
  }

  addbrand_fb(){
    this.addbrand_form = this.formBuilder.group({
      name: [null, Validators.required],
      active: [null, Validators.required]
    });
  }

  addBrand(){
    for (let v in this.addbrand_form.controls) {
      this.addbrand_form.controls[v].markAsTouched();
    }
    if (this.addbrand_form.valid) {
      this.CommonService.presentLoading();
      this.brand_process = true;
      const body = {
          "name" : this.addbrand_form.value.name,
          "active" : this.addbrand_form.value.active,
      };
      this.CommonService.brandAdd(body).subscribe(val => {
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
