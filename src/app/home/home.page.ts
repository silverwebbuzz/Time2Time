import { Component } from '@angular/core';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resp: any = [];
  dash: any = [];
  //data: Array<any> = [];

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private statusBar: StatusBar,
    private router:Router,
    public toastController: ToastController,
    private menu: MenuController) {}

  ionViewWillEnter(){
    this.menu.enable(true);

    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.dashList()
      .subscribe(resp => {
        this.resp = resp;
        this.dash = resp.data;
        console.log("bhavin",this.dash);
        this.CommonService.dismissLoading();
      })
  }
  box1(){
    this.router.navigate(['/manage-products']);
  }
  box2(){
    this.router.navigate(['/brands']);
  }
  box3(){
    this.router.navigate(['/warehouse']);
  }
  box4(){
    this.router.navigate(['/manage-orders']);
  }
  dash1(){
    this.router.navigate(['/manage-products']);
  }
  dash2(){
    this.router.navigate(['/manage-orders']);
  }
  dash3(){
    this.router.navigate(['/warehouse-transfer']);
  }
  dash4(){
    this.router.navigate(['/warehouse']);
  }
  dash5(){
    this.router.navigate(['/stock-report']);
  }
  dash6(){
    this.router.navigate(['/add-product']);
  }
  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Your settings have been saved.',
  //     duration: 2000000,
  //     color: 'primary',
  //     cssClass: 'toast-msg'
  //   });
  //   toast.present();
  // }

}
