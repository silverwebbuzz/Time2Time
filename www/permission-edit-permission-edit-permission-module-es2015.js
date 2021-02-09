(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permission-edit-permission-edit-permission-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/permission/edit-permission/edit-permission.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permission/edit-permission/edit-permission.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Edit Permission\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-addPermission\">\r\n\r\n  <form [formGroup]=\"editpermission_form\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Permission Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"group_name\" placeholder=\"Enter group name\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editpermission_form.controls.group_name.hasError('required') && editpermission_form.controls.group_name.touched\">\r\n      <p class=\"content\">Please Enter Permission Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-row class=\"row-table\">\r\n      <ion-col size=\"4\" class=\"col-per-head\">Permission</ion-col>\r\n      <ion-col size=\"2\" class=\"col-per-head\">Create</ion-col>\r\n      <ion-col size=\"2\" class=\"col-per-head\">Update</ion-col>\r\n      <ion-col size=\"2\" class=\"col-per-head\">View</ion-col>\r\n      <ion-col size=\"2\" class=\"col-per-head\">Delete</ion-col>\r\n    </ion-row>\r\n\r\n    <!---------------- Member Module ----------->\r\n    <ion-row>\r\n         <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n          <ng-container *ngIf=\"list.value == 'createUser' || list.value == 'updateUser' || list.value == 'viewUser' || list.value == 'deleteUser'\">\r\n            <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 0\">Member</ion-col>\r\n            <ion-col size=\"2\" class=\"col-per\">\r\n              <input type=\"checkbox\"  [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n            </ion-col>\r\n          </ng-container>\r\n        </ng-container>\r\n    </ion-row>\r\n\r\n    <!---------------- Permission Module ----------->\r\n    <ion-row>\r\n        <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n            <ng-container *ngIf=\"list.value == 'createGroup' || list.value == 'updateGroup' || list.value == 'viewGroup' || list.value == 'deleteGroup'\">\r\n              <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 4\">Permission</ion-col>\r\n              <ion-col size=\"2\" class=\"col-per\">\r\n                <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n              </ion-col>\r\n            </ng-container>\r\n        </ng-container>  \r\n    </ion-row>\r\n\r\n    <!---------------- Items(Brand) Module ----------->\r\n    <ion-row>\r\n        <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n            <ng-container *ngIf=\"list.value == 'createBrand' || list.value == 'updateBrand' || list.value == 'viewBrand' || list.value == 'deleteBrand'\">\r\n              <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 8\">Items</ion-col>\r\n              <ion-col size=\"2\" class=\"col-per\">\r\n                <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n              </ion-col>\r\n            </ng-container>\r\n        </ng-container>  \r\n    </ion-row>\r\n\r\n    <!---------------- Category Module ----------->\r\n    <ion-row>\r\n        <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n            <ng-container *ngIf=\"list.value == 'createCategory' || list.value == 'updateCategory' || list.value == 'viewCategory' || list.value == 'deleteCategory'\">\r\n              <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 12\">Category</ion-col>\r\n              <ion-col size=\"2\" class=\"col-per\">\r\n                <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n              </ion-col>\r\n            </ng-container>\r\n        </ng-container>  \r\n    </ion-row>\r\n\r\n    \r\n    <!---------------- Warehouse(Store) Module ----------->\r\n    <ion-row>\r\n        <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n            <ng-container *ngIf=\"list.value == 'createStore' || list.value == 'updateStore' || list.value == 'viewStore' || list.value == 'deleteStore'\">\r\n              <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 16\">Warehouse</ion-col>\r\n              <ion-col size=\"2\" class=\"col-per\">\r\n                <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n              </ion-col>\r\n            </ng-container>\r\n        </ng-container>  \r\n    </ion-row>\r\n\r\n    <!---------------- Elements(Attribute) Module ----------->\r\n    <ion-row>\r\n        <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n            <ng-container *ngIf=\"list.value == 'createAttribute' || list.value == 'updateAttribute' || list.value == 'viewAttribute' || list.value == 'deleteAttribute'\">\r\n              <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 20\">Elements</ion-col>\r\n              <ion-col size=\"2\" class=\"col-per\">\r\n                <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n              </ion-col>\r\n            </ng-container>\r\n        </ng-container>  \r\n    </ion-row>\r\n    \r\n      <!---------------- Products Module ----------->\r\n      <ion-row>\r\n          <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n              <ng-container *ngIf=\"list.value == 'createProduct' || list.value == 'updateProduct' || list.value == 'viewProduct' || list.value == 'deleteProduct'\">\r\n                <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 24\">Products</ion-col>\r\n                <ion-col size=\"2\" class=\"col-per\">\r\n                  <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n                </ion-col>\r\n              </ng-container>\r\n          </ng-container>  \r\n      </ion-row>\r\n\r\n      \r\n    <!---------------- Orders Module ----------->\r\n    <ion-row>\r\n        <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n            <ng-container *ngIf=\"list.value == 'createOrder' || list.value == 'updateOrder' || list.value == 'viewOrder' || list.value == 'deleteOrder'\">\r\n              <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 28\">Orders</ion-col>\r\n              <ion-col size=\"2\" class=\"col-per\">\r\n                <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n              </ion-col>\r\n            </ng-container>\r\n        </ng-container>  \r\n    </ion-row>\r\n   \r\n     <!---------------- Company Module ----------->\r\n     <ion-row>\r\n        <ng-container *ngFor=\"let list of checklist; let i = index\">\r\n            <ng-container *ngIf=\"list.value == '-'\">\r\n                <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 32\">Company</ion-col>\r\n                <ion-col size=\"2\" class=\"col-per\">\r\n                  -\r\n                </ion-col>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"list.value == 'updateCompany'\">\r\n              <ion-col size=\"4\" class=\"col-per\" *ngIf=\"i == 32\">Company</ion-col>\r\n              <ion-col size=\"2\" class=\"col-per\">\r\n                <input type=\"checkbox\" [checked]=\"list.isSelected\"  value=\"{{list.id}}\" (change)=\"isAllSelected(list.value,$event)\"/>\r\n              </ion-col>\r\n            </ng-container>\r\n        </ng-container>  \r\n    </ion-row>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\r\n  <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"editPermission()\">Update</ion-button>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/permission/edit-permission/edit-permission-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/permission/edit-permission/edit-permission-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: EditPermissionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPermissionPageRoutingModule", function() { return EditPermissionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_permission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-permission.page */ "./src/app/permission/edit-permission/edit-permission.page.ts");




const routes = [
    {
        path: '',
        component: _edit_permission_page__WEBPACK_IMPORTED_MODULE_3__["EditPermissionPage"]
    }
];
let EditPermissionPageRoutingModule = class EditPermissionPageRoutingModule {
};
EditPermissionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPermissionPageRoutingModule);



