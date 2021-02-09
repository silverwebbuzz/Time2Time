(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-manage-products-manage-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/manage-products/manage-products.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/manage-products/manage-products.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      <!-- Manage  -->\r\n      Products\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\" (click)=\"filter()\">\r\n      <ion-icon name=\"funnel\" color=\"light\" class=\"btn-filter\"></ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar id=\"searchValue\" color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-row class=\"bg-row\">\r\n      <ion-col size=\"9\" class=\"bg-col\">\r\n        <ion-label class=\"lbl-result\">About {{product?.length}} Stock</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"bg-col add-up\">\r\n        <ion-button size=\"small\" (click)=\"filter()\" class=\"lbl-btn\">\r\n          <ion-icon name=\"funnel\" mode=\"md\" color=\"light\" class=\"lbl-icon\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-products\">\r\n\r\n  <div class=\"blue-background\">    \r\n    <!-- <ion-button color=\"light\" class=\"btn-top\">\r\n          <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n          <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n          <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top\">\r\n          <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button> -->\r\n  </div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"product?.length == 0\">\r\n    <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n  </div>\r\n\r\n  <ion-card class=\"card-main\" [ngClass]=\"{'isActive': item.availability == 2 }\"\r\n    *ngFor=\"let item of product | slice:0:limit\">\r\n    <ion-row class=\"row-card\" (click)=\"expandItem(item)\">\r\n      <ion-col size=\"2\" class=\"col-img\">\r\n        <img *ngIf=\"!item.image\" src=\"{{user_not_found_place_holder}}\" class=\"img-prod\" />\r\n        <img *ngIf=\"item.image\" src=\"{{imageUrl}}{{item.image}}\" class=\"img-prod\" />\r\n      </ion-col>\r\n      <ion-col size=\"8\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Brand</ion-label>\r\n        <ion-label class=\"col-value\" *ngFor=\"let cat of item.category_data;let isLast=last\">\r\n          {{cat.name}}{{isLast ? '' : ' ,'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"col-edit\">\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"10\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Refrence Number</ion-label>\r\n        <ion-label class=\"col-value\">{{item.name}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ng-container *ngIf=\"item.expanded\">\r\n    <ion-card-content class=\"main-card-content\">\r\n      <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded\">\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n          </ion-col>\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Serial</ion-label>\r\n            <ion-label class=\"col-value\">{{item?.sku ? item?.sku : '-'}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n            <!-- <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\" (click)=\"edit(item.id)\">\r\n              <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n            </ion-button> -->\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Currency</ion-label>\r\n            <ion-label class=\"col-value\">{{item?.currency ? item?.currency : '-'}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Price</ion-label>\r\n            <ion-label class=\"col-value\">{{item?.price ? item?.price : '-'}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n            <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\" (click)=\"edit(item.id)\">\r\n              <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Status</ion-label>\r\n            <ion-label class=\"col-value\">\r\n              <ng-container *ngIf=\"item.qty == 0\">In Stock</ng-container>\r\n              <ng-container *ngIf=\"item.qty == 1\">Sold</ng-container>\r\n              <ng-container *ngIf=\"item.qty == 2\">Consignment</ng-container>\r\n              <ng-container *ngIf=\"item.qty == 3\">For Reparing</ng-container>\r\n              <ng-container *ngIf=\"item.qty == 4\">Mr Rameez Personal Watch</ng-container>\r\n              <ng-container *ngIf=\"item.qty == 5\">Return to Brand</ng-container>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"2\" class=\"col-lbl\">\r\n            <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"delete(item.id)\">\r\n              <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Warehouse</ion-label>\r\n            <ion-label class=\"col-value\">{{item?.store_name ? item?.store_name : '-'}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </app-expandable>\r\n    </ion-card-content>\r\n    </ng-container>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer>\r\n  <ion-button [hidden]=\"permission == 'client1'\" expand=\"full\" class=\"btn-footer\" routerLink=\"/add-product\">\r\n    Add Product\r\n  </ion-button>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/products/manage-products/manage-products.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/products/manage-products/manage-products.module.ts ***!
  \********************************************************************/
/*! exports provided: ManageProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsPageModule", function() { return ManageProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-products.page */ "./src/app/products/manage-products/manage-products.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");









const routes = [
    {
        path: '',
        component: _manage_products_page__WEBPACK_IMPORTED_MODULE_6__["ManageProductsPage"]
    }
];
let ManageProductsPageModule = class ManageProductsPageModule {
};
ManageProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__["ExpandableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        declarations: [_manage_products_page__WEBPACK_IMPORTED_MODULE_6__["ManageProductsPage"]]
    })
], ManageProductsPageModule);



/***/ }),

