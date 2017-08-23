webpackJsonp([4],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    return EditProfilePageModule;
}());
EditProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], EditProfilePageModule);

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_register_form__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_search_profile_search__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_form_login_form__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form__["a" /* RegisterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form__["a" /* EditProfileFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_search_profile_search__["a" /* ProfileSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_form_login_form__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form__["a" /* RegisterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__edit_profile_form_edit_profile_form__["a" /* EditProfileFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_search_profile_search__["a" /* ProfileSearchComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var LoginFormComponent = (function () {
    function LoginFormComponent(navController, authService) {
        this.navController = navController;
        this.authService = authService;
        this.account = {};
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.signInWithEmailAndPassword(this.account)];
                    case 1:
                        result = _a.sent();
                        this.loginStatus.emit(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginFormComponent.prototype.navigateToRegisterPage = function () {
        this.navController.push('RegisterPage');
    };
    return LoginFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], LoginFormComponent.prototype, "loginStatus", void 0);
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login-form',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/login-form/login-form.html"*/'<!-- Generated template for the LoginFormComponent component -->\n<form #loginForm="ngForm" novalidate>\n<ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Email Adress</ion-label>\n        <ion-input [(ngModel)]="account.email" type="email" name="email" #email="ngModel" required></ion-input>\n      </ion-item>\n\n      <div padding *ngIf="email.invalid && email.dirty">\n        <span>Email adress is not valid.</span>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="account.password" type="password" name="password" #password="ngModel" required pattern="[a-zA-Z0-9!@#$%^&*]{6,20}$"></ion-input>\n      </ion-item>\n\n      <div padding *ngIf="password.invalid && password.dirty">\n          <span class="global__input-error">Password is not valid.</span>\n        </div>\n\n    </ion-card-content>\n    <ion-row class="login-form__block__buttons">\n      <div class="login-form__buttons">\n        <button ion-button (click)="navigateToRegisterPage()" color="secondary">Register</button>\n        <button ion-button color="primary" (click)="login()" [disabled]="loginForm.invalid">Login</button>\n      </div>\n    </ion-row>\n  </ion-card>\n</form>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/login-form/login-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */]])
], LoginFormComponent);

//# sourceMappingURL=login-form.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var RegisterFormComponent = (function () {
    function RegisterFormComponent(authService) {
        this.authService = authService;
        this.account = {};
        // (!) Ne pas oublier après l'avoir typer plus haut de l'instancier
        this.registerStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    RegisterFormComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.createUserWithEmailAndPassword(this.account)];
                    case 1:
                        result = _a.sent();
                        this.registerStatus.emit(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    return RegisterFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], RegisterFormComponent.prototype, "registerStatus", void 0);
RegisterFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-register-form',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/register-form/register-form.html"*/'<!-- Generated template for the RegisterFormComponent component -->\n<form #registerForm="ngForm" novalidate>\n  <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label floating>Email Adress</ion-label>\n          <ion-input [(ngModel)]="account.email" type="email" name="email" #email="ngModel" required></ion-input>\n        </ion-item>\n\n        <div padding *ngIf="email.invalid && email.dirty">\n          <span>Email adress is not valid.</span>\n        </div>\n\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input [(ngModel)]="account.password" type="password" name="password" #password="ngModel" required pattern="[a-zA-Z0-9!@#$%^&*]{6,20}$"></ion-input>\n        </ion-item>\n\n        <div padding *ngIf="password.invalid && password.dirty">\n            <span class="global__input-error">Password is not valid.</span>\n          </div>\n\n      </ion-card-content>\n    <!--Penser à isoler le CSS en créant leur propre class-->\n    <ion-row class="login-form__block__buttons">\n      <div class="login-form__buttons">\n        <button ion-button (click)="register()" [disabled]="registerForm.invalid">Register</button>\n      </div>\n    </ion-row>\n  </ion-card>\n</form>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/register-form/register-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */]])
], RegisterFormComponent);

//# sourceMappingURL=register-form.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var EditProfileFormComponent = (function () {
    function EditProfileFormComponent(authService, dataService) {
        var _this = this;
        this.authService = authService;
        this.dataService = dataService;
        this.saveProfileResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // (?) Je sais pas pourquoi je dois le stocker dans une variable de type Subscription
        this.authentificateUser$ = this.authService.getAuthenticateUser().subscribe(function (user) {
            _this.authentificateUser = user;
        });
    }
    EditProfileFormComponent.prototype.ngOnInit = function () {
        if (!this.profile) {
            this.profile = {};
        }
    };
    EditProfileFormComponent.prototype.ngOnDestroy = function () {
        this.authentificateUser$.unsubscribe();
    };
    EditProfileFormComponent.prototype.saveProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authentificateUser) return [3 /*break*/, 2];
                        this.profile.email = this.authentificateUser.email;
                        return [4 /*yield*/, this.dataService.saveProfile(this.authentificateUser, this.profile)];
                    case 1:
                        result = _a.sent();
                        // On signal dans l'application qu'un utilisateur a été enregistré
                        this.saveProfileResult.emit(result);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return EditProfileFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], EditProfileFormComponent.prototype, "saveProfileResult", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], EditProfileFormComponent.prototype, "profile", void 0);
EditProfileFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'edit-profile-form',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/edit-profile-form/edit-profile-form.html"*/'<!-- Generated template for the EditProfileFormComponent component -->\n<ion-card>\n  <ion-card-content>\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input [(ngModel)]="profile.firstName" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input [(ngModel)]="profile.lastName" type="test"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Date of birth</ion-label>\n      <ion-datetime displayFormat="DD/MM/YY" [(ngModel)]="profile.dateOfBirth"></ion-datetime>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n\n<button ion-button color="primary" (click)="saveProfile()">Save</button>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/edit-profile-form/edit-profile-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */]])
], EditProfileFormComponent);

//# sourceMappingURL=edit-profile-form.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(78);
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
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProfileViewComponent = (function () {
    function ProfileViewComponent(dataService, authService, loading) {
        this.dataService = dataService;
        this.authService = authService;
        this.loading = loading;
        this.existingProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.loader = this.loading.create({
            content: "Chargement du profile ..."
        });
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.present();
        //Récupère l'utilisateur qui s'est connecté via son mail
        this.authService.getAuthenticateUser().subscribe(function (user) {
            //Récupère le profile via l'url `/profiles/${user.uid}`
            _this.dataService.getProfile(user).subscribe(function (profile) {
                _this.userProfile = profile.val();
                //Quand l'utilisateur est bien chargé, on le signal à l'application
                _this.existingProfile.emit(_this.userProfile);
                _this.loader.dismiss();
            });
        });
    };
    return ProfileViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ProfileViewComponent.prototype, "existingProfile", void 0);
ProfileViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile-view',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/profile-view/profile-view.html"*/'<!-- Generated template for the ProfileViewComponent component -->\n<div class="profile-view__image-container">\n  <img class="profile-view__image" src="assets/img/profile-placeholder.png" alt="profile">\n</div>\n\n<div *ngIf="userProfile">\n  <ion-card>\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label floating> Email </ion-label>\n        <ion-input [value]="userProfile.email" [readonly]="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating> First Name </ion-label>\n        <ion-input [value]="userProfile.firstName" [readonly]="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating> Last Name </ion-label>\n        <ion-input [value]="userProfile.lastName" [readonly]="true"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n          <ion-label floating> Date of birth </ion-label>\n          <ion-input [value]="userProfile.dateOfBirth" [readonly]="true"></ion-input>\n        </ion-item>\n    </ion-card-content>\n  </ion-card>\n</div>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/profile-view/profile-view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
], ProfileViewComponent);

//# sourceMappingURL=profile-view.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__ = __webpack_require__(270);
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
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProfileSearchComponent = (function () {
    function ProfileSearchComponent(dataService) {
        this.dataService = dataService;
        console.log('Hello ProfileSearchComponent Component');
        this.text = 'Hello ProfileSearchComponent';
    }
    ProfileSearchComponent.prototype.searchUser = function (query) {
        var _this = this;
        // Pour parser/unifier la requête utilisateur - .trim() permet de retirer les blancs en début et fin de chaîne.
        var trimmedQuery = query.trim();
        if (trimmedQuery === query) {
            this.dataService.searchUser(query).subscribe(function (profiles) {
                _this.profileList = profiles;
                console.log("profileList", _this.profileList);
            });
        }
    };
    return ProfileSearchComponent;
}());
ProfileSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile-search',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/profile-search/profile-search.html"*/'<!-- Generated template for the ProfileSearchComponent component -->\n<!-- ionChange relance un appel toutes les 200 milliseconde pour que nous puissons envoyer cette data au serveur -->\n<ion-searchbar [(ngModel)]="query" (ionChange)="searchUser(query)"></ion-searchbar>\n\n<ion-list *ngIf="profileList?.length > 0 | async">\n  <ion-item *ngFor="let profile of profileList">\n    <ion-avatar item-left>\n      <img src="assets/img/avatar.png" alt="Avatar">\n    </ion-avatar>\n    <h2>{{profile.firstName}} {{profile.lastName}}</h2>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/profile-search/profile-search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__["a" /* DataService */]])
], ProfileSearchComponent);

//# sourceMappingURL=profile-search.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
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
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {};
        this.profile = this.navParams.get('existingProfile');
    }
    EditProfilePage.prototype.saveProfileResult = function (event) {
        // Si l'évenement est true
        event ? this.navCtrl.setRoot('TabsPage') : console.log('Non authentifier ou sauvegarder');
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditProfilePage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <edit-profile-form [profile]="profile" (saveProfileResult)="saveProfileResult($event)"></edit-profile-form>\n</ion-content>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/edit-profile/edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map