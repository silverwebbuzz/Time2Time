import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/api/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddProductComponent } from 'src/app/component/add-product/add-product.component';
import { USER_DETAILS } from 'src/config';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.page.html',
  styleUrls: ['./edit-order.page.scss'],
})
export class EditOrderPage implements OnInit {

  editorder_form: FormGroup;
  orderData: any;
  order_process: boolean;
  order_id: any;
  productList = [];

  TempgrossAmount: any = [];
  grossAmount: number = 0;
  sCharge: number = 0;
  vat: number = 0;
  netAmount: number = 0;
  amount: number = 0;
  price: number = 0;
  discount: number = 0;
  respCal: any = [];
  id: any = [];
  comdata: any;
  scharge: any;
  vcharge: any;


  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    public router: Router,
    private statusBar: StatusBar,
    private route: ActivatedRoute,
    private modal: ModalController,
    private storage: Storage,
    private formBuilder: FormBuilder) {

    this.editorder_fb();


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
    let reqData = this.route.snapshot.queryParams;
    this.orderDetails(reqData);
  }

  removeControls(i) {
    this.productList.splice(i, 1);
    this.productCalculation();
  }

  changeQty(qty, index) {
    if (qty) {
      this.price = Number(this.productList[index].price);
      this.amount = Number(qty) * Number(this.price);
      this.productList[index].qty = qty;
      this.productList[index].amount = this.amount;
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
      total = total + Number(e.amount);
    });
    this.grossAmount = total;
    this.sCharge = (this.grossAmount * this.scharge) / 100;
    this.vat = (this.grossAmount * this.vcharge) / 100;
    this.netAmount = this.discount ? (Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat)) - this.discount : Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat);
  }

  editorder_fb(){
    this.editorder_form = this.formBuilder.group({
      customer_name: [null, Validators.required],
      customer_address: [null, Validators.required],
      customer_phone: [null, Validators.required],
      gross_amount: [null],
      service_charge: [null],
      vat_charge: [null],
      discount: [null],
      net_amount: [null],
      paid_status: [null, Validators.required], 
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

  getCompanyDetails(reqData){
    this.CommonService.comGet(reqData).subscribe(res => {
      this.comdata = res.data;
      this.scharge = this.comdata.service_charge_value
      this.vcharge = this.comdata.vat_charge_value     
    }
    )
  }

  orderDetails(reqData) {
    this.CommonService.orderGet(reqData).subscribe(res => {
      this.orderData = res.data;
      console.log("::::::", this.orderData)
      this.productList = this.orderData.order_item
         
      this.editorder_form.patchValue({
        customer_name: this.orderData.customer_name,
        customer_address: this.orderData.customer_address,
        customer_phone: this.orderData.customer_phone,
        gross_amount: this.orderData.gross_amount,
        discount: this.orderData.discount,
        net_amount: this.orderData.net_amount,
        paid_status: this.orderData.paid_status,
      });
      this.productCalculation();
    }, error => {
    })
  }

 

  editOrder(){
    for (let v in this.editorder_form.controls) {
      this.editorder_form.controls[v].markAsTouched();
    }
    if (this.editorder_form.valid) {
      this.CommonService.presentLoading();
      const body = {
          "customer_name" : this.editorder_form.value.customer_name,
          "customer_address" : this.editorder_form.value.customer_address,
          "customer_phone" : this.editorder_form.value.customer_phone,
          "gross_amount" : this.editorder_form.value.gross_amount,
          "discount" : this.editorder_form.value.discount,
          "net_amount" : this.editorder_form.value.net_amount,
          "paid_status" : this.editorder_form.value.paid_status,
          "id": this.route.snapshot.queryParams.id,
          "user_id": this.id,
          "product": this.productList,
          
      };
      console.log("body",body)
      
      this.CommonService.orderEdit(body).subscribe(val => {

        this.order_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.CommonService.dismissLoading();
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
        var amount = data.data.price;
        var product_id = data.data.id;
        Object.assign(data.data, { amount: amount });
        this.productList.push(data.data);
        this.productCalculation();
        console.log("product_list",this.productList)
      }

    });
    return await product.present();
  }


  back(){
    this.navCtrl.pop();
  }

}
