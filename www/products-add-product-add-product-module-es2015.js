(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-add-product-add-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/add-product/add-product.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/add-product/add-product.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Add Product\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"addproduct_form\" autocomplete=\"off\">\r\n\r\n    <div class=\"format-div\">\r\n      <img src=\"{{imagePriview ? imagePriview : user_not_found_place_holder}}\" class=\"format-img\" />\r\n    </div>\r\n\r\n    <div class=\"upload-btn-wrapper\">\r\n      <ion-button fill=\"clear\" color=\"primary\" expand=\"full\" class=\"btn\">Add Product Image</ion-button>\r\n      <input type=\"file\" formControlName=\"image\" (change)=\"imageUpload($event)\" accept=\"image/*\" />\r\n    </div>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-item\"\r\n      *ngIf=\"addproduct_form.controls.image.hasError('required') && addproduct_form.controls.image.touched\">\r\n      <p class=\"content error-p\">Please Select Image!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Refrence Number</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.name.hasError('required') && addproduct_form.controls.name.touched\">\r\n      <p class=\"content\">Please Enter Reference Number!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Serial</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"sku\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.sku.hasError('required') && addproduct_form.controls.sku.touched\">\r\n      <p class=\"content\">Please Enter Serial Number!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Price</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"price\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.price.hasError('required') && addproduct_form.controls.price.touched\">\r\n      <p class=\"content\">Please Enter Price!</p>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Qty</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"qty\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.qty.hasError('required') && addproduct_form.controls.qty.touched\">\r\n      <p class=\"content\">Please Enter Quantity!</p>\r\n    </ion-item> -->\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Status</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"qty\" placeholder=\"Select Status\" class=\"btn-select bg\"\r\n        mode=\"md\">\r\n        <ion-select-option value=\"0\">Sold</ion-select-option>\r\n        <ion-select-option value=\"1\">In Stock</ion-select-option>\r\n        <ion-select-option value=\"2\">Consignment</ion-select-option>\r\n        <ion-select-option value=\"3\">For Reparing</ion-select-option>\r\n        <ion-select-option value=\"4\">Mr Rameez Personal Watch</ion-select-option>\r\n        <ion-select-option value=\"5\">Return to Brand</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.qty.hasError('required') && addproduct_form.controls.qty.touched\">\r\n      <p class=\"content\">Please Select Status!</p>\r\n    </ion-item>\r\n\r\n    <!-- CKEditor -->\r\n    <ion-label position=\"stacked\" class=\"input-lbl lbl-add\">Description</ion-label>\r\n    <quill-editor class=\"editor\" formControlName=\"description\" [options]=\"editorOptions\"></quill-editor>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.description.hasError('required') && addproduct_form.controls.description.touched\">\r\n      <p class=\"content\">Please Enter Description!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Items</ion-label>\r\n      <ion-select interface=\"action-sheet\" multiple=\"true\" formControlName=\"brand_id\" placeholder=\"Select Items\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option *ngFor=\"let opt of brand_list\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.brand_id.hasError('required') && addproduct_form.controls.brand_id.touched\">\r\n      <p class=\"content\">Please Select Items!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Category</ion-label>\r\n      <ion-select interface=\"action-sheet\" multiple=\"true\" formControlName=\"category_id\" placeholder=\"Select Category\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option *ngFor=\"let opt of category_list\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.category_id.hasError('required') && addproduct_form.controls.category_id.touched\">\r\n      <p class=\"content\">Please Select Category!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Warehouse</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"store_id\" placeholder=\"Select Warehouse\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option *ngFor=\"let opt of warehouselist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.store_id.hasError('required') && addproduct_form.controls.store_id.touched\">\r\n      <p class=\"content\">Please Select Warehouse!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Availability</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"availability\" placeholder=\"Select Availability\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"1\">Yes</ion-select-option>\r\n        <ion-select-option value=\"2\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"addproduct_form.controls.availability.hasError('required') && addproduct_form.controls.availability.touched\">\r\n      <p class=\"content\">Please Select Availability!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"addProduct()\">\r\n    Save\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/products/add-product/add-product.module.ts":
/*!************************************************************!*\
  !*** ./src/app/products/add-product/add-product.module.ts ***!
  \************************************************************/
/*! exports provided: AddProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product.page */ "./src/app/products/add-product/add-product.page.ts");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");








