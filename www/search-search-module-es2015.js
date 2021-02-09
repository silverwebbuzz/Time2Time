(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button color=\"light\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title color=\"light\" class=\"head\">\r\n        Search Products\r\n      </ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-searchbar color=\"light\" placeholder=\"Search products...\"  (ionChange)=\"ionViewWillEnter($event.target.value)\"></ion-searchbar>\r\n      </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"page-search\">\r\n\r\n    <ion-row class=\"row-table\">\r\n        <ion-col size=\"6\" class=\"col-per-head\">Category</ion-col>\r\n        <ion-col size=\"3\" class=\"col-per-head\">Inventory</ion-col>\r\n        <ion-col size=\"3\" class=\"col-per-head\">Sold</ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"row-table\" *ngFor=\"let search of search | slice:0:limit;\">\r\n          <ion-col size=\"6\" class=\"col-per\" >{{search.name}}</ion-col>\r\n          <ion-col size=\"3\" class=\"col-per\">{{search.Inventory}}</ion-col>\r\n          <ion-col size=\"3\" class=\"col-per\">{{search.Sold}}</ion-col>\r\n        </ion-row>\r\n\r\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n          <ion-infinite-scroll-content\r\n            loadingSpinner=\"bubbles\"\r\n            loadingText=\"Loading more data...\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"col-footer addR\">\r\n      <ion-button expand=\"full\" class=\"btn-footer in\">\r\n        Inventory {{total}}\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-footer addL\">\r\n        <ion-button expand=\"full\" class=\"btn-footer out\">\r\n         Sold {{sold}}\r\n        </ion-button>\r\n      </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-search {\n  --background: #faf8f8;\n}\n\n.row-table {\n  padding-left: 8px;\n}\n\n.row-table .col-per-head {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.row-table .col-per {\n  font-size: 14px;\n}\n\n.col-footer {\n  padding: 0px;\n}\n\n.col-footer .btn-footer {\n  margin: 0px;\n  font-weight: bold;\n  --background: #f1f1f1;\n  --background-activated: #f1f1f1;\n}\n\n.addR {\n  border-right: 1px solid #3C8DBC;\n}\n\n.addL {\n  border-left: 1px solid #3C8DBC;\n}\n\n.in {\n  color: var(--ion-color-success-shade);\n  --color-activated: var(--ion-color-success-shade);\n}\n\n.out {\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFUjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURFSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNBUjs7QURHQTtFQUNJLCtCQUFBO0FDQUo7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0kscUNBQUE7RUFDQSxpREFBQTtBQ0VKOztBREFBO0VBQ0ksb0NBQUE7RUFDQSxnREFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1zZWFyY2h7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWY4Zjg7XHJcbn1cclxuLnJvdy10YWJsZXtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgIC5jb2wtcGVyLWhlYWR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtcGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbC1mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLmJ0bi1mb290ZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmMWYxZjE7XHJcbiAgICB9XHJcbn1cclxuLmFkZFJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjM0M4REJDO1xyXG59XHJcbi5hZGRMe1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjM0M4REJDO1xyXG59XHJcbi5pbntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG59XHJcbi5vdXR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbn0iLCIucGFnZS1zZWFyY2gge1xuICAtLWJhY2tncm91bmQ6ICNmYWY4Zjg7XG59XG5cbi5yb3ctdGFibGUge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5yb3ctdGFibGUgLmNvbC1wZXItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucm93LXRhYmxlIC5jb2wtcGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29sLWZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jb2wtZm9vdGVyIC5idG4tZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmMWYxZjE7XG59XG5cbi5hZGRSIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzNDOERCQztcbn1cblxuLmFkZEwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzQzhEQkM7XG59XG5cbi5pbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG5cbi5vdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let SearchPage = class SearchPage {
    constructor(CommonService) {
        this.CommonService = CommonService;
        this.limit = 50;
    }
    ngOnInit() {
    }
    ionViewWillEnter(search) {
        if (!search) {
            this.CommonService.presentLoading();
        }
        this.CommonService.searchlist()
            .subscribe(resp => {
            this.total = resp.total_products_inventory;
            this.sold = resp.total_products_sold;
            this.search = resp.data;
            console.log("this.search", this.search);
            if (search && search.trim() != '') {
                this.search = this.search.filter((item) => {
                    return (item.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
                });
            }
            if (!search) {
                this.CommonService.dismissLoading();
            }
        });
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 50;
            infiniteScroll.target.complete();
        }, 500);
    }
};
SearchPage.ctorParameters = () => [
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], SearchPage.prototype, "infiniteScroll", void 0);
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map