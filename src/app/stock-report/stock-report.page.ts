import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll, Platform } from '@ionic/angular';
import { faCopy, faFileCsv, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as _ from 'lodash';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.page.html',
  styleUrls: ['./stock-report.page.scss'],
})
export class StockReportPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  message = 'Check out the PDF!';
  url = 'http://google.com/';

  faCopy = faCopy;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faPrint = faPrint;
  resp : any = [];
  stock: any;
  limit = 50;

  constructor(public CommonService: CommonService,
    private platform: Platform,
    private statusBar: StatusBar,
    private socialSharing: SocialSharing) { }

  Availability(val) {
    if (val == 1) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  ngOnInit() {
  }

  expandItem(item): void {
    console.log("item",item);
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.stock.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  searchBar(value){
    let searchList = this.stock;
    console.log('SearchList', searchList)
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
        else if(x.sku.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.sku ? x.sku.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
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
        else if(x.currency.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.currency ? x.currency.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase())>-1)
        {
          return x.store_name ? String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase())>-1 : null;
        }
      }) 
      
    }else{
      searchList = this.resp.data;
    }
    this.stock = searchList;
  }


  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
    
     this.CommonService.presentLoading();
      this.CommonService.stocklist()
        .subscribe(resp => {
          this.resp = resp;
          this.stock = resp.data;
          console.log(this.stock);
          this.CommonService.dismissLoading();
        }) 
  }

  loadData(infiniteScroll){
    setTimeout(() => {
      this.limit += 50;
      infiniteScroll.target.complete();
    }, 500);
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