const routes = [
    {
        path: '',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]
    }
];
let AddProductPageModule = class AddProductPageModule {
};
AddProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__["QuillEditorModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]]
    })
], AddProductPageModule);



/***/ }),

/***/ "./src/app/products/add-product/add-product.page.scss":
/*!************************************************************!*\
  !*** ./src/app/products/add-product/add-product.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-prod {\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.add {\n  margin-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.btn-edit {\n  display: block;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: block;\n}\n\n.format-div .format-img {\n  height: 100px;\n  width: 100px;\n  display: block;\n  margin: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.format-div .format-label {\n  display: block;\n  text-align: center;\n  padding: 8px;\n}\n\n.btn {\n  font-weight: bold;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 38px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.lbl-add {\n  font-weight: bold;\n  color: #888;\n  display: block;\n  margin-top: 15px;\n}\n\n.error-item {\n  text-align: center;\n}\n\n.error-item .error-p {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvcHJvZHVjdHMvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QURjQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDWEo7O0FEbUJJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ2pCUjs7QURvQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDbEJSOztBRHNCQTtFQUVJLGlCQUFBO0FDcEJKOztBRHdCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ3JCSjs7QUR3QkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNyQko7O0FEd0JBO0VBQ0ksa0JBQUE7QUNyQko7O0FEdUJJO0VBQ0ksV0FBQTtBQ3JCUiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWRkLXByb2R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYWRke1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcbi5idG4tZWRpdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi8vIC5pbWctZWRpdHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgICAuYnRuLWVkaXR7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4vLyAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbi8vICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBcclxuLy8gICAgICAgICAuaWNvbi1lZGl0e1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vbWFyZ2luOiAyNXB4IDhweCAwcHggOHB4O1xyXG59XHJcbi5mb3JtYXQtZGl2e1xyXG4gICAgLy8gYm9yZGVyOiAxcHggZG90dGVkICMzODNhM2U7IFxyXG4gICAgLy8gbWFyZ2luOiAxNnB4IDhweCAwcHggOHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHJcbiAgICAuZm9ybWF0LWltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgICAgICB3aWR0aDogMTAwcHg7IFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgICAgICAvL3BhZGRpbmc6IDEwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm1hdC1sYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCAjMzgzYTNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvL21hcmdpbjogOHB4IDBweCAyNHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLmxibC1hZGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZXJyb3ItaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgLmVycm9yLXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCIuYWRkLXByb2Qge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYWRkIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5idG4tZWRpdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm1hdC1kaXYgLmZvcm1hdC1pbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZm9ybWF0LWRpdiAuZm9ybWF0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sYmwtYWRkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmVycm9yLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXJyb3ItaXRlbSAuZXJyb3ItcCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/add-product/add-product.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/products/add-product/add-product.page.ts ***!
  \**********************************************************/
