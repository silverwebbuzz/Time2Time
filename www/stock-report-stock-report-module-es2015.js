(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-report-stock-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock-report/stock-report.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock-report/stock-report.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Stock Report\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-label class=\"lbl-result\">About {{stock?.length}} results</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-stock\">\r\n\r\n  <div class=\"blue-background\">\r\n    <!-- <ion-button color=\"light\" class=\"btn-top\">\r\n      <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n      <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab btn-ext\"></fa-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n      <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab btn-ext\"></fa-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top\">\r\n      <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n    </ion-button> -->\r\n  </div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"stock?.length == 0\">\r\n      <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n    </div>\r\n\r\n  <ion-card class=\"card-main\" [ngClass]=\"{'isActive': item.availability == 2 }\"\r\n    *ngFor=\"let item of stock | slice:0:limit\">\r\n    <ion-row class=\"row-card\" (click)=\"expandItem(item)\">\r\n      <ion-col size=\"2\" class=\"col-img\">\r\n        <img src=\"../assets/image/placeholder-s.png\" class=\"img-prod\" />\r\n      </ion-col>\r\n      <ion-col size=\"8\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Brand</ion-label>\r\n        <ion-label class=\"col-value\" *ngFor=\"let cat of item.category_data;let isLast=last\">\r\n          {{cat.name}}{{isLast ? '' : ' ,'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"col-edit\">\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"10\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Refrence Number</ion-label>\r\n        <ion-label class=\"col-value\">{{item.name}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-card-content class=\"main-card-content\">\r\n      <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded\">\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Serial</ion-label>\r\n            <ion-label class=\"col-value\">{{item?.sku ? item?.sku : '-'}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Qty</ion-label>\r\n            <ion-label class=\"col-value\">{{item.qty}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n            <!-- <ion-button size=\"small\" fill=\"clear\" class=\"edit\">\r\n              <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n            </ion-button> -->\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Price</ion-label>\r\n            <ion-label class=\"col-value\">{{item.price}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Currency</ion-label>\r\n            <ion-label class=\"col-value\">{{item?.currency ? item?.currency : '-'}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n            <!-- <ion-button size=\"small\" fill=\"clear\" class=\"dlt\">\r\n              <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\r\n            </ion-button> -->\r\n          </ion-col>\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Loaction</ion-label>\r\n            <ion-label class=\"col-value\">{{item.store_name}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </app-expandable>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/stock-report/stock-report.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/stock-report/stock-report.module.ts ***!
  \*****************************************************/
/*! exports provided: StockReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockReportPageModule", function() { return StockReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-report.page */ "./src/app/stock-report/stock-report.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");









const routes = [
    {
        path: '',
        component: _stock_report_page__WEBPACK_IMPORTED_MODULE_6__["StockReportPage"]
    }
];
let StockReportPageModule = class StockReportPageModule {
};
StockReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__["ExpandableModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_stock_report_page__WEBPACK_IMPORTED_MODULE_6__["StockReportPage"]]
    })
], StockReportPageModule);



/***/ }),

