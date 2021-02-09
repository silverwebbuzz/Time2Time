(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-edit-product-edit-product-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit-product/edit-product.page.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit-product/edit-product.page.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Edit Product\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"editproduct_form\" autocomplete=\"off\">\r\n\r\n    <div class=\"format-div\">\r\n      <img *ngIf=\"!select_product_image\" src=\"{{user_not_found_place_holder}}\" class=\"format-img\" />\r\n      <img *ngIf=\"select_product_image\"\r\n        src=\"{{mediaUrl_image ? select_product_image : imageUrl + select_product_image}}\" class=\"format-img\" />\r\n    </div>\r\n\r\n    <div class=\"upload-btn-wrapper\">\r\n      <ion-button fill=\"clear\" color=\"primary\" expand=\"full\" class=\"btn\">Edit Product Image</ion-button>\r\n      <input type=\"file\" formControlName=\"image\" (change)=\"imageUpload($event)\" accept=\"image/*\" />\r\n    </div>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-item\"\r\n      *ngIf=\"editproduct_form.controls.image.hasError('required') && editproduct_form.controls.image.touched\">\r\n      <p class=\"content error-p\">Please Select Image!</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Refrence Number</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.name.hasError('required') && editproduct_form.controls.name.touched\">\r\n      <p class=\"content\">Please Enter Reference Number!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Serial</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"sku\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.sku.hasError('required') && editproduct_form.controls.sku.touched\">\r\n      <p class=\"content\">Please Enter Serial Number!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Price</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"price\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.price.hasError('required') && editproduct_form.controls.price.touched\">\r\n      <p class=\"content\">Please Enter Price!</p>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item lines=\"none\" class=\"input-item add\">\r\n    <ion-label position=\"stacked\" class=\"input-lbl\">Qty</ion-label>\r\n    <ion-input type=\"text\" formControlName=\"qty\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.qty.hasError('required') && editproduct_form.controls.qty.touched\">\r\n      <p class=\"content\">Please Enter Quantity!</p>\r\n    </ion-item> -->\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Status</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"qty\" placeholder=\"Select Status\" class=\"btn-select bg\"\r\n        mode=\"md\">\r\n        <ion-select-option value=\"0\">Sold</ion-select-option>\r\n        <ion-select-option value=\"1\">In Stock</ion-select-option>\r\n        <ion-select-option value=\"2\">Consignment</ion-select-option>\r\n        <ion-select-option value=\"3\">For Reparing</ion-select-option>\r\n        <ion-select-option value=\"4\">Mr Rameez Personal Watch</ion-select-option>\r\n        <ion-select-option value=\"5\">Return to Brand</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.qty.hasError('required') && editproduct_form.controls.qty.touched\">\r\n      <p class=\"content\">Please Select Status!</p>\r\n    </ion-item>\r\n\r\n    <!-- CKEditor -->\r\n    <ion-label position=\"stacked\" class=\"input-lbl lbl-add\">Description</ion-label>\r\n    <quill-editor class=\"editor\" formControlName=\"description\" [options]=\"editorOptions\"></quill-editor>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.description.hasError('required') && editproduct_form.controls.description.touched\">\r\n      <p class=\"content\">Please Enter Description!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Items</ion-label>\r\n      <ion-select interface=\"action-sheet\" multiple=\"true\" formControlName=\"brand_id\" placeholder=\"Select Items\"\r\n        class=\"btn-select bg\" mode=\"md\" [(ngModel)]=\"selectedbrand\">\r\n        <ion-select-option *ngFor=\"let opt of brand_list\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Pipe or Plumbing fitting\">ABC</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.brand_id.hasError('required') && editproduct_form.controls.brand_id.touched\">\r\n      <p class=\"content\">Please Select Items!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Category</ion-label>\r\n      <ion-select interface=\"action-sheet\" multiple=\"true\" formControlName=\"category_id\" placeholder=\"Select Category\"\r\n        class=\"btn-select bg\" mode=\"md\" [(ngModel)]=\"selectedcategory\">\r\n        <ion-select-option *ngFor=\"let opt of category_list\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\r\n\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.category_id.hasError('required') && editproduct_form.controls.category_id.touched\">\r\n      <p class=\"content\">Please Select Category!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Warehouse</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"store_id\" placeholder=\"Select Warehouse\"\r\n        class=\"btn-select bg\" mode=\"md\" [(ngModel)]=\"warehouseselect\">\r\n        <ion-select-option *ngFor=\"let opt of warehouselist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.store_id.hasError('required') && editproduct_form.controls.store_id.touched\">\r\n      <p class=\"content\">Please Select Warehouse!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Availability</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"availability\" placeholder=\"Select Availability\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"1\" *ngIf=\"Availability\">Yes</ion-select-option>\r\n        <ion-select-option value=\"2\">No</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editproduct_form.controls.availability.hasError('required') && editproduct_form.controls.availability.touched\">\r\n      <p class=\"content\">Please Select Availability!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"editProduct()\">\r\n    Update\r\n  </ion-button>\r\n</ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/products/edit-product/edit-product-routing.module.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/products/edit-product/edit-product-routing.module.ts ***!
          \**********************************************************************/
        /*! exports provided: EditProductPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPageRoutingModule", function () { return EditProductPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _edit_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-product.page */ "./src/app/products/edit-product/edit-product.page.ts");
            var routes = [
                {
                    path: '',
                    component: _edit_product_page__WEBPACK_IMPORTED_MODULE_3__["EditProductPage"]
                }
            ];
            var EditProductPageRoutingModule = /** @class */ (function () {
                function EditProductPageRoutingModule() {
                }
                return EditProductPageRoutingModule;
            }());
            EditProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], EditProductPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/products/edit-product/edit-product.module.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/products/edit-product/edit-product.module.ts ***!
          \**************************************************************/
        /*! exports provided: EditProductPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPageModule", function () { return EditProductPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-product-routing.module */ "./src/app/products/edit-product/edit-product-routing.module.ts");
            /* harmony import */ var _edit_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-product.page */ "./src/app/products/edit-product/edit-product.page.ts");
            /* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
            var EditProductPageModule = /** @class */ (function () {
                function EditProductPageModule() {
                }
                return EditProductPageModule;
            }());
            EditProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__["QuillEditorModule"],
                        _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProductPageRoutingModule"]
                    ],
                    declarations: [_edit_product_page__WEBPACK_IMPORTED_MODULE_6__["EditProductPage"]]
                })
            ], EditProductPageModule);
            /***/ 
        }),
        /***/ "./src/app/products/edit-product/edit-product.page.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/products/edit-product/edit-product.page.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add-prod {\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.add {\n  margin-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.btn-edit {\n  display: block;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: block;\n}\n\n.format-div .format-img {\n  height: 100px;\n  width: 100px;\n  display: block;\n  margin: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.format-div .format-label {\n  display: block;\n  text-align: center;\n  padding: 8px;\n}\n\n.btn {\n  font-weight: bold;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 38px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.lbl-add {\n  font-weight: bold;\n  color: #888;\n  display: block;\n  margin-top: 15px;\n}\n\n.error-item {\n  text-align: center;\n}\n\n.error-item .error-p {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvcHJvZHVjdHMvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBRElJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBREtJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0hSOztBRE9BO0VBRUksaUJBQUE7QUNMSjs7QURTRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ05KOztBRFNFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtBQ05KOztBRFFJO0VBQ0ksV0FBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXByb2R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYWRke1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcbi5idG4tZWRpdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vbWFyZ2luOiAyNXB4IDhweCAwcHggOHB4O1xyXG59XHJcbi5mb3JtYXQtZGl2e1xyXG4gICAgLy8gYm9yZGVyOiAxcHggZG90dGVkICMzODNhM2U7IFxyXG4gICAgLy8gbWFyZ2luOiAxNnB4IDhweCAwcHggOHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHJcbiAgICAuZm9ybWF0LWltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgICAgICB3aWR0aDogMTAwcHg7IFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgICAgICAvL3BhZGRpbmc6IDEwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm1hdC1sYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCAjMzgzYTNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvL21hcmdpbjogOHB4IDBweCAyNHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLmxibC1hZGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZXJyb3ItaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgLmVycm9yLXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCIuYWRkLXByb2Qge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYWRkIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5idG4tZWRpdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm1hdC1kaXYgLmZvcm1hdC1pbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZm9ybWF0LWRpdiAuZm9ybWF0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sYmwtYWRkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmVycm9yLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXJyb3ItaXRlbSAuZXJyb3ItcCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/products/edit-product/edit-product.page.ts": 
        /*!************************************************************!*\
          !*** ./src/app/products/edit-product/edit-product.page.ts ***!
          \************************************************************/
        /*! exports provided: EditProductPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPage", function () { return EditProductPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
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
            var EditProductPage = /** @class */ (function () {
                function EditProductPage(navCtrl, CommonService, router, statusBar, route, formBuilder) {
                    this.navCtrl = navCtrl;
                    this.CommonService = CommonService;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.route = route;
                    this.formBuilder = formBuilder;
                    this.user_not_found_place_holder = 'assets/image/placeholder-s.png';
                    this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
                    this.editorContent = '';
                    this.editorOptions = {
                        placeholder: "Enter Description",
                        modules: {
                            toolbar: toolbarOptions,
                        }
                    };
                    this.data = [];
                    this.select = [];
                    this.category = [];
                    this.category_list = [];
                    this.brand = [];
                    this.brand_list = [];
                    this.mediaUrl_image = '';
                    this.editproduct_fb();
                }
                EditProductPage.prototype.ionViewWillEnter = function () {
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                };
                EditProductPage.prototype.Availability = function (val) {
                    if (val == 1) {
                        return 'Yes';
                    }
                    else {
                        return 'No';
                    }
                };
                EditProductPage.prototype.ngOnInit = function () {
                    var _this = this;
                    var reqData = this.route.snapshot.queryParams;
                    this.productDetails(reqData);
                    setTimeout(function () {
                        _this.editorContent = '';
                        console.log('you can use the quill instance object to do something', _this.editor);
                        // this.editor.disable();
                    }, 2800);
                };
                EditProductPage.prototype.editproduct_fb = function () {
                    this.editproduct_form = this.formBuilder.group({
                        image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        sku: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        brand_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        category_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        store_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        availability: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    });
                };
                EditProductPage.prototype.productDetails = function (reqData) {
                    var _this = this;
                    var newarray = [];
                    var brand = [];
                    this.CommonService.productGet(reqData).subscribe(function (res) {
                        _this.productData = res.data;
                        console.log("::::::", _this.productData);
                        _this.category = _this.productData.categorys_data;
                        _this.warehouseselect = _this.productData.store_name;
                        var categorydata = _this.category;
                        for (var j in categorydata) {
                            newarray.push(categorydata[j].id);
                        }
                        _this.selectedcategory = newarray;
                        _this.brand = _this.productData.brand_data;
                        var branddata = _this.brand;
                        for (var j in branddata) {
                            brand.push(branddata[j].id);
                        }
                        _this.selectedbrand = brand;
                        _this.editproduct_form.patchValue({
                            name: _this.productData.name,
                            sku: _this.productData.sku,
                            price: _this.productData.price,
                            qty: _this.productData.qty,
                            description: _this.productData.description,
                            brand_id: _this.selectedbrand,
                            store_id: _this.productData.store_id,
                            category_id: _this.selectedcategory,
                            availability: _this.productData.availability,
                        });
                        _this.select_product_image = _this.productData.image;
                    }, function (error) {
                    });
                    this.itemList();
                    this.categoryList();
                    this.warehouseList();
                };
                EditProductPage.prototype.itemList = function () {
                    var _this = this;
                    var newArray = [];
                    this.CommonService.Itemlist().subscribe(function (data) {
                        _this.itemlist = data.data;
                        for (var j in _this.itemlist) {
                            newArray.push({
                                'id': _this.itemlist[j].id,
                                'name': _this.itemlist[j].name,
                            });
                        }
                        _this.brand_list = newArray;
                    });
                };
                EditProductPage.prototype.categoryList = function () {
                    var _this = this;
                    var newArray = [];
                    this.CommonService.categorylist().subscribe(function (data) {
                        _this.categorylist = data.data;
                        for (var j in _this.categorylist) {
                            newArray.push({
                                'id': _this.categorylist[j].id,
                                'name': _this.categorylist[j].name,
                            });
                        }
                        _this.category_list = newArray;
                    });
                };
                EditProductPage.prototype.warehouseList = function () {
                    var _this = this;
                    this.CommonService.warehouselist().subscribe(function (data) {
                        _this.warehouselist = data.data;
                    });
                };
                EditProductPage.prototype.imageUpload = function (e) {
                    var _this = this;
                    var file = e.target.files[0];
                    if (file) {
                        var reader = new FileReader();
                        reader.onloadend = function (e) {
                            _this.select_product_image = e.target.result;
                        };
                        reader.readAsDataURL(e.target.files[0]);
                        this.mediaUrl_image = file;
                    }
                };
                EditProductPage.prototype.editProduct = function () {
                    var _this = this;
                    for (var v in this.editproduct_form.controls) {
                        this.editproduct_form.controls[v].markAsTouched();
                    }
                    if (this.editproduct_form.valid) {
                        this.CommonService.presentLoading();
                        this.product_process = true;
                        var body = new FormData();
                        body.append('product_image', this.mediaUrl_image);
                        body.append('name', this.editproduct_form.value.name);
                        body.append('sku', this.editproduct_form.value.sku);
                        body.append('price', this.editproduct_form.value.price);
                        body.append('qty', this.editproduct_form.value.qty);
                        body.append('description', this.editproduct_form.value.description);
                        body.append('brand_id', this.editproduct_form.value.brand_id);
                        body.append('category_id', this.editproduct_form.value.category_id);
                        body.append('store_id', this.editproduct_form.value.store_id);
                        body.append('availability', this.editproduct_form.value.availability);
                        body.append('id', this.route.snapshot.queryParams.id);
                        // const body = {
                        //   "image": this.editproduct_form.value.image,
                        //   "name": this.editproduct_form.value.name,
                        //   "sku": this.editproduct_form.value.sku,
                        //   "price": this.editproduct_form.value.price,
                        //   "qty": this.editproduct_form.value.qty,
                        //   "description": this.editproduct_form.value.description,
                        //   "brand_id": this.editproduct_form.value.brand_id,
                        //   "category_id": this.editproduct_form.value.category_id,
                        //   "store_id": this.editproduct_form.value.store_id,
                        //   "availability": this.editproduct_form.value.availability,
                        //   "id": this.route.snapshot.queryParams.id,
                        // };
                        console.log("body", body);
                        this.CommonService.productEdit(body).subscribe(function (val) {
                            _this.product_process = false;
                            _this.CommonService.dismissLoading();
                            if (val.status == 1) {
                                _this.CommonService.dismissLoading();
                                _this.CommonService.presentToastWithOptions(val.message);
                                _this.router.navigate(['/manage-products']);
                            }
                            else {
                                _this.CommonService.presentToastWithOptions(val.message);
                            }
                        }, function (err) {
                            _this.product_process = false;
                            _this.CommonService.dismissLoading();
                            _this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                        });
                    }
                };
                EditProductPage.prototype.back = function () {
                    this.navCtrl.pop();
                };
                return EditProductPage;
            }());
            EditProductPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            EditProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit-product/edit-product.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-product.page.scss */ "./src/app/products/edit-product/edit-product.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
            ], EditProductPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=products-edit-product-edit-product-module-es2015.js.map
//# sourceMappingURL=products-edit-product-edit-product-module-es5.js.map
//# sourceMappingURL=products-edit-product-edit-product-module-es5.js.map