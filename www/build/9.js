webpackJsonp([9],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsPageModule", function() { return ChannelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channels__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChannelsPageModule = (function () {
    function ChannelsPageModule() {
    }
    return ChannelsPageModule;
}());
ChannelsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */]),
        ],
    })
], ChannelsPageModule);

//# sourceMappingURL=channels.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat_service__ = __webpack_require__(296);
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
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChannelsPage = (function () {
    function ChannelsPage(chatService, alertController, navCtrl, navParams) {
        this.chatService = chatService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChannelsPage.prototype.ionViewWillLoad = function () {
        this.getChannels();
    };
    // handler permet de créer une fonction - data.channelName => name: 'channelName' (de l'input)
    ChannelsPage.prototype.showAddChannelDialog = function () {
        var _this = this;
        this.alertController.create({
            title: 'Channel Name',
            inputs: [{
                    name: 'channelName'
                }],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.chatService.addChannel(data.channelName);
                    }
                }
            ]
        }).present();
    };
    ChannelsPage.prototype.getChannels = function () {
        this.channelList = this.chatService.getChannelListRef();
    };
    ChannelsPage.prototype.selectChannel = function (channel) {
        this.navCtrl.push('ChannelChatPage', { channel: channel });
    };
    return ChannelsPage;
}());
ChannelsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-channels',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/channels/channels.html"*/'<!--\n  Generated template for the ChannelsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Channels</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showAddChannelDialog()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let channel of channelList | async" (click)="selectChannel(channel)">\n    <ion-item>#{{channel.name}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/channels/channels.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_chat_chat_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ChannelsPage);

//# sourceMappingURL=channels.js.map

/***/ })

});
//# sourceMappingURL=9.js.map