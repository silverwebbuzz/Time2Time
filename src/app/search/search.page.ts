import { Component, OnInit, ViewChild } from '@angular/core';

import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  search: any;
  limit = 50;
  total: any;
  sold: any;


  constructor(public CommonService: CommonService) { }

  ngOnInit() {
  }

  ionViewWillEnter(search) {
    if (!search) {
      this.CommonService.presentLoading();
    }
    this.CommonService.searchlist()
      .subscribe(resp => {
        this.total = resp.total_products_inventory;
        this.sold = resp.total_products_sold;
        this.search = resp.data;
        console.log("this.search", this.search)
        if (search && search.trim() != '') {
          this.search = this.search.filter((item) => {
            return (item.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
          })
        }
        if (!search) {
          this.CommonService.dismissLoading();
        }
      })
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 50;
      infiniteScroll.target.complete();
    }, 500);
  }

}
