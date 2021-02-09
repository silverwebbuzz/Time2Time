import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { faCopy, faFileCsv, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as _ from 'lodash';

@Component({
  selector: 'app-manage-permission',
  templateUrl: './manage-permission.page.html',
  styleUrls: ['./manage-permission.page.scss'],
})
export class ManagePermissionPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  message = 'Check out the PDF!';
  url = 'http://google.com/';

  faCopy = faCopy;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faPrint = faPrint;
  resp: any = [];
  limit = 50;
  permission: any;
  status: any[];
  formula:string = "Permission";
  copy :Array<any>;

  constructor(private alertCtrl: AlertController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private platform: Platform,
    private socialSharing: SocialSharing) {
      
      this.copy= [
        {
          value:"createGroup",
          
        },{
          value:"updateGroup",
          
        },{
          value:"viewGroup",
        
        },{
          value:"deleteGroup",
         
        }
      ];

     }

  ngOnInit() {
  }
  
  printPage() {
    window.print();
  }

  exportAsXLSX():void {
    this.CommonService.exportAsExcelFile(this.permission, 'permission');
  }

  downloadCSV() {
    var data = this.permission

    var options = {
      title: 'Permission Details',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ['Permission Name']
    };

    new Angular2Csv(data, this.formula, options);
  }

  copyText(val: string){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }
  
  searchBar(value){
    let searchList = this.permission;
    if(value){
      searchList = _.filter(searchList, function(x){
        return x.group_name ? x.group_name.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
      }) 
      
    }else{
      searchList = this.resp.data;
    }
    this.permission = searchList;
  }
  
  ionViewWillEnter(search) {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.permissionList()
      .subscribe(resp => {
        this.resp = resp;
        this.permission = resp.data;
        console.log(this.permission);
        this.CommonService.dismissLoading();
      })
  }

  edit(id){
    this.router.navigate(['/edit-permission'],{ queryParams: { id: id } })
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
      header: 'Remove Permission',
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
            this.CommonService.permissionDelete(params)
            .subscribe(resp => {
              this.permission = this.permission.filter(val => val.id !== params);
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
