(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-add-brand-add-brand-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/add-brand/add-brand.page.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brands/add-brand/add-brand.page.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Add Brand\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"addbrand_form\" autocomplete=\"off\"> \r\n\r\n    <ion-item lines=\"none\" class=\"input-item\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Brand Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addbrand_form.controls.name.hasError('required') && addbrand_form.controls.name.touched\">\r\n      <p class=\"content\">Please Enter Brand Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Status</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"active\" placeholder=\"Select Status\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"1\" selected>Active</ion-select-option>\r\n        <ion-select-option value=\"2\">Inactive</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addbrand_form.controls.active.hasError('required') && addbrand_form.controls.active.touched\">\r\n      <p class=\"content\">Please Select Brand Status!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"addBrand()\">Save</ion-button>\r\n</ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/brands/add-brand/add-brand-routing.module.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/brands/add-brand/add-brand-routing.module.ts ***!
          \**************************************************************/
        /*! exports provided: AddBrandPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandPageRoutingModule", function () { return AddBrandPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _add_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-brand.page */ "./src/app/brands/add-brand/add-brand.page.ts");
            var routes = [
                {
                    path: '',
                    component: _add_brand_page__WEBPACK_IMPORTED_MODULE_3__["AddBrandPage"]
                }
            ];
            var AddBrandPageRoutingModule = /** @class */ (function () {
                function AddBrandPageRoutingModule() {
                }
                return AddBrandPageRoutingModule;
            }());
            AddBrandPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AddBrandPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/brands/add-brand/add-brand.module.ts": 
        /*!******************************************************!*\
          !*** ./src/app/brands/add-brand/add-brand.module.ts ***!
          \******************************************************/
        /*! exports provided: AddBrandPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandPageModule", function () { return AddBrandPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _add_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-brand-routing.module */ "./src/app/brands/add-brand/add-brand-routing.module.ts");
            /* harmony import */ var _add_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-brand.page */ "./src/app/brands/add-brand/add-brand.page.ts");
            var AddBrandPageModule = /** @class */ (function () {
                function AddBrandPageModule() {
                }
                return AddBrandPageModule;
            }());
            AddBrandPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _add_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddBrandPageRoutingModule"]
                    ],
                    declarations: [_add_brand_page__WEBPACK_IMPORTED_MODULE_6__["AddBrandPage"]]
                })
            ], AddBrandPageModule);
            /***/ 
        }),
        /***/ "./src/app/brands/add-brand/add-brand.page.scss": 
        /*!******************************************************!*\
          !*** ./src/app/brands/add-brand/add-brand.page.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add {\n  margin-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvYnJhbmRzL2FkZC1icmFuZC9hZGQtYnJhbmQucGFnZS5zY3NzIiwic3JjL2FwcC9icmFuZHMvYWRkLWJyYW5kL2FkZC1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9icmFuZHMvYWRkLWJyYW5kL2FkZC1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFkZHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uYnRuLWZvb3RlcntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcclxufSIsIi5hZGQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5idG4tZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/brands/add-brand/add-brand.page.ts": 
        /*!****************************************************!*\
          !*** ./src/app/brands/add-brand/add-brand.page.ts ***!
          \****************************************************/
        /*! exports provided: AddBrandPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandPage", function () { return AddBrandPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            var AddBrandPage = /** @class */ (function () {
                function AddBrandPage(navCtrl, CommonService, router, statusBar, formBuilder) {
                    this.navCtrl = navCtrl;
                    this.CommonService = CommonService;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.formBuilder = formBuilder;
                    this.addbrand_fb();
                }
                AddBrandPage.prototype.ionViewWillEnter = function () {
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                };
                AddBrandPage.prototype.ngOnInit = function () {
                };
                AddBrandPage.prototype.addbrand_fb = function () {
                    this.addbrand_form = this.formBuilder.group({
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                };
                AddBrandPage.prototype.addBrand = function () {
                    var _this = this;
                    for (var v in this.addbrand_form.controls) {
                        this.addbrand_form.controls[v].markAsTouched();
                    }
                    if (this.addbrand_form.valid) {
                        this.CommonService.presentLoading();
                        this.brand_process = true;
                        var body = {
                            "name": this.addbrand_form.value.name,
                            "active": this.addbrand_form.value.active,
                        };
                        this.CommonService.brandAdd(body).subscribe(function (val) {
                            _this.brand_process = false;
                            _this.CommonService.dismissLoading();
                            if (val.status == 1) {
                                _this.CommonService.presentToastWithOptions(val.message);
                                _this.router.navigate(['/brands']);
                            }
                            else {
                                _this.CommonService.presentToastWithOptions(val.message);
                            }
                        }, function (err) {
                            _this.brand_process = false;
                            _this.CommonService.dismissLoading();
                            _this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                        });
                    }
                };
                AddBrandPage.prototype.back = function () {
                    this.navCtrl.pop();
                };
                return AddBrandPage;
            }());
            AddBrandPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            AddBrandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-brand',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/add-brand/add-brand.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-brand.page.scss */ "./src/app/brands/add-brand/add-brand.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
            ], AddBrandPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=brands-add-brand-add-brand-module-es2015.js.map
//# sourceMappingURL=brands-add-brand-add-brand-module-es5.js.map
//# sourceMappingURL=brands-add-brand-add-brand-module-es5.js.map