/*! exports provided: AddProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPage", function() { return AddProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");







var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'size': ['small'] }],
    ['blockquote'],
    [{ 'list': 'bullet' }, { 'list': 'ordered' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean'] // remove formatting button
];
let AddProductPage = class AddProductPage {
    constructor(navCtrl, CommonService, router, statusBar, formBuilder) {
        this.navCtrl = navCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.user_not_found_place_holder = 'assets/image/placeholder-s.png';
        this.imgProfileURL = null;
        this.uploadProfileFile = null;
        this.editorContent = '';
        this.editorOptions = {
            placeholder: "Enter Description",
            modules: {
                toolbar: toolbarOptions,
            }
        };
        this.category_list = [];
        this.brand_list = [];
        this.imagePriview = '';
        this.mediaUrl_image = '';
        this.addproduct_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
    }
    ngOnInit() {
        setTimeout(() => {
            this.editorContent = '';
            console.log('you can use the quill instance object to do something', this.editor);
            // this.editor.disable();
        }, 2800);
        this.itemList();
        this.categoryList();
        this.warehouseList();
    }
    itemList() {
        let newArray = [];
        this.CommonService.Itemlist().subscribe(data => {
            this.itemlist = data.data;
            for (let j in this.itemlist) {
                newArray.push({
                    'id': this.itemlist[j].id,
                    'name': this.itemlist[j].name,
                });
            }
            this.brand_list = newArray;
        });
    }
    categoryList() {
        let newArray = [];
        this.CommonService.categorylist().subscribe(data => {
            this.categorylist = data.data;
            for (let j in this.categorylist) {
                newArray.push({
                    'id': this.categorylist[j].id,
                    'name': this.categorylist[j].name,
                });
            }
            this.category_list = newArray;
        });
    }
    warehouseList() {
        this.CommonService.warehouselist().subscribe(data => {
            this.warehouselist = data.data;
        });
    }
    addproduct_fb() {
        this.addproduct_form = this.formBuilder.group({
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sku: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brand_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            store_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            availability: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    addProduct() {
        for (let v in this.addproduct_form.controls) {
            this.addproduct_form.controls[v].markAsTouched();
        }
        if (this.addproduct_form.valid) {
            this.CommonService.presentLoading();
            this.product_process = true;
            const body = new FormData();
            body.append('product_image', this.mediaUrl_image);
            body.append('name', this.addproduct_form.value.name);
            body.append('sku', this.addproduct_form.value.sku);
            body.append('price', this.addproduct_form.value.price);
            body.append('qty', this.addproduct_form.value.qty);
            body.append('description', this.addproduct_form.value.description);
            body.append('brand_id', this.addproduct_form.value.brand_id);
            body.append('category_id', this.addproduct_form.value.category_id);
            body.append('store_id', this.addproduct_form.value.store_id);
            body.append('availability', this.addproduct_form.value.availability);
            // const body = {
            //     "image" : this.addproduct_form.value.image,
            //     "name" : this.addproduct_form.value.name,
            //     "sku" : this.addproduct_form.value.sku,
            //     "price" : this.addproduct_form.value.price,
            //     "qty" : this.addproduct_form.value.qty,
            //     "description" : this.addproduct_form.value.description,
            //     "brand_id" : this.addproduct_form.value.brand_id,
            //     "category_id" : this.addproduct_form.value.category_id,
            //     "store_id" : this.addproduct_form.value.store_id,
            //     "availability" : this.addproduct_form.value.availability,
            // };
            console.log("+++++++add", body);
            this.CommonService.productAdd(body).subscribe(val => {
                this.product_process = false;
                this.CommonService.dismissLoading();
                console.log("check Value", val);
                if (val.status == 1) {
                    this.CommonService.presentToastWithOptions(val.message);
                    this.router.navigate(['/manage-products']);
                }
                else {
                    this.CommonService.presentToastWithOptions(val.message);
                }
            }, err => {
                this.product_process = false;
                this.CommonService.dismissLoading();
                this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    imageUpload(e) {
        console.log("eeee", e);
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                this.imagePriview = e.target.result;
                console.log(" this.imagePriview", this.imagePriview);
            };
            reader.readAsDataURL(e.target.files[0]);
            this.mediaUrl_image = file;
            console.log(" this.mediaUrl_image", this.mediaUrl_image);
        }
    }
};
AddProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/add-product/add-product.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.page.scss */ "./src/app/products/add-product/add-product.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], AddProductPage);



/***/ })

}]);
//# sourceMappingURL=products-add-product-add-product-module-es2015.js.map