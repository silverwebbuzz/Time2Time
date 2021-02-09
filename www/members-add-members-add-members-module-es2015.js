(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-add-members-add-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/add-members/add-members.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/add-members/add-members.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Add New Member\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n    <form [formGroup]=\"addmembers_form\" autocomplete=\"off\">\r\n\r\n  <ion-item lines=\"none\" class=\"input-item\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"firstname\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.firstname.hasError('required') && addmembers_form.controls.firstname.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"lastname\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.lastname.hasError('required') && addmembers_form.controls.lastname.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Username</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"username\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.username.hasError('required') && addmembers_form.controls.username.touched\">\r\n      <p class=\"content\">Please Enter Username!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"email\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.email.hasError('required') && addmembers_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter Email!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.email.hasError('pattern') && addmembers_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter Valid Email!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.email.hasError('incorrect') && addmembers_form.controls.email.touched\">\r\n      <p class=\"content\">Email is already taken!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Password</ion-label>\r\n    <ion-input type=\"password\" formControlName=\"password\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n  *ngIf=\"addmembers_form.controls.password.hasError('required') && addmembers_form.controls.password.touched\">\r\n  <p class=\"content\">Please Enter a Password!</p>\r\n</ion-item>\r\n<ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n  *ngIf=\"addmembers_form.controls.password.hasError('minlength') && addmembers_form.controls.password.touched\">\r\n  <p class=\"content\">The password needs at least 8 characters.</p>\r\n</ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Confirm Password</ion-label>\r\n    <ion-input type=\"password\" formControlName=\"confirmpassword\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.confirmpassword.hasError('required') && addmembers_form.controls.confirmpassword.touched\">\r\n      <p class=\"content\">Please Enter a Confirm Password!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.get('confirmpassword').errors && addmembers_form.get('confirmpassword').errors.confirmpassword\">\r\n      <p class=\"content\">Passwords must match!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Phone</ion-label>\r\n    <ion-input type=\"number\" formControlName=\"phone\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.phone.hasError('required') && addmembers_form.controls.phone.touched\">\r\n      <p class=\"content\">Please Enter Phone!</p>\r\n    </ion-item> \r\n\r\n  <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Permission</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"group_id\" placeholder=\"Select Permission\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option *ngFor=\"let opt of permissionlist\" [value]=\"opt.id\">{{opt.group_name}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"group_id\">Admin</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addmembers_form.controls.group_id.hasError('required') && addmembers_form.controls.group_id.touched\">\r\n      <p class=\"content\">Please Select Permission!</p>\r\n    </ion-item>\r\n\r\n    <div class=\"div-que add\">\r\n\r\n        <ion-label class=\"lbl-head\">Gender</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"gender\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Male</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Female</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"addMember()\">\r\n      Save\r\n    </ion-button>\r\n  </ion-footer>");

/***/ }),

/***/ "./src/app/_helper/must-match.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/_helper/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: ConfirmPasswordValidator, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ConfirmPasswordValidator {
    static MatchPassword(control) {
        let password = control.get('password').value;
        let confirmpassword = control.get('confirmpassword').value;
        if (!confirmpassword) {
            return true;
        }
        if (password != confirmpassword) {
            control.get('confirmpassword').setErrors({ confirmpassword: true });
        }
        else {
            return null;
        }
    }
}
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/members/add-members/add-members.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/members/add-members/add-members.module.ts ***!
  \***********************************************************/
/*! exports provided: AddMembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersPageModule", function() { return AddMembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-members.page */ "./src/app/members/add-members/add-members.page.ts");







const routes = [
    {
        path: '',
        component: _add_members_page__WEBPACK_IMPORTED_MODULE_6__["AddMembersPage"]
    }
];
let AddMembersPageModule = class AddMembersPageModule {
};
AddMembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_members_page__WEBPACK_IMPORTED_MODULE_6__["AddMembersPage"]]
    })
], AddMembersPageModule);



/***/ }),

/***/ "./src/app/members/add-members/add-members.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/members/add-members/add-members.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add {\n  margin-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvbWVtYmVycy9hZGQtbWVtYmVycy9hZGQtbWVtYmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvYWRkLW1lbWJlcnMvYWRkLW1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9hZGQtbWVtYmVycy9hZGQtbWVtYmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRke1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59IiwiLmFkZCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmJ0bi1mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/members/add-members/add-members.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/members/add-members/add-members.page.ts ***!
  \*********************************************************/
/*! exports provided: AddMembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersPage", function() { return AddMembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_helper_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helper/must-match.validator */ "./src/app/_helper/must-match.validator.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");








let AddMembersPage = class AddMembersPage {
    constructor(navCtrl, CommonService, router, statusBar, formBuilder) {
        this.navCtrl = navCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.addmembers_fb();
        this.permissionList();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
    }
    ngOnInit() {
    }
    addmembers_fb() {
        this.addmembers_form = this.formBuilder.group({
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                ])],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            group_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: src_app_helper_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordValidator"].MatchPassword });
    }
    ;
    permissionList() {
        this.CommonService.getPermisssionList().subscribe(data => {
            this.permissionlist = data.data;
            console.log("per::", this.permissionlist);
        });
    }
    addMember() {
        for (let v in this.addmembers_form.controls) {
            this.addmembers_form.controls[v].markAsTouched();
        }
        if (this.addmembers_form.valid) {
            this.CommonService.presentLoading();
            this.member_process = true;
            const body = {
                "firstname": this.addmembers_form.value.firstname,
                "lastname": this.addmembers_form.value.lastname,
                "username": this.addmembers_form.value.username,
                "email": this.addmembers_form.value.email,
                "password": this.addmembers_form.value.password,
                "phone": this.addmembers_form.value.phone,
                "group_id": this.addmembers_form.value.group_id,
                "gender": this.addmembers_form.value.gender,
            };
            console.log("gidddd", body);
            this.CommonService.memberAdd(body).subscribe(val => {
                this.member_process = false;
                this.CommonService.dismissLoading();
                if (val.status == 1) {
                    this.CommonService.presentToastWithOptions(val.message);
                    this.router.navigate(['/manage-members']);
                }
                else {
                    this.CommonService.presentToastWithOptions(val.message);
                }
            }, err => {
                this.member_process = false;
                this.CommonService.dismissLoading();
                this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
};
AddMembersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddMembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-members.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/add-members/add-members.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-members.page.scss */ "./src/app/members/add-members/add-members.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], AddMembersPage);



/***/ })

}]);
//# sourceMappingURL=members-add-members-add-members-module-es2015.js.map