/***/ }),

/***/ "./src/app/permission/edit-permission/edit-permission.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/permission/edit-permission/edit-permission.module.ts ***!
  \**********************************************************************/
/*! exports provided: EditPermissionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPermissionPageModule", function() { return EditPermissionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-permission-routing.module */ "./src/app/permission/edit-permission/edit-permission-routing.module.ts");
/* harmony import */ var _edit_permission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-permission.page */ "./src/app/permission/edit-permission/edit-permission.page.ts");







let EditPermissionPageModule = class EditPermissionPageModule {
};
EditPermissionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPermissionPageRoutingModule"]
        ],
        declarations: [_edit_permission_page__WEBPACK_IMPORTED_MODULE_6__["EditPermissionPage"]]
    })
], EditPermissionPageModule);



/***/ }),

/***/ "./src/app/permission/edit-permission/edit-permission.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/permission/edit-permission/edit-permission.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-addPermission {\n  --padding-bottom: 8px;\n  --padding-end: 8px;\n  --padding-start: 8px;\n  --padding-top: 8px;\n}\n.page-addPermission .size {\n  font-size: 13.5px;\n}\n.page-addPermission .row-table {\n  margin-top: 10px;\n}\n.page-addPermission .col-per-head {\n  font-size: 10px;\n  font-weight: bold;\n  color: #888;\n}\n.page-addPermission .col-per {\n  font-size: 12px;\n}\n.col-footer {\n  padding: 0px;\n}\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n.btn-save {\n  --background: var(--ion-color-secondary-shade);\n}\n.btn-back {\n  --background: var(--ion-color-warning-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvcGVybWlzc2lvbi9lZGl0LXBlcm1pc3Npb24vZWRpdC1wZXJtaXNzaW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVybWlzc2lvbi9lZGl0LXBlcm1pc3Npb24vZWRpdC1wZXJtaXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGdCQUFBO0FDQVI7QURHSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNEUjtBRElJO0VBQ0ksZUFBQTtBQ0ZSO0FET0E7RUFDSSxZQUFBO0FDSko7QURNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNISjtBREtBO0VBQ0ksOENBQUE7QUNGSjtBRElBO0VBQ0ksNENBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb24vZWRpdC1wZXJtaXNzaW9uL2VkaXQtcGVybWlzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1hZGRQZXJtaXNzaW9ue1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcblxyXG4gICAgLnNpemV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy10YWJsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC8vYm9yZGVyLXRvcDogMC41cHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIC5jb2wtcGVyLWhlYWR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtcGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5jb2wtZm9vdGVye1xyXG4gICAgcGFkZGluZzogMHB4OyAgXHJcbn1cclxuLmJ0bi1mb290ZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbn1cclxuLmJ0bi1zYXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcclxufVxyXG4uYnRuLWJhY2t7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcclxufSIsIi5wYWdlLWFkZFBlcm1pc3Npb24ge1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbn1cbi5wYWdlLWFkZFBlcm1pc3Npb24gLnNpemUge1xuICBmb250LXNpemU6IDEzLjVweDtcbn1cbi5wYWdlLWFkZFBlcm1pc3Npb24gLnJvdy10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucGFnZS1hZGRQZXJtaXNzaW9uIC5jb2wtcGVyLWhlYWQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzg4ODtcbn1cbi5wYWdlLWFkZFBlcm1pc3Npb24gLmNvbC1wZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb2wtZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5idG4tc2F2ZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG59XG5cbi5idG4tYmFjayB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/permission/edit-permission/edit-permission.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/permission/edit-permission/edit-permission.page.ts ***!
  \********************************************************************/
