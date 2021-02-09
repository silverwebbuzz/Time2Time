import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/api/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as _ from 'lodash';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.page.html',
  styleUrls: ['./edit-permission.page.scss'],
})
export class EditPermissionPage implements OnInit {

  editpermission_form: FormGroup;
  permissiondetails: any;
  permissionArrydata: any;
  permission_process: boolean;
  masterSelected: boolean;
  checklist: any;
  checkedList: any;
  selectedcategory: any[];


  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    public router: Router,
    private statusBar: StatusBar,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.editpermission_fb();
    this.masterSelected = false;
    this.checklist = [
      /* Member Module */
      { id: 1, value: 'createUser', isSelected: false },
      { id: 2, value: 'updateUser', isSelected: false },
      { id: 3, value: 'viewUser', isSelected: false },
      { id: 4, value: 'deleteUser', isSelected: false },

      /* Permission Module */
      { id: 5, value: 'createGroup', isSelected: false },
      { id: 6, value: 'updateGroup', isSelected: false },
      { id: 7, value: 'viewGroup', isSelected: false },
      { id: 8, value: 'deleteGroup', isSelected: false },

      /* Items(Brand) Module */
      { id: 9, value: 'createBrand', isSelected: false },
      { id: 10, value: 'updateBrand', isSelected: false },
      { id: 11, value: 'viewBrand', isSelected: false },
      { id: 12, value: 'deleteBrand', isSelected: false },

      /* Category Module */
      { id: 13, value: 'createCategory', isSelected: false },
      { id: 14, value: 'updateCategory', isSelected: false },
      { id: 15, value: 'viewCategory', isSelected: false },
      { id: 16, value: 'deleteCategory', isSelected: false },

      /* Warehouse(Store) Module */
      { id: 17, value: 'createStore', isSelected: false },
      { id: 18, value: 'updateStore', isSelected: false },
      { id: 19, value: 'viewStore', isSelected: false },
      { id: 20, value: 'deleteStore', isSelected: false },

      /* Elements Module */
      { id: 21, value: 'createAttribute', isSelected: false },
      { id: 22, value: 'updateAttribute', isSelected: false },
      { id: 23, value: 'viewAttribute', isSelected: false },
      { id: 24, value: 'deleteAttribute', isSelected: false },

      /* Product Module */
      { id: 25, value: 'createProduct', isSelected: false },
      { id: 26, value: 'updateProduct', isSelected: false },
      { id: 27, value: 'viewProduct', isSelected: false },
      { id: 28, value: 'deleteProduct', isSelected: false },

      /* Orders Module */
      { id: 29, value: 'createOrder', isSelected: false },
      { id: 30, value: 'updateOrder', isSelected: false },
      { id: 31, value: 'viewOrder', isSelected: false },
      { id: 32, value: 'deleteOrder', isSelected: false },

      /* Company Module */
      { id: 33, value: '-', isSelected: false },
      { id: 34, value: 'updateCompany', isSelected: false },
      { id: 35, value: '-', isSelected: false },
      { id: 36, value: '-', isSelected: false }

    ];

    this.getCheckedItemList();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
    let reqData = this.route.snapshot.queryParams;
    this.permissionDetails(reqData);
  }


  permissionDetails(reqData) {
    let newarray = [];
    this.CommonService.permissionGet(reqData).subscribe(res => {
      console.log("Data", res);
      this.permissiondetails = res.data;
      this.permissionArrydata = res.unserialize_permission;
      var categorydata = this.permissionArrydata;
      for (let j in categorydata) {
        newarray.push(
          categorydata[j],
        );
      }
      this.selectedcategory = newarray;
      this.checklist.map(x => {
        if (newarray.includes(x.value)) {
          x.isSelected = true;
        }
        return x;
      })
      console.log(this.checklist)
      //newarray.includes(x.value) ? x.isSelected = true : x.isSelected = false)
      // this.checklist = _.map(this.checklist, function(x){
      //   return newarray.includes(x.value) ? x.isSelected = true : x.isSelected = false;
      // })
      // console.log("PermissionArryData", this.permissionArrydata);

      this.editpermission_form.patchValue({
        group_name: this.permissiondetails.group_name,
      });
    })

  }
  editpermission_fb() {
    this.editpermission_form = new FormGroup({
      group_name: new FormControl('', Validators.required),
      // permission:new FormControl('',Validators.required)
    });
  }

  editPermission() {
    var finalResult = _.filter(this.checklist, function (x) {
      return x.isSelected == true;
    });
    console.log("finalResult", finalResult)
    for (let v in this.editpermission_form.controls) {
      this.editpermission_form.controls[v].markAsTouched();
    }
    if (this.editpermission_form.valid) {
      console.log("valid", this.editpermission_form.valid)
      this.CommonService.presentLoading();
      this.permission_process = true;
      const body = {
        "group_name": this.editpermission_form.value.group_name,
        "permission": finalResult,
        "id": this.route.snapshot.queryParams.id,
      };
      this.CommonService.permissionEdit(body).subscribe(val => {
        console.log("+++++++++", val)
        this.permission_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.CommonService.dismissLoading();
          this.CommonService.presentToastWithOptions(val.message);
          this.router.navigate(['/manage-permission']);
        } else {
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
        err => {
          this.permission_process = false;
          this.CommonService.dismissLoading();
          this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
    }
  }

  isAllSelected(value, values: any): void {
    console.log("checked", values)
    _.find(this.checklist, function (c) {
      if (c.value == value) {
        c.isSelected = true;
      }
      if (values.currentTarget.checked) {
        if (c.value == value) {
          c.isSelected = true;
        }
      } else {
        if (c.value == value) {
          c.isSelected = false;
        }
      }
    })
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
    }
    //this.checkedList = JSON.stringify(this.checkedList);
    this.checkedList = this.checkedList;
    console.log("this.checkedList", this.checkedList);

  }


  back() {
    this.navCtrl.pop();
  }

}
