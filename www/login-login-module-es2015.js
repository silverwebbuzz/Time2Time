(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title color=\"primary\" class=\"head\">Login</ion-title>\r\n  </ion-toolbar>\r\n  <ion-progress-bar *ngIf=\"login_process\" type=\"indeterminate\"></ion-progress-bar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"page-signin\">\r\n\r\n  <!-- <ion-card class=\"card-logo\">\r\n    <img src=\"../../assets/image/logo.png\" class=\"icon-logo\"/>\r\n    <img src=\"../../assets/image/logo1.png\" class=\"lbl-logo\"/>\r\n  </ion-card> -->\r\n\r\n  <img src=\"../../assets/image/logo2.png\" class=\"lbl-logo\" />\r\n\r\n  <form [formGroup]=\"login_form\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-main\">\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-icon src=\"../../assets/icon/iconmonstr-email-2.svg\" slot=\"start\" color=\"light\"></ion-icon>\r\n      <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label> -->\r\n      <ion-input type=\"text\" formControlName=\"email\" placeholder=\"Email\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\r\n      *ngIf=\"login_form.controls.email.hasError('required') && login_form.controls.email.touched\">\r\n      <p class=\"content add-error\">Please Enter Email Address!</p>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\r\n      *ngIf=\"login_form.controls.email.hasError('incorrect') && login_form.controls.email.touched\">\r\n      <p class=\"content add-error\">Email Address Does Not Exists.</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-icon src=\"../../assets/icon/iconmonstr-lock-4.svg\" slot=\"start\" color=\"light\"></ion-icon>\r\n      <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Password</ion-label> -->\r\n      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\r\n      *ngIf=\"login_form.controls.password.hasError('required') && login_form.controls.password.touched\">\r\n      <p class=\"content add-error\">Please Enter Password!</p>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\r\n      *ngIf=\"login_form.controls.password.hasError('incorrect') && login_form.controls.password.touched\">\r\n      <p class=\"content add-error\">Invalid password.</p>\r\n    </ion-item>\r\n\r\n    <div class=\"btns-bottom\">\r\n      <ion-button expand=\"block\" size=\"large\" color=\"light\" mode=\"md\" class=\"btn-signin\" (click)=\"doLogin()\">Sign in</ion-button>\r\n      \r\n      <!-- <ion-checkbox mode=\"md\"></ion-checkbox>\r\n      <ion-label color=\"light\">Remember Me</ion-label> -->\r\n      <!-- <ion-item lines=\"none\" class=\"me\">\r\n          <ion-label color=\"light\" class=\"me-lbl\">Remember Me</ion-label>\r\n          <ion-checkbox slot=\"start\" mode=\"md\" role=\"checkbox\"></ion-checkbox>\r\n        </ion-item> -->\r\n    </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add {\n  margin-top: 16px;\n}\n\n.page-signin {\n  --padding-start: 32px;\n  --padding-end: 32px;\n  --padding-top: 32px;\n  --padding-bottom: 32px;\n  --background: url('bg4.png') 0 0/100% 100% no-repeat;\n}\n\n.div-main {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 80%;\n}\n\nion-item {\n  --background: transparent;\n  --inner-padding-end: 0px;\n}\n\nion-item ion-input {\n  border-bottom: 1px solid #ccc;\n  margin-left: 8px;\n  --placeholder-color: #fff;\n  --color: #fff;\n}\n\n.email {\n  height: 22px;\n  width: 30px;\n}\n\n.lock {\n  height: 30px;\n  width: 30px;\n}\n\nion-checkbox {\n  --background: transparent;\n  --border-color: #fff;\n  --border-color-checked: #fff;\n  --checkmark-color: #fff;\n}\n\n.me {\n  margin-top: 8px;\n  position: absolute;\n  right: 0;\n  --background-activated: var(--ion-color-primary);\n  --inner-padding-end: 0px;\n}\n\n.me .me-lbl {\n  margin-right: 0px;\n}\n\n.add-error {\n  width: 100%;\n  text-align: right;\n}\n\n.error-spc {\n  --min-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSxvREFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQ0dKOztBRERJO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQ0Esd0JBQUE7QUNNSjs7QURKSTtFQUNJLGlCQUFBO0FDTVI7O0FESEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRke1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4ucGFnZS1zaWduaW57XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDMycHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAzMnB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMzJweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvYmcuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL2JnNC5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcbi5kaXYtbWFpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcclxuICAgICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcbi5lbWFpbHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcbi5sb2Nre1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuaW9uLWNoZWNrYm94e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5tZXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgXHJcbiAgICAubWUtbGJse1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcbi5hZGQtZXJyb3J7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5lcnJvci1zcGN7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi8vIC5jYXJkLWxvZ297XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDA7XHJcbiAgICBcclxuLy8gICAgIC5pY29uLWxvZ297XHJcbi8vICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIH1cclxuLy8gICAgIC5sYmwtbG9nb3tcclxuLy8gICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgd2lkdGg6IDE3NXB4O1xyXG4vLyAgICAgICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIH1cclxuLy8gfSIsIi5hZGQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ucGFnZS1zaWduaW4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDMycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDMycHg7XG4gIC0tcGFkZGluZy10b3A6IDMycHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDMycHg7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9iZzQucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmRpdi1tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5pb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmVtYWlsIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmxvY2sge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmZjtcbiAgLS1jaGVja21hcmstY29sb3I6ICNmZmY7XG59XG5cbi5tZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4ubWUgLm1lLWxibCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uYWRkLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZXJyb3Itc3BjIHtcbiAgLS1taW4taGVpZ2h0OiAxOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _api_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/common/common.service */ "./src/app/api/common/common.service.ts");








let LoginPage = class LoginPage {
    constructor(navCtrl, statusBar, router, menu, formBuilder, service, auth) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.router = router;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.service = service;
        this.auth = auth;
        this.login_process = false;
        this.login_fb();
    }
    ionViewWillEnter() {
        this.menu.enable(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
    }
    login_fb() {
        this.login_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    doLogin() {
        //this.router.navigate(['/home']);
        for (let v in this.login_form.controls) {
            this.login_form.controls[v].markAsTouched();
        }
        if (this.login_form.valid) {
            this.service.presentLoading();
            this.login_process = true;
            var body = {
                email: this.login_form.value.email,
                password: this.login_form.value.password
            };
            this.auth.login(body).subscribe(val => {
                this.login_process = false;
                this.service.dismissLoading();
                if (val.status) {
                    this.auth.loginAuth(val).then(() => {
                        this.service.presentToastWithOptions(val.message);
                        this.router.navigate(['/manage-products']);
                    });
                }
                else {
                    this.service.presentToastWithOptions(val.message);
                }
            }, err => {
                this.login_process = false;
                this.service.dismissLoading();
                this.service.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _api_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _api_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map