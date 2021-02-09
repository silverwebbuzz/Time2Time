import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll, Platform } from '@ionic/angular';
import { faCopy, faFileCsv, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

import * as _ from 'lodash';
import { USER_DETAILS } from 'src/config';

@Component({
  selector: 'app-warehouse-transfer',
  templateUrl: './warehouse-transfer.page.html',
  styleUrls: ['./warehouse-transfer.page.scss'],
})
export class WarehouseTransferPage {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  message = 'Check out the PDF!';
  url = 'http://google.com/';
  
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/image/placeholder-s.png'

  faCopy = faCopy;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faPrint = faPrint;
  
  transfer:any = [];
  resp: any = [];
  list =[];
  data: any;
  count: number = 0;
  limit = 50;
  catagory : Array<any> =[]
  search: any;
  permission: any;
 
  constructor(private router: Router,
    public CommonService: CommonService,
    private platform: Platform,
    private statusBar: StatusBar,
    private storage: Storage,
    private socialSharing: SocialSharing) { 
      
      this. checkToken()
  }

  expandItem(item): void {
    console.log("item",item);
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.transfer.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  isActive(val) {
    if (val == 1) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

  searchBar(value){
    let searchList = this.transfer;
    if(value){
      searchList = _.filter(searchList, function(x){

        if(x.name.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.category_data[0].name.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.category_data[0].name ? x.category_data[0].name.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.price.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.price ? x.price.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.qty.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.qty ? x.qty.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.category_data[0].active.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.category_data[0].active ? x.category_data[0].active.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase())>-1)
        {
          return x.store_name ? String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase())>-1 : null;
        }
      }) 
    }
    else{
      searchList = this.resp.data;
    }
    this.transfer = searchList;
  }


  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.ware_Transfer_list()
      .subscribe(resp => {
        this.resp = resp;
        this.transfer = resp.data;
        console.log(this.transfer);
        this.CommonService.dismissLoading();
      })
  }
  checkToken() {
    return this.storage.get(USER_DETAILS).then(res => {
      if (res) {
        this.permission = res.userPermission.group_name
        console.log("::::::",res.userPermission.group_name)
      }
    })
  }

  loadData(infiniteScroll){
    setTimeout(() => {
      this.limit += 50;
      infiniteScroll.target.complete();
    }, 500);
  }

  
  edit(id){
    console.log("idddd",id)
    this.router.navigate(['/edit-product'], { queryParams: { id: id } })
  }

  async sharePicker(){
    this.platform.ready()
    .then(() =>{
       this.socialSharing.share(this.message, null, null, this.url)
       .then((data) =>{
          console.log('Shared via SharePicker');
       }).catch((err) =>{
          console.log('Was not shared via SharePicker');
       });
    });
 }

}
