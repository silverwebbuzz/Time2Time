(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-edit-warehouse-edit-warehouse-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/edit-warehouse/edit-warehouse.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/edit-warehouse/edit-warehouse.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\" text-center>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"back()\" color=\"light\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title color=\"light\" class=\"head\">\r\n        Edit Warehouse\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding> \r\n\r\n      <form [formGroup]=\"editwarehouse_form\" autocomplete=\"off\">\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Warehouse Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editwarehouse_form.controls.name.hasError('required') && editwarehouse_form.controls.name.touched\">\r\n      <p class=\"content\">Please Enter Warehouse Name!</p>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Status</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"active\" placeholder=\"Select Status\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"1\" *ngIf=\"isActive\">Active</ion-select-option>\r\n        <ion-select-option value=\"2\">Inactive</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editwarehouse_form.controls.active.hasError('required') && editwarehouse_form.controls.active.touched\">\r\n      <p class=\"content\">Please Select Warehouse Status!</p>\r\n    </ion-item>\r\n\r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer>\r\n    <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"editWarehouse()\">Update</ion-button>\r\n  </ion-footer>");

/***/ }),

/***/ "./src/app/warehouse/edit-warehouse/edit-warehouse-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/warehouse/edit-warehouse/edit-warehouse-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditWarehousePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWarehousePageRoutingModule", function() { return EditWarehousePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_warehouse_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-warehouse.page */ "./src/app/warehouse/edit-warehouse/edit-warehouse.page.ts");




const routes = [
    {
        path: '',
        component: _edit_warehouse_page__WEBPACK_IMPORTED_MODULE_3__["EditWarehousePage"]
    }
];
let EditWarehousePageRoutingModule = class EditWarehousePageRoutingModule {
};
EditWarehousePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditWarehousePageRoutingModule);



/***/ }),

/***/ "./src/app/warehouse/edit-warehouse/edit-warehouse.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/warehouse/edit-warehouse/edit-warehouse.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditWarehousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWarehousePageModule", function() { return EditWarehousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_warehouse_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-warehouse-routing.module */ "./src/app/warehouse/edit-warehouse/edit-warehouse-routing.module.ts");
/* harmony import */ var _edit_warehouse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-warehouse.page */ "./src/app/warehouse/edit-warehouse/edit-warehouse.page.ts");







let EditWarehousePageModule = class EditWarehousePageModule {
};
EditWarehousePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_warehouse_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditWarehousePageRoutingModule"]
        ],
        declarations: [_edit_warehouse_page__WEBPACK_IMPORTED_MODULE_6__["EditWarehousePage"]]
    })
], EditWarehousePageModule);



/***/ }),

/***/ "./src/app/warehouse/edit-warehouse/edit-warehouse.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/warehouse/edit-warehouse/edit-warehouse.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add {\n  padding-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvd2FyZWhvdXNlL2VkaXQtd2FyZWhvdXNlL2VkaXQtd2FyZWhvdXNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2FyZWhvdXNlL2VkaXQtd2FyZWhvdXNlL2VkaXQtd2FyZWhvdXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC93YXJlaG91c2UvZWRpdC13YXJlaG91c2UvZWRpdC13YXJlaG91c2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLmJ0bi1mb290ZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0gIiwiLmFkZCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5idG4tZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/warehouse/edit-warehouse/edit-warehouse.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/warehouse/edit-warehouse/edit-warehouse.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditWarehousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWarehousePage", function() { return EditWarehousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");







let EditWarehousePage = class EditWarehousePage {
    constructor(navCtrl, formBuilder, CommonService, router, statusBar, route) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.route = route;
        this.edtwarehouse_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
    }
    isActive(val) {
        if (val == 1) {
            return 'Active';
        }
        else {
            return 'Inactive';
        }
    }
    ngOnInit() {
        let reqData = this.route.snapshot.queryParams;
        this.warehouseDetails(reqData);
    }
    edtwarehouse_fb() {
        this.editwarehouse_form = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            active: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    warehouseDetails(reqData) {
        this.CommonService.warehouseGet(reqData).subscribe(res => {
            this.warehouseData = res.data;
            console.log("::::::", this.warehouseData);
            this.editwarehouse_form.patchValue({
                name: this.warehouseData.name,
                active: this.warehouseData.active
            });
        }, error => {
        });
    }
    editWarehouse() {
        for (let v in this.editwarehouse_form.controls) {
            this.editwarehouse_form.controls[v].markAsTouched();
        }
        if (this.editwarehouse_form.valid) {
            this.CommonService.presentLoading();
            this.warehouse_process = true;
            const body = {
                "name": this.editwarehouse_form.value.name,
                "active": this.editwarehouse_form.value.active,
                "id": this.route.snapshot.queryParams.id,
            };
            this.CommonService.warehouseEdit(body).subscribe(val => {
                this.warehouse_process = false;
                this.CommonService.dismissLoading();
                if (val.status == 1) {
                    this.CommonService.dismissLoading();
                    this.CommonService.presentToastWithOptions(val.message);
                    this.router.navigate(['/warehouse']);
                }
                else {
                    this.CommonService.presentToastWithOptions(val.message);
                }
            }, err => {
                this.warehouse_process = false;
                this.CommonService.dismissLoading();
                this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    back() {
        this.navCtrl.pop();
    }
};
EditWarehousePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
EditWarehousePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-warehouse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-warehouse.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/edit-warehouse/edit-warehouse.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-warehouse.page.scss */ "./src/app/warehouse/edit-warehouse/edit-warehouse.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], EditWarehousePage);



/***/ })

}]);
//# sourceMappingURL=warehouse-edit-warehouse-edit-warehouse-module-es2015.js.map