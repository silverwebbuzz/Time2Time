(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-edit-order-edit-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/edit-order/edit-order.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/edit-order/edit-order.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"back()\" color=\"light\">\r\n              <ion-icon name=\"arrow-back\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n      <ion-title color=\"light\" class=\"head\">\r\n        Edit Orders\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n\r\n      <form [formGroup]=\"editorder_form\" autocomplete=\"off\">\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add-top addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Client Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"customer_name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n      *ngIf=\"editorder_form.controls.customer_name.hasError('required') && editorder_form.controls.customer_name.touched\">\r\n      <p class=\"content\">Please Enter Client Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Client Address</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"customer_address\" type=\"text\" color=\"primary\" class=\"input-box boxes\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n      *ngIf=\"editorder_form.controls.customer_address.hasError('required') && editorder_form.controls.customer_address.touched\">\r\n      <p class=\"content\">Please Enter Client Address!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Client Phone</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"customer_phone\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n      *ngIf=\"editorder_form.controls.customer_phone.hasError('required') && editorder_form.controls.customer_phone.touched\">\r\n      <p class=\"content\">Please Enter Client Phone!</p>\r\n    </ion-item>\r\n  \r\n    <div class=\"div-product\">\r\n      <!-- Edit  -->\r\n        <!-- <ng-container >\r\n            <ion-card class=\"card-main\" *ngFor=\"let item of order_id;let i=index;\">\r\n              <div formArrayName=\"add_product\">\r\n                <div formGroupName=\"0\">\r\n                  <ion-row class=\"row-card\">\r\n                    <ion-col size=\"6\" class=\"col-lbl\">\r\n                      <ion-label class=\"col-title\">Product</ion-label>\r\n                      <ion-input readonly class=\"col-value add-input no-border\" formControlName=\"product_id\"\r\n                        value=\"{{item.product_id}}\"></ion-input>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\" class=\"col-lbl\">\r\n                      <ion-label class=\"col-title\">Qty</ion-label>\r\n                      <ion-input autofocus type=\"number\" class=\"col-value add-input\" formControlName=\"qty\" (ionChange)=\"changeQty($event.target.value,i)\"  value=\"{{item.qty}}\"></ion-input>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"col-edit\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"removeControls(i)\">\r\n                        <ion-icon name=\"trash\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row class=\"row-card\">\r\n                    <ion-col size=\"6\" class=\"col-lbl\">\r\n                      <ion-label class=\"col-title\">Rate</ion-label>\r\n                      <ion-input readonly class=\"col-value add-input no-border\" id=\"rate_{{item.id}}\" formControlName=\"rate\"\r\n                      value=\"{{item.rate}}\"></ion-input>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\" class=\"col-lbl\">\r\n                      <ion-label class=\"col-title\">Amount</ion-label>\r\n                      <ion-input readonly class=\"col-value add-input no-border\" formControlName=\"amount\"\r\n                      value=\"{{item.amount}}\"></ion-input>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n            </ion-card>\r\n          </ng-container> -->\r\n    \r\n          <!-- Add -->\r\n      <ng-container >\r\n        <ion-card class=\"card-main\" *ngFor=\"let item of productList;let i=index;\">\r\n          <div formArrayName=\"add_product\">\r\n            <div formGroupName=\"0\">\r\n              <ion-row class=\"row-card\">\r\n                <ion-col size=\"6\" class=\"col-lbl\">\r\n                  <ion-label class=\"col-title\">Product</ion-label>\r\n                  <ion-input readonly class=\"col-value add-input no-border\" formControlName=\"product_id\"\r\n                    value=\"{{item.name}}\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"col-lbl\">\r\n                  <ion-label class=\"col-title\">Qty</ion-label>\r\n                  <ion-input autofocus type=\"number\" class=\"col-value add-input\" formControlName=\"qty\" (ionChange)=\"changeQty($event.target.value,i)\"  value=\"{{item.qty}}\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"col-edit\">\r\n                  <ion-button size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"removeControls(i)\">\r\n                    <ion-icon name=\"trash\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row-card\">\r\n                <ion-col size=\"6\" class=\"col-lbl\">\r\n                  <ion-label class=\"col-title\">Rate</ion-label>\r\n                  <ion-input readonly class=\"col-value add-input no-border\" formControlName=\"rate\"\r\n                  value=\"{{item.price}}\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"col-lbl\">\r\n                  <ion-label class=\"col-title\">Amount</ion-label>\r\n                  <ion-input readonly class=\"col-value add-input no-border\" formControlName=\"amount\"\r\n                  value=\"{{item.amount}}\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </ion-card>\r\n      </ng-container>\r\n\r\n      <ion-button expand=\"full\" class=\"btn-footer add-btn\" (click)=\"addProduct()\">\r\n        Add Product\r\n      </ion-button>\r\n\r\n    </div>\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Gross Amount</ion-label>\r\n      <ion-input readonly type=\"text\" formControlName=\"gross_amount\" color=\"primary\" class=\"input-box boxes\" [(ngModel)]=\"grossAmount\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n      *ngIf=\"editorder_form.controls.gross_amount.hasError('required') && editorder_form.controls.gross_amount.touched\">\r\n      <p class=\"content\">Please Enter Gross Amount!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">S-Charge {{scharge}} %</ion-label>\r\n      <ion-input readonly type=\"text\" formControlName=\"service_charge\" color=\"primary\" [(ngModel)]=\"sCharge\"\r\n        class=\"input-box boxes\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n      *ngIf=\"editorder_form.controls.service_charge.hasError('required') && editorder_form.controls.service_charge.touched\">\r\n      <p class=\"content\">Please Enter S-Charge!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Vat {{vcharge}} %</ion-label>\r\n      <ion-input readonly type=\"text\" formControlName=\"vat_charge\" color=\"primary\" [(ngModel)]=\"vat\"\r\n        class=\"input-box boxes\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n      *ngIf=\"editorder_form.controls.vat_charge.hasError('required') && editorder_form.controls.vat_charge.touched\">\r\n      <p class=\"content\">Please Enter Vat!</p>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Discount</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"discount\" color=\"primary\" class=\"input-box boxes\" (ionChange)=\"discountApply($event.target.value)\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-erro addRL\"\r\n      *ngIf=\"editorder_form.controls.discount.hasError('required') && editorder_form.controls.discount.touched\">\r\n      <p class=\"content\">Please Enter Discount!</p>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add addRL\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Net Amount</ion-label>\r\n      <ion-input readonly type=\"text\" formControlName=\"net_amount\" color=\"primary\" class=\"input-box boxes\" [ngModel]=\"netAmount.toFixed(2)\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n      *ngIf=\"editorder_form.controls.net_amount.hasError('required') && editorder_form.controls.net_amount.touched\">\r\n      <p class=\"content\">Please Enter Net Amount!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add add-bottom addRL\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Paid Status</ion-label>\r\n        <ion-select interface=\"action-sheet\" formControlName=\"paid_status\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"1\" selected>Paid</ion-select-option>\r\n          <ion-select-option value=\"2\">Unpaid</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error addRL\"\r\n        *ngIf=\"editorder_form.controls.paid_status.hasError('required') && editorder_form.controls.paid_status.touched\">\r\n        <p class=\"content\">Please Select Paid Status!</p>\r\n      </ion-item>\r\n\r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer>\r\n    <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"editOrder()\">\r\n      Update\r\n    </ion-button>\r\n  </ion-footer>");

