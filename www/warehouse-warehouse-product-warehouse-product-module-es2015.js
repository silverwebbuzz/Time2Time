(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-warehouse-product-warehouse-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse-product/warehouse-product.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse-product/warehouse-product.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">\n      Warehouse Products\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar id=\"searchValue\" color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\">\n    </ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\n    <ion-row class=\"bg-row\">\n      <ion-col size=\"12\" class=\"bg-col\">\n        <ion-label class=\"lbl-result\">About {{warehouseProd?.length}} Stock</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-warehouseProducts\">\n\n  <div class=\"blue-background\"></div>\n\n  <div class=\"isEmpty\" *ngIf=\"warehouseProd?.length < 1\">\n    <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\n  </div>\n\n  <ion-card class=\"card-main\" [ngClass]=\"{'isActive': item.availability == 2 }\"\n    *ngFor=\"let item of warehouseProd | slice:0:limit\">\n    <ion-row class=\"row-card\" (click)=\"expandItem(item)\">\n      <ion-col size=\"2\" class=\"col-img\">\n        <img *ngIf=\"!item.image\" src=\"{{user_not_found_place_holder}}\" class=\"img-prod\" />\n        <img *ngIf=\"item.image\" src=\"{{imageUrl}}{{item.image}}\" class=\"img-prod\" />\n      </ion-col>\n      <ion-col size=\"8\" class=\"col-lbl\">\n        <ion-label class=\"col-title\">Brand</ion-label>\n        <ion-label class=\"col-value\" *ngFor=\"let cat of item.category_data;let isLast=last\">\n          {{cat.name}}{{isLast ? '' : ' ,'}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col-edit\">\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\n          <ion-icon name=\"arrow-down\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-card\">\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"10\" class=\"col-lbl\">\n        <ion-label class=\"col-title\">Refrence Number</ion-label>\n        <ion-label class=\"col-value\">{{item.name}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ng-container *ngIf=\"item.expanded\">\n      <ion-card-content class=\"main-card-content\">\n        <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded\">\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n            </ion-col>\n            <ion-col size=\"10\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Serial</ion-label>\n              <ion-label class=\"col-value\">{{item?.sku ? item?.sku : '-'}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n              <!-- <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\" (click)=\"edit(item.id)\">\n              <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n            </ion-button> -->\n            </ion-col>\n            <ion-col size=\"5\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Currency</ion-label>\n              <ion-label class=\"col-value\">{{item?.currency ? item?.currency : '-'}}</ion-label>\n            </ion-col>\n            <ion-col size=\"5\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Price</ion-label>\n              <ion-label class=\"col-value\">{{item?.price ? item?.price : '-'}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n              <!-- <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\"\n                (click)=\"edit(item.id)\">\n                <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n              </ion-button> -->\n            </ion-col>\n            <ion-col size=\"10\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Status</ion-label>\n              <ion-label class=\"col-value\">\n                <ng-container *ngIf=\"item.qty == 0\">In Stock</ng-container>\n                <ng-container *ngIf=\"item.qty == 1\">Sold</ng-container>\n                <ng-container *ngIf=\"item.qty == 2\">Consignment</ng-container>\n                <ng-container *ngIf=\"item.qty == 3\">For Reparing</ng-container>\n                <ng-container *ngIf=\"item.qty == 4\">Mr Rameez Personal Watch</ng-container>\n                <ng-container *ngIf=\"item.qty == 5\">Return to Brand</ng-container>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n              <!-- <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"dlt\"\n                (click)=\"delete(item.id)\">\n                <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\n              </ion-button> -->\n            </ion-col>\n            <ion-col size=\"10\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Warehouse</ion-label>\n              <ion-label class=\"col-value\">{{item?.store_name ? item?.store_name : '-'}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </app-expandable>\n      </ion-card-content>\n    </ng-container>\n  </ion-card>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/warehouse/warehouse-product/warehouse-product-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/warehouse/warehouse-product/warehouse-product-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: WarehouseProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductPageRoutingModule", function() { return WarehouseProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _warehouse_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-product.page */ "./src/app/warehouse/warehouse-product/warehouse-product.page.ts");




const routes = [
    {
        path: '',
        component: _warehouse_product_page__WEBPACK_IMPORTED_MODULE_3__["WarehouseProductPage"]
    }
];
let WarehouseProductPageRoutingModule = class WarehouseProductPageRoutingModule {
};
WarehouseProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WarehouseProductPageRoutingModule);



/***/ }),

/***/ "./src/app/warehouse/warehouse-product/warehouse-product.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/warehouse/warehouse-product/warehouse-product.module.ts ***!
  \*************************************************************************/