/*! exports provided: EditPermissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPermissionPage", function() { return EditPermissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let EditPermissionPage = class EditPermissionPage {
    constructor(navCtrl, CommonService, router, statusBar, route, formBuilder) {
        this.navCtrl = navCtrl;
        this.CommonService = CommonService;
        this.router = router;
        this.statusBar = statusBar;
        this.route = route;
        this.formBuilder = formBuilder;
        this.editpermission_fb();
        this.masterSelected = false;
        this.checklist = [
            /* Member Module */
            { id: 1, value: 'createUser', isSelected: false },
            { id: 2, value: 'updateUser', isSelected: false },
            { id: 3, value: 'viewUser', isSelected: false },
            { id: 4, value: 'deleteUser', isSelected: false },
            /* Permission Module */
            { id: 5, value: 'createGroup', isSelected: false },
            { id: 6, value: 'updateGroup', isSelected: false },
            { id: 7, value: 'viewGroup', isSelected: false },
            { id: 8, value: 'deleteGroup', isSelected: false },
            /* Items(Brand) Module */
            { id: 9, value: 'createBrand', isSelected: false },
            { id: 10, value: 'updateBrand', isSelected: false },
            { id: 11, value: 'viewBrand', isSelected: false },
            { id: 12, value: 'deleteBrand', isSelected: false },
            /* Category Module */
            { id: 13, value: 'createCategory', isSelected: false },
            { id: 14, value: 'updateCategory', isSelected: false },
            { id: 15, value: 'viewCategory', isSelected: false },
            { id: 16, value: 'deleteCategory', isSelected: false },
            /* Warehouse(Store) Module */
            { id: 17, value: 'createStore', isSelected: false },
            { id: 18, value: 'updateStore', isSelected: false },
            { id: 19, value: 'viewStore', isSelected: false },
            { id: 20, value: 'deleteStore', isSelected: false },
            /* Elements Module */
            { id: 21, value: 'createAttribute', isSelected: false },
            { id: 22, value: 'updateAttribute', isSelected: false },
            { id: 23, value: 'viewAttribute', isSelected: false },
            { id: 24, value: 'deleteAttribute', isSelected: false },
            /* Product Module */
            { id: 25, value: 'createProduct', isSelected: false },
            { id: 26, value: 'updateProduct', isSelected: false },
            { id: 27, value: 'viewProduct', isSelected: false },
            { id: 28, value: 'deleteProduct', isSelected: false },
            /* Orders Module */
            { id: 29, value: 'createOrder', isSelected: false },
            { id: 30, value: 'updateOrder', isSelected: false },
            { id: 31, value: 'viewOrder', isSelected: false },
            { id: 32, value: 'deleteOrder', isSelected: false },
            /* Company Module */
            { id: 33, value: '-', isSelected: false },
            { id: 34, value: 'updateCompany', isSelected: false },
            { id: 35, value: '-', isSelected: false },
            { id: 36, value: '-', isSelected: false }
        ];
        this.getCheckedItemList();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#6382ff');
    }
    ngOnInit() {
        let reqData = this.route.snapshot.queryParams;
        this.permissionDetails(reqData);
    }
    permissionDetails(reqData) {
        let newarray = [];
        this.CommonService.permissionGet(reqData).subscribe(res => {
            console.log("Data", res);
            this.permissiondetails = res.data;
            this.permissionArrydata = res.unserialize_permission;
            var categorydata = this.permissionArrydata;
            for (let j in categorydata) {
                newarray.push(categorydata[j]);
            }
            this.selectedcategory = newarray;
            this.checklist.map(x => {
                if (newarray.includes(x.value)) {
                    x.isSelected = true;
                }
                return x;
            });
            console.log(this.checklist);
            //newarray.includes(x.value) ? x.isSelected = true : x.isSelected = false)
            // this.checklist = _.map(this.checklist, function(x){
            //   return newarray.includes(x.value) ? x.isSelected = true : x.isSelected = false;
            // })
            // console.log("PermissionArryData", this.permissionArrydata);
            this.editpermission_form.patchValue({
                group_name: this.permissiondetails.group_name,
            });
        });
    }
    editpermission_fb() {
        this.editpermission_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            group_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    editPermission() {
        var finalResult = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](this.checklist, function (x) {
            return x.isSelected == true;
        });
        console.log("finalResult", finalResult);
        for (let v in this.editpermission_form.controls) {
            this.editpermission_form.controls[v].markAsTouched();
        }
        if (this.editpermission_form.valid) {
            console.log("valid", this.editpermission_form.valid);
            this.CommonService.presentLoading();
            this.permission_process = true;
            const body = {
                "group_name": this.editpermission_form.value.group_name,
                "permission": finalResult,
                "id": this.route.snapshot.queryParams.id,
            };
            this.CommonService.permissionEdit(body).subscribe(val => {
                console.log("+++++++++", val);
                this.permission_process = false;
                this.CommonService.dismissLoading();
                if (val.status == 1) {
                    this.CommonService.dismissLoading();
                    this.CommonService.presentToastWithOptions(val.message);
                    this.router.navigate(['/manage-permission']);
                }
                else {
                    this.CommonService.presentToastWithOptions(val.message);
                }
            }, err => {
                this.permission_process = false;
                this.CommonService.dismissLoading();
                this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    isAllSelected(value, values) {
        console.log("checked", values);
        lodash__WEBPACK_IMPORTED_MODULE_7__["find"](this.checklist, function (c) {
            if (c.value == value) {
                c.isSelected = true;
            }
            if (values.currentTarget.checked) {
                if (c.value == value) {
                    c.isSelected = true;
                }
            }
            else {
                if (c.value == value) {
                    c.isSelected = false;
                }
            }
        });
    }
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.checklist.length; i++) {
            if (this.checklist[i].isSelected)
                this.checkedList.push(this.checklist[i]);
        }
        //this.checkedList = JSON.stringify(this.checkedList);
        this.checkedList = this.checkedList;
        console.log("this.checkedList", this.checkedList);
    }
    back() {
        this.navCtrl.pop();
    }
};
EditPermissionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
EditPermissionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-permission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-permission.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/permission/edit-permission/edit-permission.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-permission.page.scss */ "./src/app/permission/edit-permission/edit-permission.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], EditPermissionPage);



/***/ })

}]);
//# sourceMappingURL=permission-edit-permission-edit-permission-module-es2015.js.map