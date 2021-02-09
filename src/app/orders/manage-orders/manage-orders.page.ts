import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

import * as _ from 'lodash';
import { USER_DETAILS } from 'src/config';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.page.html',
  styleUrls: ['./manage-orders.page.scss'],
})
export class ManageOrdersPage implements OnInit {

  myDate: String = new Date().toISOString();

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  message = 'Check out the PDF!';
  url = 'http://google.com/';

  order: any;
  limit = 50;
  resp: any = [];
  permission: any;

  constructor(private alertCtrl: AlertController,
    public CommonService: CommonService,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
    private storage: Storage,
    private socialSharing: SocialSharing) {
      
      this.checkToken()
    }

  ngOnInit() {
  }
  checkToken() {
    return this.storage.get(USER_DETAILS).then(res => {
      if (res) {
        this.permission = res.userPermission.group_name
        console.log("::::::",res.userPermission.group_name)
      }
    })
  }

  searchBar(value){
    let searchList = this.order;
    if(value){
      searchList = _.filter(searchList, function(x){

        x.total_product = x.total_product.toString();

        if(x.bill_no.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.bill_no ? x.bill_no.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.customer_name.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.customer_name ? x.customer_name.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.customer_phone.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.customer_phone ? x.customer_phone.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.net_amount.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.net_amount ? x.net_amount.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.total_product.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.total_product ? x.total_product.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
      }) 
      
    }else{
      searchList = this.resp.orderList;
    }
    this.order = searchList;
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.orderList()
      .subscribe(resp => {
        this.resp = resp;
        this.order = resp.orderList;
        console.log(this.order);
        this.CommonService.dismissLoading();
      })
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.order.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  edit(id){
    this.router.navigate(['/edit-order'],{ queryParams: { id: id } })
  }

  loadData(infiniteScroll){
    setTimeout(() => {
      this.limit += 50;
      infiniteScroll.target.complete();
    }, 500);
  }

  async delete(id){
    let params = id
    const alert = await this.alertCtrl.create({
      header: 'Remove Order',
      message: 'Do you really want to remove?',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.CommonService.orderDelete(params)
            .subscribe(resp => {
              this.order = this.order.filter(val => val.id !== params);
            });
          console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
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
