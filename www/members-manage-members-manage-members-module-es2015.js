(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-manage-members-manage-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/manage-members/manage-members.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/manage-members/manage-members.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Manage Members\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-label class=\"lbl-result\">About {{member?.length}} results</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-members\">\r\n\r\n  <div class=\"blue-background\">\r\n    <!-- <ion-button color=\"light\" class=\"btn-top\">\r\n          <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n          <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\">\r\n          <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top\">\r\n          <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button> -->\r\n  </div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"member?.length == 0\">\r\n      <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n    </div>\r\n\r\n  <ion-card class=\"card-main\" *ngFor=\"let item of member | slice:0:limit\">\r\n    <ion-row class=\"row-card\" (click)=\"expandItem(item)\">\r\n      <ion-col size=\"10\" class=\"col-lbl\">\r\n        <ion-label class=\"col-title\">Username</ion-label>\r\n        <ion-label class=\"col-value\">{{item.username}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"col-edit\">\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"!item.expanded\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" *ngIf=\"item.expanded\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-card-content class=\"main-card-content\">\r\n      <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded\">\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Email</ion-label>\r\n            <ion-label class=\"col-value\">{{item.email}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"10\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Name</ion-label>\r\n            <ion-label class=\"col-value\">{{item.firstname}} {{item.lastname}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"col-lbl add\">\r\n            <ion-button size=\"small\" fill=\"clear\" class=\"edit\" (click)=\"edit(item.id)\">\r\n              <ion-icon name=\"create\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"6\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Phone</ion-label>\r\n            <ion-label class=\"col-value\">{{item.phone}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"col-lbl\">\r\n            <ion-label class=\"col-title\">Roll</ion-label>\r\n            <ion-label class=\"col-value\">{{item.user_group.group_name}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"col-lbl add\">\r\n            <ion-button size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"delete(item.id)\">\r\n              <ion-icon name=\"trash\" mode=\"md\" class=\"btn-icon\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </app-expandable>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" class=\"btn-footer\" routerLink=\"/add-members\">\r\n    Add New\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/members/manage-members/manage-members.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/members/manage-members/manage-members.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManageMembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMembersPageModule", function() { return ManageMembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-members.page */ "./src/app/members/manage-members/manage-members.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/expandable/expandable.module */ "./src/app/component/expandable/expandable.module.ts");









const routes = [
    {
        path: '',
        component: _manage_members_page__WEBPACK_IMPORTED_MODULE_6__["ManageMembersPage"]
    }
];
let ManageMembersPageModule = class ManageMembersPageModule {
};
ManageMembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_component_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_8__["ExpandableModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manage_members_page__WEBPACK_IMPORTED_MODULE_6__["ManageMembersPage"]]
    })
], ManageMembersPageModule);



/***/ }),

