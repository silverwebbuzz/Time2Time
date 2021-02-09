import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';
import { faCopy, faFileCsv, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as _ from 'lodash'; 

@Component({
  selector: 'app-manage-members',
  templateUrl: './manage-members.page.html',
  styleUrls: ['./manage-members.page.scss'],
})
export class ManageMembersPage  {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  message = 'Check out the PDF!';
  url = 'http://google.com/';

  resp: any = [];
  faCopy = faCopy;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faPrint = faPrint;

  member: any;
  permission : Array<any>;
  limit = 50;

  constructor(private alertCtrl: AlertController,
    public CommonService: CommonService,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
    private socialSharing: SocialSharing) { }

    searchBar(value){
      let searchList = this.member;
      if(value){
        searchList = _.filter(searchList, function(x){

          if(x.username.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.username ? x.username.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.email.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.email ? x.email.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.firstname.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.firstname ? x.firstname.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.lastname.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.lastname ? x.lastname.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.phone.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.phone ? x.phone.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        else if(x.user_group.group_name.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.user_group.group_name ? x.user_group.group_name.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
        }
        }) 
        
      }else{
        searchList = this.resp.data;
      }
      this.member = searchList;
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#6382ff');

      this.CommonService.presentLoading();
      this.CommonService.memberList()
        .subscribe(resp => {
          this.resp = resp;
          this.member = resp.data;
          console.log(this.member);
          this.CommonService.dismissLoading();
        })
  }

  expandItem(item): void {
    console.log("item",item);
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.member.map(listItem => {
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
    this.router.navigate(['/edit-members'],{ queryParams: { id: id } })
  }

  async delete(id){
    let params = id
    const alert = await this.alertCtrl.create({
      header: 'Remove Member',
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
            this.CommonService.memberDelete(params)
              .subscribe(resp => {
              this.member = this.member.filter(val => val.id !== params);   
              });
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
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
