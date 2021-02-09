import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private router: Router) { }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/home']);
  }

}