/***/ }),

/***/ "./src/app/orders/edit-order/edit-order-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/orders/edit-order/edit-order-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EditOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderPageRoutingModule", function() { return EditOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-order.page */ "./src/app/orders/edit-order/edit-order.page.ts");




const routes = [
    {
        path: '',
        component: _edit_order_page__WEBPACK_IMPORTED_MODULE_3__["EditOrderPage"]
    }
];
let EditOrderPageRoutingModule = class EditOrderPageRoutingModule {
};
EditOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/orders/edit-order/edit-order.module.ts":
/*!********************************************************!*\
  !*** ./src/app/orders/edit-order/edit-order.module.ts ***!
  \********************************************************/
/*! exports provided: EditOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderPageModule", function() { return EditOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-order-routing.module */ "./src/app/orders/edit-order/edit-order-routing.module.ts");
/* harmony import */ var _edit_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-order.page */ "./src/app/orders/edit-order/edit-order.page.ts");







let EditOrderPageModule = class EditOrderPageModule {
};
EditOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditOrderPageRoutingModule"]
        ],
        declarations: [_edit_order_page__WEBPACK_IMPORTED_MODULE_6__["EditOrderPage"]]
    })
], EditOrderPageModule);



/***/ }),

/***/ "./src/app/orders/edit-order/edit-order.page.scss":
/*!********************************************************!*\
  !*** ./src/app/orders/edit-order/edit-order.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add {\n  margin-top: 8px;\n}\n\n.lbl-date {\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.lbl-date .lbl-time {\n  float: right;\n  padding-right: 10px;\n}\n\n.div-product {\n  margin-top: 10px;\n  background: #faf8f8;\n  padding: 15px 0px;\n}\n\n.card-main {\n  padding: 0px;\n  padding: 5px;\n  margin: 10px;\n  box-shadow: 0px 0px 5px #ccc;\n  background: #fff;\n}\n\n.card-main .row-card {\n  padding-top: 1px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-edit .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --background-activated: var(--ion-color-danger-tint);\n  --border-radius: 0px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .print {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-medium-shade);\n  --color-activated: var(--ion-color-medium);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.add-input {\n  height: 18px;\n  width: 75%;\n  border-bottom: 1px solid #ccc;\n  margin: 0px 8px;\n}\n\n.add-btn {\n  width: 94%;\n  margin: 0 auto !important;\n}\n\n.add-lbl {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block !important;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.add-top {\n  padding-top: 16px;\n}\n\n.add-bottom {\n  padding-bottom: 16px;\n}\n\n.addRL {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.add-btn-top {\n  margin-top: 25px !important;\n}\n\nion-input.no-border {\n  border: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvb3JkZXJzL2VkaXQtb3JkZXIvZWRpdC1vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVycy9lZGl0LW9yZGVyL2VkaXQtb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDRVI7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FERVE7RUFDSSx3QkFBQTtBQ0FaOztBREVZO0VBQ0ksZ0JBQUE7RUFFQSxlQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hoQjs7QURNWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNKaEI7O0FEYUk7RUFFSSxpQkFBQTtBQ1pSOztBRGNRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFJQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNmWjs7QURpQlE7RUFDSSwyQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7QUNmWjs7QURtQkk7RUFDSSxZQUFBO0FDakJSOztBRHFCSTtFQUNJLFlBQUE7QUNuQlI7O0FEcUJRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ3BCWjs7QURzQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDckJaOztBRHVCUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUN0Qlo7O0FEMkJBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ3pCSjs7QUQyQkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ3hCSjs7QUQwQkE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUN2Qko7O0FEeUJBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUN0Qko7O0FEd0JBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ3JCSjs7QUR1QkE7RUFDSSxpQkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxvQkFBQTtBQ25CSjs7QURxQkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRG9CQTtFQUNJLDJCQUFBO0FDakJKOztBRG1CQTtFQUNJLG9CQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL2VkaXQtb3JkZXIvZWRpdC1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRke1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5sYmwtZGF0ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgXHJcbiAgICAubGJsLXRpbWV7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXYtcHJvZHVjdHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmOGY4O1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLW1haW57XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAucm93LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuXHJcbiAgICAgICAgLmNvbC1sYmx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuY29sLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmNvbC12YWx1ZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRlNGQ0ZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAuYmFkZ2Utc3RhdHVze1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuY29sLWVkaXR7XHJcbiAgICAgICAgLy9wYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgICAuYnRuLWVkaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgLy8gLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRsdHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWRsdHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1haW4tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgLmVkaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGx0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmludHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5kbHR7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5hZGQtaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbn1cclxuLmFkZC1idG57XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4uYWRkLWxibHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcbi5hZGQtdG9we1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuLmFkZC1ib3R0b217XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG4uYWRkUkx7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5hZGQtYnRuLXRvcHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXQubm8tYm9yZGVye1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gaW9uLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxuLy8gfSIsIi5hZGQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5sYmwtZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubGJsLWRhdGUgLmxibC10aW1lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZGl2LXByb2R1Y3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmOGY4O1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLmNhcmQtbWFpbiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCB7XG4gIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIC5jb2wtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCAuY29sLXZhbHVlIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgY29sb3I6ICM0ZTRkNGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWRsdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCk7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWRsdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQgLmVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAuZGx0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IC5wcmludCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5kbHQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uYWRkLWlucHV0IHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNzUlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAwcHggOHB4O1xufVxuXG4uYWRkLWJ0biB7XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtbGJsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn1cblxuLmFkZC10b3Age1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLmFkZC1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLmFkZFJMIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uYWRkLWJ0bi10b3Age1xuICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dC5uby1ib3JkZXIge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/orders/edit-order/edit-order.page.ts":
/*!******************************************************!*\
  !*** ./src/app/orders/edit-order/edit-order.page.ts ***!
  \******************************************************/
