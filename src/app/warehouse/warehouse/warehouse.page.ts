import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { faCopy, faFileCsv, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as _ from 'lodash';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { USER_DETAILS } from 'src/config';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.page.html',
  styleUrls: ['./warehouse.page.scss'],
}) 
export class WarehousePage {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  message = 'Check out the PDF!';
  url = 'http://google.com/';

  faCopy = faCopy;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faPrint = faPrint;

  resp: any = [];
  limit = 50;
  warehouse: any;
  permission: any;

  constructor(private alertCtrl: AlertController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private platform: Platform,
    private storage: Storage,
    private socialSharing: SocialSharing) {
    this.checkToken()
  }

  checkToken() {
    return this.storage.get(USER_DETAILS).then(res => {
      if (res) {
        this.permission = res.userPermission.group_name
        console.log("::::::", res.userPermission.group_name)
      }
    })
  }

  isActive(val) {
    if (val == 1) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

  searchBar(value) {
    let searchList = this.warehouse;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        
        if(x.name.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.active.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.active ? x.active.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
      })

    } else {
      searchList = this.resp.data;
    }
    this.warehouse = searchList;
  }


  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.warehouseList()
      .subscribe(resp => {
        this.resp = resp;
        this.warehouse = resp.data;
        console.log(this.warehouse);
        this.CommonService.dismissLoading();

      })
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 50;
      infiniteScroll.target.complete();
    }, 500);
  }

  edit(id) {
    this.router.navigate(['/edit-warehouse'], { queryParams: { id: id } })
  }

  warehouseProducts(warehouseid){
    console.log("Warehouse ID",warehouseid);
    this.router.navigate(['/warehouse-product'],{ queryParams: { warehouseid: warehouseid } });
  }

  async delete(id) {
    let params = id
    const alert = await this.alertCtrl.create({
      header: 'Remove Warehouse',
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
            this.CommonService.warehouseDelete(params)
              .subscribe(resp => {
                this.warehouse = this.warehouse.filter(val => val.id !== params);
              });
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async sharePicker() {
    this.platform.ready()
      .then(() => {
        this.socialSharing.share(this.message, null, null, this.url)
          .then((data) => {
            console.log('Shared via SharePicker');
          }).catch((err) => {
            console.log('Was not shared via SharePicker');
          });
      });
  }

}
