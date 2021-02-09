import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.page.html',
  styleUrls: ['./add-permission.page.scss'],
})
export class AddPermissionPage implements OnInit {

  addpermission_form: FormGroup;
  permission_process: boolean;
  subscription: any;
  submittedValue: any;

  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  
  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder) {  

    this.addpermission_fb();   

    this.masterSelected = false;  
    this.checklist = [
      /* Member Module */ 
      {id:1,value:'createUser',isSelected:false},
      {id:2,value:'updateUser',isSelected:false},
      {id:3,value:'viewUser',isSelected:false},
      {id:4,value:'deleteUser',isSelected:false},

      /* Permission Module */ 
      {id:5,value:'createGroup',isSelected:false},
      {id:6,value:'updateGroup',isSelected:false},
      {id:7,value:'viewGroup',isSelected:false},
      {id:8,value:'deleteGroup',isSelected:false},

      /* Items(Brand) Module */
      {id:9,value:'createBrand',isSelected:false},
      {id:10,value:'updateBrand',isSelected:false},
      {id:11,value:'viewBrand',isSelected:false},
      {id:12,value:'deleteBrand',isSelected:false},

      /* Category Module */
      {id:13,value:'createCategory',isSelected:false},
      {id:14,value:'updateCategory',isSelected:false},
      {id:15,value:'viewCategory',isSelected:false},
      {id:16,value:'deleteCategory',isSelected:false},

      /* Warehouse(Store) Module */
      {id:17,value:'createStore',isSelected:false},
      {id:18,value:'updateStore',isSelected:false},
      {id:19,value:'viewStore',isSelected:false},
      {id:20,value:'deleteStore',isSelected:false},

      /* Elements Module */
      {id:21,value:'createAttribute',isSelected:false},
      {id:22,value:'updateAttribute',isSelected:false},
      {id:23,value:'viewAttribute',isSelected:false},
      {id:24,value:'deleteAttribute',isSelected:false},

      /* Product Module */
      {id:25,value:'createProduct',isSelected:false},
      {id:26,value:'updateProduct',isSelected:false},
      {id:27,value:'viewProduct',isSelected:false},
      {id:28,value:'deleteProduct',isSelected:false},

      /* Orders Module */
      {id:29,value:'createOrder',isSelected:false},
      {id:30,value:'updateOrder',isSelected:false},
      {id:31,value:'viewOrder',isSelected:false},
      {id:32,value:'deleteOrder',isSelected:false},

      /* Company Module */
      {id:33,value:'-',isSelected:false},
      {id:34,value:'updateCompany',isSelected:false},
      {id:35,value:'-',isSelected:false},
      {id:36,value:'-',isSelected:false}

    ];

    this.getCheckedItemList();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
 
  }
 
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
 
  getCheckedItemList(){

    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    //this.checkedList = JSON.stringify(this.checkedList);
    this.checkedList = this.checkedList;
    console.log("this.checkedList",this.checkedList);
    
  }

 
  addpermission_fb(){
    this.addpermission_form = new FormGroup({
      group_name: new FormControl('', Validators.required),
      permission:new FormControl('',Validators.required)
    });
  }

  addPermission(){
    
    for (let v in this.addpermission_form.controls) {
      this.addpermission_form.controls[v].markAsTouched();
    }
    if (this.addpermission_form.valid) {
      this.CommonService.presentLoading();
      this.permission_process = true;
      const body = {
          "group_name" : this.addpermission_form.value.group_name,
          "permission" : this.checkedList,
      };
      console.log("checkvalue",body)
      this.CommonService.permissionAdd(body).subscribe(val => {
        this.permission_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.checkedList = [];
          this.CommonService.presentToastWithOptions(val.message);
         this.router.navigate(['/manage-permission']);
        }else{
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
      err =>{
        this.permission_process = false;
        this.CommonService.dismissLoading();
        this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  

}
