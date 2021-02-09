import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/api/common/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';

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
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

  company_form: FormGroup;

  public editor;
  public editorContent = '';
  public editorOptions = {
    placeholder: "Enter Message",
    modules: {
      toolbar: toolbarOptions,
      // theme: 'snow'
    }
  };
  comdata: any;
  com_process: boolean;
  comlist: any;
  com_list: any[];
  currencyselect: any;

  constructor(private navCtrl: NavController,
    public CommonService: CommonService,
    private route: ActivatedRoute,
    public router: Router,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder) {

    this.company_fb();
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
    }, 2800)
  }

  company_fb(){
    this.company_form = this.formBuilder.group({
      company_name: [null, Validators.required],
      service_charge_value: [null, Validators.required],
      vat_charge_value: [null, Validators.required],
      address: [null, Validators.required],
      phone: [null, Validators.required],
      country: [null, Validators.required],
      message: [null, Validators.required],
      currency: [null, Validators.required],
    });
    let reqData = this.route.snapshot.queryParams;
    this.getCompanyDetails(reqData);
  }

  getCompanyDetails(reqData){
    this.CommonService.comGet(reqData).subscribe(res => {
      this.comdata = res.data;
      this.currencyselect = this.comdata.currency;
      this.company_form.patchValue({
        id: this.comdata._id,
        company_name: this.comdata.company_name,
        service_charge_value: this.comdata.service_charge_value,
        vat_charge_value: this.comdata.vat_charge_value,
        address: this.comdata.address,
        phone: this.comdata.phone,
        country: this.comdata.country,
        message: this.comdata.message,
        currency: this.currencyselect
      });
    }
    )
    this.comList()
  }

  comList() {
    let newArray = [];
    this.CommonService.comlist().subscribe(data => {
      this.comlist = data.data;
      console.log("+++++++++++",this.comlist)
      
     
    },
    );
  }

  UpdateCompany(){
    for (let v in this.company_form.controls) {
      this.company_form.controls[v].markAsTouched();
    }
    if (this.company_form.valid) {
      this.CommonService.presentLoading();
      this.com_process = true;
      const body = {
          "company_name" : this.company_form.value.company_name,
          "service_charge_value" : this.company_form.value.service_charge_value,
          "vat_charge_value" : this.company_form.value.vat_charge_value,
          "address" : this.company_form.value.address,
          "phone" : this.company_form.value.phone,
          "country" : this.company_form.value.country,
          "message" : this.company_form.value.message,
          "currency" : this.company_form.value.currency,
      };
      this.CommonService.comEdit(body).subscribe(val => {

        this.com_process = false;
        this.CommonService.dismissLoading();
        if (val.status == 1) {
          this.CommonService.dismissLoading();
          this.CommonService.presentToastWithOptions(val.message);
          this.router.navigate(['/home']);
        } else {
          this.CommonService.presentToastWithOptions(val.message);
        }
      },
        err => {
          this.com_process = false;
          this.CommonService.dismissLoading();
          this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        })
    }
  }

}
