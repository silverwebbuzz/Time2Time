(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-warehouse-warehouse-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse/warehouse.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse/warehouse.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Manage Warehouse\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-label class=\"lbl-result\">About {{warehouse?.length}} results</ion-label>\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content class=\"page-warehouse\">\r\n\r\n  <div class=\"blue-background\">\r\n    <!-- <ion-button color=\"light\" class=\"btn-top\">\r\n          <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n          <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n          <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top\">\r\n          <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button> -->\r\n  </div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"warehouse?.length == 0\">\r\n    <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n  </div>\r\n\r\n  <!-- <ion-card class=\"card-main\" *ngFor=\"let opt of warehouse | slice:0:limit\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"col-title\">Warehouse Name</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{opt.name }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"col-title\">Status</ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-badge class=\"badge-status\">{{isActive(opt.active)}}</ion-badge>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"6\" class=\"col-title\">\r\n          Action\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"col-edit\">\r\n            <ion-button size=\"small\" class=\"btn-edit\" (click)=\"edit(opt.id)\">\r\n                <ion-icon name=\"create\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n              </ion-button>\r\n          <ion-button size=\"small\" class=\"btn-dlt\" (click)=\"delete(opt.id)\">\r\n            <ion-icon name=\"trash\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  </ion-card> -->\r\n\r\n  <ion-card class=\"card-main\" [ngClass]=\"{'isActive': opt.active == 2 }\" *ngFor=\"let opt of warehouse | slice:0:limit;\">\r\n    <ion-row>\r\n      <ion-col size=\"7\" (click)=\"warehouseProducts(opt.id)\">\r\n        <ion-label class=\"col-title\">Warehouse name</ion-label>\r\n        <ion-label class=\"col-value\">{{opt.name}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-label class=\"col-title spc\">Stock</ion-label>\r\n        <ion-label class=\"col-value spc\">{{opt.total_stock}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"col-edit\">\r\n        <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"btn-edit\"\r\n          (click)=\"edit(opt.id)\">\r\n          <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"btn-dlt\"\r\n          (click)=\"delete(opt.id)\">\r\n          <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button [hidden]=\"permission == 'client1'\" expand=\"full\" class=\"btn-footer\" routerLink=\"/add-warehouse\">\r\n    Add Warehouse\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/warehouse/warehouse/warehouse.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/warehouse/warehouse/warehouse.module.ts ***!
  \*********************************************************/
/*! exports provided: WarehousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousePageModule", function() { return WarehousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _warehouse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warehouse.page */ "./src/app/warehouse/warehouse/warehouse.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");








const routes = [
    {
        path: '',
        component: _warehouse_page__WEBPACK_IMPORTED_MODULE_6__["WarehousePage"]
    }
];
let WarehousePageModule = class WarehousePageModule {
};
WarehousePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_warehouse_page__WEBPACK_IMPORTED_MODULE_6__["WarehousePage"]]
    })
], WarehousePageModule);



/***/ }),

