import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';
import { FormGroup } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { faCopy, faFileCsv, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
// import { File } from '@ionic-native/file';

import * as _ from 'lodash';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { BehaviorSubject } from 'rxjs';
import { USER_DETAILS } from 'src/config';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.page.html',
  styleUrls: ['./brands.page.scss'],
})
export class BrandsPage {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  authenticationState = new BehaviorSubject(false);

  // message = 'Check out the PDF!';
  // url = 'http://google.com/';

  faCopy = faCopy;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faPrint = faPrint;
  resp: any = [];
  brand: any;
  brandData: any;
  brand_form: FormGroup;
  data: Array<any> = [];
  data1: any;
  limit = 50;
  search: any;
  permission: any;

  constructor(private alertCtrl: AlertController,
    public CommonService: CommonService,
    private router: Router,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private statusBar: StatusBar,
    // private file: File,
    private storage: Storage) {

    this.checkToken();
  }

isActive(val) {
  if (val == 1) {
    return 'Active';
  } else {
    return 'Inactive';
  }
}

  checkToken() {
    return this.storage.get(USER_DETAILS).then(res => {
      if (res) {
        this.permission = res.userPermission.group_name
        console.log("::::::", res.userPermission.group_name)
      }
    })
  }

  searchBar(value) {
    let searchList = this.brand;
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
    this.brand = searchList;
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.brandList()
      .subscribe(resp => {
        this.resp = resp;
        this.brand = resp.data;
        console.log(this.brand);
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
    this.router.navigate(['/edit-brand'], { queryParams: { id: id } })
  }

  brandProducts(brandid){
    console.log("Brand ID",brandid);
    this.router.navigate(['/brands-product'],{ queryParams: { brandid: brandid } });
  }

  async delete(id) {
    let params = id
    const alert = await this.alertCtrl.create({
      header: 'Remove Brand',
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
            this.CommonService.brandDelete(params)
              .subscribe(resp => {
                this.brand = this.brand.filter(val => val.id !== params);
              });
          }
        }
      ]
    });

    await alert.present();
  }

  async sharePicker() {
    var doc = new jsPDF();
    var col = ["Id", "Brand name"];
    var rows = [];
    this.brand.forEach(element => {
      var temp = [
        element.id,
        element.name,
      ];
      console.log("temp", temp)
      rows.push(temp);

    });
    doc.autoTable(col, rows);
    doc.save("BrandList.pdf");
    
    this.platform.ready()
      .then(() => {
        this.socialSharing.share(null, null, doc.save("BrandList.pdf"), null)
          .then((data) => {
            console.log('Shared via SharePicker');
          }).catch((err) => {
            console.log('Was not shared via SharePicker');
          });
      });
  }

}