/***/ "./src/app/products/manage-products/manage-products.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/products/manage-products/manage-products.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-filter {\n  font-size: 20px;\n  margin-right: 8px;\n}\n\n.page-products {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .bg-row {\n  margin: 0px 16px;\n}\n\n.lbl-tool-result .bg-row .bg-col {\n  padding: 0px;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-result {\n  display: block;\n  text-align: left;\n  color: #fff;\n  font-size: 18px;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-btn {\n  margin: 0px;\n  --background-activated: none;\n  border: 1px solid #ccc;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-btn .lbl-icon {\n  font-size: 24px;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.add-up {\n  line-height: 1.2;\n  text-align: right;\n}\n\n.card-main {\n  padding: 5px;\n  border-left: 5px solid var(--ion-color-success-shade);\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-img {\n  padding: 0px;\n}\n\n.card-main .col-img .img-prod {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.card-main .row-card {\n  padding-top: 2px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-edit .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --background-activated: var(--ion-color-danger-tint);\n  --border-radius: 0px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.isActive {\n  border-left: 5px solid var(--ion-color-dark-shade) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvcHJvZHVjdHMvbWFuYWdlLXByb2R1Y3RzL21hbmFnZS1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL21hbmFnZS1wcm9kdWN0cy9tYW5hZ2UtcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKOztBREhBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMSTtFQUNJLGdCQUFBO0FDT1I7O0FETFE7RUFDSSxZQUFBO0FDT1o7O0FETFk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ01oQjs7QURGWTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDSWhCOztBREZnQjtFQUNJLGVBQUE7QUNJcEI7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtBQ0dSOztBREFJO0VBQ0ksWUFBQTtBQ0VSOztBREFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VaOztBREVJO0VBQ0ksZ0JBQUE7QUNBUjs7QURFUTtFQUNJLHdCQUFBO0FDQVo7O0FERVk7RUFDSSxnQkFBQTtFQUVBLGVBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSGhCOztBRE1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0poQjs7QURhSTtFQUVJLGlCQUFBO0FDWlI7O0FEY1E7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUlBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2ZaOztBRGlCUTtFQUNJLDJDQUFBO0VBQ0Esb0RBQUE7RUFDQSxvQkFBQTtBQ2ZaOztBRG1CSTtFQUNJLFlBQUE7QUNqQlI7O0FEcUJJO0VBQ0ksWUFBQTtBQ25CUjs7QURxQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDcEJaOztBRHNCUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUNyQlo7O0FENkJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQzFCSjs7QUQ0QkE7RUFDSSw2REFBQTtBQ3pCSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL21hbmFnZS1wcm9kdWN0cy9tYW5hZ2UtcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1maWx0ZXJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4ucGFnZS1wcm9kdWN0c3tcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcclxufVxyXG4uYnRuLXRvcHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xyXG4gICAgbWFyZ2luOiAwcHggMTdweDtcclxufVxyXG4uYnRuLWZhYntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmJ0bi1leHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bi10b3AtYWRke1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcclxufVxyXG4ubGJsLXRvb2wtcmVzdWx0e1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBcclxuICAgIC5iZy1yb3d7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTZweDtcclxuXHJcbiAgICAgICAgLmJnLWNvbHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgICAgICAgLmxibC1yZXN1bHR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIC8vcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgLy9saW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYmwtYnRue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHJcbiAgICAgICAgICAgICAgICAubGJsLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ibHVlLWJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmFkZC11cHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2FyZC1tYWlue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSkgICA7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTI0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtaW1ne1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgLmltZy1wcm9ke1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yb3ctY2FyZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG5cclxuICAgICAgICAuY29sLWxibHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5jb2wtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY29sLXZhbHVle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGU0ZDRkO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC5iYWRnZS1zdGF0dXN7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC5jb2wtZWRpdHtcclxuICAgICAgICAvL3BhZGRpbmc6IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgLmJ0bi1lZGl0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgIC8vIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1kbHR7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCk7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1kbHR7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYWluLWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgIC5lZGl0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRsdHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi8vIC5idG4tZmFie1xyXG4vLyAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4vLyB9XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcbi5pc0FjdGl2ZXtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBjb2xvcjojZmZmO1xyXG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpICFpbXBvcnRhbnQ7XHJcbn0iLCIuYnRuLWZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5wYWdlLXByb2R1Y3RzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmOGY4O1xufVxuXG4uYnRuLXRvcCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjZlbTtcbiAgbWFyZ2luOiAwcHggMTdweDtcbn1cblxuLmJ0bi1mYWIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5idG4tZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuLXRvcC1hZGQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG59XG5cbi5sYmwtdG9vbC1yZXN1bHQge1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5sYmwtdG9vbC1yZXN1bHQgLmJnLXJvdyB7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG59XG4ubGJsLXRvb2wtcmVzdWx0IC5iZy1yb3cgLmJnLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5sYmwtdG9vbC1yZXN1bHQgLmJnLXJvdyAuYmctY29sIC5sYmwtcmVzdWx0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubGJsLXRvb2wtcmVzdWx0IC5iZy1yb3cgLmJnLWNvbCAubGJsLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLmxibC10b29sLXJlc3VsdCAuYmctcm93IC5iZy1jb2wgLmxibC1idG4gLmxibC1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYWRkLXVwIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jYXJkLW1haW4ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNhcmQtbWFpbjpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xufVxuLmNhcmQtbWFpbiAuY29sLWltZyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLmNvbC1pbWcgLmltZy1wcm9kIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQge1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwge1xuICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCAuY29sLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwgLmNvbC12YWx1ZSB7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjNGU0ZDRkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQgLmJ0bi1lZGl0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQgLmJ0bi1kbHQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQpO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5jYXJkLW1haW4gLmNvbC1kbHQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IC5lZGl0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQgLmRsdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5idG4tZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn1cblxuLmlzQWN0aXZlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/products/manage-products/manage-products.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/products/manage-products/manage-products.page.ts ***!
  \******************************************************************/
