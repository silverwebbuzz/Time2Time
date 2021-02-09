(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-edit-brand-edit-brand-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/edit-brand/edit-brand.page.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brands/edit-brand/edit-brand.page.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\" text-center>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"back()\" color=\"light\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title color=\"light\" class=\"head\">\r\n        Edit Brand\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header> \r\n  \r\n  <ion-content padding>\r\n\r\n      <form [formGroup]=\"editbrand_form\" autocomplete=\"off\">\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Brand Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editbrand_form.controls.name.hasError('required') && editbrand_form.controls.name.touched\">\r\n      <p class=\"content\">Please Enter Brand Name!</p>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Status</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"active\" placeholder=\"Select Status\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"1\" *ngIf=\"isActive\">Active</ion-select-option>\r\n        <ion-select-option value=\"2\">Inactive</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editbrand_form.controls.active.hasError('required') && editbrand_form.controls.active.touched\">\r\n      <p class=\"content\">Please Select Brand Status!</p>\r\n    </ion-item>\r\n\r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer>\r\n    <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"editBrand()\">Update</ion-button>\r\n  </ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/brands/edit-brand/edit-brand-routing.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/brands/edit-brand/edit-brand-routing.module.ts ***!
          \****************************************************************/
        /*! exports provided: EditBrandPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrandPageRoutingModule", function () { return EditBrandPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _edit_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-brand.page */ "./src/app/brands/edit-brand/edit-brand.page.ts");
            var routes = [
                {
                    path: '',
                    component: _edit_brand_page__WEBPACK_IMPORTED_MODULE_3__["EditBrandPage"]
                }
            ];
            var EditBrandPageRoutingModule = /** @class */ (function () {
                function EditBrandPageRoutingModule() {
                }
                return EditBrandPageRoutingModule;
            }());
            EditBrandPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], EditBrandPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/brands/edit-brand/edit-brand.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/brands/edit-brand/edit-brand.module.ts ***!
          \********************************************************/
        /*! exports provided: EditBrandPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrandPageModule", function () { return EditBrandPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _edit_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-brand-routing.module */ "./src/app/brands/edit-brand/edit-brand-routing.module.ts");
            /* harmony import */ var _edit_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-brand.page */ "./src/app/brands/edit-brand/edit-brand.page.ts");
            var EditBrandPageModule = /** @class */ (function () {
                function EditBrandPageModule() {
                }
                return EditBrandPageModule;
            }());
            EditBrandPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _edit_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditBrandPageRoutingModule"]
                    ],
                    declarations: [_edit_brand_page__WEBPACK_IMPORTED_MODULE_6__["EditBrandPage"]]
                })
            ], EditBrandPageModule);
            /***/ 
        }),
        /***/ "./src/app/brands/edit-brand/edit-brand.page.scss": 
        /*!********************************************************!*\
          !*** ./src/app/brands/edit-brand/edit-brand.page.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add {\n  margin-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvYnJhbmRzL2VkaXQtYnJhbmQvZWRpdC1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JyYW5kcy9lZGl0LWJyYW5kL2VkaXQtYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYnJhbmRzL2VkaXQtYnJhbmQvZWRpdC1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFkZHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uYnRuLWZvb3RlcntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcclxufSIsIi5hZGQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5idG4tZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/brands/edit-brand/edit-brand.page.ts": 
        /*!******************************************************!*\
          !*** ./src/app/brands/edit-brand/edit-brand.page.ts ***!
          \******************************************************/
        /*! exports provided: EditBrandPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrandPage", function () { return EditBrandPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            var EditBrandPage = /** @class */ (function () {
                function EditBrandPage(navCtrl, formBuilder, CommonService, router, statusBar, route) {
                    this.navCtrl = navCtrl;
                    this.formBuilder = formBuilder;
                    this.CommonService = CommonService;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.route = route;
                    this.edtbrand_fb();
                }
                EditBrandPage.prototype.ionViewWillEnter = function () {
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                };
                EditBrandPage.prototype.isActive = function (val) {
                    if (val == 1) {
                        return 'Active';
                    }
                    else {
                        return 'Inactive';
                    }
                };
                EditBrandPage.prototype.ngOnInit = function () {
                    var reqData = this.route.snapshot.queryParams;
                    this.brandDetails(reqData);
                };
                EditBrandPage.prototype.edtbrand_fb = function () {
                    this.editbrand_form = this.formBuilder.group({
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                };
                EditBrandPage.prototype.brandDetails = function (reqData) {
                    var _this = this;
                    this.CommonService.brandGet(reqData).subscribe(function (res) {
                        _this.brandData = res.data;
                        console.log("::::::", _this.brandData);
                        _this.editbrand_form.patchValue({
                            name: _this.brandData.name,
                            active: _this.brandData.active
                        });
                    }, function (error) {
                    });
                };
                EditBrandPage.prototype.editBrand = function () {
                    var _this = this;
                    for (var v in this.editbrand_form.controls) {
                        this.editbrand_form.controls[v].markAsTouched();
                    }
                    if (this.editbrand_form.valid) {
                        this.CommonService.presentLoading();
                        this.brand_process = true;
                        var body = {
                            "name": this.editbrand_form.value.name,
                            "active": this.editbrand_form.value.active,
                            "id": this.route.snapshot.queryParams.id,
                        };
                        console.log("edit", body);
                        this.CommonService.brandEdit(body).subscribe(function (val) {
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
                EditBrandPage.prototype.back = function () {
                    this.navCtrl.pop();
                };
                return EditBrandPage;
            }());
            EditBrandPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            EditBrandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-brand',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/edit-brand/edit-brand.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-brand.page.scss */ "./src/app/brands/edit-brand/edit-brand.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
            ], EditBrandPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=brands-edit-brand-edit-brand-module-es2015.js.map
//# sourceMappingURL=brands-edit-brand-edit-brand-module-es5.js.map
//# sourceMappingURL=brands-edit-brand-edit-brand-module-es5.js.map