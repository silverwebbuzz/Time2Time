(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">DASHBOARD</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-padding class=\"page-home\">\r\n\r\n  <div class=\"blue-background\"></div>\r\n\r\n  <ion-row class=\"row-card top-spc side-spc\">\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash box1\" (click)=\"box1()\">\r\n        <ion-label class=\"lbl-only\">Stock</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash\" (click)=\"box2()\">\r\n        <ion-label class=\"lbl-only\">Brands</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"row-card side-spc\">\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash box1\" (click)=\"box3()\">\r\n        <ion-label class=\"lbl-only\">Warehouse</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash\" (click)=\"box4()\">\r\n        <ion-label class=\"lbl-only\">Orders</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"row-card side-spc\">\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash box1\" (click)=\"dash5()\">\r\n          <!-- <div class=\"div-icon\">\r\n              <ion-icon src=\"../../assets/icon/stock-report.svg\" class=\"dash-icon\"></ion-icon>\r\n            </div> -->\r\n        <ion-label class=\"lbl-no\">{{dash.Stock_report}}</ion-label>\r\n        <ion-label class=\"lbl-name\">Total Stock</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash\" (click)=\"dash1()\">\r\n        <!-- <div class=\"div-icon\">\r\n          <ion-icon src=\"../../assets/icon/item_shopping-bag.svg\" class=\"dash-icon\"></ion-icon>\r\n        </div> -->\r\n        <ion-label class=\"lbl-no\">{{dash.Total_Items}}</ion-label>\r\n        <ion-label class=\"lbl-name\">Warehouse</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"row-card side-spc bottom-spc\">\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash\" (click)=\"dash2()\">\r\n        <!-- <div class=\"div-icon\">\r\n          <ion-icon src=\"../../assets/icon/sales.svg\" class=\"dash-icon\"></ion-icon>\r\n        </div> -->\r\n        <ion-label class=\"lbl-no\">{{dash.Total_Sales}}</ion-label>\r\n        <ion-label class=\"lbl-name\">Total Sales</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-dash box2\" (click)=\"dash6()\">\r\n          <!-- <div class=\"div-icon\">\r\n              <ion-icon src=\"../../assets/icon/purchases.svg\" class=\"dash-icon\"></ion-icon>\r\n            </div> -->\r\n        <ion-label class=\"lbl-no\">{{dash.Purchases}}</ion-label>\r\n        <ion-label class=\"lbl-name\">Purchases</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function () { return HomePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
            var HomePageModule = /** @class */ (function () {
                function HomePageModule() {
                }
                return HomePageModule;
            }());
            HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                            {
                                path: '',
                                component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                            }
                        ])
                    ],
                    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
                })
            ], HomePageModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.page.scss": 
        /*!*************************************!*\
          !*** ./src/app/home/home.page.scss ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".page-home {\n  --background: #faf8f8;\n}\n.page-home .row-card .col-card .card-dash {\n  margin: 0px;\n  border-radius: 10px;\n  height: 100px;\n  background: #fff;\n}\n.page-home .row-card .col-card .card-dash .div-icon {\n  background: #c1cdff;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-top: 10px;\n  text-align: center;\n  line-height: 5.2;\n}\n.page-home .row-card .col-card .card-dash .div-icon .dash-icon {\n  font-size: 26px;\n  color: #000;\n}\n.page-home .row-card .col-card .card-dash .lbl-no {\n  display: block;\n  line-height: 1.6;\n  font-size: 40px;\n  text-align: center;\n  color: #000;\n}\n.page-home .row-card .col-card .card-dash .lbl-only {\n  display: block;\n  font-weight: bold;\n  line-height: 5;\n  font-size: 20px;\n  text-align: center;\n}\n.page-home .row-card .col-card .card-dash .lbl-name {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  font-family: \"MuliSemiBold\";\n}\n.page-home .row-card .col-card .card-dash .lbl-btn {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  bottom: 5px;\n  position: absolute;\n  left: -16px;\n  right: 0;\n  border-top: 0.5px solid #fff;\n  padding-top: 8px;\n  padding-bottom: 5px;\n}\n.page-home .row-card .col-card .card-dash .lbl-btn .icon-arrow {\n  position: absolute;\n  padding-left: 5px;\n}\n.box1 {\n  background: #efb55f;\n}\n.box2 {\n  background: #3A7C98;\n}\n.top-spc {\n  margin-top: -60px;\n}\n.side-spc {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.bottom-spc {\n  padding-bottom: 5px;\n}\n.card-img {\n  border-radius: 10px;\n  width: 150px;\n}\n.tick {\n  text-align: center;\n  font-size: 30px;\n}\n.cross {\n  text-align: center;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURJWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtBQ0hoQjtBREtnQjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIcEI7QURLb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0h4QjtBRE9nQjtFQUNJLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNOcEI7QURTZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUHBCO0FEV2dCO0VBQ0ksY0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDVnBCO0FEYWdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWHBCO0FEYW9CO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ1h4QjtBRG9CQTtFQUNJLG1CQUFBO0FDakJKO0FEbUJBO0VBQ0ksbUJBQUE7QUNoQko7QURrQkE7RUFDSSxpQkFBQTtBQ2ZKO0FEaUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ2RKO0FEZ0JBO0VBQ0ksbUJBQUE7QUNiSjtBRGdCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ2JKO0FEZ0JBO0VBRUksa0JBQUE7RUFDRCxlQUFBO0FDZEg7QURpQkE7RUFFSSxrQkFBQTtFQUNELGVBQUE7QUNmSCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1ob21le1xuICAgIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcblxuICAgIC5yb3ctY2FyZHtcbiAgICAgICAgXG4gICAgICAgIC5jb2wtY2FyZHtcbiAgICAgICAgICAgIC5jYXJkLWRhc2h7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgICAgICAgICAgIC5kaXYtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2MxY2RmZjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNS4yO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmRhc2gtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5sYmwtbm97XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGJsLW9ubHl7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICAvL3BhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxibC1uYW1le1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaVNlbWlCb2xkJztcbiAgICAgICAgICAgICAgICAgICAgLy9wYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sYmwtYnRue1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xNnB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1hcnJvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5ib3gxe1xuICAgIGJhY2tncm91bmQ6ICNlZmI1NWY7XG59XG4uYm94MntcbiAgICBiYWNrZ3JvdW5kOiAjM0E3Qzk4O1xufVxuLnRvcC1zcGN7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG4uc2lkZS1zcGN7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmJvdHRvbS1zcGN7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNhcmQtaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4udGlja3tcblxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgZm9udC1zaXplOiAzMHB4O1xuXG59XG4uY3Jvc3N7XG5cbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgIGZvbnQtc2l6ZTogMzBweDtcbn0iLCIucGFnZS1ob21lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmOGY4O1xufVxuLnBhZ2UtaG9tZSAucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2gge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5wYWdlLWhvbWUgLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5kaXYtaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNjMWNkZmY7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUuMjtcbn1cbi5wYWdlLWhvbWUgLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5kaXYtaWNvbiAuZGFzaC1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5wYWdlLWhvbWUgLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5sYmwtbm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnBhZ2UtaG9tZSAucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2ggLmxibC1vbmx5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGFnZS1ob21lIC5yb3ctY2FyZCAuY29sLWNhcmQgLmNhcmQtZGFzaCAubGJsLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlTZW1pQm9sZFwiO1xufVxuLnBhZ2UtaG9tZSAucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2ggLmxibC1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNnB4O1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wYWdlLWhvbWUgLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5sYmwtYnRuIC5pY29uLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmJveDEge1xuICBiYWNrZ3JvdW5kOiAjZWZiNTVmO1xufVxuXG4uYm94MiB7XG4gIGJhY2tncm91bmQ6ICMzQTdDOTg7XG59XG5cbi50b3Atc3BjIHtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG5cbi5zaWRlLXNwYyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5ib3R0b20tc3BjIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNhcmQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4udGljayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY3Jvc3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.page.ts": 
        /*!***********************************!*\
          !*** ./src/app/home/home.page.ts ***!
          \***********************************/
        /*! exports provided: HomePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function () { return HomePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            var HomePage = /** @class */ (function () {
                //data: Array<any> = [];
                function HomePage(navCtrl, CommonService, statusBar, router, toastController, menu) {
                    this.navCtrl = navCtrl;
                    this.CommonService = CommonService;
                    this.statusBar = statusBar;
                    this.router = router;
                    this.toastController = toastController;
                    this.menu = menu;
                    this.resp = [];
                    this.dash = [];
                }
                HomePage.prototype.ionViewWillEnter = function () {
                    var _this = this;
                    this.menu.enable(true);
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                    this.CommonService.presentLoading();
                    this.CommonService.dashList()
                        .subscribe(function (resp) {
                        _this.resp = resp;
                        _this.dash = resp.data;
                        console.log("bhavin", _this.dash);
                        _this.CommonService.dismissLoading();
                    });
                };
                HomePage.prototype.box1 = function () {
                    this.router.navigate(['/manage-products']);
                };
                HomePage.prototype.box2 = function () {
                    this.router.navigate(['/brands']);
                };
                HomePage.prototype.box3 = function () {
                    this.router.navigate(['/warehouse']);
                };
                HomePage.prototype.box4 = function () {
                    this.router.navigate(['/manage-orders']);
                };
                HomePage.prototype.dash1 = function () {
                    this.router.navigate(['/manage-products']);
                };
                HomePage.prototype.dash2 = function () {
                    this.router.navigate(['/manage-orders']);
                };
                HomePage.prototype.dash3 = function () {
                    this.router.navigate(['/warehouse-transfer']);
                };
                HomePage.prototype.dash4 = function () {
                    this.router.navigate(['/warehouse']);
                };
                HomePage.prototype.dash5 = function () {
                    this.router.navigate(['/stock-report']);
                };
                HomePage.prototype.dash6 = function () {
                    this.router.navigate(['/add-product']);
                };
                return HomePage;
            }());
            HomePage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
            ]; };
            HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
            ], HomePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=home-home-module-es2015.js.map
//# sourceMappingURL=home-home-module-es5.js.map
//# sourceMappingURL=home-home-module-es5.js.map