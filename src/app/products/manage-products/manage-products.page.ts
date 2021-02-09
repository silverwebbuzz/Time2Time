import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faCopy, faFileCsv, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { ModalController, AlertController, Platform, MenuController } from '@ionic/angular';
import { FilterComponent } from 'src/app/component/filter/filter.component';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

import * as _ from 'lodash'; 
import { USER_DETAILS } from 'src/config';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.page.html',
  styleUrls: ['./manage-products.page.scss'],
})
export class ManageProductsPage {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild('reportContent',{ static: true }) reportContent: ElementRef;

  message = 'Check out the PDF!';
  url = 'http://google.com/';

  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/image/placeholder-s.png'

  faCopy = faCopy;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faPrint = faPrint;
  product: any = [];
  limit = 50;
  warehouselist: any;
  itemlist: any;
  categorylist: any;
  productList = [];
  Filteroptdata :any = [];
  resp: any = [];
  permission: any;
  setFilterData:any = {
    quantity : null,
    warehouse : null,
    category : null,
  };
  data: any;
  name: any[];
  

  constructor(private modal: ModalController,
    private alertCtrl: AlertController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private platform: Platform,
    private storage: Storage,
    private socialSharing: SocialSharing,
    private menu: MenuController) {
      this.checkToken()

  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.product.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  checkToken() {
    return this.storage.get(USER_DETAILS).then(res => {
      if (res) {
        this.permission = res.userPermission.group_name
      }
    })
  }

  ngOnInit() {
  }

  async filter() {
    const  filterModal = await this.modal.create({
      component: FilterComponent,
      componentProps: { 
        selectedfilterData: this.setFilterData
      },
      showBackdrop: true,
      mode: "ios",
      cssClass: 'filter-modal',
      backdropDismiss: false
    });
    
    filterModal.onDidDismiss()
      .then((optdata) => {
        this.setFilterData = optdata.data;
        let searchList = this.resp.data;
        const searchkeyValue = (<HTMLInputElement>document.getElementById('searchValue')).value;

        if(searchkeyValue)
        {
          if(optdata.data.warehouse){
            searchList = _.filter(searchList, function(x){
              return x.store_name == optdata.data.warehouse && x.category_data[0].name ? x.category_data[0].name.toLowerCase().indexOf(searchkeyValue.toLowerCase())>-1 : null;
            })
          }
        }else{
          if(optdata.data.warehouse != null){
            if(optdata.data.warehouse[0] != null){
              searchList = _.filter(searchList, function(x){
                return optdata.data.warehouse.indexOf(x.store_name) > -1;
              })
            }
          }
        }
        if(optdata.data.quantity){
          searchList = _.filter(searchList, function(x){
            return x.qty == optdata.data.quantity;
          })
        }
        if(optdata.data.category){
          searchList = _.filter(searchList, function(x){
            return x.category_data[0].name == optdata.data.category;
          })
        }
        this.product = searchList;  
    });
    return await filterModal.present();
  }
  
  Availability(val) {
    if (val == 1) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
  

  async addProduct() {
    const product = await this.modal.create({
      component: FilterComponent, 
      showBackdrop: true,  
    });
    product.onWillDismiss().then((data) => {
        if(data.data){
         this.productList.push(data.data);
      }
     
    });
    return await product.present();
  }

  searchBar(value){
    let searchList = this.product;
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
    this.product = searchList;
  }

   ionViewWillEnter() {
    this.menu.enable(true);

    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  
    this.CommonService.presentLoading();
    this.CommonService.productList()
      .subscribe(resp => {
        this.resp = resp;
        this.product = resp.data;
        this.CommonService.dismissLoading();
        
      })  
}

edit(id) {
  this.router.navigate(['/edit-product'], { queryParams: { id: id } })
}

loadData(infiniteScroll) {
  setTimeout(() => {
    this.limit += 50;
    infiniteScroll.target.complete();
  }, 500);
}


async delete (id) {
  let params = id
  const alert = await this.alertCtrl.create({
    header: 'Remove Product',
    message: 'Do you really want to remove?',
    buttons: [
      {
        text: 'Close',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }, {
        text: 'Delete',
        handler: () => {
          this.CommonService.productDelete(params)
            .subscribe(resp => {
              this.product = this.product.filter(val => val.id !== params);
            });
        }
      }
    ]
  });
  await alert.present();
}

async sharePicker(){
  var doc = new jsPDF();
        var col = ["Brand", "Refrence Number","Serial","Currency","Price","Status","Warehouse"];
        var rows = [];

         this.product.forEach(data => {  var temp = [data.category_data] 
          this.data = temp
        })

        this.data.forEach(data => {  var temp = [data[0].name] 
          this.name = temp
        })
          

        this.product.forEach(element => {      
         
          var temp = [
            element.category_data.name,
            element.name,
            element.sku,
            element.currency,
            element.price,
            element.qty,
            element.store_name];
          rows.push(temp);
  
      }); 
      doc.autoTable(col, rows);
        doc.save('Test.pdf');

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
