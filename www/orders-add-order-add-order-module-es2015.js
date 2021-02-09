(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-add-order-add-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/add-order/add-order.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/add-order/add-order.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Add New Orders\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar color=\"primary\">\r\n      <ion-label class=\"lbl-date\" color=\"light\">\r\n        Date: 12-11-2019 <span class=\"lbl-time\">Date: 11:06 AM</span>\r\n      </ion-label>\r\n    </ion-toolbar> -->\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  \r\n    <form [formGroup]=\"addorder_form\" autocomplete=\"off\">\r\n  \r\n      <ion-item lines=\"none\" class=\"input-item add-top addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Client Name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"customer_name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.customer_name.hasError('required') && addorder_form.controls.customer_name.touched\">\r\n        <p class=\"content\">Please Enter Client Name!</p>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Client Address</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"customer_address\" type=\"text\" color=\"primary\" class=\"input-box boxes\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.customer_address.hasError('required') && addorder_form.controls.customer_address.touched\">\r\n        <p class=\"content\">Please Enter Client Address!</p>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Client Phone</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"customer_phone\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.customer_phone.hasError('required') && addorder_form.controls.customer_phone.touched\">\r\n        <p class=\"content\">Please Enter Client Phone!</p>\r\n      </ion-item>\r\n\r\n    <div class=\"div-product\">\r\n\r\n      <ng-container *ngIf=\"productList.length > 0\">\r\n      <ion-card class=\"card-main\" *ngFor=\"let item of productList;let i=index;\">\r\n        <div formArrayName=\"add_product\">\r\n        <div formGroupName=\"0\">\r\n            <ion-row class=\"row-card\">\r\n              <ion-col size=\"6\" class=\"col-lbl\">\r\n                <ion-label class=\"col-title\">Product</ion-label>\r\n                <ion-input readonly class=\"col-value add-input no-border\" formControlName=\"product_id\" value=\"{{item.name}}\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"col-lbl\">\r\n                <ion-label class=\"col-title\">Qty</ion-label>\r\n                <ion-input autofocus type=\"number\" class=\"col-value add-input\" formControlName=\"qty\" (ionChange)=\"changeQty($event.target.value,i)\" value=\"{{item.qty}}\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"col-edit\">\r\n                <ion-button size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"removeControls(i)\">\r\n                  <ion-icon name=\"trash\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n                </ion-button>\r\n                <!-- <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\r\n                  <ion-icon name=\"arrow-forward\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\r\n                  <ion-icon name=\"arrow-down\"></ion-icon>\r\n                </ion-button> -->\r\n              </ion-col>\r\n          </ion-row>\r\n          <!-- <ion-card-content class=\"main-card-content\">\r\n              <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded\"> -->\r\n                <ion-row class=\"row-card\">\r\n                  <ion-col size=\"6\" class=\"col-lbl\">\r\n                    <ion-label class=\"col-title\">Rate</ion-label>\r\n                    <ion-input readonly class=\"col-value add-input no-border\"  formControlName=\"rate\" value=\"{{item.price}}\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"col-lbl\">\r\n                    <ion-label class=\"col-title\">Amount</ion-label>\r\n                    <ion-input readonly class=\"col-value add-input no-border\" formControlName=\"amount\" value=\"{{item.amount}}\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n              </div>\r\n              <!-- </app-expandable>\r\n            </ion-card-content> -->\r\n        </ion-card>\r\n      </ng-container>\r\n\r\n      <ion-button expand=\"full\" class=\"btn-footer add-btn\" (click)=\"addProduct()\">\r\n        Add Product\r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n    <!-- <ion-card class=\"card-main\">\r\n        <ng-container *ngIf=\"productList.length > 0\">\r\n          <div class=\"div-main\" *ngFor=\"let add of productList\">\r\n            <ion-row class=\"row-card\">\r\n              <ion-col size=\"3\" class=\"col-lbl\">\r\n                <ion-label class=\"col-title\">Product</ion-label>\r\n                <ion-label class=\"col-value\">{{add.name}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"col-lbl\">\r\n                <ion-label class=\"col-title\">Qty</ion-label>\r\n                <ion-input class=\"col-value add-input\">{{add.qty}}</ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"col-lbl\">\r\n                <ion-label class=\"col-title\">Rate</ion-label>\r\n                <ion-label class=\"col-value\">{{add.price}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"col-lbl\">\r\n                <ion-label class=\"col-title\">Amount</ion-label>\r\n                <ion-label class=\"col-value\">{{add.price}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\" class=\"col-lbl add-btn\">\r\n                <ion-button size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"removeControls(add.id)\">\r\n                  <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n            </div>\r\n        </ng-container>\r\n        <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"addProduct()\">\r\n          Add Product\r\n        </ion-button>\r\n  \r\n      </ion-card> -->\r\n  \r\n      <ion-item lines=\"none\" class=\"input-item add-top addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Gross Amount</ion-label>\r\n        <ion-input readonly type=\"text\" formControlName=\"gross_amount\" color=\"primary\" [(ngModel)]=\"grossAmount\" class=\"input-box boxes\">\r\n        </ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.gross_amount.hasError('required') && addorder_form.controls.gross_amount.touched\">\r\n        <p class=\"content\">Please Enter Gross Amount!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add-top addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">S-Charge {{scharge}} %</ion-label>\r\n        <ion-input readonly type=\"text\" formControlName=\"service_charge\" color=\"primary\" [(ngModel)]=\"sCharge\" class=\"input-box boxes\">\r\n        </ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.service_charge.hasError('required') && addorder_form.controls.service_charge.touched\">\r\n        <p class=\"content\">Please Enter S-Charge!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add-top addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Vat {{vcharge}} %</ion-label>\r\n        <ion-input readonly type=\"text\" formControlName=\"vat_charge\" color=\"primary\" [(ngModel)]=\"vat\" class=\"input-box boxes\">\r\n        </ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.vat_charge.hasError('required') && addorder_form.controls.vat_charge.touched\">\r\n        <p class=\"content\">Please Enter Vat!</p>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Discount</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"discount\" color=\"primary\" class=\"input-box boxes\" (ionChange)=\"discountApply($event.target.value)\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.discount.hasError('required') && addorder_form.controls.discount.touched\">\r\n        <p class=\"content\">Please Enter Discount!</p>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"none\" class=\"input-item add add-bottom addRL\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Net Amount</ion-label>\r\n        <ion-input readonly type=\"number\" formControlName=\"net_amount\" color=\"primary\" [ngModel]=\"netAmount.toFixed(2)\" class=\"input-box boxes\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"addorder_form.controls.net_amount.hasError('required') && addorder_form.controls.net_amount.touched\">\r\n        <p class=\"content\">Please Enter Net Amount!</p>\r\n      </ion-item>\r\n  \r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer>\r\n    <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"addOrder()\">\r\n      Create Order\r\n    </ion-button>\r\n  </ion-footer>\r\n");