/***/ "./src/app/members/manage-members/manage-members.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/members/manage-members/manage-members.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-members {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .lbl-result {\n  display: block;\n  text-align: left;\n  padding-left: 16px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.card-main {\n  padding: 5px;\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .row-card {\n  padding-top: 2px;\n}\n\n.card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  border-radius: 50%;\n  border: 1px solid;\n  height: 24px;\n  width: 24px;\n}\n\n.card-main .col-edit .btn-dlt {\n  --background: var(--ion-color-danger-shade);\n  --background-activated: var(--ion-color-danger-tint);\n  --border-radius: 0px;\n}\n\n.card-main .col-dlt {\n  padding: 0px;\n}\n\n.card-main .main-card-content {\n  padding: 0px;\n}\n\n.card-main .main-card-content .edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .main-card-content .print {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-medium-shade);\n  --color-activated: var(--ion-color-medium);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.add {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvbWVtYmVycy9tYW5hZ2UtbWVtYmVycy9tYW5hZ2UtbWVtYmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvbWFuYWdlLW1lbWJlcnMvbWFuYWdlLW1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTVI7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDT0o7O0FETEE7RUFFSSxZQUFBO0VBRUEsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKSTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7QUNNUjs7QURISTtFQUNJLGdCQUFBO0FDS1I7O0FESFE7RUFDSSx3QkFBQTtBQ0taOztBREhZO0VBQ0ksZ0JBQUE7RUFFQSxlQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VoQjs7QURDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDaEI7O0FEUUk7RUFFSSxpQkFBQTtBQ1BSOztBRFNRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFJQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNWWjs7QURZUTtFQUNJLDJDQUFBO0VBQ0Esb0RBQUE7RUFDQSxvQkFBQTtBQ1ZaOztBRGNJO0VBQ0ksWUFBQTtBQ1pSOztBRGdCSTtFQUNJLFlBQUE7QUNkUjs7QURnQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDZlo7O0FEaUJRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQ2hCWjs7QURrQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDakJaOztBRHVCQTtFQUNJLGlCQUFBO0FDcEJKIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tYW5hZ2UtbWVtYmVycy9tYW5hZ2UtbWVtYmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1tZW1iZXJze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFmOGY4O1xyXG59XHJcbi5idG4tdG9we1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNmVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMC42ZW07XHJcbiAgICBtYXJnaW46IDBweCAxN3B4O1xyXG59XHJcbi5idG4tZmFie1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4uYnRuLWV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYnRuLXRvcC1hZGR7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xyXG59XHJcbi5sYmwtdG9vbC1yZXN1bHR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIFxyXG4gICAgLmxibC1yZXN1bHR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbi5ibHVlLWJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmJ0bi1mb290ZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbn1cclxuLmNhcmQtbWFpbntcclxuICAgIC8vYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLy9ib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKSAgIDtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NjYztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMjRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAtNHB4ICNjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy1jYXJke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcblxyXG4gICAgICAgIC5jb2wtbGJse1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLmNvbC10aXRsZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgLy9saW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5jb2wtdmFsdWV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0ZTRkNGQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmJhZGdlLXN0YXR1c3tcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLmNvbC1lZGl0e1xyXG4gICAgICAgIC8vcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgICAuYnRuLWVkaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgLy8gLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRsdHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWRsdHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1haW4tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgLmVkaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGx0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmludHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uYWRke1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iLCIucGFnZS1tZW1iZXJzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmOGY4O1xufVxuXG4uYnRuLXRvcCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjZlbTtcbiAgbWFyZ2luOiAwcHggMTdweDtcbn1cblxuLmJ0bi1mYWIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5idG4tZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuLXRvcC1hZGQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG59XG5cbi5sYmwtdG9vbC1yZXN1bHQge1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5sYmwtdG9vbC1yZXN1bHQgLmxibC1yZXN1bHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5jYXJkLW1haW4ge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2FyZC1tYWluOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAtNHB4ICNjY2M7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCB7XG4gIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcbn1cbi5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIC5jb2wtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uY2FyZC1tYWluIC5yb3ctY2FyZCAuY29sLWxibCAuY29sLXZhbHVlIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgY29sb3I6ICM0ZTRkNGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG4uY2FyZC1tYWluIC5jb2wtZWRpdCAuYnRuLWRsdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCk7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNhcmQtbWFpbiAuY29sLWRsdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtbWFpbiAubWFpbi1jYXJkLWNvbnRlbnQgLmVkaXQge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZC1tYWluIC5tYWluLWNhcmQtY29udGVudCAuZGx0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5jYXJkLW1haW4gLm1haW4tY2FyZC1jb250ZW50IC5wcmludCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5hZGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/members/manage-members/manage-members.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/members/manage-members/manage-members.page.ts ***!
  \***************************************************************/
/*! exports provided: ManageMembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMembersPage", function() { return ManageMembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);











let ManageMembersPage = class ManageMembersPage {
    constructor(alertCtrl, CommonService, router, platform, statusBar, socialSharing) {
        this.alertCtrl = alertCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.platform = platform;
        this.statusBar = statusBar;
        this.socialSharing = socialSharing;
        this.message = 'Check out the PDF!';
        this.url = 'http://google.com/';
        this.resp = [];
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCopy"];
        this.faFileCsv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileCsv"];
        this.faFileExcel = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileExcel"];
        this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPrint"];
        this.limit = 50;
    }
    searchBar(value) {
        let searchList = this.member;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_9__["filter"](searchList, function (x) {
                if (x.username.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.username ? x.username.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.email.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.email ? x.email.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.firstname.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.firstname ? x.firstname.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.lastname.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.lastname ? x.lastname.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.phone.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.phone ? x.phone.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.user_group.group_name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.user_group.group_name ? x.user_group.group_name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
            });
        }
        else {
            searchList = this.resp.data;
        }
        this.member = searchList;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
        this.CommonService.presentLoading();
        this.CommonService.memberList()
            .subscribe(resp => {
            this.resp = resp;
            this.member = resp.data;
            console.log(this.member);
            this.CommonService.dismissLoading();
        });
    }
    expandItem(item) {
        console.log("item", item);
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.member.map(listItem => {
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
    edit(id) {
        this.router.navigate(['/edit-members'], { queryParams: { id: id } });
    }
    delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let params = id;
            const alert = yield this.alertCtrl.create({
                header: 'Remove Member',
                message: 'Do you really want to remove?',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.CommonService.memberDelete(params)
                                .subscribe(resp => {
                                this.member = this.member.filter(val => val.id !== params);
                            });
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.limit += 50;
            infiniteScroll.target.complete();
        }, 500);
    }
    sharePicker() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
ManageMembersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], ManageMembersPage.prototype, "infiniteScroll", void 0);
ManageMembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-members.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/manage-members/manage-members.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-members.page.scss */ "./src/app/members/manage-members/manage-members.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]])
], ManageMembersPage);



/***/ })

}]);
//# sourceMappingURL=members-manage-members-manage-members-module-es2015.js.map