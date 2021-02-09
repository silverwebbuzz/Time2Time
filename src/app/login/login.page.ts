import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth/auth.service';
import { CommonService } from '../api/common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;
  login_process: boolean = false;

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private router:Router,
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private service: CommonService,
    private auth:AuthService) {
      this.login_fb();
     }

     ionViewWillEnter(){
      this.menu.enable(false);
  
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

  ngOnInit() {
  }

  login_fb(){
    this.login_form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  doLogin(){
    //this.router.navigate(['/home']);
    for (let v in this.login_form.controls) {
      this.login_form.controls[v].markAsTouched();
    }
    if(this.login_form.valid){
      this.service.presentLoading();
      this.login_process = true;
      var body= {
        email: this.login_form.value.email,
        password: this.login_form.value.password
      };
      this.auth.login(body).subscribe(val=>{
        this.login_process = false;
        this.service.dismissLoading();
        if(val.status){
          this.auth.loginAuth(val).then(() =>{
            this.service.presentToastWithOptions(val.message);
            this.router.navigate(['/manage-products']);
          });
        }else{
          this.service.presentToastWithOptions(val.message);
        }
      },
      err =>{
        this.login_process = false;
        this.service.dismissLoading();
        this.service.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
    
  }

}