/*! exports provided: ManageProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsPage", function() { return ManageProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_component_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/component/filter/filter.component */ "./src/app/component/filter/filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_15__);

















let ManageProductsPage = class ManageProductsPage {
    constructor(modal, alertCtrl, CommonService, router, statusBar, platform, storage, socialSharing, menu) {
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.platform = platform;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.menu = menu;
        this.message = 'Check out the PDF!';
        this.url = 'http://google.com/';
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].image_url;
        this.user_not_found_place_holder = 'assets/image/placeholder-s.png';
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCopy"];
        this.faFileCsv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileCsv"];
        this.faFileExcel = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileExcel"];
        this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPrint"];
        this.product = [];
        this.limit = 50;
        this.productList = [];
        this.Filteroptdata = [];
        this.resp = [];
        this.setFilterData = {
            quantity: null,
            warehouse: null,
            category: null,
        };
        this.checkToken();
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.product.map(listItem => {
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
    checkToken() {
        return this.storage.get(src_config__WEBPACK_IMPORTED_MODULE_13__["USER_DETAILS"]).then(res => {
            if (res) {
                this.permission = res.userPermission.group_name;
            }
        });
    }
    ngOnInit() {
    }
    filter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const filterModal = yield this.modal.create({
                component: src_app_component_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"],
                componentProps: {
                    selectedfilterData: this.setFilterData
                },
                showBackdrop: true,
                mode: "ios",
                cssClass: 'filter-modal',
                backdropDismiss: false
            });
            filterModal.onDidDismiss()
                .then((optdata) => {
                this.setFilterData = optdata.data;
                let searchList = this.resp.data;
                const searchkeyValue = document.getElementById('searchValue').value;
                if (searchkeyValue) {
                    if (optdata.data.warehouse) {
                        searchList = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](searchList, function (x) {
                            return x.store_name == optdata.data.warehouse && x.category_data[0].name ? x.category_data[0].name.toLowerCase().indexOf(searchkeyValue.toLowerCase()) > -1 : null;
                        });
                    }
                }
                else {
                    if (optdata.data.warehouse != null) {
                        if (optdata.data.warehouse[0] != null) {
                            searchList = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](searchList, function (x) {
                                return optdata.data.warehouse.indexOf(x.store_name) > -1;
                            });
                        }
                    }
                }
                if (optdata.data.quantity) {
                    searchList = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](searchList, function (x) {
                        return x.qty == optdata.data.quantity;
                    });
                }
                if (optdata.data.category) {
                    searchList = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](searchList, function (x) {
                        return x.category_data[0].name == optdata.data.category;
                    });
                }
                this.product = searchList;
            });
            return yield filterModal.present();
        });
    }
    Availability(val) {
        if (val == 1) {
            return 'Yes';
        }
        else {
            return 'No';
        }
    }
    addProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const product = yield this.modal.create({
                component: src_app_component_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"],
                showBackdrop: true,
            });
            product.onWillDismiss().then((data) => {
                if (data.data) {
                    this.productList.push(data.data);
                }
            });
            return yield product.present();
        });
    }
    searchBar(value) {
        let searchList = this.product;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](searchList, function (x) {
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
        this.product = searchList;
    }
    ionViewWillEnter() {
        this.menu.enable(true);
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
        this.CommonService.presentLoading();
        this.CommonService.productList()
            .subscribe(resp => {
            this.resp = resp;
            this.product = resp.data;
            this.CommonService.dismissLoading();
        });
    }
    edit(id) {
        this.router.navigate(['/edit-product'], { queryParams: { id: id } });
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
                header: 'Remove Product',
                message: 'Do you really want to remove?',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.CommonService.productDelete(params)
                                .subscribe(resp => {
                                this.product = this.product.filter(val => val.id !== params);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    sharePicker() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_14__();
            var col = ["Brand", "Refrence Number", "Serial", "Currency", "Price", "Status", "Warehouse"];
            var rows = [];
            this.product.forEach(data => {
                var temp = [data.category_data];
                this.data = temp;
            });
            this.data.forEach(data => {
                var temp = [data[0].name];
                this.name = temp;
            });
            this.product.forEach(element => {
                var temp = [
                    element.category_data.name,
                    element.name,
                    element.sku,
                    element.currency,
                    element.price,
                    element.qty,
                    element.store_name
                ];
                rows.push(temp);
            });
            doc.autoTable(col, rows);
            doc.save('Test.pdf');
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
ManageProductsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], ManageProductsPage.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportContent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ManageProductsPage.prototype, "reportContent", void 0);
ManageProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/manage-products/manage-products.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-products.page.scss */ "./src/app/products/manage-products/manage-products.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], ManageProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-manage-products-manage-products-module-es2015.js.map