import { Component } from '@angular/core';

import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { faCubes, faSignOutAlt, faRecycle, faSearch, faUsers, faCube, faTachometerAlt, faUniversity, faChartBar, faBuilding, faDollyFlatbed } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from './api/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { USER_DETAILS } from 'src/config';
import { CommonService } from './api/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  faSignOutAlt = faSignOutAlt;

  pages = [
    {
      title: 'Dashboard',
      url: '/manage-products',
      icon: 'home',
      faIcon: faTachometerAlt
    },
    {
      title: 'Brands',
      url: '/brands',
      icon: 'home',
      faIcon: faCubes
    },
    {
      title: 'Warehouse',
      icon: 'home',
      faIcon: faUniversity,
      children: [
        {
          title: 'Warehouse',
          url: '/warehouse',
          icon: 'home',
          faIcon: faCircle
        },
        {
          title: 'Warehouse Transfer',
          url: '/warehouse-transfer',
          icon: 'home',
          faIcon: faCircle
        }
      ]
    },
    {
      title: 'Products',
      icon: 'home',
      faIcon: faCube,
      children: [
        {
          title: 'Add Product',
          url: '/add-product',
          icon: 'home',
          faIcon: faCircle
        },
        {
          title: 'Manage Products',
          url: '/manage-products',
          icon: 'home',
          faIcon: faCircle
        }
      ]
    },
    {
      title: 'Orders',
      icon: 'home',
      faIcon: faDollyFlatbed,
      children: [
        {
          title: 'Add Order',
          url: '/add-order',
          icon: 'home',
          faIcon: faCircle
        },
        {
          title: 'Manage Orders',
          url: '/manage-orders',
          icon: 'home',
          faIcon: faCircle
        }
      ]
    },
    {
      title: 'Members',
      icon: 'home',
      faIcon: faUsers,
      children: [
        {
          title: 'Add Members',
          url: '/add-members',
          icon: 'home',
          faIcon: faCircle
        },
        {
          title: 'Manage Members',
          url: '/manage-members',
          icon: 'home',
          faIcon: faCircle
        }
      ]
    },
    {
      title: 'Permission',
      icon: 'home',
      faIcon: faRecycle,
      children: [
        {
          title: 'Add Permission',
          url: '/add-permission',
          icon: 'home',
          faIcon: faCircle
        },
        {
          title: 'Manage Permission',
          url: '/manage-permission',
          icon: 'home',
          faIcon: faCircle
        }
      ]
    },
    {
      title: 'Stock Report',
      url: '/stock-report',
      icon: 'home',
      faIcon: faChartBar
    },
    // {
    //   title: 'Search',
    //   url: '/search',
    //   icon: 'home',
    //   faIcon: faSearch
    // },
    {
      title: 'Company',
      url: '/company',
      icon: 'home',
      faIcon: faBuilding
    },
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private router: Router,
    private storage: Storage,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();  
      },3000);
      this.storage.get(USER_DETAILS).then((x)=>{
        if(x){
          this.router.navigate(['/manage-products']);
        }else{
          this.router.navigate(['/login']);
        }
      })
    });
  }

  async logout() {
    this.menuCtrl.close();

    const alert = await this.alertCtrl.create({
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Logout',
          handler: () => {
            this.auth.logout();
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