/***/ }),

/***/ "./src/app/orders/add-order/add-order.module.ts":
/*!******************************************************!*\
  !*** ./src/app/orders/add-order/add-order.module.ts ***!
  \******************************************************/
/*! exports provided: AddOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderPageModule", function() { return AddOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/component/add-product/add-product.component */ "./src/app/component/add-product/add-product.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_order_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-order.page */ "./src/app/orders/add-order/add-order.page.ts");
/* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");









const routes = [
    {
        path: '',
        component: _add_order_page__WEBPACK_IMPORTED_MODULE_7__["AddOrderPage"]
    }
];
let AddOrderPageModule = class AddOrderPageModule {
};
AddOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__["ExpandableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [src_app_component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"]
        ],
        declarations: [_add_order_page__WEBPACK_IMPORTED_MODULE_7__["AddOrderPage"]]
    })
], AddOrderPageModule);



/***/ }),

/***/ "./src/app/orders/add-order/add-order.page.scss":
/*!******************************************************!*\
  !*** ./src/app/orders/add-order/add-order.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add {\n  margin-top: 8px;\n}\n\n.lbl-date {\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.lbl-date .lbl-time {\n  float: right;\n  padding-right: 10px;\n}\n\n.div-product {\n  margin-top: 10px;\n  background: #faf8f8;\n  padding: 15px 0px;\n}\n\n.card-main {\n  padding: 0px;\n  padding: 5px;\n  margin: 10px;\n  box-shadow: 0px 0px 5px #ccc;\n  background: #fff;\n}\n\n.card-main .row-card {\n  padding-top: 1px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-edit .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --background-activated: var(--ion-color-danger-tint);\n  --border-radius: 0px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .print {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-medium-shade);\n  --color-activated: var(--ion-color-medium);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.add-input {\n  height: 24px;\n  width: 75%;\n  border-bottom: 1px solid #ccc;\n  margin: 0px 8px;\n}\n\n.add-btn {\n  width: 94%;\n  margin: 0 auto !important;\n}\n\n.add-lbl {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block !important;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.add-top {\n  padding-top: 16px;\n}\n\n.add-bottom {\n  padding-bottom: 16px;\n}\n\n.addRL {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.add-btn-top {\n  margin-top: 25px !important;\n}\n\nion-input.no-border {\n  border: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvb3JkZXJzL2FkZC1vcmRlci9hZGQtb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlcnMvYWRkLW9yZGVyL2FkZC1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVJO0VBQ0ksZ0JBQUE7QUNBUjs7QURFUTtFQUNJLHdCQUFBO0FDQVo7O0FERVk7RUFDSSxnQkFBQTtFQUVBLGVBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSGhCOztBRE1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0poQjs7QURhSTtFQUVJLGlCQUFBO0FDWlI7O0FEY1E7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUlBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2ZaOztBRGlCUTtFQUNJLDJDQUFBO0VBQ0Esb0RBQUE7RUFDQSxvQkFBQTtBQ2ZaOztBRG1CSTtFQUNJLFlBQUE7QUNqQlI7O0FEcUJJO0VBQ0ksWUFBQTtBQ25CUjs7QURxQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDcEJaOztBRHNCUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUNyQlo7O0FEdUJRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ3RCWjs7QUQyQkE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDekJKOztBRDJCQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDeEJKOztBRDBCQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQ3ZCSjs7QUR5QkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ3RCSjs7QUR3QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDckJKOztBRHVCQTtFQUNJLGlCQUFBO0FDcEJKOztBRHNCQTtFQUNJLG9CQUFBO0FDbkJKOztBRHFCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNsQko7O0FEb0JBO0VBQ0ksMkJBQUE7QUNqQko7O0FEbUJBO0VBQ0ksb0JBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvYWRkLW9yZGVyL2FkZC1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRke1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5sYmwtZGF0ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgXHJcbiAgICAubGJsLXRpbWV7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXYtcHJvZHVjdHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmOGY4O1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLW1haW57XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAucm93LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuXHJcbiAgICAgICAgLmNvbC1sYmx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuY29sLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmNvbC12YWx1ZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRlNGQ0ZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAuYmFkZ2Utc3RhdHVze1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuY29sLWVkaXR7XHJcbiAgICAgICAgLy9wYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgICAuYnRuLWVkaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgLy8gLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRsdHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWRsdHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1haW4tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgLmVkaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGx0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmludHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5kbHR7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5hZGQtaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbn1cclxuLmFkZC1idG57XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4uYWRkLWxibHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcbi5hZGQtdG9we1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuLmFkZC1ib3R0b217XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG4uYWRkUkx7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5hZGQtYnRuLXRvcHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXQubm8tYm9yZGVye1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn0iLCIuYWRkIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubGJsLWRhdGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxibC1kYXRlIC5sYmwtdGltZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmRpdi1wcm9kdWN0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZhZjhmODtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbi5jYXJkLW1haW4ge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwge1xuICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCAuY29sLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwgLmNvbC12YWx1ZSB7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjNGU0ZDRkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQgLmJ0bi1lZGl0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQgLmJ0bi1kbHQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQpO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5jYXJkLW1haW4gLmNvbC1kbHQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IC5lZGl0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQgLmRsdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAucHJpbnQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZGx0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmFkZC1pbnB1dCB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDc1JTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMHB4IDhweDtcbn1cblxuLmFkZC1idG4ge1xuICB3aWR0aDogOTQlO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYWRkLWxibCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5hZGQtdG9wIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5hZGQtYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5hZGRSTCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLmFkZC1idG4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQubm8tYm9yZGVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/orders/add-order/add-order.page.ts":
/*!****************************************************!*\
  !*** ./src/app/orders/add-order/add-order.page.ts ***!
  \****************************************************/
