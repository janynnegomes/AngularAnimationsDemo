function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["token-token-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/auth/token/token.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/auth/token/token.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsAuthTokenTokenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>token works!</p>\n";
    /***/
  },

  /***/
  "./src/app/pages/authentication/components/auth/token/token-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/authentication/components/auth/token/token-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: TokenRoutingModule */

  /***/
  function srcAppPagesAuthenticationComponentsAuthTokenTokenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenRoutingModule", function () {
      return TokenRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token.component */
    "./src/app/pages/authentication/components/auth/token/token.component.ts");

    var routes = [{
      path: '',
      component: _token_component__WEBPACK_IMPORTED_MODULE_3__["TokenComponent"],
      data: {
        animation: 'token'
      }
    }];

    var TokenRoutingModule = function TokenRoutingModule() {
      _classCallCheck(this, TokenRoutingModule);
    };

    TokenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TokenRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication/components/auth/token/token.component.sass":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/authentication/components/auth/token/token.component.sass ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthenticationComponentsAuthTokenTokenComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvYXV0aC90b2tlbi90b2tlbi5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/authentication/components/auth/token/token.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/authentication/components/auth/token/token.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TokenComponent */

  /***/
  function srcAppPagesAuthenticationComponentsAuthTokenTokenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenComponent", function () {
      return TokenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TokenComponent =
    /*#__PURE__*/
    function () {
      function TokenComponent() {
        _classCallCheck(this, TokenComponent);
      }

      _createClass(TokenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TokenComponent;
    }();

    TokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-token',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./token.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/auth/token/token.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./token.component.sass */
      "./src/app/pages/authentication/components/auth/token/token.component.sass")).default]
    })], TokenComponent);
    /***/
  },

  /***/
  "./src/app/pages/authentication/components/auth/token/token.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/authentication/components/auth/token/token.module.ts ***!
    \****************************************************************************/

  /*! exports provided: TokenModule */

  /***/
  function srcAppPagesAuthenticationComponentsAuthTokenTokenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenModule", function () {
      return TokenModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token.component */
    "./src/app/pages/authentication/components/auth/token/token.component.ts");
    /* harmony import */


    var _token_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./token-routing.module */
    "./src/app/pages/authentication/components/auth/token/token-routing.module.ts");

    var TokenModule = function TokenModule() {
      _classCallCheck(this, TokenModule);
    };

    TokenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_token_component__WEBPACK_IMPORTED_MODULE_3__["TokenComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _token_routing_module__WEBPACK_IMPORTED_MODULE_4__["TokenRoutingModule"]]
    })], TokenModule);
    /***/
  }
}]);
//# sourceMappingURL=token-token-module-es5.js.map