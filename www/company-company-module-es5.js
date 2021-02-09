(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.page.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.page.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Company\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n    <form [formGroup]=\"company_form\" autocomplete=\"off\">\r\n\r\n  <ion-item lines=\"none\" class=\"input-item\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Company Name</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"company_name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.company_name.hasError('required') && company_form.controls.company_name.touched\">\r\n      <p class=\"content\">Please Enter Company Name!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Charge Amount (%)</ion-label>\r\n    <ion-input type=\"number\" formControlName=\"service_charge_value\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.service_charge_value.hasError('required') && company_form.controls.service_charge_value.touched\">\r\n      <p class=\"content\">Please Enter Charge Amount!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Vat Charge (%)</ion-label>\r\n    <ion-input type=\"number\" formControlName=\"vat_charge_value\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.vat_charge_value.hasError('required') && company_form.controls.vat_charge_value.touched\">\r\n      <p class=\"content\">Please Enter Vat Charge!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Address</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"address\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.address.hasError('required') && company_form.controls.address.touched\">\r\n      <p class=\"content\">Please Enter Address!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Phone</ion-label>\r\n    <ion-input type=\"number\" formControlName=\"phone\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.phone.hasError('required') && company_form.controls.phone.touched\">\r\n      <p class=\"content\">Please Enter Phone!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"country\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.country.hasError('required') && company_form.controls.country.touched\">\r\n      <p class=\"content\">Please Enter Country!</p>\r\n    </ion-item>\r\n\r\n  <!-- CKEditor -->  \r\n  <ion-label position=\"stacked\" class=\"input-lbl lbl-add\">Message</ion-label>\r\n  <quill-editor class=\"editor\" formControlName=\"message\" [options]=\"editorOptions\"></quill-editor>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.message.hasError('required') && company_form.controls.message.touched\">\r\n      <p class=\"content\">Please Enter Message!</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n    <ion-label position=\"stacked\" class=\"lbl-dropdown\">Currency</ion-label>\r\n    <ion-select interface=\"action-sheet\" formControlName=\"currency\" placeholder=\"Select Currency\" class=\"btn-select bg\" mode=\"md\" [(ngModel)]=\"currencyselect\">\r\n      <ion-select-option *ngFor=\"let opt of comlist | keyvalue\">{{opt.key}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  \r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"company_form.controls.currency.hasError('required') && company_form.controls.currency.touched\">\r\n      <p class=\"content\">Please Select Currency!</p>\r\n    </ion-item>\r\n\r\n    </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" class=\"btn-footer\"(click)=\"UpdateCompany()\">\r\n    Save\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n");
            /***/ 
        }),
        /***/ "./src/app/company/company.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/company/company.module.ts ***!
          \*******************************************/
        /*! exports provided: CompanyPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageModule", function () { return CompanyPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _company_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company.page */ "./src/app/company/company.page.ts");
            /* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
            var routes = [
                {
                    path: '',
                    component: _company_page__WEBPACK_IMPORTED_MODULE_6__["CompanyPage"]
                }
            ];
            var CompanyPageModule = /** @class */ (function () {
                function CompanyPageModule() {
                }
                return CompanyPageModule;
            }());
            CompanyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__["QuillEditorModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    ],
                    declarations: [_company_page__WEBPACK_IMPORTED_MODULE_6__["CompanyPage"]]
                })
            ], CompanyPageModule);
            /***/ 
        }),
        /***/ "./src/app/company/company.page.scss": 
        /*!*******************************************!*\
          !*** ./src/app/company/company.page.scss ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".editor {\n  min-height: 16em;\n  max-height: 20em;\n  overflow-y: auto;\n}\n\n.add {\n  margin-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.lbl-add {\n  font-weight: bold;\n  color: #888;\n  display: block;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvY29tcGFueS9jb21wYW55LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcGFueS9jb21wYW55LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQ0NQOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBhbnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvcntcclxuICAgIG1pbi1oZWlnaHQ6IDE2ZW07XHJcbiAgICAgICBtYXgtaGVpZ2h0OiAyMGVtO1xyXG4gICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uYWRke1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcbi5sYmwtYWRke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufSIsIi5lZGl0b3Ige1xuICBtaW4taGVpZ2h0OiAxNmVtO1xuICBtYXgtaGVpZ2h0OiAyMGVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYWRkIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5sYmwtYWRkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/company/company.page.ts": 
        /*!*****************************************!*\
          !*** ./src/app/company/company.page.ts ***!
          \*****************************************/
        /*! exports provided: CompanyPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPage", function () { return CompanyPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var toolbarOptions = [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline'],
                [{ 'size': ['small'] }],
                ['blockquote'],
                [{ 'list': 'bullet' }, { 'list': 'ordered' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean'] // remove formatting button
            ];
            var CompanyPage = /** @class */ (function () {
                function CompanyPage(navCtrl, CommonService, route, router, statusBar, formBuilder) {
                    this.navCtrl = navCtrl;
                    this.CommonService = CommonService;
                    this.route = route;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.formBuilder = formBuilder;
                    this.editorContent = '';
                    this.editorOptions = {
                        placeholder: "Enter Message",
                        modules: {
                            toolbar: toolbarOptions,
                        }
                    };
                    this.company_fb();
                }
                CompanyPage.prototype.ionViewWillEnter = function () {
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                };
                CompanyPage.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.editorContent = '';
                        console.log('you can use the quill instance object to do something', _this.editor);
                    }, 2800);
                };
                CompanyPage.prototype.company_fb = function () {
                    this.company_form = this.formBuilder.group({
                        company_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        service_charge_value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        vat_charge_value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                    var reqData = this.route.snapshot.queryParams;
                    this.getCompanyDetails(reqData);
                };
                CompanyPage.prototype.getCompanyDetails = function (reqData) {
                    var _this = this;
                    this.CommonService.comGet(reqData).subscribe(function (res) {
                        _this.comdata = res.data;
                        _this.currencyselect = _this.comdata.currency;
                        _this.company_form.patchValue({
                            id: _this.comdata._id,
                            company_name: _this.comdata.company_name,
                            service_charge_value: _this.comdata.service_charge_value,
                            vat_charge_value: _this.comdata.vat_charge_value,
                            address: _this.comdata.address,
                            phone: _this.comdata.phone,
                            country: _this.comdata.country,
                            message: _this.comdata.message,
                            currency: _this.currencyselect
                        });
                    });
                    this.comList();
                };
                CompanyPage.prototype.comList = function () {
                    var _this = this;
                    var newArray = [];
                    this.CommonService.comlist().subscribe(function (data) {
                        _this.comlist = data.data;
                        console.log("+++++++++++", _this.comlist);
                    });
                };
                CompanyPage.prototype.UpdateCompany = function () {
                    var _this = this;
                    for (var v in this.company_form.controls) {
                        this.company_form.controls[v].markAsTouched();
                    }
                    if (this.company_form.valid) {
                        this.CommonService.presentLoading();
                        this.com_process = true;
                        var body = {
                            "company_name": this.company_form.value.company_name,
                            "service_charge_value": this.company_form.value.service_charge_value,
                            "vat_charge_value": this.company_form.value.vat_charge_value,
                            "address": this.company_form.value.address,
                            "phone": this.company_form.value.phone,
                            "country": this.company_form.value.country,
                            "message": this.company_form.value.message,
                            "currency": this.company_form.value.currency,
                        };
                        this.CommonService.comEdit(body).subscribe(function (val) {
                            _this.com_process = false;
                            _this.CommonService.dismissLoading();
                            if (val.status == 1) {
                                _this.CommonService.dismissLoading();
                                _this.CommonService.presentToastWithOptions(val.message);
                                _this.router.navigate(['/home']);
                            }
                            else {
                                _this.CommonService.presentToastWithOptions(val.message);
                            }
                        }, function (err) {
                            _this.com_process = false;
                            _this.CommonService.dismissLoading();
                            _this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                        });
                    }
                };
                return CompanyPage;
            }());
            CompanyPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            CompanyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.page.scss */ "./src/app/company/company.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
            ], CompanyPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=company-company-module-es2015.js.map
//# sourceMappingURL=company-company-module-es5.js.map
//# sourceMappingURL=company-company-module-es5.js.map