/*! exports provided: AddOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderPage", function() { return AddOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/add-product/add-product.component */ "./src/app/component/add-product/add-product.component.ts");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");










let AddOrderPage = class AddOrderPage {
    constructor(navCtrl, CommonService, router, statusBar, route, formBuilder, product, modal, storage) {
        this.navCtrl = navCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.route = route;
        this.formBuilder = formBuilder;
        this.product = product;
        this.modal = modal;
        this.storage = storage;
        this.productlist = [];
        this.data = [];
        this.limit = 50;
        this.productList = [];
        this.productFormArray = [];
        this.TempgrossAmount = [];
        this.grossAmount = 0;
        this.sCharge = 0;
        this.vat = 0;
        this.netAmount = 0;
        this.price = 0;
        this.discount = 0;
        this.respCal = [];
        this.id = [];
        this.TempgrossAmount = [];
        this.respCal = [];
        this.addorder_fb();
        this.storage.get(src_config__WEBPACK_IMPORTED_MODULE_7__["USER_DETAILS"]).then(res => {
            if (res) {
                this.id = res.userDetails.id;
            }
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
    }
    ngOnInit() {
    }
    removeControls(i) {
        this.productList.splice(i, 1);
        this.productCalculation();
    }
    changeQty(qty, index) {
        if (qty) {
            var tempPrice = Number(this.productList[index].price.replace(',', ''));
            this.price = isNaN(tempPrice) ? 0 : tempPrice;
            this.amount = Number(qty) * this.price;
            console.log("amount", this.amount);
            this.productList[index].qty = Number(qty);
            this.productList[index].amount = parseFloat(this.amount).toFixed(2);
            this.productCalculation();
        }
    }
    discountApply(value) {
        this.discount = value;
        let total = 0;
        this.productList.forEach((e) => {
            total = total + Number(e.amount);
        });
        this.grossAmount = total;
        this.sCharge = (this.grossAmount * this.scharge) / 100;
        this.vat = (this.grossAmount * this.vcharge) / 100;
        let tempTotal = Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat);
        this.netAmount = Number(tempTotal) - Number(value);
    }
    productCalculation() {
        let total = 0;
        this.productList.forEach((e) => {
            total = total + Number(e.amount);
        });
        this.grossAmount = total;
        this.sCharge = (this.grossAmount * this.scharge) / 100;
        this.vat = (this.grossAmount * this.vcharge) / 100;
        this.netAmount = this.discount ? (Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat)) - this.discount : Number(this.grossAmount) + Number(this.sCharge) + Number(this.vat);
    }
    expandItem(item) {
        //console.log("item",item);
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.productList.map(listItem => {
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
    addorder_fb() {
        this.addorder_form = this.formBuilder.group({
            customer_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer_phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gross_amount: [null],
            discount: [null],
            net_amount: [null],
            service_charge: [null],
            vat_charge: [null],
            add_product: this.formBuilder.array([
                this.createItem()
            ])
        });
        let reqData = this.route.snapshot.queryParams;
        this.getCompanyDetails(reqData);
    }
    createItem() {
        return this.formBuilder.group({
            product_id: [null],
            qty: [null],
            rate: [null],
            amount: [null],
        });
    }
    getCompanyDetails(reqData) {
        this.CommonService.comGet(reqData).subscribe(res => {
            this.comdata = res.data;
            this.scharge = this.comdata.service_charge_value;
            this.vcharge = this.comdata.vat_charge_value;
        });
    }
    addOrder() {
        console.log("Form Data", this.addorder_form);
        for (let v in this.addorder_form.controls) {
            this.addorder_form.controls[v].markAsTouched();
        }
        if (this.addorder_form.valid) {
            this.CommonService.presentLoading();
            const body = {
                "customer_name": this.addorder_form.value.customer_name,
                "customer_address": this.addorder_form.value.customer_address,
                "customer_phone": this.addorder_form.value.customer_phone,
                "gross_amount": this.addorder_form.value.gross_amount,
                "discount": this.addorder_form.value.discount,
                "net_amount": this.addorder_form.value.net_amount,
                "user_id": this.id,
                "product": this.productList
            };
            console.log("body+++++", body);
            this.CommonService.orderAdd(body).subscribe(val => {
                this.order_process = false;
                this.CommonService.dismissLoading();
                if (val.status == 1) {
                    this.productList = [];
                    this.CommonService.presentToastWithOptions(val.message);
                    this.router.navigate(['/manage-orders']);
                }
                else {
                    this.CommonService.presentToastWithOptions(val.message);
                }
            }, err => {
                this.order_process = false;
                this.CommonService.dismissLoading();
                this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    addProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const product = yield this.modal.create({
                component: src_app_component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
                showBackdrop: true,
            });
            product.onWillDismiss().then((data) => {
                if (data.data) {
                    var amount = Number(data.data.price.replace(',', ''));
                    Object.assign(data.data, { amount: isNaN(amount) ? 0 : amount });
                    this.productList.push(data.data);
                    this.productCalculation();
                }
            });
            return yield product.present();
        });
    }
};
AddOrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
AddOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/add-order/add-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-order.page.scss */ "./src/app/orders/add-order/add-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
], AddOrderPage);



/***/ })

}]);
//# sourceMappingURL=orders-add-order-add-order-module-es2015.js.map