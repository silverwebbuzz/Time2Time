(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-warehouse-transfer-warehouse-transfer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Transfer Products\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"light\" placeholder=\"Search...\"  (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\r\n    <!-- <ion-searchbar color=\"light\" placeholder=\"Search...\"  [(ngModel)]=\"searchtext\"></ion-searchbar> -->\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-label class=\"lbl-result\">About {{transfer?.length}} results</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-warehouse\">\r\n\r\n  <div class=\"blue-background\">\r\n    <!-- <ion-button color=\"light\" class=\"btn-top\">\r\n      <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n      <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab btn-ext\"></fa-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n      <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab btn-ext\"></fa-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top\">\r\n      <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n    </ion-button> -->\r\n  </div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"transfer?.length == 0\">\r\n      <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n    </div>\r\n\r\n  <ion-card class=\"card-main\" [ngClass]=\"{'isActive': item.availability == 2 }\"\r\n    *ngFor=\"let item of transfer | slice:0:limit;\">\r\n    <ion-row class=\"row-card\" (click)=\"expandItem(item)\">\r\n      <ion-col size=\"2\" class=\"col-img\">\r\n          <img *ngIf=\"!item.image\" src=\"{{user_not_found_place_holder}}\" class=\"img-prod\"/>\r\n          <img *ngIf=\"item.image\" src=\"{{imageUrl}}{{item.image}}\" class=\"img-prod\"/>\r\n      </ion-col>\r\n      <ion-col size=\"8\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Brand</ion-label>\r\n        <ion-label class=\"col-value\" *ngFor=\"let cat of item.category_data;let isLast=last\">{{cat.name}}{{isLast ? '' : ' ,'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"col-edit\">\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"10\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Refrence Number</ion-label>\r\n        <ion-label class=\"col-value\">{{item.name}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-card-content class=\"main-card-content\">\r\n      <app-expandable [expandHeight]=\"100\" [expanded]=\"item.expanded\">\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Price</ion-label>\r\n            <ion-label class=\"col-value\">{{item.price}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Qty</ion-label>\r\n            <ion-label class=\"col-value\">{{item.qty}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n            <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\" (click)=\"edit(item.id)\">\r\n              <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col> \r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Warehouse</ion-label>\r\n            <ion-label class=\"col-value\">{{item.store_name}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </app-expandable>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/warehouse/warehouse-transfer/warehouse-transfer.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/warehouse/warehouse-transfer/warehouse-transfer.module.ts ***!
  \***************************************************************************/
/*! exports provided: WarehouseTransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseTransferPageModule", function() { return WarehouseTransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _warehouse_transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warehouse-transfer.page */ "./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");









const routes = [
    {
        path: '',
        component: _warehouse_transfer_page__WEBPACK_IMPORTED_MODULE_6__["WarehouseTransferPage"]
    }
];
let WarehouseTransferPageModule = class WarehouseTransferPageModule {
};
WarehouseTransferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__["ExpandableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_warehouse_transfer_page__WEBPACK_IMPORTED_MODULE_6__["WarehouseTransferPage"]]
    })
], WarehouseTransferPageModule);



/***/ }),

