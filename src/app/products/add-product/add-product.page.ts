import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

var toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // custom dropdown
  ['bold', 'italic', 'underline'],                  // toggled buttons
  [{ 'size': ['small'] }],
  ['blockquote'],

  [{ 'list': 'bullet' }, { 'list': 'ordered'}],
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  ['link', 'image'],

  ['clean']                                         // remove formatting button
];

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  user_not_found_place_holder = 'assets/image/placeholder-s.png'

  imgProfileURL:any = null;
  uploadProfileFile = null;

  addproduct_form: FormGroup;

  public editor;
  public editorContent = '';
  public editorOptions = {
    placeholder: "Enter Description",
    modules: {
      toolbar: toolbarOptions,
      // theme: 'snow'
    }
  };
  product_process: boolean;
  itemlist: any;
  categorylist: any;
  warehouselist: any;
  category_list: Array<any> = [];
  brand_list: Array<any> = [];

  imagePriview: any = '';
  mediaUrl_image: any = '';
  

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder) {

    this.addproduct_fb();
  }

  ionViewWillEnter(){
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#6382ff');
  }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)

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

  addproduct_fb(){
    this.addproduct_form = this.formBuilder.group({
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

  addProduct(){
    for (let v in this.addproduct_form.controls) {
      this.addproduct_form.controls[v].markAsTouched();
    }
    if (this.addproduct_form.valid) {
      this.CommonService.presentLoading();
      this.product_process = true;
      const body: FormData = new FormData();
      body.append('product_image',this.mediaUrl_image);
      body.append('name',this.addproduct_form.value.name);
      body.append('sku',this.addproduct_form.value.sku);
      body.append('price',this.addproduct_form.value.price);
      body.append('qty',this.addproduct_form.value.qty);
      body.append('description',this.addproduct_form.value.description);
      body.append('brand_id',this.addproduct_form.value.brand_id);
      body.append('category_id',this.addproduct_form.value.category_id);
      body.append('store_id',this.addproduct_form.value.store_id);
      body.append('availability',this.addproduct_form.value.availability);
      
      // const body = {
      //     "image" : this.addproduct_form.value.image,
      //     "name" : this.addproduct_form.value.name,
      //     "sku" : this.addproduct_form.value.sku,
      //     "price" : this.addproduct_form.value.price,
      //     "qty" : this.addproduct_form.value.qty,
      //     "description" : this.addproduct_form.value.description,
      //     "brand_id" : this.addproduct_form.value.brand_id,
      //     "category_id" : this.addproduct_form.value.category_id,
      //     "store_id" : this.addproduct_form.value.store_id,
      //     "availability" : this.addproduct_form.value.availability,
      // };
      console.log("+++++++add",body)
      this.CommonService.productAdd(body).subscribe(val => {
        this.product_process = false;
        this.CommonService.dismissLoading();
        console.log("check Value",val);
        if(val.status == 1) {
         this.CommonService.presentToastWithOptions(val.message);
         this.router.navigate(['/manage-products']);
        }else{
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
      err =>{
        this.product_process = false;
        this.CommonService.dismissLoading();
        this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  imageUpload(e) {
    console.log("eeee",e)

    let file = e.target.files[0];
    if (file) {     
        let reader = new FileReader();
        reader.onloadend = (e: any) => {
          this.imagePriview = e.target.result;
          console.log(" this.imagePriview", this.imagePriview)
        };
        reader.readAsDataURL(e.target.files[0]);
        this.mediaUrl_image = file;
        console.log(" this.mediaUrl_image", this.mediaUrl_image)    
    } 
  }

}
