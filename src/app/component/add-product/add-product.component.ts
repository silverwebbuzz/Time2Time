import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as _ from 'lodash';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  productlist: any;
  limit = 50;
  resp: any = [];

  constructor(private modal: ModalController,
    public CommonService: CommonService,
    private statusBar: StatusBar,
    private router: Router) { }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.productListorder().subscribe(data => {
        this.resp = data;
        this.productlist = data.data;
        console.log(this.productlist);
        this.CommonService.dismissLoading();
    });
  }

  ngOnInit() {
    // this.productList()
  }

  searchBar(value) {
    let searchList = this.productlist;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
      })

    } else {
      searchList = this.resp.data;
    }
    this.productlist = searchList;
  }

  // productList() {
  //   this.CommonService.presentLoading();
  //   this.CommonService.productListorder().subscribe(data => {
  //     this.productlist = data.data;
  //     console.log("product list", this.productlist)
  //     this.CommonService.dismissLoading();
  //   },
  //   );
  // }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 50;
      infiniteScroll.target.complete();
    }, 500);
  }

  changeShippingAddress(address){
    console.log("111111111",address)
    this.modal.dismiss(address);
  }

  close() {
    this.modal.dismiss();
  }

}
