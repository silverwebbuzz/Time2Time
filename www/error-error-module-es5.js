(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html": 
        /*!*****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\" text-center>\n      <ion-buttons slot=\"start\">\n        <ion-button color=\"light\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title color=\"light\" class=\"head\">\n        Access Denied\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n  <img src=\"../../assets/image/access-denied.png\" class=\"img-error\"/>\n\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/error/error-routing.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/error/error-routing.module.ts ***!
          \***********************************************/
        /*! exports provided: ErrorPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageRoutingModule", function () { return ErrorPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.page */ "./src/app/error/error.page.ts");
            var routes = [
                {
                    path: '',
                    component: _error_page__WEBPACK_IMPORTED_MODULE_3__["ErrorPage"]
                }
            ];
            var ErrorPageRoutingModule = /** @class */ (function () {
                function ErrorPageRoutingModule() {
                }
                return ErrorPageRoutingModule;
            }());
            ErrorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], ErrorPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/error/error.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/error/error.module.ts ***!
          \***************************************/
        /*! exports provided: ErrorPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function () { return ErrorPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/error/error-routing.module.ts");
            /* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error.page */ "./src/app/error/error.page.ts");
            var ErrorPageModule = /** @class */ (function () {
                function ErrorPageModule() {
                }
                return ErrorPageModule;
            }());
            ErrorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _error_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErrorPageRoutingModule"]
                    ],
                    declarations: [_error_page__WEBPACK_IMPORTED_MODULE_6__["ErrorPage"]]
                })
            ], ErrorPageModule);
            /***/ 
        }),
        /***/ "./src/app/error/error.page.scss": 
        /*!***************************************!*\
          !*** ./src/app/error/error.page.scss ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".img-error {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvZXJyb3IvZXJyb3IucGFnZS5zY3NzIiwic3JjL2FwcC9lcnJvci9lcnJvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWVycm9ye1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn0iLCIuaW1nLWVycm9yIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/error/error.page.ts": 
        /*!*************************************!*\
          !*** ./src/app/error/error.page.ts ***!
          \*************************************/
        /*! exports provided: ErrorPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function () { return ErrorPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            var ErrorPage = /** @class */ (function () {
                function ErrorPage(navCtrl, statusBar, router) {
                    this.navCtrl = navCtrl;
                    this.statusBar = statusBar;
                    this.router = router;
                }
                ErrorPage.prototype.ionViewWillEnter = function () {
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                };
                ErrorPage.prototype.ngOnInit = function () {
                };
                ErrorPage.prototype.back = function () {
                    this.router.navigate(['/home']);
                };
                return ErrorPage;
            }());
            ErrorPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ErrorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.page.scss */ "./src/app/error/error.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], ErrorPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=error-error-module-es2015.js.map
//# sourceMappingURL=error-error-module-es5.js.map
//# sourceMappingURL=error-error-module-es5.js.map