/*! exports provided: WarehouseProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductPageModule", function() { return WarehouseProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _warehouse_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse-product-routing.module */ "./src/app/warehouse/warehouse-product/warehouse-product-routing.module.ts");
/* harmony import */ var _warehouse_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warehouse-product.page */ "./src/app/warehouse/warehouse-product/warehouse-product.page.ts");
/* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");








let WarehouseProductPageModule = class WarehouseProductPageModule {
};
WarehouseProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_7__["ExpandableModule"],
            _warehouse_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["WarehouseProductPageRoutingModule"]
        ],
        declarations: [_warehouse_product_page__WEBPACK_IMPORTED_MODULE_6__["WarehouseProductPage"]]
    })
], WarehouseProductPageModule);



/***/ }),

/***/ "./src/app/warehouse/warehouse-product/warehouse-product.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/warehouse/warehouse-product/warehouse-product.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-filter {\n  font-size: 20px;\n  margin-right: 8px;\n}\n\n.page-warehouseProducts {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .bg-row {\n  margin: 0px 16px;\n}\n\n.lbl-tool-result .bg-row .bg-col {\n  padding: 0px;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-result {\n  display: block;\n  text-align: left;\n  color: #fff;\n  font-size: 18px;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-btn {\n  margin: 0px;\n  --background-activated: none;\n  border: 1px solid #ccc;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-btn .lbl-icon {\n  font-size: 24px;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.add-up {\n  line-height: 1.2;\n  text-align: right;\n}\n\n.card-main {\n  padding: 5px;\n  border-left: 5px solid var(--ion-color-success-shade);\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-img {\n  padding: 0px;\n}\n\n.card-main .col-img .img-prod {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.card-main .row-card {\n  padding-top: 2px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-edit .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --background-activated: var(--ion-color-danger-tint);\n  --border-radius: 0px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.isActive {\n  border-left: 5px solid var(--ion-color-dark-shade) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvd2FyZWhvdXNlL3dhcmVob3VzZS1wcm9kdWN0L3dhcmVob3VzZS1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2FyZWhvdXNlL3dhcmVob3VzZS1wcm9kdWN0L3dhcmVob3VzZS1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEk7RUFDSSxnQkFBQTtBQ09SOztBRExRO0VBQ0ksWUFBQTtBQ09aOztBRExZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUNNaEI7O0FERlk7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0loQjs7QURGZ0I7RUFDSSxlQUFBO0FDSXBCOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURESTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7QUNHUjs7QURBSTtFQUNJLFlBQUE7QUNFUjs7QURBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFWjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FERVE7RUFDSSx3QkFBQTtBQ0FaOztBREVZO0VBQ0ksZ0JBQUE7RUFFQSxlQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hoQjs7QURNWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNKaEI7O0FEYUk7RUFFSSxpQkFBQTtBQ1pSOztBRGNRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFJQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNmWjs7QURpQlE7RUFDSSwyQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7QUNmWjs7QURtQkk7RUFDSSxZQUFBO0FDakJSOztBRHFCSTtFQUNJLFlBQUE7QUNuQlI7O0FEcUJRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ3BCWjs7QURzQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDckJaOztBRDZCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUMxQko7O0FENEJBO0VBQ0ksNkRBQUE7QUN6QkoiLCJmaWxlIjoic3JjL2FwcC93YXJlaG91c2Uvd2FyZWhvdXNlLXByb2R1Y3Qvd2FyZWhvdXNlLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1maWx0ZXJ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnBhZ2Utd2FyZWhvdXNlUHJvZHVjdHN7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFmOGY4O1xufVxuLmJ0bi10b3B7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAwLjZlbTtcbiAgICBtYXJnaW46IDBweCAxN3B4O1xufVxuLmJ0bi1mYWJ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDI2cHg7XG59XG4uYnRuLWV4dHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uYnRuLXRvcC1hZGR7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG59XG4ubGJsLXRvb2wtcmVzdWx0e1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIFxuICAgIC5iZy1yb3d7XG4gICAgICAgIG1hcmdpbjogMHB4IDE2cHg7XG5cbiAgICAgICAgLmJnLWNvbHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgICAgICAgLmxibC1yZXN1bHR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIC8vcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmwtYnRue1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblxuICAgICAgICAgICAgICAgIC5sYmwtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5ibHVlLWJhY2tncm91bmR7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuLmFkZC11cHtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtbWFpbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSkgICA7XG4gICAgbWFyZ2luOiAxMHB4OyBcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NjYztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgIG1hcmdpbi10b3A6LTI0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IC00cHggI2NjYztcbiAgICB9XG5cbiAgICAuY29sLWltZ3tcbiAgICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAgIC5pbWctcHJvZHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJvdy1jYXJke1xuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuXG4gICAgICAgIC5jb2wtbGJse1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xuICAgIFxuICAgICAgICAgICAgLmNvbC10aXRsZXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgICAgICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmNvbC12YWx1ZXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGU0ZDRkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC5iYWRnZS1zdGF0dXN7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbiAgICAvLyB9XG5cbiAgICAuY29sLWVkaXR7XG4gICAgICAgIC8vcGFkZGluZzogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICAuYnRuLWVkaXR7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgICAgICAvLyAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWRsdHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQpO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmNvbC1kbHR7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgICBcbiAgICB9XG4gICAgLm1haW4tY2FyZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgLmVkaXR7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRsdHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4vLyAuYnRuLWZhYntcbi8vICAgICBmb250LXNpemU6IDIycHg7XG4vLyB9XG4uYnRuLWZvb3RlcntcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn1cbi5pc0FjdGl2ZXtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xuICAgIC8vIGNvbG9yOiNmZmY7XG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpICFpbXBvcnRhbnQ7XG59IiwiLmJ0bi1maWx0ZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ucGFnZS13YXJlaG91c2VQcm9kdWN0cyB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcbn1cblxuLmJ0bi10b3Age1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC42ZW07XG4gIG1hcmdpbjogMHB4IDE3cHg7XG59XG5cbi5idG4tZmFiIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uYnRuLWV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bi10b3AtYWRkIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xufVxuXG4ubGJsLXRvb2wtcmVzdWx0IHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59XG4ubGJsLXRvb2wtcmVzdWx0IC5iZy1yb3cge1xuICBtYXJnaW46IDBweCAxNnB4O1xufVxuLmxibC10b29sLXJlc3VsdCAuYmctcm93IC5iZy1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ubGJsLXRvb2wtcmVzdWx0IC5iZy1yb3cgLmJnLWNvbCAubGJsLXJlc3VsdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmxibC10b29sLXJlc3VsdCAuYmctcm93IC5iZy1jb2wgLmxibC1idG4ge1xuICBtYXJnaW46IDBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi5sYmwtdG9vbC1yZXN1bHQgLmJnLXJvdyAuYmctY29sIC5sYmwtYnRuIC5sYmwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJsdWUtYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmFkZC11cCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2FyZC1tYWluIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NjYztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jYXJkLW1haW46bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IC00cHggI2NjYztcbn1cbi5jYXJkLW1haW4gLmNvbC1pbWcge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZC1tYWluIC5jb2wtaW1nIC5pbWctcHJvZCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIHtcbiAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwgLmNvbC10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIC5jb2wtdmFsdWUge1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogIzRlNGQ0ZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IC5idG4tZWRpdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IC5idG4tZGx0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uY2FyZC1tYWluIC5jb2wtZGx0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAuZWRpdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IC5kbHQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5pc0FjdGl2ZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/warehouse/warehouse-product/warehouse-product.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/warehouse/warehouse-product/warehouse-product.page.ts ***!
  \***********************************************************************/
