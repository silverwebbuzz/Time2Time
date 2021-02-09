import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/api/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StatusBar } from '@ionic-native/status-bar/ngx';

var toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // custom dropdown
  ['bold', 'italic', 'underline'],                  // toggled buttons
  [{ 'size': ['small'] }],
  ['blockquote'],

  [{ 'list': 'bullet' }, { 'list': 'ordered' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  ['link', 'image'],

  ['clean']                                         // remove formatting button
];

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  user_not_found_place_holder = 'assets/image/placeholder-s.png'
  imageUrl = environment.image_url;
  editproduct_form: FormGroup;

  public editor;
  public editorContent = '';
  public editorOptions = {
    placeholder: "Enter Description",
    modules: {
      toolbar: toolbarOptions,
      // theme: 'snow'
    }
  };
  productData: any;
  product_process: boolean;
  data: Array<any> = [];
  itemlist: Array<any>;
  categorylist: any;
  warehouselist: any;
  select: Array<any> = [];
  warehouseselect: any;
  category: Array<any> = [] 
  selectedcategory: any[];
  category_list: Array<any> = [];
  brand: Array<any> = [] 
  selectedbrand: any[];
  brand_list: Array<any> = [];

  mediaUrl_image: any = '';
  product_image: any;
  select_product_image: any;

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    public router: Router,
    private statusBar: StatusBar,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.editproduct_fb();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  Availability(val) {
    if (val == 1) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  ngOnInit() {
    let reqData = this.route.snapshot.queryParams;
    this.productDetails(reqData);

    setTimeout(() => {
      this.editorContent = '';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
  }


  editproduct_fb() {
    this.editproduct_form = this.formBuilder.group({
      image: [null, Validators.required],
      name: [null, Validators.required],
      sku: [null, Validators.required],
      price: [null, Validators.required],
      qty: [null, Validators.required],
      description: [null, Validators.required],
      brand_id: [null, Validators.required],
      category_id: [null, Validators.required],
      store_id: [null, Validators.required],
      availability: [null, Validators.required],
    });
  }



  productDetails(reqData) {
  
    let newarray= [];
    let brand = [];

    this.CommonService.productGet(reqData).subscribe(res => {
      this.productData = res.data;
      console.log("::::::", this.productData)
      this.category = this.productData.categorys_data
      this.warehouseselect = this.productData.store_name;

      var categorydata = this.category;
      for (let j in categorydata) {
        newarray.push(
          categorydata[j].id,
          // categorydata[j].name
        );
      }
      this.selectedcategory = newarray;

      this.brand = this.productData.brand_data
      var branddata = this.brand;
      for (let j in branddata) {
        brand.push(
          branddata[j].id,
          // branddata[j].name
        );
      }
      this.selectedbrand = brand; 

      this.editproduct_form.patchValue({
        name: this.productData.name,
        sku: this.productData.sku,
        price: this.productData.price,
        qty: this.productData.qty,
        description: this.productData.description,
        brand_id: this.selectedbrand,
        store_id: this.productData.store_id,
        category_id: this.selectedcategory,
        availability: this.productData.availability,
      });
      this.select_product_image = this.productData.image;

    }, error => {
    })
    this.itemList()
    this.categoryList()
    this.warehouseList()
  }

  itemList() {
    let newArray = [];
    this.CommonService.Itemlist().subscribe(data => {
      this.itemlist = data.data;
      for (let j in this.itemlist) {
        newArray.push({
          'id': this.itemlist[j].id,
          'name': this.itemlist[j].name,  
        });
      }
      this.brand_list = newArray    
    },
    );
  }
  categoryList() {
    let newArray = [];
    this.CommonService.categorylist().subscribe(data => {
      this.categorylist = data.data;
      for (let j in this.categorylist) {
      newArray.push({
        'id': this.categorylist[j].id,
        'name': this.categorylist[j].name,    
      });
    }
    this.category_list = newArray  
     },
     );
  }
 

  warehouseList() {
    this.CommonService.warehouselist().subscribe(data => {
      this.warehouselist = data.data;
    },
    );
  }

  imageUpload(e) {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onloadend = (e: any) => {
          this.select_product_image = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
        this.mediaUrl_image = file;
      }   
  }

  editProduct() {
    for (let v in this.editproduct_form.controls) {
      this.editproduct_form.controls[v].markAsTouched();
    }
    if (this.editproduct_form.valid) {
      this.CommonService.presentLoading();
      this.product_process = true;
      const body: FormData = new FormData();
      body.append('product_image',this.mediaUrl_image);
      body.append('name',this.editproduct_form.value.name);
      body.append('sku',this.editproduct_form.value.sku);
      body.append('price',this.editproduct_form.value.price);
      body.append('qty',this.editproduct_form.value.qty);
      body.append('description',this.editproduct_form.value.description);
      body.append('brand_id',this.editproduct_form.value.brand_id);
      body.append('category_id',this.editproduct_form.value.category_id);
      body.append('store_id',this.editproduct_form.value.store_id);
      body.append('availability',this.editproduct_form.value.availability);
      body.append('id',this.route.snapshot.queryParams.id);
      // const body = {
      //   "image": this.editproduct_form.value.image,
      //   "name": this.editproduct_form.value.name,
      //   "sku": this.editproduct_form.value.sku,
      //   "price": this.editproduct_form.value.price,
      //   "qty": this.editproduct_form.value.qty,
      //   "description": this.editproduct_form.value.description,
      //   "brand_id": this.editproduct_form.value.brand_id,
      //   "category_id": this.editproduct_form.value.category_id,
      //   "store_id": this.editproduct_form.value.store_id,
      //   "availability": this.editproduct_form.value.availability,
      //   "id": this.route.snapshot.queryParams.id,
      // };
      console.log("body",body)
      this.CommonService.productEdit(body).subscribe(val => {

        this.product_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.CommonService.dismissLoading();
          this.CommonService.presentToastWithOptions(val.message);
          this.router.navigate(['/manage-products']);
        } else {
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
        err => {
          this.product_process = false;
          this.CommonService.dismissLoading();
          this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
    }
  }

  back() {
    this.navCtrl.pop();
  }

}
