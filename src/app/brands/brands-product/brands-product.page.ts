import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/api/common/common.service';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-brands-product',
  templateUrl: './brands-product.page.html',
  styleUrls: ['./brands-product.page.scss'],
})
export class BrandsProductPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild('reportContent',{ static: true }) reportContent: ElementRef;

  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/image/placeholder-s.png'

  limit = 50;
  data: any;
  brandProducts = [];
  brandProd: any = [];
  resp: any = [];
  brandid :any;

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private route: ActivatedRoute) { 

      this.route.queryParams.subscribe(params => {
        console.log("testing",params.brandid);
        this.brandid = params.brandid;
      })
    }

  ngOnInit() {
  }

  back(){
    console.log('back');
    this.navCtrl.pop();
  }

  expandItem(item): void {
    console.log("item", item);
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.brandProd.map(listItem => {
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
    console.log("value",value);
    let searchList = this.brandProd;
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
        else if(x.qty_name.toLowerCase().indexOf(value.toLowerCase())>-1)
        {
          return x.qty_name ? x.qty_name.toLowerCase().indexOf(value.toLowerCase())>-1 : null;
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
    this.brandProd = searchList;
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');

    this.CommonService.presentLoading();
    this.CommonService.brandProducts(this.brandid)
      .subscribe(resp => {
        console.log("brandData",resp);
        this.resp = resp;
        this.brandProd = resp.data;
        console.log("brandProd",this.brandProd);
        this.CommonService.dismissLoading();
      })
}

isActive(val){
      if(val == 1)
      {
        return 'Active';
      }else{
        return 'Inactive';
      }
    }

loadData(infiniteScroll) {
  setTimeout(() => {
    this.limit += 50;
    infiniteScroll.target.complete();
  }, 500);
}

}
