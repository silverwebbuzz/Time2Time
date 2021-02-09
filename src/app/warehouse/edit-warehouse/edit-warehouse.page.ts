import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/api/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.page.html',
  styleUrls: ['./edit-warehouse.page.scss'],
})
export class EditWarehousePage implements OnInit {

  editwarehouse_form: FormGroup;
  warehouseData: any;
  warehouse_process: boolean;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public CommonService: CommonService,
    public router: Router,
    private statusBar: StatusBar,
    private route: ActivatedRoute) {

    this.edtwarehouse_fb();
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
    this.warehouseDetails(reqData);
  }

  edtwarehouse_fb(){
    this.editwarehouse_form = this.formBuilder.group({
      name: [null, Validators.required],
      active: [null, Validators.required]
    });
  }

  warehouseDetails(reqData){
    this.CommonService.warehouseGet(reqData).subscribe(res => {
      this.warehouseData = res.data;
      console.log("::::::",this.warehouseData)
      this.editwarehouse_form.patchValue({
        name: this.warehouseData.name,
        active: this.warehouseData.active
       
      });
     
    },error => {
    })
  }

  editWarehouse(){
    for (let v in this.editwarehouse_form.controls) {
      this.editwarehouse_form.controls[v].markAsTouched();
    }
    if (this.editwarehouse_form.valid) {
      this.CommonService.presentLoading();
      this.warehouse_process = true;
      const body = {
          "name" : this.editwarehouse_form.value.name,
          "active" : this.editwarehouse_form.value.active,
          "id" : this.route.snapshot.queryParams.id,
      };
      this.CommonService.warehouseEdit(body).subscribe(val => {
      
        this.warehouse_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.CommonService.dismissLoading();   
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