/***/ "./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-warehouse {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .lbl-result {\n  display: block;\n  text-align: left;\n  padding-left: 16px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.card-main {\n  padding: 5px;\n  border-left: 5px solid var(--ion-color-success-shade);\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-img {\n  padding: 0px;\n}\n\n.card-main .col-img .img-prod {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.card-main .row-card {\n  padding-top: 2px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .col-dlt .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --border-radius: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.isActive {\n  border-left: 5px solid var(--ion-color-dark-shade) !important;\n}\n\n.btn-footer {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvd2FyZWhvdXNlL3dhcmVob3VzZS10cmFuc2Zlci93YXJlaG91c2UtdHJhbnNmZXIucGFnZS5zY3NzIiwic3JjL2FwcC93YXJlaG91c2Uvd2FyZWhvdXNlLXRyYW5zZmVyL3dhcmVob3VzZS10cmFuc2Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNPUjs7QURKQTtFQUVJLFlBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkk7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0FDTVI7O0FESEk7RUFDSSxZQUFBO0FDS1I7O0FESFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDS1o7O0FEREk7RUFDSSxnQkFBQTtBQ0dSOztBRERRO0VBQ0ksd0JBQUE7QUNHWjs7QUREWTtFQUNJLGdCQUFBO0VBRUEsZUFBQTtFQUdBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBaEI7O0FER1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDRGhCOztBRFVJO0VBQ0ksaUJBQUE7QUNSUjs7QURXUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBSUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWlo7O0FEZ0JJO0VBQ0ksWUFBQTtBQ2RSOztBRGdCUTtFQUNJLDJDQUFBO0VBQ0Esb0JBQUE7QUNkWjs7QURrQkk7RUFDSSxZQUFBO0FDaEJSOztBRGtCUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUNqQlo7O0FEc0JBO0VBQ0ksNkRBQUE7QUNuQko7O0FEd0JBO0VBQ0ksV0FBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL3dhcmVob3VzZS93YXJlaG91c2UtdHJhbnNmZXIvd2FyZWhvdXNlLXRyYW5zZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdhcmVob3VzZXtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcclxufVxyXG4uYnRuLXRvcHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xyXG4gICAgbWFyZ2luOiAwcHggMTdweDtcclxufVxyXG4uYnRuLWZhYntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmJ0bi1leHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bi10b3AtYWRke1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcclxufVxyXG4uYmx1ZS1iYWNrZ3JvdW5ke1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5sYmwtdG9vbC1yZXN1bHR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIFxyXG4gICAgLmxibC1yZXN1bHR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbi5jYXJkLW1haW57XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpICAgO1xyXG4gICAgbWFyZ2luOiAxMHB4OyBcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBtYXJnaW4tdG9wOi0yNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IC00cHggI2NjYztcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWltZ3tcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctcHJvZHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm93LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuXHJcbiAgICAgICAgLmNvbC1sYmx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuY29sLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmNvbC12YWx1ZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRlNGQ0ZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAuYmFkZ2Utc3RhdHVze1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuY29sLWVkaXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgLmJ0bi1lZGl0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgIC8vIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZGx0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgLmJ0bi1kbHR7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgICAuZWRpdHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLmlzQWN0aXZle1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcclxuICAgIC8vIGNvbG9yOiNmZmY7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1mb290ZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSIsIi5wYWdlLXdhcmVob3VzZSB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcbn1cblxuLmJ0bi10b3Age1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC42ZW07XG4gIG1hcmdpbjogMHB4IDE3cHg7XG59XG5cbi5idG4tZmFiIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uYnRuLWV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bi10b3AtYWRkIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubGJsLXRvb2wtcmVzdWx0IHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59XG4ubGJsLXRvb2wtcmVzdWx0IC5sYmwtcmVzdWx0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNhcmQtbWFpbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2FyZC1tYWluOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAtNHB4ICNjY2M7XG59XG4uY2FyZC1tYWluIC5jb2wtaW1nIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWltZyAuaW1nLXByb2Qge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCB7XG4gIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIC5jb2wtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCAuY29sLXZhbHVlIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgY29sb3I6ICM0ZTRkNGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG4uY2FyZC1tYWluIC5jb2wtZGx0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWRsdCAuYnRuLWRsdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAuZWRpdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmlzQWN0aXZlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1mb290ZXIge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.ts ***!
  \*************************************************************************/
/*! exports provided: WarehouseTransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseTransferPage", function() { return WarehouseTransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/config */ "./src/config.ts");













let WarehouseTransferPage = class WarehouseTransferPage {
    constructor(router, CommonService, platform, statusBar, storage, socialSharing) {
        this.router = router;
        this.CommonService = CommonService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.message = 'Check out the PDF!';
        this.url = 'http://google.com/';
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/image/placeholder-s.png';
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCopy"];
        this.faFileCsv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileCsv"];
        this.faFileExcel = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileExcel"];
        this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPrint"];
        this.transfer = [];
        this.resp = [];
        this.list = [];
        this.count = 0;
        this.limit = 50;
        this.catagory = [];
        this.checkToken();
    }
    expandItem(item) {
        console.log("item", item);
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.transfer.map(listItem => {
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
    isActive(val) {
        if (val == 1) {
            return 'Active';
        }
        else {
            return 'Inactive';
        }
    }
    searchBar(value) {
        let searchList = this.transfer;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](searchList, function (x) {
                if (x.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.category_data[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.category_data[0].name ? x.category_data[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.price.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.price ? x.price.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.qty.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.qty ? x.qty.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.category_data[0].active.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.category_data[0].active ? x.category_data[0].active.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase()) > -1) {
                    return x.store_name ? String(x.store_name).toLowerCase().indexOf(String(value).toLowerCase()) > -1 : null;
                }
            });
        }
        else {
            searchList = this.resp.data;
        }
        this.transfer = searchList;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
        this.CommonService.presentLoading();
        this.CommonService.ware_Transfer_list()
            .subscribe(resp => {
            this.resp = resp;
            this.transfer = resp.data;
            console.log(this.transfer);
            this.CommonService.dismissLoading();
        });
    }
    checkToken() {
        return this.storage.get(src_config__WEBPACK_IMPORTED_MODULE_12__["USER_DETAILS"]).then(res => {
            if (res) {
                this.permission = res.userPermission.group_name;
                console.log("::::::", res.userPermission.group_name);
            }
        });
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 50;
            infiniteScroll.target.complete();
        }, 500);
    }
    edit(id) {
        console.log("idddd", id);
        this.router.navigate(['/edit-product'], { queryParams: { id: id } });
    }
    sharePicker() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.platform.ready()
                .then(() => {
                this.socialSharing.share(this.message, null, null, this.url)
                    .then((data) => {
                    console.log('Shared via SharePicker');
                }).catch((err) => {
                    console.log('Was not shared via SharePicker');
                });
            });
        });
    }
};
WarehouseTransferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], WarehouseTransferPage.prototype, "infiniteScroll", void 0);
WarehouseTransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warehouse-transfer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./warehouse-transfer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./warehouse-transfer.page.scss */ "./src/app/warehouse/warehouse-transfer/warehouse-transfer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]])
], WarehouseTransferPage);



/***/ })

}]);
//# sourceMappingURL=warehouse-warehouse-transfer-warehouse-transfer-module-es2015.js.map