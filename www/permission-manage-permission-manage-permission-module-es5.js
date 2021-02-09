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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permission-manage-permission-manage-permission-module"], {
        /***/ "./node_modules/angular2-csv/Angular2-csv.js": 
        /*!***************************************************!*\
          !*** ./node_modules/angular2-csv/Angular2-csv.js ***!
          \***************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var CsvConfigConsts = (function () {
                function CsvConfigConsts() {
                }
                return CsvConfigConsts;
            }());
            CsvConfigConsts.EOL = "\r\n";
            CsvConfigConsts.BOM = "\ufeff";
            CsvConfigConsts.DEFAULT_FIELD_SEPARATOR = ',';
            CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR = '.';
            CsvConfigConsts.DEFAULT_QUOTE = '"';
            CsvConfigConsts.DEFAULT_SHOW_TITLE = false;
            CsvConfigConsts.DEFAULT_TITLE = 'My Report';
            CsvConfigConsts.DEFAULT_FILENAME = 'mycsv.csv';
            CsvConfigConsts.DEFAULT_SHOW_LABELS = false;
            CsvConfigConsts.DEFAULT_USE_BOM = true;
            CsvConfigConsts.DEFAULT_HEADER = [];
            exports.CsvConfigConsts = CsvConfigConsts;
            exports.ConfigDefaults = {
                filename: CsvConfigConsts.DEFAULT_FILENAME,
                fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
                quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
                decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
                showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
                showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
                title: CsvConfigConsts.DEFAULT_TITLE,
                useBom: CsvConfigConsts.DEFAULT_USE_BOM,
                headers: CsvConfigConsts.DEFAULT_HEADER
            };
            var Angular2Csv = (function () {
                function Angular2Csv(DataJSON, filename, options) {
                    this.csv = "";
                    var config = options || {};
                    this.data = typeof DataJSON != 'object' ? JSON.parse(DataJSON) : DataJSON;
                    this._options = objectAssign({}, exports.ConfigDefaults, config);
                    if (this._options.filename) {
                        this._options.filename = filename;
                    }
                    this.generateCsv();
                }
                /**
                 * Generate and Download Csv
                 */
                Angular2Csv.prototype.generateCsv = function () {
                    if (this._options.useBom) {
                        this.csv += CsvConfigConsts.BOM;
                    }
                    if (this._options.showTitle) {
                        this.csv += this._options.title + '\r\n\n';
                    }
                    this.getHeaders();
                    this.getBody();
                    if (this.csv == '') {
                        console.log("Invalid data");
                        return;
                    }
                    var blob = new Blob([this.csv], { "type": "text/csv;charset=utf8;" });
                    if (navigator.msSaveBlob) {
                        var filename = this._options.filename.replace(/ /g, "_") + ".csv";
                        navigator.msSaveBlob(blob, filename);
                    }
                    else {
                        var uri = 'data:attachment/csv;charset=utf-8,' + encodeURI(this.csv);
                        var link = document.createElement("a");
                        link.href = URL.createObjectURL(blob);
                        link.setAttribute('visibility', 'hidden');
                        link.download = this._options.filename.replace(/ /g, "_") + ".csv";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                };
                /**
                 * Create Headers
                 */
                Angular2Csv.prototype.getHeaders = function () {
                    if (this._options.headers.length > 0) {
                        var row = "";
                        for (var _i = 0, _a = this._options.headers; _i < _a.length; _i++) {
                            var column = _a[_i];
                            row += column + this._options.fieldSeparator;
                        }
                        row = row.slice(0, -1);
                        this.csv += row + CsvConfigConsts.EOL;
                    }
                };
                /**
                 * Create Body
                 */
                Angular2Csv.prototype.getBody = function () {
                    for (var i = 0; i < this.data.length; i++) {
                        var row = "";
                        for (var index in this.data[i]) {
                            row += this.formartData(this.data[i][index]) + this._options.fieldSeparator;
                            ;
                        }
                        row = row.slice(0, -1);
                        this.csv += row + CsvConfigConsts.EOL;
                    }
                };
                /**
                 * Format Data
                 * @param {any} data
                 */
                Angular2Csv.prototype.formartData = function (data) {
                    if (this._options.decimalseparator === 'locale' && this.isFloat(data)) {
                        return data.toLocaleString();
                    }
                    if (this._options.decimalseparator !== '.' && this.isFloat(data)) {
                        return data.toString().replace('.', this._options.decimalseparator);
                    }
                    if (typeof data === 'string') {
                        data = data.replace(/"/g, '""');
                        if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                            data = this._options.quoteStrings + data + this._options.quoteStrings;
                        }
                        return data;
                    }
                    if (typeof data === 'boolean') {
                        return data ? 'TRUE' : 'FALSE';
                    }
                    return data;
                };
                /**
                 * Check if is Float
                 * @param {any} input
                 */
                Angular2Csv.prototype.isFloat = function (input) {
                    return +input === input && (!isFinite(input) || Boolean(input % 1));
                };
                return Angular2Csv;
            }());
            exports.Angular2Csv = Angular2Csv;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var propIsEnumerable = Object.prototype.propertyIsEnumerable;
            /**
             * Convet to Object
             * @param {any} val
             */
            function toObject(val) {
                if (val === null || val === undefined) {
                    throw new TypeError('Object.assign cannot be called with null or undefined');
                }
                return Object(val);
            }
            /**
             * Assign data  to new Object
             * @param {any}   target
             * @param {any[]} ...source
             */
            function objectAssign(target) {
                var source = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    source[_i - 1] = arguments[_i];
                }
                var from;
                var to = toObject(target);
                var symbols;
                for (var s = 1; s < arguments.length; s++) {
                    from = Object(arguments[s]);
                    for (var key in from) {
                        if (hasOwnProperty.call(from, key)) {
                            to[key] = from[key];
                        }
                    }
                    if (Object.getOwnPropertySymbols) {
                        symbols = Object.getOwnPropertySymbols(from);
                        for (var i = 0; i < symbols.length; i++) {
                            if (propIsEnumerable.call(from, symbols[i])) {
                                to[symbols[i]] = from[symbols[i]];
                            }
                        }
                    }
                }
                return to;
            }
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/permission/manage-permission/manage-permission.page.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permission/manage-permission/manage-permission.page.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Manage Permission\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"light\" placeholder=\"Search...\" (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\" class=\"lbl-tool-result\">\r\n    <ion-label class=\"lbl-result\">About {{permission?.length}} results</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-permission\">\r\n\r\n  <div class=\"blue-background\">\r\n    <!-- <ion-button color=\"light\" class=\"btn-top\" (click)=\"copyText(permission)\">\r\n          <ion-icon name=\"copy\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\" (click)=\"downloadCSV()\">\r\n          <fa-icon [icon]=\"faFileCsv\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top btn-top-add\" (click)=\"exportAsXLSX()\">\r\n          <fa-icon [icon]=\"faFileExcel\" class=\"btn-fab btn-ext\"></fa-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"btn-top\" (click)=\"printPage()\">\r\n          <ion-icon name=\"print\" mode=\"md\" class=\"btn-fab\"></ion-icon>\r\n        </ion-button> -->\r\n  </div>\r\n\r\n  <div class=\"isEmpty\" *ngIf=\"permission?.length == 0\">\r\n      <ion-label class=\"lbl-empty\">No Record Found!</ion-label>\r\n    </div>\r\n\r\n  <ion-card class=\"card-main\" *ngFor=\"let item of permission\">\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-label class=\"col-title\">{{item.group_name}}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\" class=\"col-edit\">\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-edit\" (click)=\"edit(item.id)\">\r\n          <ion-icon name=\"create\" mode=\"md\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button size=\"small\" fill=\"clear\" class=\"btn-dlt\" (click)=\"delete(item.id)\">\r\n          <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"sharePicker()\">\r\n      <ion-icon name=\"Share-alt\" color=\"light\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" class=\"btn-footer\" routerLink=\"/add-permission\">Add Permission</ion-button>\r\n</ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/permission/manage-permission/manage-permission.module.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/permission/manage-permission/manage-permission.module.ts ***!
          \**************************************************************************/
        /*! exports provided: ManagePermissionPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePermissionPageModule", function () { return ManagePermissionPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _manage_permission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-permission.page */ "./src/app/permission/manage-permission/manage-permission.page.ts");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            var routes = [
                {
                    path: '',
                    component: _manage_permission_page__WEBPACK_IMPORTED_MODULE_6__["ManagePermissionPage"]
                }
            ];
            var ManagePermissionPageModule = /** @class */ (function () {
                function ManagePermissionPageModule() {
                }
                return ManagePermissionPageModule;
            }());
            ManagePermissionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_manage_permission_page__WEBPACK_IMPORTED_MODULE_6__["ManagePermissionPage"]]
                })
            ], ManagePermissionPageModule);
            /***/ 
        }),
        /***/ "./src/app/permission/manage-permission/manage-permission.page.scss": 
        /*!**************************************************************************!*\
          !*** ./src/app/permission/manage-permission/manage-permission.page.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".page-permission {\n  --background: #faf8f8;\n}\n\n.btn-top {\n  --border-radius: 50%;\n  --padding-start: 0.6em;\n  --padding-end: 0.6em;\n  margin: 0px 17px;\n}\n\n.btn-fab {\n  color: var(--ion-color-primary);\n  font-size: 26px;\n}\n\n.btn-ext {\n  font-size: 20px;\n}\n\n.btn-top-add {\n  --padding-start: 1em;\n  --padding-end: 0.9em;\n}\n\n.lbl-tool-result {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n.lbl-tool-result .lbl-result {\n  display: block;\n  text-align: left;\n  padding-left: 16px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.blue-background {\n  height: 25px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n\n.card-main {\n  margin: 10px;\n  box-shadow: 0px 0px 10px #ccc;\n  background: #fff;\n}\n\n.card-main:nth-child(2) {\n  margin-top: -24px;\n  box-shadow: 0px 4px 4px -4px #ccc;\n}\n\n.card-main .col-title {\n  padding: 4px 8px;\n  font-weight: bold;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n\n.card-main .col-edit {\n  text-align: right;\n}\n\n.card-main .col-edit .btn-edit {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-warning-shade);\n  --color-activated: var(--ion-color-warning);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.card-main .col-edit .btn-dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border: 1px solid;\n  border-radius: 50%;\n}\n\n.col-dlt {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvcGVybWlzc2lvbi9tYW5hZ2UtcGVybWlzc2lvbi9tYW5hZ2UtcGVybWlzc2lvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3Blcm1pc3Npb24vbWFuYWdlLXBlcm1pc3Npb24vbWFuYWdlLXBlcm1pc3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0kscUJBQUE7QUNYSjs7QURhQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDVko7O0FEWUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNUSjs7QURXQTtFQUNJLGVBQUE7QUNSSjs7QURVQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEUUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTlI7O0FEU0E7RUFDSSxZQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDTko7O0FEU0E7RUFHSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFVJO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtBQ1JSOztBRFVJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDVlI7O0FEaUJJO0VBQ0ksaUJBQUE7QUNmUjs7QURrQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDakJaOztBRG9CWTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQmhCOztBRDRCSTtFQUNJLFlBQUE7QUN6QlIiLCJmaWxlIjoic3JjL2FwcC9wZXJtaXNzaW9uL21hbmFnZS1wZXJtaXNzaW9uL21hbmFnZS1wZXJtaXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb2wtaGVhZHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG4vLyAuY29udGVudHtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4vLyB9XHJcblxyXG4vLyAuYnRue1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbi8vICAgICAvL3dpZHRoOiA0NSU7XHJcbi8vIH1cclxuLnBhZ2UtcGVybWlzc2lvbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZjhmODtcclxufVxyXG4uYnRuLXRvcHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuNmVtO1xyXG4gICAgbWFyZ2luOiAwcHggMTdweDtcclxufVxyXG4uYnRuLWZhYntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmJ0bi1leHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bi10b3AtYWRke1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcclxufVxyXG4ubGJsLXRvb2wtcmVzdWx0e1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBcclxuICAgIC5sYmwtcmVzdWx0e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG4uYmx1ZS1iYWNrZ3JvdW5ke1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYnRuLWZvb3RlcntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtbWFpbntcclxuICAgIC8vYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgLy9ib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKSAgIDtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NjYztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMjRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAtNHB4ICNjY2M7XHJcbiAgICB9XHJcbiAgICAuY29sLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAvLyAuYmFkZ2Utc3RhdHVze1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuY29sLWVkaXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgLmJ0bi1lZGl0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICAgICAgICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLWRsdHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG4gICAgICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIC5idG4taWNvbntcclxuICAgICAgICAgICAgLy8gICAgIC8vZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIC5jb2wtZGx0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyAuYnRuLWljb257XHJcbiAgICAgICAgICAgIC8vICAgICAvL2ZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbi8vIC5lZHR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcclxuLy8gICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQpO1xyXG4vLyB9XHJcblxyXG4vLyAuZGx0e1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuLy8gICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCk7XHJcbi8vIH1cclxuXHJcbi8vIC5yb3ctc3Bje1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbi8vIH0iLCIucGFnZS1wZXJtaXNzaW9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmOGY4O1xufVxuXG4uYnRuLXRvcCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjZlbTtcbiAgbWFyZ2luOiAwcHggMTdweDtcbn1cblxuLmJ0bi1mYWIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5idG4tZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuLXRvcC1hZGQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG59XG5cbi5sYmwtdG9vbC1yZXN1bHQge1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5sYmwtdG9vbC1yZXN1bHQgLmxibC1yZXN1bHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYnRuLWZvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XG59XG5cbi5jYXJkLW1haW4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNhcmQtbWFpbjpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggLTRweCAjY2NjO1xufVxuLmNhcmQtbWFpbiAuY29sLXRpdGxlIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcmQtbWFpbiAuY29sLWVkaXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IC5idG4tZWRpdCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5jYXJkLW1haW4gLmNvbC1lZGl0IC5idG4tZGx0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbC1kbHQge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/permission/manage-permission/manage-permission.page.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/permission/manage-permission/manage-permission.page.ts ***!
          \************************************************************************/
        /*! exports provided: ManagePermissionPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePermissionPage", function () { return ManagePermissionPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-csv/Angular2-csv */ "./node_modules/angular2-csv/Angular2-csv.js");
            /* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
            /* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
            var ManagePermissionPage = /** @class */ (function () {
                function ManagePermissionPage(alertCtrl, CommonService, router, statusBar, platform, socialSharing) {
                    this.alertCtrl = alertCtrl;
                    this.CommonService = CommonService;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.platform = platform;
                    this.socialSharing = socialSharing;
                    this.message = 'Check out the PDF!';
                    this.url = 'http://google.com/';
                    this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCopy"];
                    this.faFileCsv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileCsv"];
                    this.faFileExcel = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFileExcel"];
                    this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPrint"];
                    this.resp = [];
                    this.limit = 50;
                    this.formula = "Permission";
                    this.copy = [
                        {
                            value: "createGroup",
                        }, {
                            value: "updateGroup",
                        }, {
                            value: "viewGroup",
                        }, {
                            value: "deleteGroup",
                        }
                    ];
                }
                ManagePermissionPage.prototype.ngOnInit = function () {
                };
                ManagePermissionPage.prototype.printPage = function () {
                    window.print();
                };
                ManagePermissionPage.prototype.exportAsXLSX = function () {
                    this.CommonService.exportAsExcelFile(this.permission, 'permission');
                };
                ManagePermissionPage.prototype.downloadCSV = function () {
                    var data = this.permission;
                    var options = {
                        title: 'Permission Details',
                        fieldSeparator: ',',
                        quoteStrings: '"',
                        decimalseparator: '.',
                        showLabels: true,
                        showTitle: true,
                        useBom: true,
                        headers: ['Permission Name']
                    };
                    new angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_5__["Angular2Csv"](data, this.formula, options);
                };
                ManagePermissionPage.prototype.copyText = function (val) {
                    var selBox = document.createElement('textarea');
                    selBox.style.position = 'fixed';
                    selBox.style.left = '0';
                    selBox.style.top = '0';
                    selBox.style.opacity = '0';
                    selBox.value = val;
                    document.body.appendChild(selBox);
                    selBox.focus();
                    selBox.select();
                    document.execCommand('copy');
                    document.body.removeChild(selBox);
                };
                ManagePermissionPage.prototype.searchBar = function (value) {
                    var searchList = this.permission;
                    if (value) {
                        searchList = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](searchList, function (x) {
                            return x.group_name ? x.group_name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                        });
                    }
                    else {
                        searchList = this.resp.data;
                    }
                    this.permission = searchList;
                };
                ManagePermissionPage.prototype.ionViewWillEnter = function (search) {
                    var _this = this;
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                    this.CommonService.presentLoading();
                    this.CommonService.permissionList()
                        .subscribe(function (resp) {
                        _this.resp = resp;
                        _this.permission = resp.data;
                        console.log(_this.permission);
                        _this.CommonService.dismissLoading();
                    });
                };
                ManagePermissionPage.prototype.edit = function (id) {
                    this.router.navigate(['/edit-permission'], { queryParams: { id: id } });
                };
                ManagePermissionPage.prototype.loadData = function (infiniteScroll) {
                    var _this = this;
                    setTimeout(function () {
                        _this.limit += 50;
                        infiniteScroll.target.complete();
                    }, 500);
                };
                ManagePermissionPage.prototype.delete = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var params, alert;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    params = id;
                                    return [4 /*yield*/, this.alertCtrl.create({
                                            header: 'Remove Permission',
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
                                                        _this.CommonService.permissionDelete(params)
                                                            .subscribe(function (resp) {
                                                            _this.permission = _this.permission.filter(function (val) { return val.id !== params; });
                                                        });
                                                        console.log('Confirm Okay');
                                                    }
                                                }
                                            ]
                                        })];
                                case 1:
                                    alert = _b.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ManagePermissionPage.prototype.sharePicker = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_b) {
                            this.platform.ready()
                                .then(function () {
                                _this.socialSharing.share(_this.message, null, null, _this.url)
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
                return ManagePermissionPage;
            }());
            ManagePermissionPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
                { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
            ], ManagePermissionPage.prototype, "infiniteScroll", void 0);
            ManagePermissionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-manage-permission',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-permission.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/permission/manage-permission/manage-permission.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-permission.page.scss */ "./src/app/permission/manage-permission/manage-permission.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
                    _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]])
            ], ManagePermissionPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=permission-manage-permission-manage-permission-module-es2015.js.map
//# sourceMappingURL=permission-manage-permission-manage-permission-module-es5.js.map
//# sourceMappingURL=permission-manage-permission-manage-permission-module-es5.js.map