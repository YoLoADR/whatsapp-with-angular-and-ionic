webpackJsonp([3],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // Bonne pratique pour faire une fonction réutilisable -> exemple : (click)="navigateToPage('RegisterPage')"
    // (!) Si la personne click sur "login" la page suivantes (InboxPage) a un "back boutton" alors qu'il devrait juste avoir un boutton logout -> pour cela in va créer une fonction
    // la page suivantes est InboxPage car on la défini comme première root dans les Tabs de TabsPage - Tabs => Bottom Navigation App
    LoginPage.prototype.navigateToPage = function (pageName) {
        /*
          if(pageName === 'TabsPage'){
            this.navCtrl.setRoot(pageName);
          }else {
            this.navCtrl.push(pageName)
          }
        */
        // Si la page est égale à TabsPage (suite à un click sur login) -> on le redirige vers une page qui devient la page Root
        // Sinon on le redirige vers la page selectionné (par default)
        pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/img/logo_renault2.png" alt="logo">\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Email Adress</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </ion-card-content>\n    <ion-row>\n      <div>\n        <button ion-button (click)="navigateToPage(\'RegisterPage\')" color="secondary">Register</button>\n        <button ion-button color="primary" (click)="navigateToPage(\'TabsPage\')" >Login</button>\n      </div>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map