/***/ "./src/app/stock-report/stock-report.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/stock-report/stock-report.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-stock {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .lbl-result {\n  display: block;\n  text-align: left;\n  padding-left: 16px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.card-main {\n  padding: 5px;\n  border-left: 5px solid var(--ion-color-success-shade);\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-img {\n  padding: 0px;\n}\n\n.card-main .col-img .img-prod {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.card-main .row-card {\n  padding-top: 2px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .col-dlt .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --border-radius: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.isActive {\n  border-left: 5px solid var(--ion-color-dark-shade) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvc3RvY2stcmVwb3J0L3N0b2NrLXJlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0b2NrLXJlcG9ydC9zdG9jay1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTVI7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFFSSxZQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpJO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtBQ01SOztBREZJO0VBQ0ksWUFBQTtBQ0lSOztBREZRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0laOztBREFJO0VBQ0ksZ0JBQUE7QUNFUjs7QURBUTtFQUNJLHdCQUFBO0FDRVo7O0FEQVk7RUFDSSxnQkFBQTtFQUVBLGVBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRGhCOztBRElZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0ZoQjs7QURXSTtFQUNJLGlCQUFBO0FDVFI7O0FEWVE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUlBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2JaOztBRGlCSTtFQUNJLFlBQUE7QUNmUjs7QURpQlE7RUFDSSwyQ0FBQTtFQUNBLG9CQUFBO0FDZlo7O0FEbUJJO0VBQ0ksWUFBQTtBQ2pCUjs7QURtQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDbEJaOztBRG9CUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUNuQlo7O0FEd0JBO0VBQ0ksNkRBQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9zdG9jay1yZXBvcnQvc3RvY2stcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXN0b2Nre1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFmOGY4O1xyXG59XHJcbi5idG4tdG9we1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNmVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMC42ZW07XHJcbiAgICBtYXJnaW46IDBweCAxN3B4O1xyXG59XHJcbi5idG4tZmFie1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4uYnRuLWV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYnRuLXRvcC1hZGR7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xyXG59XHJcbi5sYmwtdG9vbC1yZXN1bHR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIFxyXG4gICAgLmxibC1yZXN1bHR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbi5ibHVlLWJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmNhcmQtbWFpbntcclxuICAgIC8vYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSkgICA7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTI0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xyXG4gICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWltZ3tcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctcHJvZHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm93LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuXHJcbiAgICAgICAgLmNvbC1sYmx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuY29sLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmNvbC12YWx1ZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRlNGQ0ZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAuYmFkZ2Utc3RhdHVze1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuY29sLWVkaXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgLmJ0bi1lZGl0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgIC8vIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZGx0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgLmJ0bi1kbHR7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgICAuZWRpdHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kbHR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uaXNBY3RpdmV7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xyXG4gICAgLy8gY29sb3I6I2ZmZjtcclxuICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xyXG59IiwiLnBhZ2Utc3RvY2sge1xuICAtLWJhY2tncm91bmQ6ICNmYWY4Zjg7XG59XG5cbi5idG4tdG9wIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMC42ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xuICBtYXJnaW46IDBweCAxN3B4O1xufVxuXG4uYnRuLWZhYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmJ0bi1leHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG4tdG9wLWFkZCB7XG4gIC0tcGFkZGluZy1zdGFydDogMWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbn1cblxuLmxibC10b29sLXJlc3VsdCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmxibC10b29sLXJlc3VsdCAubGJsLXJlc3VsdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ibHVlLWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jYXJkLW1haW4ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNhcmQtbWFpbjpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xufVxuLmNhcmQtbWFpbiAuY29sLWltZyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLmNvbC1pbWcgLmltZy1wcm9kIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQge1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwge1xuICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCAuY29sLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwgLmNvbC12YWx1ZSB7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjNGU0ZDRkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQgLmJ0bi1lZGl0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWRsdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLmNvbC1kbHQgLmJ0bi1kbHQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQgLmVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAuZGx0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmlzQWN0aXZlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/stock-report/stock-report.page.ts":
/*!***************************************************!*\
  !*** ./src/app/stock-report/stock-report.page.ts ***!
  \***************************************************/
/*! exports provided: StockReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockReportPage", function() { return StockReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









let StockReportPage = class StockReportPage {
    constructor(CommonService, platform, statusBar, socialSharing) {
        this.CommonService = CommonService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.socialSharing = socialSharing;
        this.message = 'Check out the PDF!';
        this.url = 'http://google.com/';
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCopy"];
        this.faFileCsv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileCsv"];
        this.faFileExcel = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileExcel"];
        this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPrint"];
        this.resp = [];
        this.limit = 50;
    }
    Availability(val) {
        if (val == 1) {
            return 'Yes';
        }
        else {
            return 'No';
        }
    }
    ngOnInit() {
    }
    expandItem(item) {
        console.log("item", item);
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.stock.map(listItem => {
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
        let searchList = this.stock;
        console.log('SearchList', searchList);
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](searchList, function (x) {
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
                else if (x.qty.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.qty ? x.qty.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
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
        this.stock = searchList;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
        this.CommonService.presentLoading();
        this.CommonService.stocklist()
            .subscribe(resp => {
            this.resp = resp;
            this.stock = resp.data;
            console.log(this.stock);
            this.CommonService.dismissLoading();
        });
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 50;
            infiniteScroll.target.complete();
        }, 500);
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
StockReportPage.ctorParameters = () => [
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], StockReportPage.prototype, "infiniteScroll", void 0);
StockReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-report.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock-report/stock-report.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-report.page.scss */ "./src/app/stock-report/stock-report.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])
], StockReportPage);



/***/ })

}]);
//# sourceMappingURL=stock-report-stock-report-module-es2015.js.map