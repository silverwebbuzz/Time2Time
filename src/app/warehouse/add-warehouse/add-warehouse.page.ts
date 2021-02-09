import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/api/common/common.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.page.html',
  styleUrls: ['./add-warehouse.page.scss'],
})
export class AddWarehousePage implements OnInit {

  addwarehouse_form: FormGroup;
  warehouse_process: boolean;

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder) {

    this.addwarehouse_fb();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
  }

  addwarehouse_fb(){
    this.addwarehouse_form = this.formBuilder.group({
      name: [null, Validators.required],
      active: [null, Validators.required]
    });
  }

  addWarehouse(){
    for (let v in this.addwarehouse_form.controls) {
      this.addwarehouse_form.controls[v].markAsTouched();
    }
    if (this.addwarehouse_form.valid) {
      this.CommonService.presentLoading();
      this.warehouse_process = true;
      const body = {
          "name" : this.addwarehouse_form.value.name,
          "active" : this.addwarehouse_form.value.active,
      };
      this.CommonService.warehouseAdd(body).subscribe(val => {
        this.warehouse_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {      
          this.CommonService.presentToastWithOptions(val.message);  
         this.router.navigate(['/warehouse']);
        }else{
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
      err =>{
        this.warehouse_process = false;
        this.CommonService.dismissLoading();
        this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