/*! exports provided: EditOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderPage", function() { return EditOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/add-product/add-product.component */ "./src/app/component/add-product/add-product.component.ts");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");










let EditOrderPage = class EditOrderPage {
    constructor(navCtrl, CommonService, router, statusBar, route, modal, storage, formBuilder) {
        this.navCtrl = navCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.route = route;
        this.modal = modal;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.productList = [];
        this.TempgrossAmount = [];
        this.grossAmount = 0;
        this.sCharge = 0;
        this.vat = 0;
        this.netAmount = 0;
        this.amount = 0;
        this.price = 0;
        this.discount = 0;
        this.respCal = [];
        this.id = [];
        this.editorder_fb();
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
        let reqData = this.route.snapshot.queryParams;
        this.orderDetails(reqData);
    }
    removeControls(i) {
        this.productList.splice(i, 1);
        this.productCalculation();
    }
    changeQty(qty, index) {
        if (qty) {
            this.price = Number(this.productList[index].price);
            this.amount = Number(qty) * Number(this.price);
            this.productList[index].qty = qty;
            this.productList[index].amount = this.amount;
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
    editorder_fb() {
        this.editorder_form = this.formBuilder.group({
            customer_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            customer_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            customer_phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gross_amount: [null],
            service_charge: [null],
            vat_charge: [null],
            discount: [null],
            net_amount: [null],
            paid_status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
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
    orderDetails(reqData) {
        this.CommonService.orderGet(reqData).subscribe(res => {
            this.orderData = res.data;
            console.log("::::::", this.orderData);
            this.productList = this.orderData.order_item;
            this.editorder_form.patchValue({
                customer_name: this.orderData.customer_name,
                customer_address: this.orderData.customer_address,
                customer_phone: this.orderData.customer_phone,
                gross_amount: this.orderData.gross_amount,
                discount: this.orderData.discount,
                net_amount: this.orderData.net_amount,
                paid_status: this.orderData.paid_status,
            });
            this.productCalculation();
        }, error => {
        });
    }
    editOrder() {
        for (let v in this.editorder_form.controls) {
            this.editorder_form.controls[v].markAsTouched();
        }
        if (this.editorder_form.valid) {
            this.CommonService.presentLoading();
            const body = {
                "customer_name": this.editorder_form.value.customer_name,
                "customer_address": this.editorder_form.value.customer_address,
                "customer_phone": this.editorder_form.value.customer_phone,
                "gross_amount": this.editorder_form.value.gross_amount,
                "discount": this.editorder_form.value.discount,
                "net_amount": this.editorder_form.value.net_amount,
                "paid_status": this.editorder_form.value.paid_status,
                "id": this.route.snapshot.queryParams.id,
                "user_id": this.id,
                "product": this.productList,
            };
            console.log("body", body);
            this.CommonService.orderEdit(body).subscribe(val => {
                this.order_process = false;
                this.CommonService.dismissLoading();
                if (val.status == 1) {
                    this.CommonService.dismissLoading();
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
                    var amount = data.data.price;
                    var product_id = data.data.id;
                    Object.assign(data.data, { amount: amount });
                    this.productList.push(data.data);
                    this.productCalculation();
                    console.log("product_list", this.productList);
                }
            });
            return yield product.present();
        });
    }
    back() {
        this.navCtrl.pop();
    }
};
EditOrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
EditOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/edit-order/edit-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-order.page.scss */ "./src/app/orders/edit-order/edit-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], EditOrderPage);



/***/ })

}]);
//# sourceMappingURL=orders-edit-order-edit-order-module-es2015.js.map