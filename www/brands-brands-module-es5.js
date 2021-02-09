var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands.page.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands.page.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      BRANDS\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-label class=\"lbl-result\">About {{brand?.length}} results</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-brands\">\r\n\r\n  <div class=\"blue-background\">\r\n    <!-- <ion-button color=\"light\" class=\"btn-top\">\r\n      <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n      <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab btn-ext\"></fa-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n      <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab btn-ext\"></fa-icon>\r\n    </ion-button>\r\n    <ion-button color=\"light\" class=\"btn-top\">\r\n      <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n    </ion-button> -->\r\n  </div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"brand?.length == 0\">\r\n    <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n  </div>\r\n\r\n  <ion-card class=\"card-main\" [ngClass]=\"{'isActive': opt.active == 2 }\" *ngFor=\"let opt of brand | slice:0:limit;\">\r\n    <ion-row>\r\n      <ion-col size=\"7\" (click)=\"brandProducts(opt.id)\">\r\n        <ion-label class=\"col-title\">Brand name</ion-label>\r\n        <ion-label class=\"col-value\">{{opt.name}}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n        <ion-label class=\"col-title spc\">Stock</ion-label>\r\n        <ion-label class=\"col-value spc\">{{opt.total_stock}}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"col-edit\">\r\n        <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"btn-edit\"\r\n          (click)=\"edit(opt.id)\">\r\n          <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button [hidden]=\"permission == 'client1'\" size=\"small\" fill=\"clear\" class=\"btn-dlt\"\r\n          (click)=\"delete(opt.id)\">\r\n          <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-label class=\"col-title\">Stock</ion-label>\r\n        <ion-label class=\"col-value\">106</ion-label>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-card>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n    <!-- <ion-fab-list side=\"top\">\r\n      <ion-fab-button class=\"btn-fabs\">\r\n        <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button class=\"btn-fabs\">\r\n        <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab\"></fa-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button class=\"btn-fabs\">\r\n        <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab\"></fa-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button class=\"btn-fabs\">\r\n        <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list> -->\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button [hidden]=\"permission == 'client1'\" expand=\"full\" class=\"btn-footer\" routerLink=\"/add-brand\">\r\n    Add Brand\r\n  </ion-button>\r\n</ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/brands/brands.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/brands/brands.module.ts ***!
          \*****************************************/
        /*! exports provided: BrandsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsPageModule", function () { return BrandsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _brands_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brands.page */ "./src/app/brands/brands.page.ts");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            var routes = [
                {
                    path: '',
                    component: _brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]
                },
            ];
            var BrandsPageModule = /** @class */ (function () {
                function BrandsPageModule() {
                }
                return BrandsPageModule;
            }());
            BrandsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    ],
                    declarations: [_brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]]
                })
            ], BrandsPageModule);
            /***/ 
        }),
        /***/ "./src/app/brands/brands.page.scss": 
        /*!*****************************************!*\
          !*** ./src/app/brands/brands.page.scss ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".page-brands {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .lbl-result {\n  display: block;\n  text-align: left;\n  padding-left: 16px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.card-main {\n  border-left: 5px solid var(--ion-color-success-shade);\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n  padding: 2px;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-title {\n  padding: 0px 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .col-value {\n  padding: 0px 4px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card-main .col-edit {\n  text-align: right;\n  line-height: 1.6;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 4px 0px 0px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .col-edit .btn-dlt {\n  margin: 0px 0px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border: 1px solid;\n  border-radius: 50%;\n}\n\n.col-dlt {\n  padding: 0px;\n}\n\n.isActive {\n  border-left: 5px solid var(--ion-color-dark-shade) !important;\n}\n\n.spc {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvYnJhbmRzL2JyYW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JyYW5kcy9icmFuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDT1I7O0FESkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDT0o7O0FESkE7RUFFSSxxREFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpJO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtBQ01SOztBREpJO0VBQ0ksZ0JBQUE7RUFFQSxlQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRFNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDUFI7O0FEY0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDWlI7O0FEZVE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ2RaOztBRGlCWTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNoQmhCOztBRHFCSTtFQUNJLFlBQUE7QUNsQlI7O0FEcUJJO0VBQ1EsNkRBQUE7QUNsQlo7O0FEdUJJO0VBQ0ksdUJBQUE7QUNwQlIiLCJmaWxlIjoic3JjL2FwcC9icmFuZHMvYnJhbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWJyYW5kc3tcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcclxufVxyXG4uYnRuLXRvcHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xyXG4gICAgbWFyZ2luOiAwcHggMTdweDtcclxufVxyXG4uYnRuLWZhYntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmJ0bi1leHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bi10b3AtYWRke1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcclxufVxyXG4uYmx1ZS1iYWNrZ3JvdW5ke1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5sYmwtdG9vbC1yZXN1bHR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIFxyXG4gICAgLmxibC1yZXN1bHR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZC1tYWlue1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKSAgIDtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NjYztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMjRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAtNHB4ICNjY2M7XHJcbiAgICB9XHJcbiAgICAuY29sLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIC8vbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgLy8gcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgLy8gLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIC8vIC8vbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtdmFsdWV7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICBjb2xvcjogIzRlNGQ0ZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmJhZGdlLXN0YXR1c3tcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLmNvbC1lZGl0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7IFxyXG4gICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgLmJ0bi1lZGl0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA0cHggMHB4IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4tZGx0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgICAgICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIC5jb2wtZGx0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlzQWN0aXZle1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvLyBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bje1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfSIsIi5wYWdlLWJyYW5kcyB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcbn1cblxuLmJ0bi10b3Age1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC42ZW07XG4gIG1hcmdpbjogMHB4IDE3cHg7XG59XG5cbi5idG4tZmFiIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uYnRuLWV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bi10b3AtYWRkIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubGJsLXRvb2wtcmVzdWx0IHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59XG4ubGJsLXRvb2wtcmVzdWx0IC5sYmwtcmVzdWx0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ0bi1mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufVxuXG4uY2FyZC1tYWluIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5jYXJkLW1haW46bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IC00cHggI2NjYztcbn1cbi5jYXJkLW1haW4gLmNvbC10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkLW1haW4gLmNvbC12YWx1ZSB7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjNGU0ZDRkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQgLmJ0bi1lZGl0IHtcbiAgbWFyZ2luOiAwcHggNHB4IDBweCAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWRsdCB7XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb2wtZGx0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaXNBY3RpdmUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKSAhaW1wb3J0YW50O1xufVxuXG4uc3BjIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/brands/brands.page.ts": 
        /*!***************************************!*\
          !*** ./src/app/brands/brands.page.ts ***!
          \***************************************/
        /*! exports provided: BrandsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsPage", function () { return BrandsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
            /* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/config */ "./src/config.ts");
            // import { File } from '@ionic-native/file';
            var BrandsPage = /** @class */ (function () {
                function BrandsPage(alertCtrl, CommonService, router, platform, socialSharing, statusBar, 
                // private file: File,
                storage) {
                    this.alertCtrl = alertCtrl;
                    this.CommonService = CommonService;
                    this.router = router;
                    this.platform = platform;
                    this.socialSharing = socialSharing;
                    this.statusBar = statusBar;
                    this.storage = storage;
                    this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"](false);
                    // message = 'Check out the PDF!';
                    // url = 'http://google.com/';
                    this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCopy"];
                    this.faFileCsv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileCsv"];
                    this.faFileExcel = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileExcel"];
                    this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPrint"];
                    this.resp = [];
                    this.data = [];
                    this.limit = 50;
                    this.checkToken();
                }
                BrandsPage.prototype.isActive = function (val) {
                    if (val == 1) {
                        return 'Active';
                    }
                    else {
                        return 'Inactive';
                    }
                };
                BrandsPage.prototype.checkToken = function () {
                    var _this = this;
                    return this.storage.get(src_config__WEBPACK_IMPORTED_MODULE_14__["USER_DETAILS"]).then(function (res) {
                        if (res) {
                            _this.permission = res.userPermission.group_name;
                            console.log("::::::", res.userPermission.group_name);
                        }
                    });
                };
                BrandsPage.prototype.searchBar = function (value) {
                    var searchList = this.brand;
                    if (value) {
                        searchList = lodash__WEBPACK_IMPORTED_MODULE_11__["filter"](searchList, function (x) {
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
                    this.brand = searchList;
                };
                BrandsPage.prototype.ionViewWillEnter = function () {
                    var _this = this;
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                    this.CommonService.presentLoading();
                    this.CommonService.brandList()
                        .subscribe(function (resp) {
                        _this.resp = resp;
                        _this.brand = resp.data;
                        console.log(_this.brand);
                        _this.CommonService.dismissLoading();
                    });
                };
                BrandsPage.prototype.loadData = function (infiniteScroll) {
                    var _this = this;
                    setTimeout(function () {
                        _this.limit += 50;
                        infiniteScroll.target.complete();
                    }, 500);
                };
                BrandsPage.prototype.edit = function (id) {
                    this.router.navigate(['/edit-brand'], { queryParams: { id: id } });
                };
                BrandsPage.prototype.brandProducts = function (brandid) {
                    console.log("Brand ID", brandid);
                    this.router.navigate(['/brands-product'], { queryParams: { brandid: brandid } });
                };
                BrandsPage.prototype.delete = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var params, alert;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    params = id;
                                    return [4 /*yield*/, this.alertCtrl.create({
                                            header: 'Remove Brand',
                                            message: 'Do you really want to remove?',
                                            buttons: [
                                                {
                                                    text: 'Close',
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function (blah) {
                                                        console.log('Confirm Cancel: blah');
                                                    }
                                                }, {
                                                    text: 'Delete',
                                                    handler: function () {
                                                        _this.CommonService.brandDelete(params)
                                                            .subscribe(function (resp) {
                                                            _this.brand = _this.brand.filter(function (val) { return val.id !== params; });
                                                        });
                                                    }
                                                }
                                            ]
                                        })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                BrandsPage.prototype.sharePicker = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var doc, col, rows;
                        var _this = this;
                        return __generator(this, function (_a) {
                            doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__();
                            col = ["Id", "Brand name"];
                            rows = [];
                            this.brand.forEach(function (element) {
                                var temp = [
                                    element.id,
                                    element.name,
                                ];
                                console.log("temp", temp);
                                rows.push(temp);
                            });
                            doc.autoTable(col, rows);
                            doc.save("BrandList.pdf");
                            this.platform.ready()
                                .then(function () {
                                _this.socialSharing.share(null, null, doc.save("BrandList.pdf"), null)
                                    .then(function (data) {
                                    console.log('Shared via SharePicker');
                                }).catch(function (err) {
                                    console.log('Was not shared via SharePicker');
                                });
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                return BrandsPage;
            }());
            BrandsPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
                { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
                { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
            ], BrandsPage.prototype, "infiniteScroll", void 0);
            BrandsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-brands',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./brands.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brands/brands.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./brands.page.scss */ "./src/app/brands/brands.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
                    _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                    _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
            ], BrandsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=brands-brands-module-es2015.js.map
//# sourceMappingURL=brands-brands-module-es5.js.map
//# sourceMappingURL=brands-brands-module-es5.js.map