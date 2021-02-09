(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-edit-members-edit-members-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/edit-members/edit-members.page.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/edit-members/edit-members.page.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"clr\" text-center>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" class=\"head\">\r\n      Edit Member\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"editmembers_form\" (ngSubmit)=\"editMember()\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"input-item\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"firstname\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.firstname.hasError('required') && editmembers_form.controls.firstname.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"lastname\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.lastname.hasError('required') && editmembers_form.controls.lastname.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Username</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"username\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.username.hasError('required') && editmembers_form.controls.username.touched\">\r\n      <p class=\"content\">Please Enter Username!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\r\n      <ion-input readonly type=\"text\" formControlName=\"email\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.email.hasError('required') && editmembers_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter Email!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.email.hasError('pattern') && editmembers_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter Valid Email!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.email.hasError('incorrect') && editmembers_form.controls.email.touched\">\r\n      <p class=\"content\">Email is already taken!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Password</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"password\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.password.hasError('required') && editmembers_form.controls.password.touched\">\r\n      <p class=\"content\">Please Enter a Password!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.password.hasError('minlength') && editmembers_form.controls.password.touched\">\r\n      <p class=\"content\">The password needs at least 8 characters.</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.password.hasError('pattern') && editmembers_form.controls.password.touched\">\r\n      <p class=\"content\">Please Enter One Upper Case and One Lower Case, One Spacial Characters and One Number</p>\r\n    </ion-item>\r\n\r\n    <!-- <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n      </div>\r\n  </div> -->\r\n\r\n    <!-- <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Confirm Password</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"confirmpassword\" color=\"primary\" class=\"input-box boxes\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && f.confirmpassword.errors }\"></ion-input>\r\n    </ion-item> -->\r\n\r\n    <!-- <div class=\"form-group\">\r\n      <label>Confirm Password</label>\r\n      <input type=\"password\" formControlName=\"confirmpassword\" class=\"form-control\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && f.confirmpassword.errors }\" />\r\n      <div *ngIf=\"submitted && f.confirmpassword.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.confirmpassword.errors.mustMatch\">Passwords must match</div>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n    <!-- <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.get('confirmpassword').errors && editmembers_form.get('confirmpassword').errors.confirmpassword\">\r\n      <p class=\"content\">Passwords must match!</p>\r\n    </ion-item> -->\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Phone</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"phone\" color=\"primary\" class=\"input-box boxes\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.phone.hasError('required') && editmembers_form.controls.phone.touched\">\r\n      <p class=\"content\">Please Enter Phone!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Permission</ion-label>\r\n      <ion-select interface=\"action-sheet\" formControlName=\"id\" placeholder=\"Select Permission\" class=\"btn-select bg\"\r\n        mode=\"md\" [(ngModel)]=\"selectedgroup\">\r\n        <ion-select-option *ngFor=\"let opt of permissionlist\" [value]=\"opt.id\">{{opt.group_name}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"group_id\">Admin</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"editmembers_form.controls.id.hasError('required') && editmembers_form.controls.id.touched\">\r\n      <p class=\"content\">Please Select Permission!</p>\r\n    </ion-item>\r\n\r\n    <div class=\"div-que add\">\r\n\r\n      <ion-label class=\"lbl-head\">Gender</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"gender\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Male</ion-label>\r\n          <ion-radio slot=\"start\" [value]=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Female</ion-label>\r\n          <ion-radio slot=\"start\" [value]=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" class=\"btn-footer\" (click)=\"editMember()\">\r\n    Update\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n");
            /***/ 
        }),
        /***/ "./src/app/members/edit-members/edit-members-routing.module.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/members/edit-members/edit-members-routing.module.ts ***!
          \*********************************************************************/
        /*! exports provided: EditMembersPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMembersPageRoutingModule", function () { return EditMembersPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _edit_members_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-members.page */ "./src/app/members/edit-members/edit-members.page.ts");
            var routes = [
                {
                    path: '',
                    component: _edit_members_page__WEBPACK_IMPORTED_MODULE_3__["EditMembersPage"]
                }
            ];
            var EditMembersPageRoutingModule = /** @class */ (function () {
                function EditMembersPageRoutingModule() {
                }
                return EditMembersPageRoutingModule;
            }());
            EditMembersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], EditMembersPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/members/edit-members/edit-members.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/members/edit-members/edit-members.module.ts ***!
          \*************************************************************/
        /*! exports provided: EditMembersPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMembersPageModule", function () { return EditMembersPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _edit_members_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-members-routing.module */ "./src/app/members/edit-members/edit-members-routing.module.ts");
            /* harmony import */ var _edit_members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-members.page */ "./src/app/members/edit-members/edit-members.page.ts");
            var EditMembersPageModule = /** @class */ (function () {
                function EditMembersPageModule() {
                }
                return EditMembersPageModule;
            }());
            EditMembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _edit_members_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditMembersPageRoutingModule"]
                    ],
                    declarations: [_edit_members_page__WEBPACK_IMPORTED_MODULE_6__["EditMembersPage"]]
                })
            ], EditMembersPageModule);
            /***/ 
        }),
        /***/ "./src/app/members/edit-members/edit-members.page.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/members/edit-members/edit-members.page.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add {\n  margin-top: 8px;\n}\n\n.btn-footer {\n  margin: 0px;\n  color: #fff;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3Qvc29ucmFqL3NyYy9hcHAvbWVtYmVycy9lZGl0LW1lbWJlcnMvZWRpdC1tZW1iZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVtYmVycy9lZGl0LW1lbWJlcnMvZWRpdC1tZW1iZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZWRpdC1tZW1iZXJzL2VkaXQtbWVtYmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRke1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5idG4tZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59IiwiLmFkZCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmJ0bi1mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/members/edit-members/edit-members.page.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/members/edit-members/edit-members.page.ts ***!
          \***********************************************************/
        /*! exports provided: EditMembersPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMembersPage", function () { return EditMembersPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/common/common.service */ "./src/app/api/common/common.service.ts");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            var EditMembersPage = /** @class */ (function () {
                function EditMembersPage(navCtrl, route, router, statusBar, CommonService, formBuilder) {
                    this.navCtrl = navCtrl;
                    this.route = route;
                    this.router = router;
                    this.statusBar = statusBar;
                    this.CommonService = CommonService;
                    this.formBuilder = formBuilder;
                    this.submitted = false;
                    this.editmembers_fb();
                }
                EditMembersPage.prototype.ionViewWillEnter = function () {
                    this.statusBar.show();
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString('#6382ff');
                };
                EditMembersPage.prototype.ngOnInit = function () {
                };
                Object.defineProperty(EditMembersPage.prototype, "f", {
                    get: function () { return this.editmembers_form.controls; },
                    enumerable: true,
                    configurable: true
                });
                EditMembersPage.prototype.editmembers_fb = function () {
                    this.editmembers_form = this.formBuilder.group({
                        firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        email: [null],
                        password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                            ])],
                        phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    });
                    var reqData = this.route.snapshot.queryParams;
                    this.getCompanyDetails(reqData);
                };
                ;
                EditMembersPage.prototype.radioButtonValue = function (val) {
                    if (val != null && val != "") {
                        if (val == 1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return '';
                    }
                };
                EditMembersPage.prototype.getCompanyDetails = function (reqData) {
                    var _this = this;
                    this.CommonService.memberGet(reqData).subscribe(function (res) {
                        _this.memberData = res.data;
                        _this.group = _this.memberData.user_group.group_name,
                            console.log("memberData", _this.memberData);
                        _this.editmembers_form.patchValue({
                            firstname: _this.memberData.firstname,
                            lastname: _this.memberData.lastname,
                            username: _this.memberData.username,
                            email: _this.memberData.email,
                            password: _this.memberData.password,
                            phone: _this.memberData.phone,
                            gender: _this.radioButtonValue(_this.memberData.gender),
                            id: _this.memberData.user_group.id
                        });
                    }, function (error) {
                    });
                    this.permissionList();
                };
                EditMembersPage.prototype.permissionList = function () {
                    var _this = this;
                    this.CommonService.getPermisssionList().subscribe(function (data) {
                        _this.permissionlist = data.data;
                    });
                };
                EditMembersPage.prototype.editMember = function () {
                    var _this = this;
                    this.submitted = true;
                    for (var v in this.editmembers_form.controls) {
                        this.editmembers_form.controls[v].markAsTouched();
                    }
                    if (this.editmembers_form.valid) {
                        this.CommonService.presentLoading();
                        this.member_process = true;
                        var body = {
                            "firstname": this.editmembers_form.value.firstname,
                            "lastname": this.editmembers_form.value.lastname,
                            "username": this.editmembers_form.value.username,
                            "email": this.editmembers_form.value.email,
                            "password": this.editmembers_form.value.password,
                            "phone": this.editmembers_form.value.phone,
                            "group_id": this.editmembers_form.value.id,
                            "gender": this.editmembers_form.value.gender,
                            "id": this.route.snapshot.queryParams.id,
                        };
                        console.log("iddd", body);
                        this.CommonService.memberEdit(body).subscribe(function (val) {
                            _this.member_process = false;
                            _this.CommonService.dismissLoading();
                            if (val.status == 1) {
                                _this.CommonService.presentToastWithOptions(val.message);
                                _this.router.navigate(['/manage-members']);
                            }
                            else {
                                _this.CommonService.presentToastWithOptions(val.message);
                            }
                        }, function (err) {
                            _this.member_process = false;
                            _this.CommonService.dismissLoading();
                            _this.CommonService.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                        });
                    }
                };
                EditMembersPage.prototype.back = function () {
                    this.navCtrl.pop();
                };
                return EditMembersPage;
            }());
            EditMembersPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
                { type: src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            EditMembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-members',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-members.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/edit-members/edit-members.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-members.page.scss */ "./src/app/members/edit-members/edit-members.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                    src_app_api_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
            ], EditMembersPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=members-edit-members-edit-members-module-es2015.js.map
//# sourceMappingURL=members-edit-members-edit-members-module-es5.js.map
//# sourceMappingURL=members-edit-members-edit-members-module-es5.js.map