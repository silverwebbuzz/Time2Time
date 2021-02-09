import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddProductComponent } from 'src/app/component/add-product/add-product.component';
import { USER_DETAILS } from 'src/config';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})

export class AddOrderPage implements OnInit {

  addorder_form: FormGroup;
  order_process: boolean;
  productlist: any = [];
  data: any = [];
  htmlToAdd: any;
  limit = 50;
  productList = [];
  productFormArray: any = [];

  TempgrossAmount: any = [];
  grossAmount: number = 0;
  sCharge: number = 0;
  vat: number = 0;
  netAmount: number = 0;
  amount;
  price: number = 0;
  discount: number = 0;
  respCal: any = [];
  id: any = [];
  comdata: any;
  scharge: any;
  vcharge: any;

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private product: AddProductComponent,
    private modal: ModalController,
    private storage: Storage) {

    this.TempgrossAmount = [];
    this.respCal = [];
    this.addorder_fb();

    this.storage.get(USER_DETAILS).then(res => {
      if (res) {
        this.id = res.userDetails.id
      }
    })
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
  }

  removeControls(i) {
    this.productList.splice(i, 1);
    this.productCalculation();
  }

  changeQty(qty, index) {
    if (qty) {
      var tempPrice = Number(this.productList[index].price.replace(',', ''));
      this.price = isNaN(tempPrice)?0:tempPrice;
      this.amount = Number(qty) * this.price;
      console.log("amount",this.amount)
      this.productList[index].qty = Number(qty);
      this.productList[index].amount = parseFloat(this.amount).toFixed(2);
      this.productCalculation();
    }
  }

  discountApply(value) {
    this.discount = value;
    let total: number = 0;
    this.productList.forEach((e: any) => {
      total = total + Number(e.amount);
    });
    this.grossAmount = total;
    this.sCharge = (this.grossAmount * this.scharge) / 100;
    this.vat = (this.grossAmount * this.vcharge) / 100;

    let tempTotal = Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat);
    this.netAmount = Number(tempTotal) - Number(value);

  }

  productCalculation() {
    let total: number = 0;
    this.productList.forEach((e: any) => {
      total = total + Number(e.amount)
    });
    this.grossAmount = total;
    this.sCharge = (this.grossAmount * this.scharge) / 100;
    this.vat = (this.grossAmount * this.vcharge) / 100;
    this.netAmount = this.discount ? (Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat)) - this.discount : Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat);
  }

  expandItem(item): void {
    //console.log("item",item);
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.productList.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  addorder_fb() {
    this.addorder_form = this.formBuilder.group({
      customer_name: [null, Validators.required],
      customer_address: [null, Validators.required],
      customer_phone: [null, Validators.required],
      gross_amount: [null],
      discount: [null],
      net_amount: [null],
      service_charge: [null],
      vat_charge: [null],
      add_product: this.formBuilder.array([
        this.createItem()
      ])
    });
    let reqData = this.route.snapshot.queryParams;
    this.getCompanyDetails(reqData);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      product_id: [null],
      qty: [null],
      rate: [null],
      amount: [null],
    })
  }

  getCompanyDetails(reqData) {
    this.CommonService.comGet(reqData).subscribe(res => {
      this.comdata = res.data;
      this.scharge = this.comdata.service_charge_value
      this.vcharge = this.comdata.vat_charge_value
    }
    )
  }

  addOrder() {
    console.log("Form Data", this.addorder_form);
    for (let v in this.addorder_form.controls) {
      this.addorder_form.controls[v].markAsTouched();
    }
    if (this.addorder_form.valid) {
      this.CommonService.presentLoading();
      const body = {
        "customer_name": this.addorder_form.value.customer_name,
        "customer_address": this.addorder_form.value.customer_address,
        "customer_phone": this.addorder_form.value.customer_phone,
        "gross_amount": this.addorder_form.value.gross_amount,
        "discount": this.addorder_form.value.discount,
        "net_amount": this.addorder_form.value.net_amount,
        "user_id": this.id,
        "product": this.productList
      }
      console.log("body+++++", body)

      this.CommonService.orderAdd(body).subscribe(val => {
        this.order_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.productList = [];
          this.CommonService.presentToastWithOptions(val.message);
          this.router.navigate(['/manage-orders']);
        } else {
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
        err => {
          this.order_process = false;
          this.CommonService.dismissLoading();
          this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
    }
  }

  async addProduct() {
    const product = await this.modal.create({
      component: AddProductComponent,
      showBackdrop: true,
    });
    product.onWillDismiss().then((data) => {
      if (data.data) {
        var amount = Number(data.data.price.replace(',', ''));
        Object.assign(data.data, { amount: isNaN(amount)?0:amount });
        this.productList.push(data.data);
        this.productCalculation();
      }

    });
    return await product.present();
  }



}