/*! exports provided: WarehouseProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductPage", function() { return WarehouseProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let WarehouseProductPage = class WarehouseProductPage {
    constructor(navCtrl, CommonService, router, statusBar, route) {
        this.navCtrl = navCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.route = route;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/image/placeholder-s.png';
        this.limit = 50;
        this.warehouseProducts = [];
        this.warehouseProd = [];
        this.resp = [];
        this.route.queryParams.subscribe(params => {
            console.log("testing", params.warehouseid);
            this.warehouseid = params.warehouseid;
        });
    }
    ngOnInit() {
    }
    back() {
        console.log('back');
        this.navCtrl.pop();
    }
    expandItem(item) {
        console.log("item", item);
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.warehouseProd.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    searchBar(value) {
        console.log("value", value);
        let searchList = this.warehouseProd;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](searchList, function (x) {
                if (x.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.category_data[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.category_data[0].name ? x.category_data[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.sku.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.sku ? x.sku.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.price.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.price ? x.price.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.qty_name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.qty_name ? x.qty_name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.category_data[0].active.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.category_data[0].active ? x.category_data[0].active.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.currency.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.currency ? x.currency.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase()) > -1) {
                    return x.store_name ? String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase()) > -1 : null;
                }
            });
        }
        else {
            searchList = this.resp.data;
        }
        this.warehouseProd = searchList;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
        this.CommonService.presentLoading();
        this.CommonService.warehouseProducts(this.warehouseid)
            .subscribe(resp => {
            console.log("brandData", resp);
            this.resp = resp;
            this.warehouseProd = resp.data;
            console.log("brandProd", this.warehouseProd);
            this.CommonService.dismissLoading();
        });
    }
    isActive(val) {
        if (val == 1) {
            return 'Active';
        }
        else {
            return 'Inactive';
        }
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 50;
            infiniteScroll.target.complete();
        }, 500);
    }
};
WarehouseProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], WarehouseProductPage.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportContent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], WarehouseProductPage.prototype, "reportContent", void 0);
WarehouseProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warehouse-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./warehouse-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse-product/warehouse-product.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./warehouse-product.page.scss */ "./src/app/warehouse/warehouse-product/warehouse-product.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], WarehouseProductPage);



/***/ })

}]);
//# sourceMappingURL=warehouse-warehouse-product-warehouse-product-module-es2015.js.map