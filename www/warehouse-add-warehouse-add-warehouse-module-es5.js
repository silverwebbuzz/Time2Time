(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-add-warehouse-add-warehouse-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/add-warehouse/add-warehouse.page.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/add-warehouse/add-warehouse.page.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\" text-center>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"back()\" color=\"light\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title color=\"light\" class=\"head\">\r\n        Add Warehouse\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding> \r\n\r\n      <form [formGroup]=\"addwarehouse_form\" autocomplete=\"off\">\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Warehouse Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addwarehouse_form.controls.name.hasError('required') && addwarehouse_form.controls.name.touched\">\r\n      <p class=\"content\">Please Enter Warehouse Name!</p>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Status</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"active\" placeholder=\"Select Status\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"1\" selected>Active</ion-select-option>\r\n        <ion-select-option value=\"2\">Inactive</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addwarehouse_form.controls.active.hasError('required') && addwarehouse_form.controls.active.touched\">\r\n      <p class=\"content\">Please Select Warehouse Status!</p>\r\n    </ion-item>\r\n\r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer>\r\n    <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"addWarehouse()\">Save</ion-button>\r\n  </ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/warehouse/add-warehouse/add-warehouse-routing.module.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/warehouse/add-warehouse/add-warehouse-routing.module.ts ***!
          \*************************************************************************/
        /*! exports provided: AddWarehousePageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehousePageRoutingModule", function () { return AddWarehousePageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _add_warehouse_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-warehouse.page */ "./src/app/warehouse/add-warehouse/add-warehouse.page.ts");
            var routes = [
                {
                    path: '',
                    component: _add_warehouse_page__WEBPACK_IMPORTED_MODULE_3__["AddWarehousePage"]
                }
            ];
            var AddWarehousePageRoutingModule = /** @class */ (function () {
                function AddWarehousePageRoutingModule() {
                }
                return AddWarehousePageRoutingModule;
            }());
            AddWarehousePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AddWarehousePageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/warehouse/add-warehouse/add-warehouse.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/warehouse/add-warehouse/add-warehouse.module.ts ***!
          \*****************************************************************/
        /*! exports provided: AddWarehousePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehousePageModule", function () { return AddWarehousePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _add_warehouse_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-warehouse-routing.module */ "./src/app/warehouse/add-warehouse/add-warehouse-routing.module.ts");
            /* harmony import */ var _add_warehouse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-warehouse.page */ "./src/app/warehouse/add-warehouse/add-warehouse.page.ts");
            var AddWarehousePageModule = /** @class */ (function () {
                function AddWarehousePageModule() {
                }
                return AddWarehousePageModule;
            }());
            AddWarehousePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _add_warehouse_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddWarehousePageRoutingModule"]
                    ],
                    declarations: [_add_warehouse_page__WEBPACK_IMPORTED_MODULE_6__["AddWarehousePage"]]
                })
            ], AddWarehousePageModule);
            /***/ 
        }),
        /***/ "./src/app/warehouse/add-warehouse/add-warehouse.page.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/warehouse/add-warehouse/add-warehouse.page.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add {\n  padding-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvd2FyZWhvdXNlL2FkZC13YXJlaG91c2UvYWRkLXdhcmVob3VzZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dhcmVob3VzZS9hZGQtd2FyZWhvdXNlL2FkZC13YXJlaG91c2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS9hZGQtd2FyZWhvdXNlL2FkZC13YXJlaG91c2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmJ0bi1mb290ZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iLCIuYWRkIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmJ0bi1mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/warehouse/add-warehouse/add-warehouse.page.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/warehouse/add-warehouse/add-warehouse.page.ts ***!
          \***************************************************************/
        /*! exports provided: AddWarehousePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehousePage", function () { return AddWarehousePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            var AddWarehousePage = /** @class */ (function () {
                function AddWarehousePage(navCtrl, CommonService, router, statusBar, formBuilder) {
                    this.navCtrl = navCtrl;
                    this.CommonService = CommonService;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.formBuilder = formBuilder;
                    this.addwarehouse_fb();
                }
                AddWarehousePage.prototype.ionViewWillEnter = function () {
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                };
                AddWarehousePage.prototype.ngOnInit = function () {
                };
                AddWarehousePage.prototype.addwarehouse_fb = function () {
                    this.addwarehouse_form = this.formBuilder.group({
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                };
                AddWarehousePage.prototype.addWarehouse = function () {
                    var _this = this;
                    for (var v in this.addwarehouse_form.controls) {
                        this.addwarehouse_form.controls[v].markAsTouched();
                    }
                    if (this.addwarehouse_form.valid) {
                        this.CommonService.presentLoading();
                        this.warehouse_process = true;
                        var body = {
                            "name": this.addwarehouse_form.value.name,
                            "active": this.addwarehouse_form.value.active,
                        };
                        this.CommonService.warehouseAdd(body).subscribe(function (val) {
                            _this.warehouse_process = false;
                            _this.CommonService.dismissLoading();
                            if (val.status == 1) {
                                _this.CommonService.presentToastWithOptions(val.message);
                                _this.router.navigate(['/warehouse']);
                            }
                            else {
                                _this.CommonService.presentToastWithOptions(val.message);
                            }
                        }, function (err) {
                            _this.warehouse_process = false;
                            _this.CommonService.dismissLoading();
                            _this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                        });
                    }
                };
                AddWarehousePage.prototype.back = function () {
                    this.navCtrl.pop();
                };
                return AddWarehousePage;
            }());
            AddWarehousePage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            AddWarehousePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-warehouse',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-warehouse.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/add-warehouse/add-warehouse.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-warehouse.page.scss */ "./src/app/warehouse/add-warehouse/add-warehouse.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
            ], AddWarehousePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=warehouse-add-warehouse-add-warehouse-module-es2015.js.map
//# sourceMappingURL=warehouse-add-warehouse-add-warehouse-module-es5.js.map
//# sourceMappingURL=warehouse-add-warehouse-add-warehouse-module-es5.js.map