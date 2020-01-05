function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/authentication.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/authentication.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationAuthenticationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<page [title]=\"title\" [subtitle]=\"subtitle\">\r\n    <p>This is a 3 steps scenarios for authentication, using components representing every step of the authorization process.</p>\r\n    <p>This demo uses route transitions, catching the current and previous route trough Angular Animations.</p>\r\n    <nav class='nav'>\r\n        <a routerLink=\"/auth/login\" routerLinkActive=\"active\">Login</a>\r\n        <a routerLink=\"/auth/token\" routerLinkActive=\"active\">Token</a>\r\n        <a routerLink=\"/auth/accounts\" routerLinkActive=\"active\">Accounts</a>\r\n    </nav>  \r\n    <div [@routeAnimations]=\"prepareAuthRoute(outlet1)\" >\r\n            <router-outlet #outlet1=\"outlet\" name=\"authOutlet\"> </router-outlet>\r\n    </div>\r\n</page>  ";
    /***/
  },

  /***/
  "./src/app/pages/authentication/authentication-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/authentication/authentication-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppPagesAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
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


    var _authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.component */
    "./src/app/pages/authentication/authentication.component.ts");

    var routes = [{
      path: '',
      component: _authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"],
      data: {
        animation: 'page-authentication'
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/auth/auth.module */
        "./src/app/pages/authentication/components/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthenticationRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication/authentication.component.sass":
  /*!********************************************************************!*\
    !*** ./src/app/pages/authentication/authentication.component.sass ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthenticationAuthenticationComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/authentication/authentication.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/authentication/authentication.component.ts ***!
    \******************************************************************/

  /*! exports provided: AuthenticationComponent */

  /***/
  function srcAppPagesAuthenticationAuthenticationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
      return AuthenticationComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../animations */
    "./src/app/animations.ts");

    var AuthenticationComponent =
    /*#__PURE__*/
    function () {
      function AuthenticationComponent() {
        _classCallCheck(this, AuthenticationComponent);

        this.title = "Authentication";
        this.subtitle = "Slide transition efect";
        this.content = "This example shows 3 steps auth, with slide transition between the routes";
      }

      _createClass(AuthenticationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "prepareAuthRoute",
        value: function prepareAuthRoute(outlet) {
          console.dir(outlet.activatedRouteData['animation']);
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }]);

      return AuthenticationComponent;
    }();

    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authentication.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/authentication.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routeAnimations', [// // Definição dos estados finais de cada componente
      // state('login',style({backgroundColor:'orange'})),
      // state('token',style({backgroundColor:'blue'})),
      // state('accounts',style({backgroundColor:'brown'})),
      // Definição da transição da esquerda para direita
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('login => token, token => accounts', _animations__WEBPACK_IMPORTED_MODULE_3__["slideRight"]), // Definição da transição da direita para esquerda
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('token => login, accounts => token', _animations__WEBPACK_IMPORTED_MODULE_3__["slideLeft"])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authentication.component.sass */
      "./src/app/pages/authentication/authentication.component.sass")).default]
    })], AuthenticationComponent);
    /***/
  },

  /***/
  "./src/app/pages/authentication/authentication.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/authentication/authentication.module.ts ***!
    \***************************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppPagesAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
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


    var _authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.component */
    "./src/app/pages/authentication/authentication.component.ts");
    /* harmony import */


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentication-routing.module */
    "./src/app/pages/authentication/authentication-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/pages/authentication/components/components.module.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["AuthComponentsModule"]]
    })], AuthenticationModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication/components/auth/auth-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/authentication/components/auth/auth-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppPagesAuthenticationComponentsAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
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

    var routes = [{
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/pages/authentication/components/auth/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'token',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | token-token-module */
        "token-token-module").then(__webpack_require__.bind(null,
        /*! ./token/token.module */
        "./src/app/pages/authentication/components/auth/token/token.module.ts")).then(function (m) {
          return m.TokenModule;
        });
      }
    }, {
      path: 'accounts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | accounts-accounts-module */
        "accounts-accounts-module").then(__webpack_require__.bind(null,
        /*! ./accounts/accounts.module */
        "./src/app/pages/authentication/components/auth/accounts/accounts.module.ts")).then(function (m) {
          return m.AccountsModule;
        });
      }
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication/components/auth/auth.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/authentication/components/auth/auth.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppPagesAuthenticationComponentsAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/pages/authentication/components/auth/auth-routing.module.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]],
      exports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication/components/components.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/authentication/components/components.module.ts ***!
    \**********************************************************************/

  /*! exports provided: AuthComponentsModule */

  /***/
  function srcAppPagesAuthenticationComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponentsModule", function () {
      return AuthComponentsModule;
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


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/pages/authentication/components/auth/auth.module.ts");

    var AuthComponentsModule = function AuthComponentsModule() {
      _classCallCheck(this, AuthComponentsModule);
    };

    AuthComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"]],
      exports: [_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], AuthComponentsModule);
    /***/
  }
}]);
//# sourceMappingURL=authentication-authentication-module-es5.js.map