/***/ "./src/app/warehouse/warehouse/warehouse.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/warehouse/warehouse/warehouse.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-warehouse {\n  --background: #faf8f8;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .lbl-result {\n  display: block;\n  text-align: left;\n  padding-left: 16px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.card-main {\n  border-left: 5px solid var(--ion-color-success-shade);\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n  padding: 2px;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-title {\n  padding: 0px 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .col-value {\n  padding: 0px 4px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card-main .col-edit {\n  text-align: right;\n  line-height: 1.6;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 4px 0px 0px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .col-edit .btn-dlt {\n  margin: 0px 0px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border: 1px solid;\n  border-radius: 50%;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.isActive {\n  border-left: 5px solid var(--ion-color-dark-shade) !important;\n}\n\n.btn-footer {\n  margin: 0px;\n}\n\n.spc {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvd2FyZWhvdXNlL3dhcmVob3VzZS93YXJlaG91c2UucGFnZS5zY3NzIiwic3JjL2FwcC93YXJlaG91c2Uvd2FyZWhvdXNlL3dhcmVob3VzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxxQkFBQTtBQ0hKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEUjs7QURJQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURBQTtFQUVJLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUk7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0FDRVI7O0FEQ0k7RUFDSSxnQkFBQTtFQUVBLGVBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRlI7O0FEY0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNaUjs7QURtQkk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDakJSOztBRG9CUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDbkJaOztBRHFCUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNwQlo7O0FEd0JJO0VBQ0ksWUFBQTtBQ3RCUjs7QUQ0QkE7RUFDSSw2REFBQTtBQ3pCSjs7QUQ2QkE7RUFDSSxXQUFBO0FDMUJKOztBRDZCQTtFQUNJLHVCQUFBO0FDMUJKIiwiZmlsZSI6InNyYy9hcHAvd2FyZWhvdXNlL3dhcmVob3VzZS93YXJlaG91c2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd2FyZWhvdXNle1xyXG4gICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAvLyAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWY4Zjg7XHJcbn1cclxuLmJsdWUtYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG4ubGJsLXRvb2wtcmVzdWx0e1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBcclxuICAgIC5sYmwtcmVzdWx0e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG4uYnRuLXRvcHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xyXG4gICAgbWFyZ2luOiAwcHggMTdweDtcclxufVxyXG4uYnRuLWZhYntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmJ0bi1leHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bi10b3AtYWRke1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcclxufVxyXG4uYnRuLWZvb3RlcntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtbWFpbntcclxuICAgIC8vYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSkgICA7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTI0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDRweDtcclxuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgLy9saW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAvLyBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAvLyAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgLy8gLy9saW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC12YWx1ZXtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgIGNvbG9yOiAjNGU0ZDRkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyAuYmFkZ2Utc3RhdHVze1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuY29sLWVkaXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICAgIC5idG4tZWRpdHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1kbHR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZGx0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uaXNBY3RpdmV7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xyXG4gICAgLy8gY29sb3I6I2ZmZjtcclxuICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zcGN7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufSIsIi5wYWdlLXdhcmVob3VzZSB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcbn1cblxuLmJsdWUtYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmxibC10b29sLXJlc3VsdCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmxibC10b29sLXJlc3VsdCAubGJsLXJlc3VsdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5idG4tdG9wIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMC42ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xuICBtYXJnaW46IDBweCAxN3B4O1xufVxuXG4uYnRuLWZhYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmJ0bi1leHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG4tdG9wLWFkZCB7XG4gIC0tcGFkZGluZy1zdGFydDogMWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbn1cblxuLmJ0bi1mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufVxuXG4uY2FyZC1tYWluIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5jYXJkLW1haW46bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IC00cHggI2NjYztcbn1cbi5jYXJkLW1haW4gLmNvbC10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkLW1haW4gLmNvbC12YWx1ZSB7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjNGU0ZDRkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQgLmJ0bi1lZGl0IHtcbiAgbWFyZ2luOiAwcHggNHB4IDBweCAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWRsdCB7XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2FyZC1tYWluIC5jb2wtZGx0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaXNBY3RpdmUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uc3BjIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/warehouse/warehouse/warehouse.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/warehouse/warehouse/warehouse.page.ts ***!
  \*******************************************************/
/*! exports provided: WarehousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousePage", function() { return WarehousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");













let WarehousePage = class WarehousePage {
    constructor(alertCtrl, CommonService, router, statusBar, platform, storage, socialSharing) {
        this.alertCtrl = alertCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.platform = platform;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.message = 'Check out the PDF!';
        this.url = 'http://google.com/';
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCopy"];
        this.faFileCsv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileCsv"];
        this.faFileExcel = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileExcel"];
        this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPrint"];
        this.resp = [];
        this.limit = 50;
        this.checkToken();
    }
    checkToken() {
        return this.storage.get(src_config__WEBPACK_IMPORTED_MODULE_10__["USER_DETAILS"]).then(res => {
            if (res) {
                this.permission = res.userPermission.group_name;
                console.log("::::::", res.userPermission.group_name);
            }
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
    searchBar(value) {
        let searchList = this.warehouse;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](searchList, function (x) {
                if (x.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.active.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.active ? x.active.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
            });
        }
        else {
            searchList = this.resp.data;
        }
        this.warehouse = searchList;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
        this.CommonService.presentLoading();
        this.CommonService.warehouseList()
            .subscribe(resp => {
            this.resp = resp;
            this.warehouse = resp.data;
            console.log(this.warehouse);
            this.CommonService.dismissLoading();
        });
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 50;
            infiniteScroll.target.complete();
        }, 500);
    }
    edit(id) {
        this.router.navigate(['/edit-warehouse'], { queryParams: { id: id } });
    }
    warehouseProducts(warehouseid) {
        console.log("Warehouse ID", warehouseid);
        this.router.navigate(['/warehouse-product'], { queryParams: { warehouseid: warehouseid } });
    }
    delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let params = id;
            const alert = yield this.alertCtrl.create({
                header: 'Remove Warehouse',
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
                            this.CommonService.warehouseDelete(params)
                                .subscribe(resp => {
                                this.warehouse = this.warehouse.filter(val => val.id !== params);
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
WarehousePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], WarehousePage.prototype, "infiniteScroll", void 0);
WarehousePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warehouse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./warehouse.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warehouse/warehouse/warehouse.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./warehouse.page.scss */ "./src/app/warehouse/warehouse/warehouse.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]])
], WarehousePage);



/***/ })

}]);
//# sourceMappingURL=warehouse-warehouse-warehouse-module-es2015.js.map