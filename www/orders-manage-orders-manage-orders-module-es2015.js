(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-manage-orders-manage-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/manage-orders/manage-orders.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/manage-orders/manage-orders.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Manage Orders\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-label class=\"lbl-result\">About {{order?.length}} results</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-orders\">\r\n\r\n  <div class=\"blue-background\"></div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"order?.length == 0\">\r\n      <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n    </div>\r\n\r\n  <ion-card class=\"card-main\" *ngFor=\"let item of order | slice:0:limit\">\r\n    <ion-row class=\"row-card\" (click)=\"expandItem(item)\">\r\n      <ion-col size=\"10\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Bill no</ion-label>\r\n        <ion-label class=\"col-value\">{{item.bill_no}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"col-edit\">\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-card-content class=\"main-card-content\">\r\n      <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded\">\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Client Name</ion-label>\r\n            <ion-label class=\"col-value\">{{item.customer_name}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Client Phone</ion-label>\r\n            <ion-label class=\"col-value\">{{item.customer_phone}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"col-lbl add\">\r\n            <!-- <ion-button size=\"small\" fill=\"clear\" class=\"print\">\r\n              <ion-icon name=\"print\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n            </ion-button> -->\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"6\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Total Products</ion-label>\r\n            <ion-label class=\"col-value\">{{item.total_product}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Total Amount</ion-label>\r\n            <ion-label class=\"col-value\">{{item.net_amount}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"col-lbl add\">\r\n            <ion-button  [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\" (click)=\"edit(item.id)\">\r\n              <ion-icon name=\"create\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Date Time</ion-label>\r\n            <ion-label class=\"col-value\" >{{myDate | date:'dd-MM-yyyy hh:mm a'}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"col-lbl add\">\r\n            <ion-button  [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"delete(item.id)\">\r\n              <ion-icon name=\"trash\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </app-expandable>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button [hidden]=\"permission == 'client1'\" expand=\"full\" class=\"btn-footer\" routerLink=\"/add-order\">\r\n    Add Order\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/orders/manage-orders/manage-orders.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/orders/manage-orders/manage-orders.module.ts ***!
  \**************************************************************/
/*! exports provided: ManageOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrdersPageModule", function() { return ManageOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-orders.page */ "./src/app/orders/manage-orders/manage-orders.page.ts");
/* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");








const routes = [
    {
        path: '',
        component: _manage_orders_page__WEBPACK_IMPORTED_MODULE_6__["ManageOrdersPage"]
    }
];
let ManageOrdersPageModule = class ManageOrdersPageModule {
};
ManageOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_7__["ExpandableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manage_orders_page__WEBPACK_IMPORTED_MODULE_6__["ManageOrdersPage"]]
    })
], ManageOrdersPageModule);



/***/ }),

