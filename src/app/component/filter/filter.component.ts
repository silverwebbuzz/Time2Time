import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  warehouselist: any;
  itemlist: any;
  categorylist: any;
  house_details = [];
  quantity:any;
  warehouse:any;
  brand:any;
  category:any;
  selectedfilterData:any;

  constructor(private modal: ModalController,
    private navParms: NavParams,
    public CommonService: CommonService) {

    }

  ngOnInit() {
    this.itemList()
    this.warehouseList()
    this.categoryList()
    this.selectedfilterData = this.navParms.get('selectedfilterData');
    this.category = this.selectedfilterData.category
    this.quantity = this.selectedfilterData.quantity
    this.warehouse = this.selectedfilterData.warehouse
  }

  itemList() {
    this.CommonService.Itemlist().subscribe(data => {
      this.itemlist = data.data;
    
    },
    );
  }

  categoryList(){
    this.CommonService.categorylist().subscribe(data => {
      this.categorylist = data.data;
      this.categorylist = _.orderBy(this.categorylist, 'name', 'asc');
     
    },
    );
  }

  warehouseList() {
    this.CommonService.warehouselist().subscribe(data => {
      this.warehouselist = data.data;
      this.warehouselist = _.orderBy(this.warehouselist, 'name', 'asc');
      
    },
    );
  }

  changeAddress(value,key){
     if(key == "Quantity"){
      this.quantity = value;
     }else if(key == "Warehouse"){  
      this.warehouse = value;
     }else if(key == "Category"){
      this.category = value;
     }
  }

  onChange() {
    let optdata = {
      quantity : this.quantity ? this.quantity : null,
      warehouse : this.warehouse ? this.warehouse : null,
      category : this.category ? this.category :null,
    }
    this.modal.dismiss(optdata);
  }

  reset(){
    let optdata = {
      quantity : null,
      warehouse : null,
      category : null,
    }
    this.modal.dismiss(optdata);
  }

  close(){
    let optdata = {
      quantity : this.quantity ? this.quantity : null,
      warehouse : this.warehouse ? this.warehouse : null,
      category : this.category ? this.category :null,
    }
    this.modal.dismiss(optdata);
  }

}
