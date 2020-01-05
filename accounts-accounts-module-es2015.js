(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/auth/accounts/accounts.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/auth/accounts/accounts.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>accounts works!</p>\n");

/***/ }),

/***/ "./src/app/pages/authentication/components/auth/accounts/accounts-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/authentication/components/auth/accounts/accounts-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts.component */ "./src/app/pages/authentication/components/auth/accounts/accounts.component.ts");




const routes = [
    { path: '',
        component: _accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"],
        data: { animation: 'accounts' } }
];
let AccountsRoutingModule = class AccountsRoutingModule {
};
AccountsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountsRoutingModule);



/***/ }),

/***/ "./src/app/pages/authentication/components/auth/accounts/accounts.component.sass":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/authentication/components/auth/accounts/accounts.component.sass ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvYXV0aC9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/authentication/components/auth/accounts/accounts.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/authentication/components/auth/accounts/accounts.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountsComponent = class AccountsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accounts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accounts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/auth/accounts/accounts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accounts.component.sass */ "./src/app/pages/authentication/components/auth/accounts/accounts.component.sass")).default]
    })
], AccountsComponent);



/***/ }),

/***/ "./src/app/pages/authentication/components/auth/accounts/accounts.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/authentication/components/auth/accounts/accounts.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts.component */ "./src/app/pages/authentication/components/auth/accounts/accounts.component.ts");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accounts-routing.module */ "./src/app/pages/authentication/components/auth/accounts/accounts-routing.module.ts");





let AccountsModule = class AccountsModule {
};
AccountsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountsRoutingModule"]
        ]
    })
], AccountsModule);



/***/ })

}]);