/***/ "./src/app/orders/manage-orders/manage-orders.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/orders/manage-orders/manage-orders.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-orders {\n  --background: #faf8f8;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .lbl-result {\n  display: block;\n  text-align: left;\n  padding-left: 16px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.card-main {\n  padding: 5px;\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .row-card {\n  padding-top: 2px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-edit .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --background-activated: var(--ion-color-danger-tint);\n  --border-radius: 0px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .print {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-medium-shade);\n  --color-activated: var(--ion-color-medium);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.add {\n  text-align: right;\n}\n\n.bottom-spc {\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvb3JkZXJzL21hbmFnZS1vcmRlcnMvbWFuYWdlLW9yZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVycy9tYW5hZ2Utb3JkZXJzL21hbmFnZS1vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREE7RUFFSSxZQUFBO0VBRUEsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBSTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7QUNFUjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FEQ1E7RUFDSSx3QkFBQTtBQ0NaOztBRENZO0VBQ0ksZ0JBQUE7RUFFQSxlQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZoQjs7QURLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNIaEI7O0FEWUk7RUFFSSxpQkFBQTtBQ1hSOztBRGFRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFJQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNkWjs7QURnQlE7RUFDSSwyQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7QUNkWjs7QURrQkk7RUFDSSxZQUFBO0FDaEJSOztBRG9CSTtFQUNJLFlBQUE7QUNsQlI7O0FEb0JRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ25CWjs7QURxQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDcEJaOztBRHNCUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUNyQlo7O0FEMkJBO0VBQ0ksaUJBQUE7QUN4Qko7O0FEMEJBO0VBQ0ksOEJBQUE7QUN2QkoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvbWFuYWdlLW9yZGVycy9tYW5hZ2Utb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW9yZGVyc3tcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcclxufVxyXG4ubGJsLXRvb2wtcmVzdWx0e1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBcclxuICAgIC5sYmwtcmVzdWx0e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG4uYmx1ZS1iYWNrZ3JvdW5ke1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcbi5jYXJkLW1haW57XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIC8vYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSkgICA7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTI0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3ctY2FyZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG5cclxuICAgICAgICAuY29sLWxibHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5jb2wtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY29sLXZhbHVle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGU0ZDRkO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC5iYWRnZS1zdGF0dXN7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC5jb2wtZWRpdHtcclxuICAgICAgICAvL3BhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgIC5idG4tZWRpdHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgICAgICAgICAvLyAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZGx0e1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQpO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZGx0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWFpbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgICAuZWRpdHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kbHR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaW50e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5hZGR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYm90dG9tLXNwY3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufSIsIi5wYWdlLW9yZGVycyB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcbn1cblxuLmxibC10b29sLXJlc3VsdCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmxibC10b29sLXJlc3VsdCAubGJsLXJlc3VsdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ibHVlLWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5idG4tZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn1cblxuLmNhcmQtbWFpbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NjYztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jYXJkLW1haW46bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IC00cHggI2NjYztcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIHtcbiAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwgLmNvbC10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIC5jb2wtdmFsdWUge1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogIzRlNGQ0ZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IC5idG4tZWRpdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IC5idG4tZGx0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uY2FyZC1tYWluIC5jb2wtZGx0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAuZWRpdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IC5kbHQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQgLnByaW50IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmFkZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYm90dG9tLXNwYyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/orders/manage-orders/manage-orders.page.ts":
/*!************************************************************!*\
  !*** ./src/app/orders/manage-orders/manage-orders.page.ts ***!
  \************************************************************/
/*! exports provided: ManageOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrdersPage", function() { return ManageOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/config */ "./src/config.ts");











let ManageOrdersPage = class ManageOrdersPage {
    constructor(alertCtrl, CommonService, router, platform, statusBar, storage, socialSharing) {
        this.alertCtrl = alertCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.platform = platform;
        this.statusBar = statusBar;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.myDate = new Date().toISOString();
        this.message = 'Check out the PDF!';
        this.url = 'http://google.com/';
        this.limit = 50;
        this.resp = [];
        this.checkToken();
    }
    ngOnInit() {
    }
    checkToken() {
        return this.storage.get(src_config__WEBPACK_IMPORTED_MODULE_9__["USER_DETAILS"]).then(res => {
            if (res) {
                this.permission = res.userPermission.group_name;
                console.log("::::::", res.userPermission.group_name);
            }
        });
    }
    searchBar(value) {
        let searchList = this.order;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](searchList, function (x) {
                x.total_product = x.total_product.toString();
                if (x.bill_no.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.bill_no ? x.bill_no.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.customer_name ? x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.customer_phone.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.customer_phone ? x.customer_phone.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.net_amount.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.net_amount ? x.net_amount.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.total_product.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.total_product ? x.total_product.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
            });
        }
        else {
            searchList = this.resp.orderList;
        }
        this.order = searchList;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
        this.CommonService.presentLoading();
        this.CommonService.orderList()
            .subscribe(resp => {
            this.resp = resp;
            this.order = resp.orderList;
            console.log(this.order);
            this.CommonService.dismissLoading();
        });
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.order.map(listItem => {
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
    edit(id) {
        this.router.navigate(['/edit-order'], { queryParams: { id: id } });
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 50;
            infiniteScroll.target.complete();
        }, 500);
    }
    delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let params = id;
            const alert = yield this.alertCtrl.create({
                header: 'Remove Order',
                message: 'Do you really want to remove?',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.CommonService.orderDelete(params)
                                .subscribe(resp => {
                                this.order = this.order.filter(val => val.id !== params);
                            });
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
ManageOrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], ManageOrdersPage.prototype, "infiniteScroll", void 0);
ManageOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/manage-orders/manage-orders.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-orders.page.scss */ "./src/app/orders/manage-orders/manage-orders.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
], ManageOrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-manage-orders-manage-orders-module-es2015.js.map