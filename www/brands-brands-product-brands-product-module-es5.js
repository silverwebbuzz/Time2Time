(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-product-brands-product-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands-product/brands-product.page.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands-product/brands-product.page.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">\n      Brand Products\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar id=\"searchValue\" color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\">\n    </ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\n    <ion-row class=\"bg-row\">\n      <ion-col size=\"12\" class=\"bg-col\">\n        <ion-label class=\"lbl-result\">About {{brandProd?.length}} Stock</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-brandProducts\">\n\n  <div class=\"blue-background\"></div>\n\n  <div class=\"isEmpty\" *ngIf=\"brandProd?.length < 1\">\n    <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\n  </div>\n\n  <ion-card class=\"card-main\" [ngClass]=\"{'isActive': item.availability == 2 }\"\n    *ngFor=\"let item of brandProd | slice:0:limit\">\n    <ion-row class=\"row-card\" (click)=\"expandItem(item)\">\n      <ion-col size=\"2\" class=\"col-img\">\n        <img *ngIf=\"!item.image\" src=\"{{user_not_found_place_holder}}\" class=\"img-prod\" />\n        <img *ngIf=\"item.image\" src=\"{{imageUrl}}{{item.image}}\" class=\"img-prod\" />\n      </ion-col>\n      <ion-col size=\"8\" class=\"col-lbl\">\n        <ion-label class=\"col-title\">Brand</ion-label>\n        <ion-label class=\"col-value\" *ngFor=\"let cat of item.category_data;let isLast=last\">\n          {{cat.name}}{{isLast ? '' : ' ,'}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col-edit\">\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\n          <ion-icon name=\"arrow-down\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-card\">\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"10\" class=\"col-lbl\">\n        <ion-label class=\"col-title\">Refrence Number</ion-label>\n        <ion-label class=\"col-value\">{{item.name}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ng-container *ngIf=\"item.expanded\">\n      <ion-card-content class=\"main-card-content\">\n        <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded\">\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n            </ion-col>\n            <ion-col size=\"10\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Serial</ion-label>\n              <ion-label class=\"col-value\">{{item?.sku ? item?.sku : '-'}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n              <!-- <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\" (click)=\"edit(item.id)\">\n              <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n            </ion-button> -->\n            </ion-col>\n            <ion-col size=\"5\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Currency</ion-label>\n              <ion-label class=\"col-value\">{{item?.currency ? item?.currency : '-'}}</ion-label>\n            </ion-col>\n            <ion-col size=\"5\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Price</ion-label>\n              <ion-label class=\"col-value\">{{item?.price ? item?.price : '-'}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n              <!-- <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"edit\"\n                (click)=\"edit(item.id)\">\n                <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n              </ion-button> -->\n            </ion-col>\n            <ion-col size=\"10\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Status</ion-label>\n              <ion-label class=\"col-value\">\n                <ng-container *ngIf=\"item.qty == 0\">In Stock</ng-container>\n                <ng-container *ngIf=\"item.qty == 1\">Sold</ng-container>\n                <ng-container *ngIf=\"item.qty == 2\">Consignment</ng-container>\n                <ng-container *ngIf=\"item.qty == 3\">For Reparing</ng-container>\n                <ng-container *ngIf=\"item.qty == 4\">Mr Rameez Personal Watch</ng-container>\n                <ng-container *ngIf=\"item.qty == 5\">Return to Brand</ng-container>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row-card\">\n            <ion-col size=\"2\" class=\"col-lbl\">\n              <!-- <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"dlt\"\n                (click)=\"delete(item.id)\">\n                <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\n              </ion-button> -->\n            </ion-col>\n            <ion-col size=\"10\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Warehouse</ion-label>\n              <ion-label class=\"col-value\">{{item?.store_name ? item?.store_name : '-'}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </app-expandable>\n      </ion-card-content>\n    </ng-container>\n  </ion-card>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/brands/brands-product/brands-product-routing.module.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/brands/brands-product/brands-product-routing.module.ts ***!
          \************************************************************************/
        /*! exports provided: BrandsProductPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsProductPageRoutingModule", function () { return BrandsProductPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _brands_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brands-product.page */ "./src/app/brands/brands-product/brands-product.page.ts");
            var routes = [
                {
                    path: '',
                    component: _brands_product_page__WEBPACK_IMPORTED_MODULE_3__["BrandsProductPage"]
                }
            ];
            var BrandsProductPageRoutingModule = /** @class */ (function () {
                function BrandsProductPageRoutingModule() {
                }
                return BrandsProductPageRoutingModule;
            }());
            BrandsProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], BrandsProductPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/brands/brands-product/brands-product.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/brands/brands-product/brands-product.module.ts ***!
          \****************************************************************/
        /*! exports provided: BrandsProductPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsProductPageModule", function () { return BrandsProductPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _brands_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brands-product-routing.module */ "./src/app/brands/brands-product/brands-product-routing.module.ts");
            /* harmony import */ var _brands_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brands-product.page */ "./src/app/brands/brands-product/brands-product.page.ts");
            /* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");
            var BrandsProductPageModule = /** @class */ (function () {
                function BrandsProductPageModule() {
                }
                return BrandsProductPageModule;
            }());
            BrandsProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_7__["ExpandableModule"],
                        _brands_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrandsProductPageRoutingModule"]
                    ],
                    declarations: [_brands_product_page__WEBPACK_IMPORTED_MODULE_6__["BrandsProductPage"]]
                })
            ], BrandsProductPageModule);
            /***/ 
        }),
        /***/ "./src/app/brands/brands-product/brands-product.page.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/brands/brands-product/brands-product.page.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-filter {\n  font-size: 20px;\n  margin-right: 8px;\n}\n\n.page-brandProducts {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .bg-row {\n  margin: 0px 16px;\n}\n\n.lbl-tool-result .bg-row .bg-col {\n  padding: 0px;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-result {\n  display: block;\n  text-align: left;\n  color: #fff;\n  font-size: 18px;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-btn {\n  margin: 0px;\n  --background-activated: none;\n  border: 1px solid #ccc;\n}\n\n.lbl-tool-result .bg-row .bg-col .lbl-btn .lbl-icon {\n  font-size: 24px;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.add-up {\n  line-height: 1.2;\n  text-align: right;\n}\n\n.card-main {\n  padding: 5px;\n  border-left: 5px solid var(--ion-color-success-shade);\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-img {\n  padding: 0px;\n}\n\n.card-main .col-img .img-prod {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.card-main .row-card {\n  padding-top: 2px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-edit .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --background-activated: var(--ion-color-danger-tint);\n  --border-radius: 0px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.isActive {\n  border-left: 5px solid var(--ion-color-dark-shade) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvYnJhbmRzL2JyYW5kcy1wcm9kdWN0L2JyYW5kcy1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnJhbmRzL2JyYW5kcy1wcm9kdWN0L2JyYW5kcy1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEk7RUFDSSxnQkFBQTtBQ09SOztBRExRO0VBQ0ksWUFBQTtBQ09aOztBRExZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUNNaEI7O0FERlk7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0loQjs7QURGZ0I7RUFDSSxlQUFBO0FDSXBCOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURESTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7QUNHUjs7QURBSTtFQUNJLFlBQUE7QUNFUjs7QURBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFWjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FERVE7RUFDSSx3QkFBQTtBQ0FaOztBREVZO0VBQ0ksZ0JBQUE7RUFFQSxlQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hoQjs7QURNWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNKaEI7O0FEYUk7RUFFSSxpQkFBQTtBQ1pSOztBRGNRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFJQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNmWjs7QURpQlE7RUFDSSwyQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7QUNmWjs7QURtQkk7RUFDSSxZQUFBO0FDakJSOztBRHFCSTtFQUNJLFlBQUE7QUNuQlI7O0FEcUJRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ3BCWjs7QURzQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDckJaOztBRDZCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUMxQko7O0FENEJBO0VBQ0ksNkRBQUE7QUN6QkoiLCJmaWxlIjoic3JjL2FwcC9icmFuZHMvYnJhbmRzLXByb2R1Y3QvYnJhbmRzLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1maWx0ZXJ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnBhZ2UtYnJhbmRQcm9kdWN0c3tcbiAgICAtLWJhY2tncm91bmQ6ICNmYWY4Zjg7XG59XG4uYnRuLXRvcHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNmVtO1xuICAgIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xuICAgIG1hcmdpbjogMHB4IDE3cHg7XG59XG4uYnRuLWZhYntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5idG4tZXh0e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idG4tdG9wLWFkZHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbn1cbi5sYmwtdG9vbC1yZXN1bHR7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgXG4gICAgLmJnLXJvd3tcbiAgICAgICAgbWFyZ2luOiAwcHggMTZweDtcblxuICAgICAgICAuYmctY29se1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAgICAgICAubGJsLXJlc3VsdHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgLy9saW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxibC1idG57XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgICAgICAgICAgICAgLmxibC1pY29ue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmJsdWUtYmFja2dyb3VuZHtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG4uYWRkLXVwe1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyZC1tYWlue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKSAgIDtcbiAgICBtYXJnaW46IDEwcHg7IFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2NjO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgbWFyZ2luLXRvcDotMjRweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xuICAgIH1cblxuICAgIC5jb2wtaW1ne1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgLmltZy1wcm9ke1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucm93LWNhcmR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG5cbiAgICAgICAgLmNvbC1sYmx7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG4gICAgXG4gICAgICAgICAgICAuY29sLXRpdGxle1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgICAgICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuY29sLXZhbHVle1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0ZTRkNGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLmJhZGdlLXN0YXR1c3tcbiAgICAvLyAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xuICAgIC8vIH1cblxuICAgIC5jb2wtZWRpdHtcbiAgICAgICAgLy9wYWRkaW5nOiAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgIC5idG4tZWRpdHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgICAgIC8vIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG4tZGx0e1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCk7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY29sLWRsdHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAgIFxuICAgIH1cbiAgICAubWFpbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgICAuZWRpdHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgfVxuICAgICAgICAuZGx0e1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbi8vIC5idG4tZmFie1xuLy8gICAgIGZvbnQtc2l6ZTogMjJweDtcbi8vIH1cbi5idG4tZm9vdGVye1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufVxuLmlzQWN0aXZle1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgLy8gY29sb3I6I2ZmZjtcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcbn0iLCIuYnRuLWZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5wYWdlLWJyYW5kUHJvZHVjdHMge1xuICAtLWJhY2tncm91bmQ6ICNmYWY4Zjg7XG59XG5cbi5idG4tdG9wIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMC42ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xuICBtYXJnaW46IDBweCAxN3B4O1xufVxuXG4uYnRuLWZhYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmJ0bi1leHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG4tdG9wLWFkZCB7XG4gIC0tcGFkZGluZy1zdGFydDogMWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbn1cblxuLmxibC10b29sLXJlc3VsdCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmxibC10b29sLXJlc3VsdCAuYmctcm93IHtcbiAgbWFyZ2luOiAwcHggMTZweDtcbn1cbi5sYmwtdG9vbC1yZXN1bHQgLmJnLXJvdyAuYmctY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmxibC10b29sLXJlc3VsdCAuYmctcm93IC5iZy1jb2wgLmxibC1yZXN1bHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5sYmwtdG9vbC1yZXN1bHQgLmJnLXJvdyAuYmctY29sIC5sYmwtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4ubGJsLXRvb2wtcmVzdWx0IC5iZy1yb3cgLmJnLWNvbCAubGJsLWJ0biAubGJsLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5ibHVlLWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hZGQtdXAge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhcmQtbWFpbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2FyZC1tYWluOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAtNHB4ICNjY2M7XG59XG4uY2FyZC1tYWluIC5jb2wtaW1nIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWltZyAuaW1nLXByb2Qge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCB7XG4gIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIC5jb2wtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCAuY29sLXZhbHVlIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgY29sb3I6ICM0ZTRkNGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWRsdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCk7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWRsdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQgLmVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAuZGx0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmJ0bi1mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufVxuXG4uaXNBY3RpdmUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/brands/brands-product/brands-product.page.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/brands/brands-product/brands-product.page.ts ***!
          \**************************************************************/
        /*! exports provided: BrandsProductPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsProductPage", function () { return BrandsProductPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
            var BrandsProductPage = /** @class */ (function () {
                function BrandsProductPage(navCtrl, CommonService, router, statusBar, route) {
                    var _this = this;
                    this.navCtrl = navCtrl;
                    this.CommonService = CommonService;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.route = route;
                    this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
                    this.user_not_found_place_holder = 'assets/image/placeholder-s.png';
                    this.limit = 50;
                    this.brandProducts = [];
                    this.brandProd = [];
                    this.resp = [];
                    this.route.queryParams.subscribe(function (params) {
                        console.log("testing", params.brandid);
                        _this.brandid = params.brandid;
                    });
                }
                BrandsProductPage.prototype.ngOnInit = function () {
                };
                BrandsProductPage.prototype.back = function () {
                    console.log('back');
                    this.navCtrl.pop();
                };
                BrandsProductPage.prototype.expandItem = function (item) {
                    console.log("item", item);
                    if (item.expanded) {
                        item.expanded = false;
                    }
                    else {
                        this.brandProd.map(function (listItem) {
                            if (item == listItem) {
                                listItem.expanded = !listItem.expanded;
                            }
                            else {
                                listItem.expanded = false;
                            }
                            return listItem;
                        });
                    }
                };
                BrandsProductPage.prototype.searchBar = function (value) {
                    console.log("value", value);
                    var searchList = this.brandProd;
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
                    this.brandProd = searchList;
                };
                BrandsProductPage.prototype.ionViewWillEnter = function () {
                    var _this = this;
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                    this.CommonService.presentLoading();
                    this.CommonService.brandProducts(this.brandid)
                        .subscribe(function (resp) {
                        console.log("brandData", resp);
                        _this.resp = resp;
                        _this.brandProd = resp.data;
                        console.log("brandProd", _this.brandProd);
                        _this.CommonService.dismissLoading();
                    });
                };
                BrandsProductPage.prototype.isActive = function (val) {
                    if (val == 1) {
                        return 'Active';
                    }
                    else {
                        return 'Inactive';
                    }
                };
                BrandsProductPage.prototype.loadData = function (infiniteScroll) {
                    var _this = this;
                    setTimeout(function () {
                        _this.limit += 50;
                        infiniteScroll.target.complete();
                    }, 500);
                };
                return BrandsProductPage;
            }());
            BrandsProductPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
            ], BrandsProductPage.prototype, "infiniteScroll", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportContent', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], BrandsProductPage.prototype, "reportContent", void 0);
            BrandsProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-brands-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./brands-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands-product/brands-product.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./brands-product.page.scss */ "./src/app/brands/brands-product/brands-product.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
            ], BrandsProductPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=brands-brands-product-brands-product-module-es2015.js.map
//# sourceMappingURL=brands-brands-product-brands-product-module-es5.js.map
//# sourceMappingURL=brands-brands-product-brands-product-module-es5.js.map