webpackJsonp([1],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(292);
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
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireAuth; });
/* unused harmony export FirebaseAuthStateObservable */
/* unused harmony export FirebaseIdTokenObservable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_auth__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(193);





var AngularFireAuth = (function () {
    function AngularFireAuth(app) {
        this.app = app;
        this.authState = FirebaseAuthStateObservable(app);
        this.idToken = FirebaseIdTokenObservable(app);
        this.auth = app.auth();
    }
    AngularFireAuth.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */] },
    ];
    AngularFireAuth.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */], },
    ]; };
    return AngularFireAuth;
}());

function FirebaseAuthStateObservable(app) {
    var authState = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
        app.auth().onAuthStateChanged(function (user) { return observer.next(user); }, function (error) { return observer.error(error); }, function () { observer.complete(); return undefined; });
    });
    return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__["observeOn"].call(authState, new __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* ZoneScheduler */](Zone.current));
}
function FirebaseIdTokenObservable(app) {
    var idToken = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
        app.auth().onIdTokenChanged(function (user) { return observer.next(user); }, function (error) { return observer.error(error); }, function () { observer.complete(); return undefined; });
    });
    return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__["observeOn"].call(idToken, new __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* ZoneScheduler */](Zone.current));
}
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

var firebase = __webpack_require__(195);
(function(){(function(){var h,aa=aa||{},k=this,ba=function(a){return void 0!==a},m=function(a){return"string"==typeof a},ca=function(a){return"boolean"==typeof a},da=function(a){return"number"==typeof a},ea=function(){},fa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ha=function(a){return null===a},ia=function(a){return"array"==fa(a)},ja=function(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"function"==fa(a)},q=function(a){var b=
typeof a;return"object"==b&&null!=a||"function"==b},ka=function(a,b,c){return a.call.apply(a.bind,arguments)},la=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return r.apply(null,
arguments)},ma=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},na=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.Sc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Cg=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var oa=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},xa=function(a){if(!qa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ra,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(sa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ta,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ua,"&quot;"));-1!=a.indexOf("'")&&
(a=a.replace(va,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(wa,"&#0;"));return a},ra=/&/g,sa=/</g,ta=/>/g,ua=/"/g,va=/'/g,wa=/\x00/g,qa=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},ya=function(a,b){return a<b?-1:a>b?1:0};var za=function(a,b){b.unshift(a);u.call(this,oa.apply(null,b));b.shift()};t(za,u);za.prototype.name="AssertionError";
var Aa=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new za(""+e,f||[]);},w=function(a,b,c){a||Aa("",null,b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b){throw new za("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Ca=function(a,b,c){da(a)||Aa("Expected number but got %s: %s.",[fa(a),a],b,Array.prototype.slice.call(arguments,2));return a},Da=function(a,b,c){m(a)||Aa("Expected string but got %s: %s.",[fa(a),
a],b,Array.prototype.slice.call(arguments,2))},Ea=function(a,b,c){p(a)||Aa("Expected function but got %s: %s.",[fa(a),a],b,Array.prototype.slice.call(arguments,2))};var Ga=function(){this.Rc="";this.$e=Fa};Ga.prototype.mb=!0;Ga.prototype.kb=function(){return this.Rc};Ga.prototype.toString=function(){return"Const{"+this.Rc+"}"};var Ha=function(a){if(a instanceof Ga&&a.constructor===Ga&&a.$e===Fa)return a.Rc;Ba("expected object of type Const, got '"+a+"'");return"type_error:Const"},Fa={},Ia=function(a){var b=new Ga;b.Rc=a;return b};Ia("");var Ka=function(){this.Kc="";this.af=Ja};Ka.prototype.mb=!0;Ka.prototype.kb=function(){return this.Kc};Ka.prototype.toString=function(){return"TrustedResourceUrl{"+this.Kc+"}"};
var La=function(a){if(a instanceof Ka&&a.constructor===Ka&&a.af===Ja)return a.Kc;Ba("expected object of type TrustedResourceUrl, got '"+a+"' of type "+fa(a));return"type_error:TrustedResourceUrl"},Na=function(a,b){a=Ma(a,b);b=new Ka;b.Kc=a;return b},Ma=function(a,b){var c=Ha(a);if(!Oa.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);return c.replace(Pa,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+
JSON.stringify(b));a=b[e];return a instanceof Ga?Ha(a):encodeURIComponent(String(a))})},Pa=/%{(\w+)}/g,Oa=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,Ja={};var Qa=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ra=function(a,b){for(var c=m(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Sa=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ta=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Va=function(a){a:{var b=Ua;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},Wa=function(a,b){return 0<=Qa(a,b)},Ya=function(a,b){b=Qa(a,b);var c;(c=0<=b)&&Xa(a,b);return c},Xa=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Za=function(a,b){var c=0;Ra(a,function(d,e){b.call(void 0,d,e,a)&&Xa(a,e)&&c++})},$a=function(a){return Array.prototype.concat.apply([],arguments)},
ab=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var bb=function(a){return Sa(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var cb;a:{var db=k.navigator;if(db){var eb=db.userAgent;if(eb){cb=eb;break a}}cb=""}var y=function(a){return v(cb,a)};var fb=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},gb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},hb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},ib=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},jb=function(a){for(var b in a)return!1;return!0},kb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},lb=function(a){var b={},c;for(c in a)b[c]=a[c];return b},mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
nb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ob=function(a){ob[" "](a);return a};ob[" "]=ea;var qb=function(a,b){var c=pb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var rb=y("Opera"),z=y("Trident")||y("MSIE"),sb=y("Edge"),tb=sb||z,ub=y("Gecko")&&!(v(cb.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),vb=v(cb.toLowerCase(),"webkit")&&!y("Edge"),xb=function(){var a=k.document;return a?a.documentMode:void 0},yb;
a:{var zb="",Ab=function(){var a=cb;if(ub)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vb)return/WebKit\/(\S+)/.exec(a);if(rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ab&&(zb=Ab?Ab[1]:"");if(z){var Bb=xb();if(null!=Bb&&Bb>parseFloat(zb)){yb=String(Bb);break a}}yb=zb}
var Cb=yb,pb={},A=function(a){return qb(a,function(){for(var b=0,c=pa(String(Cb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=ya(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||ya(0==g[2].length,0==l[2].length)||ya(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})},Db;var Eb=k.document;
Db=Eb&&z?xb()||("CSS1Compat"==Eb.compatMode?parseInt(Cb,10):5):void 0;var Fb=null,Gb=null,Ib=function(a){var b="";Hb(a,function(a){b+=String.fromCharCode(a)});return b},Hb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Gb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Jb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=l&&b(g<<6&192|l))}},Jb=function(){if(!Fb){Fb={};Gb={};for(var a=0;65>a;a++)Fb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
Gb[Fb[a]]=a,62<=a&&(Gb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var Kb=function(){this.Ia=-1};var Nb=function(a,b){this.Ia=64;this.oc=k.Uint8Array?new Uint8Array(this.Ia):Array(this.Ia);this.Vc=this.nb=0;this.l=[];this.Sf=a;this.we=b;this.tg=k.Int32Array?new Int32Array(64):Array(64);ba(Lb)||(Lb=k.Int32Array?new Int32Array(Mb):Mb);this.reset()},Lb;t(Nb,Kb);for(var Ob=[],Pb=0;63>Pb;Pb++)Ob[Pb]=0;var Qb=$a(128,Ob);Nb.prototype.reset=function(){this.Vc=this.nb=0;this.l=k.Int32Array?new Int32Array(this.we):ab(this.we)};
var Rb=function(a){var b=a.oc;w(b.length==a.Ia);for(var c=a.tg,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){d=c[b-15]|0;e=c[b-2]|0;e=(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10;var f=(c[b-16]|0)+((d>>>7|d<<25)^(d>>>18|d<<14)^d>>>3)|0;var g=(c[b-7]|0)+e|0;c[b]=f+g|0}d=a.l[0]|0;e=a.l[1]|0;var l=a.l[2]|0,n=a.l[3]|0,C=a.l[4]|0,wb=a.l[5]|0,ec=a.l[6]|0;f=a.l[7]|0;for(b=0;64>b;b++){var mi=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&l^e&l)|0;g=C&wb^~C&ec;f=f+
((C>>>6|C<<26)^(C>>>11|C<<21)^(C>>>25|C<<7))|0;g=g+(Lb[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=ec;ec=wb;wb=C;C=n+g|0;n=l;l=e;e=d;d=g+mi|0}a.l[0]=a.l[0]+d|0;a.l[1]=a.l[1]+e|0;a.l[2]=a.l[2]+l|0;a.l[3]=a.l[3]+n|0;a.l[4]=a.l[4]+C|0;a.l[5]=a.l[5]+wb|0;a.l[6]=a.l[6]+ec|0;a.l[7]=a.l[7]+f|0};
Nb.prototype.update=function(a,b){ba(b)||(b=a.length);var c=0,d=this.nb;if(m(a))for(;c<b;)this.oc[d++]=a.charCodeAt(c++),d==this.Ia&&(Rb(this),d=0);else if(ja(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.oc[d++]=e;d==this.Ia&&(Rb(this),d=0)}else throw Error("message must be string or array");this.nb=d;this.Vc+=b};
Nb.prototype.digest=function(){var a=[],b=8*this.Vc;56>this.nb?this.update(Qb,56-this.nb):this.update(Qb,this.Ia-(this.nb-56));for(var c=63;56<=c;c--)this.oc[c]=b&255,b/=256;Rb(this);for(c=b=0;c<this.Sf;c++)for(var d=24;0<=d;d-=8)a[b++]=this.l[c]>>d&255;return a};
var Mb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Tb=function(){Nb.call(this,8,Sb)};t(Tb,Nb);var Sb=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Ub=function(){this.Ka=this.Ka;this.Hc=this.Hc};Ub.prototype.Ka=!1;Ub.prototype.isDisposed=function(){return this.Ka};Ub.prototype.ib=function(){if(this.Hc)for(;this.Hc.length;)this.Hc.shift()()};var Vb=!z||9<=Number(Db),Wb=z&&!A("9");!vb||A("528");ub&&A("1.9b")||z&&A("8")||rb&&A("9.5")||vb&&A("528");ub&&!A("8")||z&&A("9");var Xb=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",ea,b);k.removeEventListener("test",ea,b);return a}();var B=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Ua=!1;this.Je=!0};B.prototype.stopPropagation=function(){this.Ua=!0};B.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Je=!1};var Yb=function(a,b){B.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.fa=this.state=null;a&&this.init(a,b)};t(Yb,B);
Yb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(ub){a:{try{ob(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=vb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=vb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.fa=a;a.defaultPrevented&&
this.preventDefault()};Yb.prototype.stopPropagation=function(){Yb.Sc.stopPropagation.call(this);this.fa.stopPropagation?this.fa.stopPropagation():this.fa.cancelBubble=!0};Yb.prototype.preventDefault=function(){Yb.Sc.preventDefault.call(this);var a=this.fa;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Yb.prototype.wf=function(){return this.fa};var Zb="closure_listenable_"+(1E6*Math.random()|0),$b=0;var ac=function(a,b,c,d,e){this.listener=a;this.Lc=null;this.src=b;this.type=c;this.capture=!!d;this.uc=e;this.key=++$b;this.yb=this.nc=!1},bc=function(a){a.yb=!0;a.listener=null;a.Lc=null;a.src=null;a.uc=null};var cc=function(a){this.src=a;this.J={};this.hc=0};cc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.J[f];a||(a=this.J[f]=[],this.hc++);var g=dc(a,b,d,e);-1<g?(b=a[g],c||(b.nc=!1)):(b=new ac(b,this.src,f,!!d,e),b.nc=c,a.push(b));return b};cc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.J))return!1;var e=this.J[a];b=dc(e,b,c,d);return-1<b?(bc(e[b]),Xa(e,b),0==e.length&&(delete this.J[a],this.hc--),!0):!1};
var fc=function(a,b){var c=b.type;c in a.J&&Ya(a.J[c],b)&&(bc(b),0==a.J[c].length&&(delete a.J[c],a.hc--))};cc.prototype.od=function(a,b,c,d){a=this.J[a.toString()];var e=-1;a&&(e=dc(a,b,c,d));return-1<e?a[e]:null};cc.prototype.hasListener=function(a,b){var c=ba(a),d=c?a.toString():"",e=ba(b);return gb(this.J,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};
var dc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.yb&&f.listener==b&&f.capture==!!c&&f.uc==d)return e}return-1};var gc="closure_lm_"+(1E6*Math.random()|0),hc={},ic=0,kc=function(a,b,c,d,e){if(d&&d.once)jc(a,b,c,d,e);else if(ia(b))for(var f=0;f<b.length;f++)kc(a,b[f],c,d,e);else c=lc(c),a&&a[Zb]?a.listen(b,c,q(d)?!!d.capture:!!d,e):mc(a,b,c,!1,d,e)},mc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,l=nc(a);l||(a[gc]=l=new cc(a));c=l.add(b,c,d,g,f);if(!c.Lc){d=oc();c.Lc=d;d.src=a;d.listener=c;if(a.addEventListener)Xb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(pc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");ic++}},oc=function(){var a=qc,b=Vb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},jc=function(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)jc(a,b[f],c,d,e);else c=lc(c),a&&a[Zb]?rc(a,b,c,q(d)?!!d.capture:!!d,e):mc(a,b,c,!0,d,e)},sc=function(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)sc(a,b[f],c,d,
e);else d=q(d)?!!d.capture:!!d,c=lc(c),a&&a[Zb]?a.ea.remove(String(b),c,d,e):a&&(a=nc(a))&&(b=a.od(b,c,d,e))&&tc(b)},tc=function(a){if(!da(a)&&a&&!a.yb){var b=a.src;if(b&&b[Zb])fc(b.ea,a);else{var c=a.type,d=a.Lc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(pc(c),d);ic--;(c=nc(b))?(fc(c,a),0==c.hc&&(c.src=null,b[gc]=null)):bc(a)}}},pc=function(a){return a in hc?hc[a]:hc[a]="on"+a},vc=function(a,b,c,d){var e=!0;if(a=nc(a))if(b=a.J[b.toString()])for(b=b.concat(),
a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.yb&&(f=uc(f,d),e=e&&!1!==f)}return e},uc=function(a,b){var c=a.listener,d=a.uc||a.src;a.nc&&tc(a);return c.call(d,b)},qc=function(a,b){if(a.yb)return!0;if(!Vb){if(!b)a:{b=["window","event"];for(var c=k,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Yb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=
b.currentTarget;e;e=e.parentNode)d.push(e);e=a.type;for(var f=d.length-1;!b.Ua&&0<=f;f--)b.currentTarget=d[f],a=vc(d[f],e,!0,b),c=c&&a;for(f=0;!b.Ua&&f<d.length;f++)b.currentTarget=d[f],a=vc(d[f],e,!1,b),c=c&&a}return c}return uc(a,new Yb(b,this))},nc=function(a){a=a[gc];return a instanceof cc?a:null},wc="__closure_events_fn_"+(1E9*Math.random()>>>0),lc=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[wc]||(a[wc]=function(b){return a.handleEvent(b)});
return a[wc]};var xc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var zc=function(){this.wa="";this.Ze=yc};zc.prototype.mb=!0;zc.prototype.kb=function(){return this.wa};zc.prototype.toString=function(){return"SafeUrl{"+this.wa+"}"};
var Ac=function(a){if(a instanceof zc&&a.constructor===zc&&a.Ze===yc)return a.wa;Ba("expected object of type SafeUrl, got '"+a+"' of type "+fa(a));return"type_error:SafeUrl"},Bc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Dc=function(a){if(a instanceof zc)return a;a=a.mb?a.kb():String(a);Bc.test(a)||(a="about:invalid#zClosurez");return Cc(a)},yc={},Cc=function(a){var b=new zc;b.wa=a;return b};Cc("about:blank");var Gc=function(a){var b=[];Ec(new Fc,a,b);return b.join("")},Fc=function(){this.Mc=void 0},Ec=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ia(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ec(a,a.Mc?a.Mc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
Hc(d,c),c.push(":"),Ec(a,a.Mc?a.Mc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Hc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Ic={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
Hc=function(a,b){b.push('"',a.replace(Jc,function(a){var b=Ic[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ic[a]=b);return b}),'"')};var Kc=function(){};Kc.prototype.be=null;var Lc=function(a){return a.be||(a.be=a.wd())};var Mc,Nc=function(){};t(Nc,Kc);Nc.prototype.pc=function(){var a=Oc(this);return a?new ActiveXObject(a):new XMLHttpRequest};Nc.prototype.wd=function(){var a={};Oc(this)&&(a[0]=!0,a[1]=!0);return a};
var Oc=function(a){if(!a.ve&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.ve=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ve};Mc=new Nc;var Pc=function(){};t(Pc,Kc);Pc.prototype.pc=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Qc;throw Error("Unsupported browser");};Pc.prototype.wd=function(){return{}};
var Qc=function(){this.na=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.na.onload=r(this.zf,this);this.na.onerror=r(this.qe,this);this.na.onprogress=r(this.Af,this);this.na.ontimeout=r(this.Bf,this)};h=Qc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.na.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.na.send(a);else throw Error("Only string data is supported");else this.na.send()};h.abort=function(){this.na.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.na.contentType:""};h.zf=function(){this.status=200;this.responseText=this.na.responseText;Rc(this,4)};h.qe=function(){this.status=500;this.responseText="";Rc(this,4)};h.Bf=function(){this.qe()};
h.Af=function(){this.status=200;Rc(this,1)};var Rc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};Qc.prototype.getAllResponseHeaders=function(){return"content-type: "+this.na.contentType};var Sc=function(a,b,c){this.Of=c;this.kf=a;this.cg=b;this.Gc=0;this.vc=null};Sc.prototype.get=function(){if(0<this.Gc){this.Gc--;var a=this.vc;this.vc=a.next;a.next=null}else a=this.kf();return a};Sc.prototype.put=function(a){this.cg(a);this.Gc<this.Of&&(this.Gc++,a.next=this.vc,this.vc=a)};var Tc=function(a){k.setTimeout(function(){throw a;},0)},Uc,Vc=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;
a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ba(c.next)){c=c.next;var a=c.fe;c.fe=null;a()}};return function(a){d.next={fe:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Wc=function(){this.$c=this.eb=null},Yc=new Sc(function(){return new Xc},function(a){a.reset()},100);Wc.prototype.add=function(a,b){var c=Yc.get();c.set(a,b);this.$c?this.$c.next=c:(w(!this.eb),this.eb=c);this.$c=c};Wc.prototype.remove=function(){var a=null;this.eb&&(a=this.eb,this.eb=this.eb.next,this.eb||(this.$c=null),a.next=null);return a};var Xc=function(){this.next=this.scope=this.nd=null};Xc.prototype.set=function(a,b){this.nd=a;this.scope=b;this.next=null};
Xc.prototype.reset=function(){this.next=this.scope=this.nd=null};var cd=function(a,b){Zc||$c();ad||(Zc(),ad=!0);bd.add(a,b)},Zc,$c=function(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);Zc=function(){a.then(dd)}}else Zc=function(){var a=dd;!p(k.setImmediate)||k.Window&&k.Window.prototype&&!y("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Uc||(Uc=Vc()),Uc(a)):k.setImmediate(a)}},ad=!1,bd=new Wc,dd=function(){for(var a;a=bd.remove();){try{a.nd.call(a.scope)}catch(b){Tc(b)}Yc.put(a)}ad=!1};var ed=function(a){return q(a)?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):void 0===a?"undefined":null===a?"null":typeof a},fd=function(a){return(a=a&&a.ownerDocument)&&(a.defaultView||a.parentWindow)||window};var gd=!z||9<=Number(Db);!ub&&!z||z&&9<=Number(Db)||ub&&A("1.9.1");z&&A("9");var id=function(){this.wa="";this.Ye=hd};id.prototype.mb=!0;id.prototype.kb=function(){return this.wa};id.prototype.toString=function(){return"SafeHtml{"+this.wa+"}"};var jd=function(a){if(a instanceof id&&a.constructor===id&&a.Ye===hd)return a.wa;Ba("expected object of type SafeHtml, got '"+a+"' of type "+fa(a));return"type_error:SafeHtml"},hd={};id.prototype.If=function(a){this.wa=a;return this};var kd=function(a,b){var c=fd(a);"undefined"!=typeof c.HTMLScriptElement&&"undefined"!=typeof c.Element&&w(a&&(a instanceof c.HTMLScriptElement||!(a instanceof c.Element)),"Argument is not a HTMLScriptElement (or a non-Element mock); got: %s",ed(a));a.src=La(b)};var ld=function(a){var b=document;return m(a)?b.getElementById(a):a},nd=function(a,b){fb(b,function(b,d){b&&b.mb&&(b=b.kb());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:md.hasOwnProperty(d)?a.setAttribute(md[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},md={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",
type:"type",usemap:"useMap",valign:"vAlign",width:"width"},pd=function(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!gd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',xa(g.name),'"');if(g.type){f.push(' type="',xa(g.type),'"');var l={};nb(l,g);delete l.type;g=l}f.push(">");f=f.join("")}f=e.createElement(f);g&&(m(g)?f.className=g:ia(g)?f.className=g.join(" "):nd(f,g));2<d.length&&od(e,f,d);return f},od=function(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):
c)}for(var e=2;e<c.length;e++){var f=c[e];!ja(f)||q(f)&&0<f.nodeType?d(f):x(qd(f)?ab(f):f,d)}},qd=function(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(p(a))return"function"==typeof a.item}return!1};var rd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},sd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var D=function(a,b){this.Z=0;this.ya=void 0;this.hb=this.ta=this.w=null;this.tc=this.md=!1;if(a!=ea)try{var c=this;a.call(b,function(a){td(c,2,a)},function(a){if(!(a instanceof ud))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}td(c,3,a)})}catch(d){td(this,3,d)}},vd=function(){this.next=this.context=this.pb=this.Sa=this.child=null;this.Db=!1};vd.prototype.reset=function(){this.context=this.pb=this.Sa=this.child=null;this.Db=!1};
var wd=new Sc(function(){return new vd},function(a){a.reset()},100),xd=function(a,b,c){var d=wd.get();d.Sa=a;d.pb=b;d.context=c;return d},E=function(a){if(a instanceof D)return a;var b=new D(ea);td(b,2,a);return b},F=function(a){return new D(function(b,c){c(a)})},zd=function(a,b,c){yd(a,b,c,null)||cd(ma(b,a))},Ad=function(a){return new D(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},l=0,n;l<a.length;l++)n=a[l],zd(n,ma(f,l),g);else b(e)})},
Bd=function(a){return new D(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{uf:!0,value:f}:{uf:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],zd(g,ma(e,f,!0),ma(e,f,!1));else b(d)})};D.prototype.then=function(a,b,c){null!=a&&Ea(a,"opt_onFulfilled should be a function.");null!=b&&Ea(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Cd(this,p(a)?a:null,p(b)?b:null,c)};rd(D);
var Ed=function(a,b){b=xd(b,b,void 0);b.Db=!0;Dd(a,b);return a};D.prototype.f=function(a,b){return Cd(this,null,a,b)};D.prototype.cancel=function(a){0==this.Z&&cd(function(){var b=new ud(a);Fd(this,b)},this)};
var Fd=function(a,b){if(0==a.Z)if(a.w){var c=a.w;if(c.ta){for(var d=0,e=null,f=null,g=c.ta;g&&(g.Db||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.Z&&1==d?Fd(c,b):(f?(d=f,w(c.ta),w(null!=d),d.next==c.hb&&(c.hb=d),d.next=d.next.next):Gd(c),Hd(c,e,3,b)))}a.w=null}else td(a,3,b)},Dd=function(a,b){a.ta||2!=a.Z&&3!=a.Z||Id(a);w(null!=b.Sa);a.hb?a.hb.next=b:a.ta=b;a.hb=b},Cd=function(a,b,c,d){var e=xd(null,null,null);e.child=new D(function(a,g){e.Sa=b?function(c){try{var e=b.call(d,c);a(e)}catch(C){g(C)}}:
a;e.pb=c?function(b){try{var e=c.call(d,b);!ba(e)&&b instanceof ud?g(b):a(e)}catch(C){g(C)}}:g});e.child.w=a;Dd(a,e);return e.child};D.prototype.qg=function(a){w(1==this.Z);this.Z=0;td(this,2,a)};D.prototype.rg=function(a){w(1==this.Z);this.Z=0;td(this,3,a)};
var td=function(a,b,c){0==a.Z&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.Z=1,yd(c,a.qg,a.rg,a)||(a.ya=c,a.Z=b,a.w=null,Id(a),3!=b||c instanceof ud||Jd(a,c)))},yd=function(a,b,c,d){if(a instanceof D)return null!=b&&Ea(b,"opt_onFulfilled should be a function."),null!=c&&Ea(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Dd(a,xd(b||ea,c||null,d)),!0;if(sd(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(p(e))return Kd(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Kd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},l=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,l)}catch(n){l(n)}},Id=function(a){a.md||(a.md=!0,cd(a.qf,a))},Gd=function(a){var b=null;a.ta&&(b=a.ta,a.ta=b.next,b.next=null);a.ta||(a.hb=null);null!=b&&w(null!=b.Sa);return b};D.prototype.qf=function(){for(var a;a=Gd(this);)Hd(this,a,this.Z,this.ya);this.md=!1};
var Hd=function(a,b,c,d){if(3==c&&b.pb&&!b.Db)for(;a&&a.tc;a=a.w)a.tc=!1;if(b.child)b.child.w=null,Ld(b,c,d);else try{b.Db?b.Sa.call(b.context):Ld(b,c,d)}catch(e){Md.call(null,e)}wd.put(b)},Ld=function(a,b,c){2==b?a.Sa.call(a.context,c):a.pb&&a.pb.call(a.context,c)},Jd=function(a,b){a.tc=!0;cd(function(){a.tc&&Md.call(null,b)})},Md=Tc,ud=function(a){u.call(this,a)};t(ud,u);ud.prototype.name="cancel";
var Nd=function(a,b){this.Oc=[];this.De=a;this.je=b||null;this.Lb=this.jb=!1;this.ya=void 0;this.Ud=this.$d=this.dd=!1;this.Wc=0;this.w=null;this.ed=0};Nd.prototype.cancel=function(a){if(this.jb)this.ya instanceof Nd&&this.ya.cancel();else{if(this.w){var b=this.w;delete this.w;a?b.cancel(a):(b.ed--,0>=b.ed&&b.cancel())}this.De?this.De.call(this.je,this):this.Ud=!0;this.jb||Od(this,new Pd)}};Nd.prototype.he=function(a,b){this.dd=!1;Qd(this,a,b)};
var Qd=function(a,b,c){a.jb=!0;a.ya=c;a.Lb=!b;Rd(a)},Td=function(a){if(a.jb){if(!a.Ud)throw new Sd;a.Ud=!1}};Nd.prototype.callback=function(a){Td(this);Ud(a);Qd(this,!0,a)};var Od=function(a,b){Td(a);Ud(b);Qd(a,!1,b)},Ud=function(a){w(!(a instanceof Nd),"An execution sequence may not be initiated with a blocking Deferred.")},Wd=function(a,b){Vd(a,null,b,void 0)},Vd=function(a,b,c,d){w(!a.$d,"Blocking Deferreds can not be re-used");a.Oc.push([b,c,d]);a.jb&&Rd(a)};
Nd.prototype.then=function(a,b,c){var d,e,f=new D(function(a,b){d=a;e=b});Vd(this,d,function(a){a instanceof Pd?f.cancel():e(a)});return f.then(a,b,c)};rd(Nd);
var Xd=function(a){return Ta(a.Oc,function(a){return p(a[1])})},Rd=function(a){if(a.Wc&&a.jb&&Xd(a)){var b=a.Wc,c=Yd[b];c&&(k.clearTimeout(c.Mb),delete Yd[b]);a.Wc=0}a.w&&(a.w.ed--,delete a.w);b=a.ya;for(var d=c=!1;a.Oc.length&&!a.dd;){var e=a.Oc.shift(),f=e[0],g=e[1];e=e[2];if(f=a.Lb?g:f)try{var l=f.call(e||a.je,b);ba(l)&&(a.Lb=a.Lb&&(l==b||l instanceof Error),a.ya=b=l);if(sd(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.dd=!0}catch(n){b=n,a.Lb=!0,Xd(a)||(c=!0)}}a.ya=b;d&&(l=r(a.he,
a,!0),d=r(a.he,a,!1),b instanceof Nd?(Vd(b,l,d),b.$d=!0):b.then(l,d));c&&(b=new Zd(b),Yd[b.Mb]=b,a.Wc=b.Mb)},Sd=function(){u.call(this)};t(Sd,u);Sd.prototype.message="Deferred has already fired";Sd.prototype.name="AlreadyCalledError";var Pd=function(){u.call(this)};t(Pd,u);Pd.prototype.message="Deferred was canceled";Pd.prototype.name="CanceledError";var Zd=function(a){this.Mb=k.setTimeout(r(this.pg,this),0);this.$=a};
Zd.prototype.pg=function(){w(Yd[this.Mb],"Cannot throw an error that is not scheduled.");delete Yd[this.Mb];throw this.$;};var Yd={};var de=function(a){var b={},c=b.document||document,d=La(a),e=document.createElement("SCRIPT"),f={Ke:e,gc:void 0},g=new Nd($d,f),l=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(l=window.setTimeout(function(){ae(e,!0);Od(g,new be(1,"Timeout reached for loading script "+d))},n),f.gc=l);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(ae(e,b.Dg||!1,l),g.callback(null))};e.onerror=function(){ae(e,!0,l);Od(g,new be(0,"Error while loading script "+d))};
f=b.attributes||{};nb(f,{type:"text/javascript",charset:"UTF-8"});nd(e,f);kd(e,a);ce(c).appendChild(e);return g},ce=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},$d=function(){if(this&&this.Ke){var a=this.Ke;a&&"SCRIPT"==a.tagName&&ae(a,!0,this.gc)}},ae=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ea;a.onerror=ea;a.onreadystatechange=ea;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},be=function(a,
b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};t(be,u);var ee=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ee.prototype.le=null;var fe=0;ee.prototype.reset=function(a,b,c,d,e){"number"==typeof e||fe++;d||na();this.Rb=a;this.Rf=b;delete this.le};ee.prototype.Me=function(a){this.Rb=a};var ge=function(a){this.Be=a;this.re=this.gd=this.Rb=this.w=null},he=function(a,b){this.name=a;this.value=b};he.prototype.toString=function(){return this.name};var ie=new he("SEVERE",1E3),je=new he("INFO",800),ke=new he("CONFIG",700),le=new he("FINE",500);ge.prototype.getName=function(){return this.Be};ge.prototype.getParent=function(){return this.w};ge.prototype.Me=function(a){this.Rb=a};var me=function(a){if(a.Rb)return a.Rb;if(a.w)return me(a.w);Ba("Root logger has no level set.");return null};
ge.prototype.log=function(a,b,c){if(a.value>=me(this).value)for(p(b)&&(b=b()),a=new ee(a,String(b),this.Be),c&&(a.le=c),c="log:"+a.Rf,(b=k.console)&&b.timeStamp&&b.timeStamp(c),(b=k.msWriteProfilerMark)&&b(c),c=this;c;){var d=c,e=a;if(d.re)for(var f=0;b=d.re[f];f++)b(e);c=c.getParent()}};ge.prototype.info=function(a,b){this.log(je,a,b)};ge.prototype.config=function(a,b){this.log(ke,a,b)};
var ne={},oe=null,pe=function(a){oe||(oe=new ge(""),ne[""]=oe,oe.Me(ke));var b;if(!(b=ne[a])){b=new ge(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=pe(a.substr(0,c));c.gd||(c.gd={});c.gd[d]=b;b.w=c;ne[a]=b}return b};var G=function(){Ub.call(this);this.ea=new cc(this);this.cf=this;this.Ed=null};t(G,Ub);G.prototype[Zb]=!0;h=G.prototype;h.addEventListener=function(a,b,c,d){kc(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){sc(this,a,b,c,d)};
h.dispatchEvent=function(a){qe(this);var b=this.Ed;if(b){var c=[];for(var d=1;b;b=b.Ed)c.push(b),w(1E3>++d,"infinite loop")}b=this.cf;d=a.type||a;if(m(a))a=new B(a,b);else if(a instanceof B)a.target=a.target||b;else{var e=a;a=new B(d,b);nb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.Ua&&0<=f;f--){var g=a.currentTarget=c[f];e=re(g,d,!0,a)&&e}a.Ua||(g=a.currentTarget=b,e=re(g,d,!0,a)&&e,a.Ua||(e=re(g,d,!1,a)&&e));if(c)for(f=0;!a.Ua&&f<c.length;f++)g=a.currentTarget=c[f],e=re(g,d,!1,a)&&e;return e};
h.ib=function(){G.Sc.ib.call(this);if(this.ea){var a=this.ea,b=0,c;for(c in a.J){for(var d=a.J[c],e=0;e<d.length;e++)++b,bc(d[e]);delete a.J[c];a.hc--}}this.Ed=null};h.listen=function(a,b,c,d){qe(this);return this.ea.add(String(a),b,!1,c,d)};
var rc=function(a,b,c,d,e){a.ea.add(String(b),c,!0,d,e)},re=function(a,b,c,d){b=a.ea.J[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.yb&&g.capture==c){var l=g.listener,n=g.uc||g.src;g.nc&&fc(a.ea,g);e=!1!==l.call(n,d)&&e}}return e&&0!=d.Je};G.prototype.od=function(a,b,c,d){return this.ea.od(String(a),b,c,d)};G.prototype.hasListener=function(a,b){return this.ea.hasListener(ba(a)?String(a):void 0,b)};var qe=function(a){w(a.ea,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var se="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},te=function(){};te.prototype.next=function(){throw se;};te.prototype.bf=function(){return this};var H=function(a,b){a&&a.log(le,b,void 0)};var ue=function(a,b){this.ia={};this.A=[];this.cb=this.s=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=ue.prototype;h.ga=function(){ve(this);for(var a=[],b=0;b<this.A.length;b++)a.push(this.ia[this.A[b]]);return a};h.ua=function(){ve(this);return this.A.concat()};h.Fb=function(a){return we(this.ia,a)};h.clear=function(){this.ia={};this.cb=this.s=this.A.length=0};
h.remove=function(a){return we(this.ia,a)?(delete this.ia[a],this.s--,this.cb++,this.A.length>2*this.s&&ve(this),!0):!1};var ve=function(a){var b,c;if(a.s!=a.A.length){for(b=c=0;c<a.A.length;){var d=a.A[c];we(a.ia,d)&&(a.A[b++]=d);c++}a.A.length=b}if(a.s!=a.A.length){var e={};for(b=c=0;c<a.A.length;)d=a.A[c],we(e,d)||(a.A[b++]=d,e[d]=1),c++;a.A.length=b}};h=ue.prototype;h.get=function(a,b){return we(this.ia,a)?this.ia[a]:b};
h.set=function(a,b){we(this.ia,a)||(this.s++,this.A.push(a),this.cb++);this.ia[a]=b};h.addAll=function(a){if(a instanceof ue){var b=a.ua();a=a.ga()}else b=ib(a),a=hb(a);for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ua(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new ue(this)};
h.bf=function(a){ve(this);var b=0,c=this.cb,d=this,e=new te;e.next=function(){if(c!=d.cb)throw Error("The map has changed since the iterator was created");if(b>=d.A.length)throw se;var e=d.A[b++];return a?e:d.ia[e]};return e};var we=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var xe=function(a){if(a.ga&&"function"==typeof a.ga)return a.ga();if(m(a))return a.split("");if(ja(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return hb(a)},ye=function(a){if(a.ua&&"function"==typeof a.ua)return a.ua();if(!a.ga||"function"!=typeof a.ga){if(ja(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return ib(a)}},ze=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ja(a)||m(a))x(a,b,c);else for(var d=ye(a),e=xe(a),f=e.length,
g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};var Ae=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)},Be=function(a){var b=null;return(new D(function(c,d){b=Ae(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).f(function(a){k.clearTimeout(b);throw a;})};var Ce=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,De=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var I=function(a){G.call(this);this.headers=new ue;this.bd=a||null;this.Aa=!1;this.ad=this.b=null;this.Qb=this.Ae=this.Dc="";this.Oa=this.td=this.yc=this.ld=!1;this.zb=0;this.Tc=null;this.Nc="";this.Xc=this.Yf=this.Xe=!1};t(I,G);var Ee=I.prototype,Fe=pe("goog.net.XhrIo");Ee.O=Fe;var Ge=/^https?$/i,He=["POST","PUT"];
I.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Dc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Dc=a;this.Qb="";this.Ae=b;this.ld=!1;this.Aa=!0;this.b=this.bd?this.bd.pc():Mc.pc();this.ad=this.bd?Lc(this.bd):Lc(Mc);this.b.onreadystatechange=r(this.Ge,this);this.Yf&&"onprogress"in this.b&&(this.b.onprogress=r(function(a){this.Fe(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=r(this.Fe,this)));try{H(this.O,Ie(this,"Opening Xhr")),
this.td=!0,this.b.open(b,String(a),!0),this.td=!1}catch(f){H(this.O,Ie(this,"Error opening Xhr: "+f.message));this.$(5,f);return}a=c||"";var e=this.headers.clone();d&&ze(d,function(a,b){e.set(b,a)});d=Va(e.ua());c=k.FormData&&a instanceof k.FormData;!Wa(He,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Nc&&(this.b.responseType=this.Nc);"withCredentials"in this.b&&this.b.withCredentials!==this.Xe&&(this.b.withCredentials=
this.Xe);try{Je(this),0<this.zb&&(this.Xc=Ke(this.b),H(this.O,Ie(this,"Will abort after "+this.zb+"ms if incomplete, xhr2 "+this.Xc)),this.Xc?(this.b.timeout=this.zb,this.b.ontimeout=r(this.gc,this)):this.Tc=Ae(this.gc,this.zb,this)),H(this.O,Ie(this,"Sending request")),this.yc=!0,this.b.send(a),this.yc=!1}catch(f){H(this.O,Ie(this,"Send error: "+f.message)),this.$(5,f)}};var Ke=function(a){return z&&A(9)&&da(a.timeout)&&ba(a.ontimeout)},Ua=function(a){return"content-type"==a.toLowerCase()};
I.prototype.gc=function(){"undefined"!=typeof aa&&this.b&&(this.Qb="Timed out after "+this.zb+"ms, aborting",H(this.O,Ie(this,this.Qb)),this.dispatchEvent("timeout"),this.abort(8))};I.prototype.$=function(a,b){this.Aa=!1;this.b&&(this.Oa=!0,this.b.abort(),this.Oa=!1);this.Qb=b;Le(this);Me(this)};var Le=function(a){a.ld||(a.ld=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
I.prototype.abort=function(){this.b&&this.Aa&&(H(this.O,Ie(this,"Aborting")),this.Aa=!1,this.Oa=!0,this.b.abort(),this.Oa=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Me(this))};I.prototype.ib=function(){this.b&&(this.Aa&&(this.Aa=!1,this.Oa=!0,this.b.abort(),this.Oa=!1),Me(this,!0));I.Sc.ib.call(this)};I.prototype.Ge=function(){this.isDisposed()||(this.td||this.yc||this.Oa?Ne(this):this.Uf())};I.prototype.Uf=function(){Ne(this)};
var Ne=function(a){if(a.Aa&&"undefined"!=typeof aa)if(a.ad[1]&&4==Oe(a)&&2==Pe(a))H(a.O,Ie(a,"Local request error detected and ignored"));else if(a.yc&&4==Oe(a))Ae(a.Ge,0,a);else if(a.dispatchEvent("readystatechange"),4==Oe(a)){H(a.O,Ie(a,"Request complete"));a.Aa=!1;try{var b=Pe(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Dc).match(Ce)[1]||null;if(!f&&k.self&&k.self.location){var g=
k.self.location.protocol;f=g.substr(0,g.length-1)}e=!Ge.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var l=2<Oe(a)?a.b.statusText:""}catch(n){H(a.O,"Can not get status: "+n.message),l=""}a.Qb=l+" ["+Pe(a)+"]";Le(a)}}finally{Me(a)}}};I.prototype.Fe=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Qe(a,"progress"));this.dispatchEvent(Qe(a,b?"downloadprogress":"uploadprogress"))};
var Qe=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Me=function(a,b){if(a.b){Je(a);var c=a.b,d=a.ad[0]?ea:null;a.b=null;a.ad=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.O)&&a.log(ie,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Je=function(a){a.b&&a.Xc&&(a.b.ontimeout=null);da(a.Tc)&&(k.clearTimeout(a.Tc),a.Tc=null)},Oe=function(a){return a.b?a.b.readyState:0},Pe=function(a){try{return 2<Oe(a)?
a.b.status:-1}catch(b){return-1}},Re=function(a){try{return a.b?a.b.responseText:""}catch(b){return H(a.O,"Can not get responseText: "+b.message),""}};
I.prototype.getResponse=function(){try{if(!this.b)return null;if("response"in this.b)return this.b.response;switch(this.Nc){case "":case "text":return this.b.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.b)return this.b.mozResponseArrayBuffer}var a=this.O;a&&a.log(ie,"Response type "+this.Nc+" is not supported on this browser",void 0);return null}catch(b){return H(this.O,"Can not get response: "+b.message),null}};
I.prototype.getResponseHeader=function(a){if(this.b&&4==Oe(this))return a=this.b.getResponseHeader(a),null===a?void 0:a};I.prototype.getAllResponseHeaders=function(){return this.b&&4==Oe(this)?this.b.getAllResponseHeaders():""};var Ie=function(a,b){return b+" ["+a.Ae+" "+a.Dc+" "+Pe(a)+"]"};var Se=function(a,b){this.oa=this.ab=this.pa="";this.rb=null;this.Na=this.Da="";this.ba=this.Mf=!1;if(a instanceof Se){this.ba=ba(b)?b:a.ba;Te(this,a.pa);var c=a.ab;J(this);this.ab=c;Ue(this,a.oa);Ve(this,a.rb);We(this,a.Da);Xe(this,a.ca.clone());a=a.Na;J(this);this.Na=a}else a&&(c=String(a).match(Ce))?(this.ba=!!b,Te(this,c[1]||"",!0),a=c[2]||"",J(this),this.ab=Ye(a),Ue(this,c[3]||"",!0),Ve(this,c[4]),We(this,c[5]||"",!0),Xe(this,c[6]||"",!0),a=c[7]||"",J(this),this.Na=Ye(a)):(this.ba=!!b,this.ca=
new Ze(null,0,this.ba))};Se.prototype.toString=function(){var a=[],b=this.pa;b&&a.push($e(b,af,!0),":");var c=this.oa;if(c||"file"==b)a.push("//"),(b=this.ab)&&a.push($e(b,af,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.rb,null!=c&&a.push(":",String(c));if(c=this.Da)this.oa&&"/"!=c.charAt(0)&&a.push("/"),a.push($e(c,"/"==c.charAt(0)?bf:cf,!0));(c=this.ca.toString())&&a.push("?",c);(c=this.Na)&&a.push("#",$e(c,df));return a.join("")};
Se.prototype.resolve=function(a){var b=this.clone(),c=!!a.pa;c?Te(b,a.pa):c=!!a.ab;if(c){var d=a.ab;J(b);b.ab=d}else c=!!a.oa;c?Ue(b,a.oa):c=null!=a.rb;d=a.Da;if(c)Ve(b,a.rb);else if(c=!!a.Da){if("/"!=d.charAt(0))if(this.oa&&!this.Da)d="/"+d;else{var e=b.Da.lastIndexOf("/");-1!=e&&(d=b.Da.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var l=e[g++];"."==l?d&&g==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?We(b,d):c=""!==a.ca.toString();c?Xe(b,a.ca.clone()):c=!!a.Na;c&&(a=a.Na,J(b),b.Na=a);return b};Se.prototype.clone=function(){return new Se(this)};
var Te=function(a,b,c){J(a);a.pa=c?Ye(b,!0):b;a.pa&&(a.pa=a.pa.replace(/:$/,""))},Ue=function(a,b,c){J(a);a.oa=c?Ye(b,!0):b},Ve=function(a,b){J(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.rb=b}else a.rb=null},We=function(a,b,c){J(a);a.Da=c?Ye(b,!0):b},Xe=function(a,b,c){J(a);b instanceof Ze?(a.ca=b,a.ca.Rd(a.ba)):(c||(b=$e(b,ef)),a.ca=new Ze(b,0,a.ba))},K=function(a,b,c){J(a);a.ca.set(b,c)},ff=function(a,b){return a.ca.get(b)};
Se.prototype.removeParameter=function(a){J(this);this.ca.remove(a);return this};var J=function(a){if(a.Mf)throw Error("Tried to modify a read-only Uri");};Se.prototype.Rd=function(a){this.ba=a;this.ca&&this.ca.Rd(a);return this};
var gf=function(a){return a instanceof Se?a.clone():new Se(a,void 0)},hf=function(a,b){var c=new Se(null,void 0);Te(c,"https");a&&Ue(c,a);b&&We(c,b);return c},Ye=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},$e=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,jf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},jf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},af=/[#\/\?@]/g,cf=/[\#\?:]/g,bf=/[\#\?]/g,ef=/[\#\?@]/g,
df=/#/g,Ze=function(a,b,c){this.s=this.m=null;this.T=a||null;this.ba=!!c},kf=function(a){a.m||(a.m=new ue,a.s=0,a.T&&De(a.T,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},mf=function(a){var b=ye(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ze(null,0,void 0);a=xe(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ia(f)?lf(c,e,f):c.add(e,f)}return c};h=Ze.prototype;
h.add=function(a,b){kf(this);this.T=null;a=this.aa(a);var c=this.m.get(a);c||this.m.set(a,c=[]);c.push(b);this.s=Ca(this.s)+1;return this};h.remove=function(a){kf(this);a=this.aa(a);return this.m.Fb(a)?(this.T=null,this.s=Ca(this.s)-this.m.get(a).length,this.m.remove(a)):!1};h.clear=function(){this.m=this.T=null;this.s=0};h.Fb=function(a){kf(this);a=this.aa(a);return this.m.Fb(a)};h.forEach=function(a,b){kf(this);this.m.forEach(function(c,d){x(c,function(c){a.call(b,c,d,this)},this)},this)};
h.ua=function(){kf(this);for(var a=this.m.ga(),b=this.m.ua(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.ga=function(a){kf(this);var b=[];if(m(a))this.Fb(a)&&(b=$a(b,this.m.get(this.aa(a))));else{a=this.m.ga();for(var c=0;c<a.length;c++)b=$a(b,a[c])}return b};h.set=function(a,b){kf(this);this.T=null;a=this.aa(a);this.Fb(a)&&(this.s=Ca(this.s)-this.m.get(a).length);this.m.set(a,[b]);this.s=Ca(this.s)+1;return this};
h.get=function(a,b){a=a?this.ga(a):[];return 0<a.length?String(a[0]):b};var lf=function(a,b,c){a.remove(b);0<c.length&&(a.T=null,a.m.set(a.aa(b),ab(c)),a.s=Ca(a.s)+c.length)};h=Ze.prototype;h.toString=function(){if(this.T)return this.T;if(!this.m)return"";for(var a=[],b=this.m.ua(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ga(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.T=a.join("&")};
h.clone=function(){var a=new Ze;a.T=this.T;this.m&&(a.m=this.m.clone(),a.s=this.s);return a};h.aa=function(a){a=String(a);this.ba&&(a=a.toLowerCase());return a};h.Rd=function(a){a&&!this.ba&&(kf(this),this.T=null,this.m.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),lf(this,b,a))},this));this.ba=a};h.extend=function(a){for(var b=0;b<arguments.length;b++)ze(arguments[b],function(a,b){this.add(b,a)},this)};var nf=function(){var a=L();return z&&!!Db&&11==Db||/Edge\/\d+/.test(a)},of=function(){return k.window&&k.window.location.href||""},pf=function(a,b){b=b||k.window;var c="about:blank";a&&(c=Ac(Dc(a)));b.location.href=c},qf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ia(a[d])?kb(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<qf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},sf=function(){var a=
L();a="Chrome"!=rf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!z||!Db||9<Db},tf=function(a){a=(a||L()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},uf=function(a){a=a||k.window;try{a.close()}catch(b){}},vf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=L().toLowerCase();d&&(b.target=d,v(c,"crios/")&&(b.target="_blank"));"Firefox"==rf(L())&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(d=b)||(d={});a=window;b=c instanceof zc?c:Dc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+
"="+(d[g]?1:0))}var g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),e=fd(g),"undefined"!=typeof e.HTMLAnchorElement&&"undefined"!=typeof e.Location&&"undefined"!=typeof e.Element&&w(g&&(g instanceof e.HTMLAnchorElement||!(g instanceof e.Location||g instanceof e.Element)),"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",ed(g)),b instanceof zc||b instanceof zc||(b=b.mb?
b.kb():String(b),w(Bc.test(b))||(b="about:invalid#zClosurez"),b=Cc(b)),g.href=Ac(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=Ac(b),g&&(tb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=Ia("b/12014412, meta tag with sanitized URL"),d='<META HTTP-EQUIV="refresh" content="0; url='+xa(d)+'">',Da(Ha(a),"must provide justification"),
w(!/^[\s\xa0]*$/.test(Ha(a)),"must provide non-empty justification"),g.document.write(jd((new id).If(d))),g.document.close())):g=a.open(Ac(b),c,g);if(g)try{g.focus()}catch(l){}return g},wf=function(a){return new D(function(b){var c=function(){Be(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},xf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yf=function(){var a=null;return(new D(function(b){"complete"==k.document.readyState?b():(a=function(){b()},jc(window,"load",a))})).f(function(b){sc(window,
"load",a);throw b;})},Af=function(){return zf(void 0)?yf().then(function(){return new D(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):F(Error("Cordova must run in an Android or iOS file scheme."))},zf=function(a){a=a||L();return!("file:"!==Bf()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},Cf=function(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}},
Df=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":"Browser"},Ef=function(){var a=Df();return"ReactNative"===a||"Node"===a},rf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";
if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},Ff=function(a){var b=Df();return("Browser"===b?rf(L()):b)+"/JsCore/"+a},L=function(){return k.navigator&&k.navigator.userAgent||""},M=function(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&
"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},Hf=function(){try{var a=k.localStorage,b=Gf();if(a)return a.setItem(b,"1"),a.removeItem(b),nf()?!!k.indexedDB:!0}catch(c){}return!1},Jf=function(){return(If()||"chrome-extension:"===Bf()||zf())&&!Ef()&&Hf()},If=function(){return"http:"===Bf()||"https:"===Bf()},Bf=function(){return k.location&&k.location.protocol||null},Kf=function(a){a=a||L();return tf(a)||"Firefox"==rf(a)?!1:!0},Lf=function(a){return"undefined"===typeof a?
null:Gc(a)},Mf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},Nf=function(a){if(null!==a)return JSON.parse(a)},Gf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Of=function(a){a=a||L();return"Safari"==rf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},Pf=function(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=
null},Qf=function(){var a=k.navigator;return a&&"boolean"===typeof a.onLine&&(If()||"chrome-extension:"===Bf()||"undefined"!==typeof a.connection)?a.onLine:!0},Rf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.lg=a;this.Qf=b;a=c||L();d=d||Df();this.Lf=tf(a)||"ReactNative"===d};Rf.prototype.get=function(){return this.Lf?this.Qf:this.lg};
var Sf=function(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},Tf=function(){var a=k.document,b=null;return Sf()||!a?E():(new D(function(c){b=function(){Sf()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).f(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Uf={};var Vf;try{var Wf={};Object.defineProperty(Wf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Wf,"abcd",{configurable:!0,enumerable:!0,value:2});Vf=2==Wf.abcd}catch(a){Vf=!1}
var N=function(a,b,c){Vf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Xf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&N(a,c,b[c])},Yf=function(a){var b={};Xf(b,a);return b},Zf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},$f=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},ag=function(a){var b=a;if("object"==typeof a&&null!=a){b=
"length"in a?[]:{};for(var c in a)N(b,c,ag(a[c]))}return b};var bg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),cg=["client_id","response_type","scope","redirect_uri","state"],dg={wg:{Cc:"locale",Vb:500,Ub:600,providerId:"facebook.com",Nd:cg},xg:{Cc:null,Vb:500,Ub:620,providerId:"github.com",Nd:cg},yg:{Cc:"hl",Vb:515,Ub:680,providerId:"google.com",Nd:cg},Bg:{Cc:"lang",Vb:485,Ub:705,providerId:"twitter.com",Nd:bg}},eg=function(a){for(var b in dg)if(dg[b].providerId==a)return dg[b];
return null};var O=function(a,b){this.code="auth/"+a;this.message=b||fg[a]||""};t(O,Error);O.prototype.I=function(){return{code:this.code,message:this.message}};O.prototype.toJSON=function(){return this.I()};
var gg=function(a){var b=a&&a.code;return b?new O(b.substring(5),a.message):null},fg={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.",
"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.",
"invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
"missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.",
"missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.",
"no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.",
"popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The SMS quota for this project has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.",
"user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var hg=function(a,b,c,d,e){this.la=a;this.U=b||null;this.Ab=c||null;this.Qd=d||null;this.$=e||null;if(this.Ab||this.$){if(this.Ab&&this.$)throw new O("invalid-auth-event");if(this.Ab&&!this.Qd)throw new O("invalid-auth-event");}else throw new O("invalid-auth-event");};hg.prototype.sc=function(){return this.Qd};hg.prototype.getError=function(){return this.$};hg.prototype.I=function(){return{type:this.la,eventId:this.U,urlResponse:this.Ab,sessionId:this.Qd,error:this.$&&this.$.I()}};
var ig=function(a){a=a||{};return a.type?new hg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&gg(a.error)):null};var jg=function(a){var b="unauthorized-domain",c=void 0,d=gf(a);a=d.oa;d=d.pa;"chrome-extension"==d?c=oa("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=oa("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
"operation-not-supported-in-this-environment";O.call(this,b,c)};t(jg,O);var kg=function(a){this.Pf=a.sub;na();this.Ib=a.email||null;this.Zf=a.provider_id||null;this.ef=!!a.is_anonymous||"anonymous"==this.Zf};kg.prototype.getEmail=function(){return this.Ib};kg.prototype.isAnonymous=function(){return this.ef};var lg=function(a,b){return a.then(function(a){if(a.idToken){a:{var c=a.idToken.split(".");if(3==c.length){c=c[1];for(var e=(4-c.length%4)%4,f=0;f<e;f++)c+=".";try{var g=JSON.parse(Ib(c));if(g.sub&&g.iss&&g.aud&&g.exp){var l=new kg(g);break a}}catch(n){}}l=null}if(!l||b!=l.Pf)throw new O("user-mismatch");return a}throw new O("user-mismatch");}).f(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new O("user-mismatch"):a;})},mg=function(a,b){if(b.idToken||b.accessToken)b.idToken&&N(this,"idToken",
b.idToken),b.accessToken&&N(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)N(this,"accessToken",b.oauthToken),N(this,"secret",b.oauthTokenSecret);else throw new O("internal-error","failed to construct a credential");N(this,"providerId",a)};mg.prototype.Kb=function(a){return ng(a,og(this))};mg.prototype.Ec=function(a,b){var c=og(this);c.idToken=b;return pg(a,c)};mg.prototype.Ad=function(a,b){var c=og(this);return lg(qg(a,c),b)};
var og=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:mf(b).toString(),requestUri:"http://localhost"}};mg.prototype.I=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var rg=function(a,b){this.bg=b||[];Xf(this,{providerId:a,isOAuthProvider:!0});this.ie={};this.yd=(eg(a)||{}).Cc||null;this.kd=null};rg.prototype.setCustomParameters=function(a){this.ie=lb(a);return this};var P=function(a){rg.call(this,a,cg);this.Od=[]};t(P,rg);P.prototype.addScope=function(a){Wa(this.Od,a)||this.Od.push(a);return this};P.prototype.pe=function(){return ab(this.Od)};
P.prototype.credential=function(a,b){if(!a&&!b)throw new O("argument-error","credential failed: must provide the ID token and/or the access token.");return new mg(this.providerId,{idToken:a||null,accessToken:b||null})};var sg=function(){P.call(this,"facebook.com")};t(sg,P);N(sg,"PROVIDER_ID","facebook.com");
var tg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new sg).credential(null,b)},ug=function(){P.call(this,"github.com")};t(ug,P);N(ug,"PROVIDER_ID","github.com");var vg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new ug).credential(null,b)},wg=function(){P.call(this,"google.com");this.addScope("profile")};
t(wg,P);N(wg,"PROVIDER_ID","google.com");var xg=function(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new wg).credential(c,b)},yg=function(){rg.call(this,"twitter.com",bg)};t(yg,rg);N(yg,"PROVIDER_ID","twitter.com");
var zg=function(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new O("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new mg("twitter.com",c)},Ag=function(a,b){this.Ib=a;this.Fd=b;N(this,"providerId","password")};Ag.prototype.Kb=function(a){return Q(a,Bg,{email:this.Ib,password:this.Fd})};Ag.prototype.Ec=function(a,b){return Q(a,Cg,{idToken:b,email:this.Ib,password:this.Fd})};
Ag.prototype.Ad=function(a,b){return lg(this.Kb(a),b)};Ag.prototype.I=function(){return{email:this.Ib,password:this.Fd}};var Dg=function(){Xf(this,{providerId:"password",isOAuthProvider:!1})};Xf(Dg,{PROVIDER_ID:"password"});var Eg=function(a){if(!(a.verificationId&&a.Yc||a.fc&&a.phoneNumber))throw new O("internal-error");this.P=a;N(this,"providerId","phone")};Eg.prototype.Kb=function(a){return a.verifyPhoneNumber(Fg(this))};Eg.prototype.Ec=function(a,b){var c=Fg(this);c.idToken=b;return Q(a,Gg,c)};
Eg.prototype.Ad=function(a,b){var c=Fg(this);c.operation="REAUTH";a=Q(a,Hg,c);return lg(a,b)};Eg.prototype.I=function(){var a={providerId:"phone"};this.P.verificationId&&(a.verificationId=this.P.verificationId);this.P.Yc&&(a.verificationCode=this.P.Yc);this.P.fc&&(a.temporaryProof=this.P.fc);this.P.phoneNumber&&(a.phoneNumber=this.P.phoneNumber);return a};
var Fg=function(a){return a.P.fc&&a.P.phoneNumber?{temporaryProof:a.P.fc,phoneNumber:a.P.phoneNumber}:{sessionInfo:a.P.verificationId,code:a.P.Yc}},Ig=function(a){try{this.gf=a||firebase.auth()}catch(b){throw new O("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}Xf(this,{providerId:"phone",isOAuthProvider:!1})};
Ig.prototype.verifyPhoneNumber=function(a,b){var c=this.gf.g;return E(b.verify()).then(function(d){if(!m(d))throw new O("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Q(c,Jg,{phoneNumber:a,recaptchaToken:d});default:throw new O("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
var Kg=function(a,b){if(!a)throw new O("missing-verification-id");if(!b)throw new O("missing-verification-code");return new Eg({verificationId:a,Yc:b})};Xf(Ig,{PROVIDER_ID:"phone"});
var Lg=function(a){if(a.temporaryProof&&a.phoneNumber)return new Eg({fc:a.temporaryProof,phoneNumber:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return xg(a,c);case "facebook.com":return tg(c);case "github.com":return vg(c);case "twitter.com":return zg(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}},Mg=function(a){if(!a.isOAuthProvider)throw new O("invalid-oauth-provider");
};var Ng=function(a,b,c){O.call(this,a,c);a=b||{};a.email&&N(this,"email",a.email);a.phoneNumber&&N(this,"phoneNumber",a.phoneNumber);a.credential&&N(this,"credential",a.credential)};t(Ng,O);Ng.prototype.I=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.I();b&&nb(a,b);return a};Ng.prototype.toJSON=function(){return this.I()};
var Og=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));var c={credential:Lg(a)};if(a.email)c.email=a.email;else if(a.phoneNumber)c.phoneNumber=a.phoneNumber;else return new O(b,a.message||void 0);return new Ng(b,c,a.message)}return null};var Pg=function(a){this.vg=a};t(Pg,Kc);Pg.prototype.pc=function(){return new this.vg};Pg.prototype.wd=function(){return{}};
var R=function(a,b,c){var d="Node"==Df();d=k.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new O("internal-error","The XMLHttpRequest compatibility library was not found.");this.o=a;a=b||{};this.hg=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.ig=a.secureTokenTimeout||Qg;this.Le=lb(a.secureTokenHeaders||Rg);this.sf=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.tf=a.firebaseTimeout||
Sg;this.qc=lb(a.firebaseHeaders||Tg);c&&(this.qc["X-Client-Version"]=c,this.Le["X-Client-Version"]=c);this.jf=new Pc;this.ug=new Pg(d)},Ug,Qg=new Rf(3E4,6E4),Rg={"Content-Type":"application/x-www-form-urlencoded"},Sg=new Rf(3E4,6E4),Tg={"Content-Type":"application/json"},Vg=function(a,b){b?a.qc.firebase_locale=b:delete a.qc.firebase_locale},Xg=function(a,b,c,d,e,f,g){Qf()?(sf()?a=r(a.kg,a):(Ug||(Ug=new D(function(a,b){Wg(a,b)})),a=r(a.jg,a)),a(b,c,d,e,f,g)):c&&c(null)};
R.prototype.kg=function(a,b,c,d,e,f){var g="Node"==Df(),l=Ef()?g?new I(this.ug):new I:new I(this.jf);if(f){l.zb=Math.max(0,f);var n=setTimeout(function(){l.dispatchEvent("timeout")},f)}l.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Re(this))||null}catch(wb){a=null}b&&b(a)});rc(l,"ready",function(){n&&clearTimeout(n);this.Ka||(this.Ka=!0,this.ib())});rc(l,"timeout",function(){n&&clearTimeout(n);this.Ka||(this.Ka=!0,this.ib());b&&b(null)});l.send(a,c,d,e)};
var Yg=Ia("https://apis.google.com/js/client.js?onload=%{onload}"),Zg="__fcb"+Math.floor(1E6*Math.random()).toString(),Wg=function(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Zg]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=Na(Yg,{onload:Zg});Wd(de(c),function(){b(Error("CORS_UNSUPPORTED"))})}};
R.prototype.jg=function(a,b,c,d,e){var f=this;Ug.then(function(){window.gapi.client.setApiKey(f.o);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).f(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var ah=function(a,b){return new D(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Xg(a,a.hg+"?key="+encodeURIComponent(a.o),function(a){a?a.error?d($g(a)):a.access_token&&a.refresh_token?c(a):d(new O("internal-error")):d(new O("network-request-failed"))},"POST",mf(b).toString(),a.Le,a.ig.get()):d(new O("internal-error"))})},bh=function(a,b,c,d,e,f){var g=gf(a.sf+b);K(g,"key",a.o);f&&K(g,"cb",na().toString());var l="GET"==c;if(l)for(var n in d)d.hasOwnProperty(n)&&
K(g,n,d[n]);return new D(function(b,f){Xg(a,g.toString(),function(a){a?a.error?f($g(a,e||{})):b(a):f(new O("network-request-failed"))},c,l?void 0:Gc(Mf(d)),a.qc,a.tf.get())})},ch=function(a){if(!xc.test(a.email))throw new O("invalid-email");},dh=function(a){"email"in a&&ch(a)},fh=function(a,b){return Q(a,eh,{identifier:b,continueUri:If()?of():"http://localhost"}).then(function(a){return a.allProviders||[]})},hh=function(a){return Q(a,gh,{}).then(function(a){return a.authorizedDomains||[]})},ih=function(a){if(!a.idToken)throw new O("internal-error");
},jh=function(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new O("internal-error");}else{if(!a.sessionInfo)throw new O("missing-verification-id");if(!a.code)throw new O("missing-verification-code");}};R.prototype.signInAnonymously=function(){return Q(this,kh,{})};R.prototype.updateEmail=function(a,b){return Q(this,lh,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,Cg,{idToken:a,password:b})};var mh={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];fb(mh,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,lh,c)};R.prototype.sendPasswordResetEmail=function(a,b){a={requestType:"PASSWORD_RESET",email:a};nb(a,b);return Q(this,nh,a)};R.prototype.sendEmailVerification=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};nb(a,b);return Q(this,oh,a)};R.prototype.verifyPhoneNumber=function(a){return Q(this,ph,a)};
var rh=function(a,b,c){return Q(a,qh,{idToken:b,deleteProvider:c})},sh=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new O("internal-error");},th=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Og(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Og(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Og(a));if(b)throw b;if(!a.idToken)throw new O("internal-error");},ng=function(a,
b){b.returnIdpCredential=!0;return Q(a,uh,b)},pg=function(a,b){b.returnIdpCredential=!0;return Q(a,vh,b)},qg=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,wh,b)},xh=function(a){if(!a.oobCode)throw new O("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,yh,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,zh,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,Ah,{oobCode:a})};
var Ah={endpoint:"setAccountInfo",F:xh,$a:"email"},zh={endpoint:"resetPassword",F:xh,Y:function(a){if(!a.email||!a.requestType)throw new O("internal-error");}},Bh={endpoint:"signupNewUser",F:function(a){ch(a);if(!a.password)throw new O("weak-password");},Y:ih,za:!0},eh={endpoint:"createAuthUri"},Ch={endpoint:"deleteAccount",Ya:["idToken"]},qh={endpoint:"setAccountInfo",Ya:["idToken","deleteProvider"],F:function(a){if(!ia(a.deleteProvider))throw new O("internal-error");}},Dh={endpoint:"getAccountInfo"},
oh={endpoint:"getOobConfirmationCode",Ya:["idToken","requestType"],F:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new O("internal-error");},$a:"email"},nh={endpoint:"getOobConfirmationCode",Ya:["requestType"],F:function(a){if("PASSWORD_RESET"!=a.requestType)throw new O("internal-error");ch(a)},$a:"email"},gh={ae:!0,endpoint:"getProjectConfig",ue:"GET"},Eh={ae:!0,endpoint:"getRecaptchaParam",ue:"GET",Y:function(a){if(!a.recaptchaSiteKey)throw new O("internal-error");}},yh={endpoint:"resetPassword",
F:xh,$a:"email"},Jg={endpoint:"sendVerificationCode",Ya:["phoneNumber","recaptchaToken"],$a:"sessionInfo"},lh={endpoint:"setAccountInfo",Ya:["idToken"],F:dh,za:!0},Cg={endpoint:"setAccountInfo",Ya:["idToken"],F:function(a){dh(a);if(!a.password)throw new O("weak-password");},Y:ih,za:!0},kh={endpoint:"signupNewUser",Y:ih,za:!0},uh={endpoint:"verifyAssertion",F:sh,Y:th,za:!0},wh={endpoint:"verifyAssertion",F:sh,Y:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new O("user-not-found");
if(!a.idToken)throw new O("internal-error");},za:!0},vh={endpoint:"verifyAssertion",F:function(a){sh(a);if(!a.idToken)throw new O("internal-error");},Y:th,za:!0},Fh={endpoint:"verifyCustomToken",F:function(a){if(!a.token)throw new O("invalid-custom-token");},Y:ih,za:!0},Bg={endpoint:"verifyPassword",F:function(a){ch(a);if(!a.password)throw new O("wrong-password");},Y:ih,za:!0},ph={endpoint:"verifyPhoneNumber",F:jh,Y:ih},Gg={endpoint:"verifyPhoneNumber",F:function(a){if(!a.idToken)throw new O("internal-error");
jh(a)},Y:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Og(a);ih(a)}},Hg={mf:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",F:jh,Y:ih},Q=function(a,b,c){if(!$f(c,b.Ya))return F(new O("internal-error"));var d=b.ue||"POST",e;return E(c).then(b.F).then(function(){b.za&&(c.returnSecureToken=!0);return bh(a,b.endpoint,d,c,b.mf,b.ae||!1)}).then(function(a){return e=a}).then(b.Y).then(function(){if(!b.$a)return e;if(!(b.$a in e))throw new O("internal-error");return e[b.$a]})},
$g=function(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new O(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"};nb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new O(d[e],b);!b&&a&&(b=Lf(a));return new O("internal-error",b)};var Gh=function(a){this.D=a};Gh.prototype.value=function(){return this.D};Gh.prototype.Ne=function(a){this.D.style=a;return this};Gh.prototype.getStyle=function(){return this.D.style};var Hh=function(a){this.D=a||{}};h=Hh.prototype;h.value=function(){return this.D};h.getUrl=function(){return this.D.url};h.Ne=function(a){this.D.style=a;return this};h.getStyle=function(){return this.D.style};h.getId=function(){return this.D.id};h.getContext=function(){return this.D.context};var Jh=function(a){this.sg=a;this.xc=null;this.Cd=Ih(this)},Kh=function(a){var b=new Hh;b.D.where=document.body;b.D.url=a.sg;b.D.messageHandlersFilter=M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.D.attributes=b.D.attributes||{};(new Gh(b.D.attributes)).Ne({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.D.dontclear=!0;return b},Ih=function(a){return Lh().then(function(){return new D(function(b,c){M("gapi.iframes.getContext")().open(Kh(a).value(),function(d){a.xc=d;a.xc.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"))},Mh.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};Jh.prototype.sendMessage=function(a){var b=this;return this.Cd.then(function(){return new D(function(c){b.xc.send(a.type,a,c,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var Nh=function(a,b){a.Cd.then(function(){a.xc.register("authEvent",b,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Oh=Ia("https://apis.google.com/js/api.js?onload=%{onload}"),Ph=new Rf(3E4,6E4),Mh=new Rf(5E3,15E3),Qh=null,Lh=function(){return Qh?Qh:Qh=(new D(function(a,b){if(Qf()){var c=function(){Pf();M("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Pf();b(Error("Network Error"))},timeout:Ph.get()})};if(M("gapi.iframes.Iframe"))a();else if(M("gapi.load"))c();else{var d="__iframefcb"+
Math.floor(1E6*Math.random()).toString();k[d]=function(){M("gapi.load")?c():b(Error("Network Error"))};d=Na(Oh,{onload:d});E(de(d)).f(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})).f(function(a){Qh=null;throw a;})};var Rh=function(a,b,c){this.C=a;this.o=b;this.u=c;this.bb=null;this.ic=hf(this.C,"/__/auth/iframe");K(this.ic,"apiKey",this.o);K(this.ic,"appName",this.u)};Rh.prototype.Td=function(a){this.bb=a;return this};Rh.prototype.toString=function(){this.bb?K(this.ic,"v",this.bb):this.ic.removeParameter("v");return this.ic.toString()};var Sh=function(a,b,c,d,e){this.C=a;this.o=b;this.u=c;this.ff=d;this.bb=this.U=this.Md=null;this.tb=e};Sh.prototype.Td=function(a){this.bb=a;return this};
Sh.prototype.toString=function(){var a=hf(this.C,"/__/auth/handler");K(a,"apiKey",this.o);K(a,"appName",this.u);K(a,"authType",this.ff);if(this.tb.isOAuthProvider){var b=this.tb;try{var c=firebase.app(this.u).auth().ha}catch(l){c=null}b.kd=c;K(a,"providerId",this.tb.providerId);b=this.tb;c=Mf(b.ie);for(var d in c)c[d]=c[d].toString();d=b.bg;c=lb(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.yd&&b.kd&&!c[b.yd]&&(c[b.yd]=b.kd);jb(c)||K(a,"customParameters",Lf(c))}"function"===typeof this.tb.pe&&
(b=this.tb.pe(),b.length&&K(a,"scopes",b.join(",")));this.Md?K(a,"redirectUrl",this.Md):a.removeParameter("redirectUrl");this.U?K(a,"eventId",this.U):a.removeParameter("eventId");this.bb?K(a,"v",this.bb):a.removeParameter("v");if(this.kc)for(var g in this.kc)this.kc.hasOwnProperty(g)&&!ff(a,g)&&K(a,g,this.kc[g]);return a.toString()};
var Th=function(a,b,c,d){this.C=a;this.o=b;this.u=c;this.vf=(this.Ja=d||null)?Ff(this.Ja):null;d=this.Ja;this.Ef=(new Rh(a,b,c)).Td(d).toString();this.sa=[];this.g=new R(b,null,this.vf);this.zc=this.va=null},Uh=function(a){var b=of();return hh(a).then(function(a){a:{var c=gf(b),e=c.pa;c=c.oa;for(var f=0;f<a.length;f++){var g=a[f];var l=c;var n=e;0==g.indexOf("chrome-extension://")?l=gf(g).oa==l&&"chrome-extension"==n:"http"!=n&&"https"!=n?l=!1:xf.test(g)?l=l==g:(g=g.split(".").join("\\."),l=(new RegExp("^(.+\\."+
g+"|"+g+")$","i")).test(l));if(l){a=!0;break a}}a=!1}if(!a)throw new jg(of());})};h=Th.prototype;h.Ob=function(){if(this.zc)return this.zc;var a=this;return this.zc=yf().then(function(){a.wc=new Jh(a.Ef);Vh(a)})};h.cc=function(a,b,c){var d=new O("popup-closed-by-user"),e=new O("web-storage-unsupported"),f=this,g=!1;return this.Pa().then(function(){Wh(f).then(function(c){c||(a&&uf(a),b(e),g=!0)})}).f(function(){}).then(function(){if(!g)return wf(a)}).then(function(){if(!g)return Be(c).then(function(){b(d)})})};
h.Oe=function(){var a=L();return!Kf(a)&&!Of(a)};h.se=function(){return!1};h.Wb=function(a,b,c,d,e,f,g){if(!a)return F(new O("popup-blocked"));if(g&&!Kf())return this.Pa().f(function(b){uf(a);e(b)}),d(),E();this.va||(this.va=Uh(this.g));var l=this;return this.va.then(function(){var b=l.Pa().f(function(b){uf(a);e(b);throw b;});d();return b}).then(function(){Mg(c);if(!g){var d=Xh(l.C,l.o,l.u,b,c,null,f,l.Ja);pf(d,a)}}).f(function(a){"auth/network-request-failed"==a.code&&(l.va=null);throw a;})};
h.Xb=function(a,b,c){this.va||(this.va=Uh(this.g));var d=this;return this.va.then(function(){Mg(b);var e=Xh(d.C,d.o,d.u,a,b,of(),c,d.Ja);pf(e)}).f(function(a){"auth/network-request-failed"==a.code&&(d.va=null);throw a;})};h.Pa=function(){var a=this;return this.Ob().then(function(){return a.wc.Cd}).f(function(){a.va=null;throw new O("network-request-failed");})};h.Se=function(){return!0};
var Xh=function(a,b,c,d,e,f,g,l,n){a=new Sh(a,b,c,d,e);a.Md=f;a.U=g;f=a.Td(l);f.kc=lb(n||null);return f.toString()},Vh=function(a){if(!a.wc)throw Error("IfcHandler must be initialized!");Nh(a.wc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=ig(b.authEvent);for(c=0;c<a.sa.length;c++)d=a.sa[c](b)||d;c={};c.status=d?"ACK":"ERROR";return E(c)}c.status="ERROR";return E(c)})},Wh=function(a){var b={type:"webStorageSupport"};return a.Ob().then(function(){return a.wc.sendMessage(b)}).then(function(a){if(a&&
a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};Th.prototype.fb=function(a){this.sa.push(a)};Th.prototype.$b=function(a){Za(this.sa,function(b){return b==a})};var Yh=function(a,b,c){N(this,"type","recaptcha");this.Zc=this.Eb=null;this.Gb=!1;this.ge=a;this.Ca=b||{theme:"light",type:"image"};this.K=[];if(this.Ca.sitekey)throw new O("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.Ac="invisible"===this.Ca.size;if(!ld(a)||!this.Ac&&ld(a).hasChildNodes())throw new O("argument-error","reCAPTCHA container is either not found or already contains inner elements!");try{this.i=c||firebase.app()}catch(g){throw new O("argument-error",
"No firebase.app.App instance is currently initialized.");}if(this.i.options&&this.i.options.apiKey)a=firebase.SDK_VERSION?Ff(firebase.SDK_VERSION):null,this.g=new R(this.i.options&&this.i.options.apiKey,null,a);else throw new O("invalid-api-key");var d=this;this.Uc=[];var e=this.Ca.callback;this.Ca.callback=function(a){d.Hb(a);if("function"===typeof e)e(a);else if("string"===typeof e){var b=M(e,k);"function"===typeof b&&b(a)}};var f=this.Ca["expired-callback"];this.Ca["expired-callback"]=function(){d.Hb(null);
if("function"===typeof f)f();else if("string"===typeof f){var a=M(f,k);"function"===typeof a&&a()}}};Yh.prototype.Hb=function(a){for(var b=0;b<this.Uc.length;b++)try{this.Uc[b](a)}catch(c){}};var Zh=function(a,b){Za(a.Uc,function(a){return a==b})};Yh.prototype.c=function(a){var b=this;this.K.push(a);Ed(a,function(){Ya(b.K,a)});return a};
Yh.prototype.Pb=function(){var a=this;return this.Eb?this.Eb:this.Eb=this.c(E().then(function(){if(If())return yf();throw new O("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){try{var b=a.i.auth().ha}catch(c){b=null}return $h(ai(),b)}).then(function(){return Q(a.g,Eh,{})}).then(function(b){a.Ca.sitekey=b.recaptchaSiteKey}).f(function(b){a.Eb=null;throw b;}))};
Yh.prototype.render=function(){bi(this);var a=this;return this.c(this.Pb().then(function(){if(null===a.Zc){var b=a.ge;if(!a.Ac){var c=ld(b);b=pd("DIV");c.appendChild(b)}a.Zc=grecaptcha.render(b,a.Ca)}return a.Zc}))};Yh.prototype.verify=function(){bi(this);var a=this;return this.c(this.render().then(function(b){return new D(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(Zh(a,e),c(b))};a.Uc.push(e);a.Ac&&grecaptcha.execute(a.Zc)}})}))};
var bi=function(a){if(a.Gb)throw new O("internal-error","RecaptchaVerifier instance has been destroyed.");};Yh.prototype.clear=function(){bi(this);this.Gb=!0;ai().hd--;for(var a=0;a<this.K.length;a++)this.K[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.Ac){a=ld(this.ge);for(var b;b=a.firstChild;)a.removeChild(b)}};
var ci=Ia("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),di=function(){this.hd=k.grecaptcha?Infinity:0;this.te=null;this.fd="__rcb"+Math.floor(1E6*Math.random()).toString()},$h=function(a,b){return new D(function(c,d){if(Qf())if(!k.grecaptcha||b!==a.te&&!a.hd){k[a.fd]=function(){if(k.grecaptcha){a.te=b;var e=k.grecaptcha.render;k.grecaptcha.render=function(b,c){b=e(b,c);a.hd++;return b};c()}else d(new O("internal-error"));delete k[a.fd]};var e=Na(ci,{onload:a.fd,
hl:b||""});E(de(e)).f(function(){d(new O("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else c();else d(new O("network-request-failed"))})},ei=null,ai=function(){ei||(ei=new di);return ei};var fi=function(a){this.G=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.G)throw new O("internal-error","The React Native compatibility library was not found.");};h=fi.prototype;h.get=function(a){return E(this.G.getItem(a)).then(function(a){return a&&Nf(a)})};h.set=function(a,b){return E(this.G.setItem(a,Lf(b)))};h.remove=function(a){return E(this.G.removeItem(a))};h.gb=function(){};h.Xa=function(){};var gi=function(){this.G={}};h=gi.prototype;h.get=function(a){return E(this.G[a])};h.set=function(a,b){this.G[a]=b;return E()};h.remove=function(a){delete this.G[a];return E()};h.gb=function(){};h.Xa=function(){};var ii=function(){if(!hi()){if("Node"==Df())throw new O("internal-error","The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.G=k.localStorage||firebase.INTERNAL.node.localStorage},hi=function(){var a="Node"==Df();a=k.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=ii.prototype;
h.get=function(a){var b=this;return E().then(function(){var c=b.G.getItem(a);return Nf(c)})};h.set=function(a,b){var c=this;return E().then(function(){var d=Lf(b);null===d?c.remove(a):c.G.setItem(a,d)})};h.remove=function(a){var b=this;return E().then(function(){b.G.removeItem(a)})};h.gb=function(a){k.window&&kc(k.window,"storage",a)};h.Xa=function(a){k.window&&sc(k.window,"storage",a)};var ji=function(){this.G={}};h=ji.prototype;h.get=function(){return E(null)};h.set=function(){return E()};h.remove=function(){return E()};h.gb=function(){};h.Xa=function(){};var li=function(){if(!ki()){if("Node"==Df())throw new O("internal-error","The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.G=k.sessionStorage||firebase.INTERNAL.node.sessionStorage},ki=function(){var a="Node"==Df();a=k.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=li.prototype;
h.get=function(a){var b=this;return E().then(function(){var c=b.G.getItem(a);return Nf(c)})};h.set=function(a,b){var c=this;return E().then(function(){var d=Lf(b);null===d?c.remove(a):c.G.setItem(a,d)})};h.remove=function(a){var b=this;return E().then(function(){b.G.removeItem(a)})};h.gb=function(){};h.Xa=function(){};var ni=function(a,b,c,d,e,f){if(!window.indexedDB)throw new O("web-storage-unsupported");this.nf=a;this.Bd=b;this.jd=c;this.We=d;this.cb=e;this.W={};this.dc=[];this.Sb=0;this.Gf=f||k.indexedDB},oi,pi=function(a){return new D(function(b,c){var d=a.Gf.open(a.nf,a.cb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Bd,{keyPath:a.jd})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},qi=function(a){a.xe||(a.xe=
pi(a));return a.xe},ri=function(a,b){return b.objectStore(a.Bd)},si=function(a,b,c){return b.transaction([a.Bd],c?"readwrite":"readonly")},ti=function(a){return new D(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=ni.prototype;
h.set=function(a,b){var c=!1,d,e=this;return Ed(qi(this).then(function(b){d=b;b=ri(e,si(e,d,!0));return ti(b.get(a))}).then(function(f){var g=ri(e,si(e,d,!0));if(f)return f.value=b,ti(g.put(f));e.Sb++;c=!0;f={};f[e.jd]=a;f[e.We]=b;return ti(g.add(f))}).then(function(){e.W[a]=b}),function(){c&&e.Sb--})};h.get=function(a){var b=this;return qi(this).then(function(c){return ti(ri(b,si(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return Ed(qi(this).then(function(d){b=!0;c.Sb++;return ti(ri(c,si(c,d,!0))["delete"](a))}).then(function(){delete c.W[a]}),function(){b&&c.Sb--})};
h.og=function(){var a=this;return qi(this).then(function(b){var c=ri(a,si(a,b,!1));return c.getAll?ti(c.getAll()):new D(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.Sb){for(d=0;d<b.length;d++)c[b[d][a.jd]]=b[d][a.We];d=qf(a.W,c);a.W=c}return d})};h.gb=function(a){0==this.dc.length&&this.Vd();this.dc.push(a)};
h.Xa=function(a){Za(this.dc,function(b){return b==a});0==this.dc.length&&this.Qc()};h.Vd=function(){var a=this;this.Qc();var b=function(){a.Hd=Be(800).then(r(a.og,a)).then(function(b){0<b.length&&x(a.dc,function(a){a(b)})}).then(b).f(function(a){"STOP_EVENT"!=a.message&&b()});return a.Hd};b()};h.Qc=function(){this.Hd&&this.Hd.cancel("STOP_EVENT")};var xi=function(){this.ke={Browser:ui,Node:vi,ReactNative:wi}[Df()]},yi,ui={B:ii,Xd:li},vi={B:ii,Xd:li},wi={B:fi,Xd:ji};var zi=function(a){this.vd(a)};
zi.prototype.vd=function(a){var b=a.url;if("undefined"===typeof b)throw new O("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new O("invalid-continue-uri");this.hf=b;this.Zd=this.lc=null;this.ye=!1;var c=a.android;if(c&&"object"===typeof c){b=c.packageName;var d=c.installApp;c=c.minimumVersion;if("string"===typeof b&&b.length){this.lc=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new O("argument-error","installApp property must be a boolean when specified.");this.ye=
!!d;if("undefined"!==typeof c&&("string"!==typeof c||"string"===typeof c&&!c.length))throw new O("argument-error","minimumVersion property must be a non empty string when specified.");this.Zd=c||null}else{if("undefined"!==typeof b)throw new O("argument-error","packageName property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new O("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new O("argument-error","android property must be a non null object when specified.");
this.sd=null;if((b=a.iOS)&&"object"===typeof b)if(b=b.bundleId,"string"===typeof b&&b.length)this.sd=b;else{if("undefined"!==typeof b)throw new O("argument-error","bundleId property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new O("argument-error","iOS property must be a non null object when specified.");a=a.handleCodeInApp;if("undefined"!==typeof a&&"boolean"!==typeof a)throw new O("argument-error","handleCodeInApp property must be a boolean when specified.");
if((this.ee=!!a)&&!this.sd&&!this.lc)throw new O("argument-error","handleCodeInApp property can't be true when no mobile application is provided.");};var Ai=function(a){var b={};b.continueUrl=a.hf;b.canHandleCodeInApp=a.ee;if(b.androidPackageName=a.lc)b.androidMinimumVersion=a.Zd,b.androidInstallApp=a.ye;b.iOSBundleId=a.sd;for(var c in b)null===b[c]&&delete b[c];return b};var Bi=function(a,b){this.lf=b;N(this,"verificationId",a)};Bi.prototype.confirm=function(a){a=Kg(this.verificationId,a);return this.lf(a)};var Ci=function(a,b,c,d){return(new Ig(a)).verifyPhoneNumber(b,c).then(function(a){return new Bi(a,d)})};var Di=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;N(this,"operation",a);N(this,"data",ag(b))};var Ei=function(a,b,c,d,e,f){this.Wf=a;this.dg=b;this.yf=c;this.Fc=d;this.Yd=e;this.eg=!!f;this.qb=null;this.Qa=this.Fc;if(this.Yd<this.Fc)throw Error("Proactive refresh lower bound greater than upper bound!");};Ei.prototype.start=function(){this.Qa=this.Fc;Fi(this,!0)};
var Gi=function(a,b){if(b)return a.Qa=a.Fc,a.yf();b=a.Qa;a.Qa*=2;a.Qa>a.Yd&&(a.Qa=a.Yd);return b},Fi=function(a,b){a.stop();a.qb=Be(Gi(a,b)).then(function(){return a.eg?E():Tf()}).then(function(){return a.Wf()}).then(function(){Fi(a,!0)}).f(function(b){a.dg(b)&&Fi(a,!1)})};Ei.prototype.stop=function(){this.qb&&(this.qb.cancel(),this.qb=null)};var Mi=function(a){var b={};b["facebook.com"]=Hi;b["google.com"]=Ii;b["github.com"]=Ji;b["twitter.com"]=Ki;var c=a&&a.providerId;return c?b[c]?new b[c](a):new Li(a):null},Li=function(a){var b=Nf(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");N(this,"profile",ag(b||{}));N(this,"providerId",a)},Hi=function(a){Li.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};t(Hi,Li);
var Ji=function(a){Li.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",this.profile&&this.profile.login||null)};t(Ji,Li);var Ii=function(a){Li.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};t(Ii,Li);var Ki=function(a){Li.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",a.screenName||null)};t(Ki,Li);var Ni={zg:"local",NONE:"none",Ag:"session"},Oi=function(a){var b=new O("invalid-persistence-type"),c=new O("unsupported-persistence-type");a:{for(d in Ni)if(Ni[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(Df()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!Hf()&&"none"!==a)throw c;}},Pi=function(a,b,c,d){this.Ce=a;this.Pd=b;this.fg=c;this.ac=d;this.V={};yi||(yi=new xi);a=yi;try{if(nf()){oi||(oi=new ni("firebaseLocalStorageDb",
"firebaseLocalStorage","fbase_key","value",1));var e=oi}else e=new a.ke.B;this.He=e}catch(f){this.He=new gi,this.ac=!0}try{this.Re=new a.ke.Xd}catch(f){this.Re=new gi}this.Ff=new gi;this.Wd=r(this.Pe,this);this.W={}},Qi,Ri=function(){Qi||(Qi=new Pi("firebase",":",!Of(L())&&Cf()?!0:!1,Kf()));return Qi},Si=function(a,b){switch(b){case "session":return a.Re;case "none":return a.Ff;default:return a.He}};h=Pi.prototype;h.aa=function(a,b){return this.Ce+this.Pd+a.name+(b?this.Pd+b:"")};
h.get=function(a,b){return Si(this,a.B).get(this.aa(a,b))};h.remove=function(a,b){b=this.aa(a,b);"local"!=a.B||this.ac||(this.W[b]=null);return Si(this,a.B).remove(b)};h.set=function(a,b,c){var d=this.aa(a,c),e=this,f=Si(this,a.B);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"!=a.B||this.ac||(e.W[d]=b)})};h.addListener=function(a,b,c){a=this.aa(a,b);this.ac||(this.W[a]=k.localStorage.getItem(a));jb(this.V)&&this.Vd();this.V[a]||(this.V[a]=[]);this.V[a].push(c)};
h.removeListener=function(a,b,c){a=this.aa(a,b);this.V[a]&&(Za(this.V[a],function(a){return a==c}),0==this.V[a].length&&delete this.V[a]);jb(this.V)&&this.Qc()};h.Vd=function(){Si(this,"local").gb(this.Wd);this.ac||nf()||Ti(this)};var Ti=function(a){Ui(a);a.zd=setInterval(function(){for(var b in a.V){var c=k.localStorage.getItem(b),d=a.W[b];c!=d&&(a.W[b]=c,c=new Yb({type:"storage",key:b,target:window,oldValue:d,newValue:c,Gd:!0}),a.Pe(c))}},1E3)},Ui=function(a){a.zd&&(clearInterval(a.zd),a.zd=null)};
Pi.prototype.Qc=function(){Si(this,"local").Xa(this.Wd);Ui(this)};
Pi.prototype.Pe=function(a){if(a&&a.wf){var b=a.fa.key;if(0==b.indexOf(this.Ce+this.Pd)&&this.V[b]){"undefined"!==typeof a.fa.Gd?Si(this,"local").Xa(this.Wd):Ui(this);if(this.fg){var c=k.localStorage.getItem(b),d=a.fa.newValue;if(d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.W[b]===d&&"undefined"===typeof a.fa.Gd)return}if("undefined"!==typeof a.fa.Gd||this.W[b]!==k.localStorage.getItem(b))this.W[b]=k.localStorage.getItem(b),this.ce(b)}}else x(a,r(this.ce,this))};
Pi.prototype.ce=function(a){this.V[a]&&x(this.V[a],function(a){a()})};var Vi=function(a,b){this.j=a;this.h=b||Ri()},Wi={name:"authEvent",B:"local"},Xi=function(a){return a.h.get(Wi,a.j).then(function(a){return ig(a)})};Vi.prototype.fb=function(a){this.h.addListener(Wi,this.j,a)};Vi.prototype.$b=function(a){this.h.removeListener(Wi,this.j,a)};var Yi=function(a){this.h=a||Ri()},Zi={name:"sessionId",B:"session"};Yi.prototype.sc=function(a){return this.h.get(Zi,a)};var $i=function(a,b,c,d,e,f){this.C=a;this.o=b;this.u=c;this.Ja=d||null;this.Qe=b+":"+c;this.gg=new Yi;this.oe=new Vi(this.Qe);this.ud=null;this.sa=[];this.Kf=e||500;this.$f=f||2E3;this.Nb=this.Ic=null},aj=function(a){return new O("invalid-cordova-configuration",a)};
$i.prototype.Pa=function(){return this.Pb?this.Pb:this.Pb=Af().then(function(){if("function"!==typeof M("universalLinks.subscribe",k))throw aj("cordova-universal-links-plugin is not installed");if("undefined"===typeof M("BuildInfo.packageName",k))throw aj("cordova-plugin-buildinfo is not installed");if("function"!==typeof M("cordova.plugins.browsertab.openUrl",k))throw aj("cordova-plugin-browsertab is not installed");if("function"!==typeof M("cordova.InAppBrowser.open",k))throw aj("cordova-plugin-inappbrowser is not installed");
},function(){throw new O("cordova-not-ready");})};var bj=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},cj=function(a){var b=new Tb;b.update(a);return bb(b.digest())};h=$i.prototype;h.cc=function(a,b){b(new O("operation-not-supported-in-this-environment"));return E()};h.Wb=function(){return F(new O("operation-not-supported-in-this-environment"))};h.Se=function(){return!1};h.Oe=function(){return!0};
h.se=function(){return!0};
h.Xb=function(a,b,c){if(this.Ic)return F(new O("redirect-operation-pending"));var d=this,e=k.document,f=null,g=null,l=null,n=null;return this.Ic=Ed(E().then(function(){Mg(b);return dj(d)}).then(function(){return ej(d,a,b,c)}).then(function(){return(new D(function(a,b){g=function(){var b=M("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.Nb&&"function"===typeof d.Nb.close&&(d.Nb.close(),d.Nb=null);return!1};d.fb(g);l=function(){f||(f=Be(d.$f).then(function(){b(new O("redirect-cancelled-by-user"))}))};n=
function(){Sf()&&l()};e.addEventListener("resume",l,!1);L().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).f(function(a){return fj(d).then(function(){throw a;})})}),function(){l&&e.removeEventListener("resume",l,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.$b(g);d.Ic=null})};
var ej=function(a,b,c,d){var e=bj(),f=new hg(b,d,null,e,new O("no-auth-event")),g=M("BuildInfo.packageName",k);if("string"!==typeof g)throw new O("invalid-cordova-configuration");var l=M("BuildInfo.displayName",k),n={};if(L().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(L().toLowerCase().match(/android/))n.apn=g;else return F(new O("operation-not-supported-in-this-environment"));l&&(n.appDisplayName=l);e=cj(e);n.sessionId=e;var C=Xh(a.C,a.o,a.u,b,c,null,d,a.Ja,n);return a.Pa().then(function(){var b=
a.Qe;return a.gg.h.set(Wi,f.I(),b)}).then(function(){var b=M("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=M("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");c(C)}else{c=M("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");b=c;var d=L();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.Nb=b(C,d?"_blank":"_system","location=yes")}})})};$i.prototype.Hb=function(a){for(var b=0;b<this.sa.length;b++)try{this.sa[b](a)}catch(c){}};
var dj=function(a){a.ud||(a.ud=a.Pa().then(function(){return new D(function(b){var c=function(d){b(d);a.$b(c);return!1};a.fb(c);gj(a)})}));return a.ud},fj=function(a){var b=null;return Xi(a.oe).then(function(c){b=c;c=a.oe;return c.h.remove(Wi,c.j)}).then(function(){return b})},gj=function(a){var b=M("universalLinks.subscribe",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=new hg("unknown",null,null,null,new O("no-auth-event")),d=!1,e=Be(a.Kf).then(function(){return fj(a).then(function(){d||
a.Hb(c)})}),f=function(b){d=!0;e&&e.cancel();fj(a).then(function(d){var e=c;if(d&&b&&b.url){e=null;var f=b.url;var g=gf(f),l=ff(g,"link"),n=ff(gf(l),"link");g=ff(g,"deep_link_id");f=ff(gf(g),"link")||g||n||l||f;-1!=f.indexOf("/__/auth/callback")&&(e=gf(f),e=Nf(ff(e,"firebaseError")||null),e=(e="object"===typeof e?gg(e):null)?new hg(d.la,d.U,null,null,e):new hg(d.la,d.U,f,d.sc()));e=e||c}a.Hb(e)})},g=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(M("BuildInfo.packageName",k).toLowerCase()+
"://")&&f({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};$i.prototype.fb=function(a){this.sa.push(a);dj(this).f(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new hg("unknown",null,null,null,new O("no-auth-event")),a(b))})};$i.prototype.$b=function(a){Za(this.sa,function(b){return b==a})};var hj=function(a){this.j=a;this.h=Ri()},ij={name:"pendingRedirect",B:"session"},jj=function(a){return a.h.set(ij,"pending",a.j)},kj=function(a){return a.h.remove(ij,a.j)},lj=function(a){return a.h.get(ij,a.j).then(function(a){return"pending"==a})};var pj=function(a,b,c){this.C=a;this.o=b;this.u=c;this.ec=[];this.ob=!1;this.cd=r(this.qd,this);this.Va=new mj(this);this.Id=new nj(this);this.Tb=new hj(this.o+":"+this.u);this.Fa={};this.Fa.unknown=this.Va;this.Fa.signInViaRedirect=this.Va;this.Fa.linkViaRedirect=this.Va;this.Fa.reauthViaRedirect=this.Va;this.Fa.signInViaPopup=this.Id;this.Fa.linkViaPopup=this.Id;this.Fa.reauthViaPopup=this.Id;this.X=oj(this.C,this.o,this.u)},oj=function(a,b,c){var d=firebase.SDK_VERSION||null;return zf()?new $i(a,
b,c,d):new Th(a,b,c,d)};pj.prototype.reset=function(){this.ob=!1;this.X.$b(this.cd);this.X=oj(this.C,this.o,this.u)};pj.prototype.Ob=function(){var a=this;this.ob||(this.ob=!0,this.X.fb(this.cd));var b=this.X;return this.X.Pa().f(function(c){a.X==b&&a.reset();throw c;})};var sj=function(a){a.X.Oe()&&a.Ob().f(function(b){var c=new hg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));qj(b)&&a.qd(c)});a.X.se()||rj(a.Va)};
pj.prototype.subscribe=function(a){Wa(this.ec,a)||this.ec.push(a);if(!this.ob){var b=this;lj(this.Tb).then(function(a){a?kj(b.Tb).then(function(){b.Ob().f(function(a){var c=new hg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));qj(a)&&b.qd(c)})}):sj(b)}).f(function(){sj(b)})}};pj.prototype.unsubscribe=function(a){Za(this.ec,function(b){return b==a})};
pj.prototype.qd=function(a){if(!a)throw new O("invalid-auth-event");for(var b=!1,c=0;c<this.ec.length;c++){var d=this.ec[c];if(d.de(a.la,a.U)){(b=this.Fa[a.la])&&b.Ie(a,d);b=!0;break}}rj(this.Va);return b};var tj=new Rf(2E3,1E4),uj=new Rf(3E4,6E4);pj.prototype.getRedirectResult=function(){return this.Va.getRedirectResult()};pj.prototype.Wb=function(a,b,c,d,e){var f=this;return this.X.Wb(a,b,c,function(){f.ob||(f.ob=!0,f.X.fb(f.cd))},function(){f.reset()},d,e)};
var qj=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};pj.prototype.Xb=function(a,b,c){var d=this,e;return jj(this.Tb).then(function(){return d.X.Xb(a,b,c).f(function(a){if(qj(a))throw new O("operation-not-supported-in-this-environment");e=a;return kj(d.Tb).then(function(){throw e;})}).then(function(){return d.X.Se()?new D(function(){}):kj(d.Tb).then(function(){return d.getRedirectResult()}).then(function(){}).f(function(){})})})};
pj.prototype.cc=function(a,b,c,d){return this.X.cc(c,function(c){a.Za(b,null,c,d)},tj.get())};var vj={},wj=function(a,b,c){var d=b+":"+c;vj[d]||(vj[d]=new pj(a,b,c));return vj[d]},mj=function(a){this.h=a;this.xb=null;this.Zb=[];this.Yb=[];this.ub=null;this.Ld=!1};mj.prototype.reset=function(){this.xb=null;this.ub&&(this.ub.cancel(),this.ub=null)};
mj.prototype.Ie=function(a,b){if(!a)return F(new O("invalid-auth-event"));this.reset();this.Ld=!0;var c=a.la,d=a.U,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.$?this.Jd(a,b):b.Jb(c,d)?this.Kd(a,b):F(new O("invalid-auth-event")):(xj(this,!1,null,null),a=E());return a};var rj=function(a){a.Ld||(a.Ld=!0,xj(a,!1,null,null))};
mj.prototype.Jd=function(a){xj(this,!0,null,a.getError());return E()};mj.prototype.Kd=function(a,b){var c=this;b=b.Jb(a.la,a.U);var d=a.Ab,e=a.sc(),f=!!a.la.match(/Redirect$/);return b(d,e).then(function(a){xj(c,f,a,null)}).f(function(a){xj(c,f,null,a)})};
var yj=function(a,b){a.xb=function(){return F(b)};if(a.Yb.length)for(var c=0;c<a.Yb.length;c++)a.Yb[c](b)},zj=function(a,b){a.xb=function(){return E(b)};if(a.Zb.length)for(var c=0;c<a.Zb.length;c++)a.Zb[c](b)},xj=function(a,b,c,d){b?d?yj(a,d):zj(a,c):zj(a,{user:null});a.Zb=[];a.Yb=[]};mj.prototype.getRedirectResult=function(){var a=this;return new D(function(b,c){a.xb?a.xb().then(b,c):(a.Zb.push(b),a.Yb.push(c),Aj(a))})};
var Aj=function(a){var b=new O("timeout");a.ub&&a.ub.cancel();a.ub=Be(uj.get()).then(function(){a.xb||xj(a,!0,null,b)})},nj=function(a){this.h=a};nj.prototype.Ie=function(a,b){if(!a)return F(new O("invalid-auth-event"));var c=a.la,d=a.U;return a.$?this.Jd(a,b):b.Jb(c,d)?this.Kd(a,b):F(new O("invalid-auth-event"))};nj.prototype.Jd=function(a,b){b.Za(a.la,null,a.getError(),a.U);return E()};
nj.prototype.Kd=function(a,b){var c=a.U,d=a.la,e=b.Jb(d,c),f=a.Ab;a=a.sc();return e(f,a).then(function(a){b.Za(d,a,null,c)}).f(function(a){b.Za(d,null,a,c)})};var Bj=function(a){this.g=a;this.Ga=this.da=null;this.La=0};Bj.prototype.I=function(){return{apiKey:this.g.o,refreshToken:this.da,accessToken:this.Ga,expirationTime:this.La}};
var Dj=function(a,b){var c=b.idToken,d=b.refreshToken;b=Cj(b.expiresIn);a.Ga=c;a.La=b;a.da=d},Cj=function(a){return na()+1E3*parseInt(a,10)},Ej=function(a,b){return ah(a.g,b).then(function(b){a.Ga=b.access_token;a.La=Cj(b.expires_in);a.da=b.refresh_token;return{accessToken:a.Ga,expirationTime:a.La,refreshToken:a.da}}).f(function(b){"auth/user-token-expired"==b.code&&(a.da=null);throw b;})};
Bj.prototype.getToken=function(a){a=!!a;return this.Ga&&!this.da?F(new O("user-token-expired")):a||!this.Ga||na()>this.La-3E4?this.da?Ej(this,{grant_type:"refresh_token",refresh_token:this.da}):E(null):E({accessToken:this.Ga,expirationTime:this.La,refreshToken:this.da})};var Fj=function(a,b,c,d,e,f){Xf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})},Gj=function(a,b){B.call(this,a);for(var c in b)this[c]=b[c]};t(Gj,B);
var S=function(a,b,c){this.K=[];this.o=a.apiKey;this.u=a.appName;this.C=a.authDomain||null;a=firebase.SDK_VERSION?Ff(firebase.SDK_VERSION):null;this.g=new R(this.o,null,a);this.qa=new Bj(this.g);Hj(this,b.idToken);Dj(this.qa,b);N(this,"refreshToken",this.qa.da);Ij(this,c||{});G.call(this);this.Jc=!1;this.C&&Jf()&&(this.v=wj(this.C,this.o,this.u));this.Pc=[];this.ra=null;this.sb=Jj(this);this.Cb=r(this.rd,this);var d=this;this.ha=null;this.Ee=function(a){d.bc(a.Nf)};this.xd=null};t(S,G);
S.prototype.bc=function(a){this.ha=a;Vg(this.g,a)};var Kj=function(a,b){a.xd&&sc(a.xd,"languageCodeChanged",a.Ee);(a.xd=b)&&kc(b,"languageCodeChanged",a.Ee)};S.prototype.rd=function(){this.sb.qb&&(this.sb.stop(),this.sb.start())};
var Lj=function(a){try{return firebase.app(a.u).auth()}catch(b){throw new O("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.u+"'!");}},Jj=function(a){return new Ei(function(){return a.getIdToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.qa.La-na()-3E5;return 0<b?b:0},3E4,96E4,!1)},Mj=function(a){a.Gb||a.sb.qb||(a.sb.start(),sc(a,"tokenChanged",a.Cb),kc(a,"tokenChanged",a.Cb))},Nj=function(a){sc(a,"tokenChanged",
a.Cb);a.sb.stop()},Hj=function(a,b){a.ze=b;N(a,"_lat",b)},Oj=function(a,b){Za(a.Pc,function(a){return a==b})},Pj=function(a){for(var b=[],c=0;c<a.Pc.length;c++)b.push(a.Pc[c](a));return Bd(b).then(function(){return a})},Qj=function(a){a.v&&!a.Jc&&(a.Jc=!0,a.v.subscribe(a))},Ij=function(a,b){Xf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,providerData:[]})};
N(S.prototype,"providerId","firebase");var Rj=function(){},Sj=function(a){return E().then(function(){if(a.Gb)throw new O("app-deleted");})},Tj=function(a){return Sa(a.providerData,function(a){return a.providerId})},Vj=function(a,b){b&&(Uj(a,b.providerId),a.providerData.push(b))},Uj=function(a,b){Za(a.providerData,function(a){return a.providerId==b})},Wj=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&N(a,b,c)};
S.prototype.copy=function(a){var b=this;b!=a&&(Xf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,phoneNumber:a.phoneNumber,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){Vj(b,a)}),this.qa=a.qa,N(this,"refreshToken",this.qa.da))};S.prototype.reload=function(){var a=this;return this.c(Sj(this).then(function(){return Xj(a).then(function(){return Pj(a)}).then(Rj)}))};
var Xj=function(a){return a.getIdToken().then(function(b){var c=a.isAnonymous;return Yj(a,b).then(function(){c||Wj(a,"isAnonymous",!1);return b})})};S.prototype.getIdToken=function(a){var b=this;return this.c(Sj(this).then(function(){return b.qa.getToken(a)}).then(function(a){if(!a)throw new O("internal-error");a.accessToken!=b.ze&&(Hj(b,a.accessToken),b.Ra());Wj(b,"refreshToken",a.refreshToken);return a.accessToken}))};
S.prototype.getToken=function(a){Uf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(Uf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a)};
var Zj=function(a,b){b.idToken&&a.ze!=b.idToken&&(Dj(a.qa,b),a.Ra(),Hj(a,b.idToken),Wj(a,"refreshToken",a.qa.da))};S.prototype.Ra=function(){this.dispatchEvent(new Gj("tokenChanged"))};var Yj=function(a,b){return Q(a.g,Dh,{idToken:b}).then(r(a.Xf,a))};
S.prototype.Xf=function(a){a=a.users;if(!a||!a.length)throw new O("internal-error");a=a[0];Ij(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber});for(var b=ak(a),c=0;c<b.length;c++)Vj(this,b[c]);Wj(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var ak=function(a){return(a=a.providerUserInfo)&&a.length?Sa(a,function(a){return new Fj(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]};S.prototype.reauthenticateAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(a.Ad(this.g,this.uid).then(function(a){Zj(b,a);c=bk(b,a,"reauthenticate");b.ra=null;return b.reload()}).then(function(){return c}),!0)};S.prototype.reauthenticateWithCredential=function(a){return this.reauthenticateAndRetrieveDataWithCredential(a).then(function(){})};
var ck=function(a,b){return Xj(a).then(function(){if(Wa(Tj(a),b))return Pj(a).then(function(){throw new O("provider-already-linked");})})};S.prototype.linkAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(ck(this,a.providerId).then(function(){return b.getIdToken()}).then(function(c){return a.Ec(b.g,c)}).then(function(a){c=bk(b,a,"link");return dk(b,a)}).then(function(){return c}))};S.prototype.linkWithCredential=function(a){return this.linkAndRetrieveDataWithCredential(a).then(function(a){return a.user})};
S.prototype.linkWithPhoneNumber=function(a,b){var c=this;return this.c(ck(this,"phone").then(function(){return Ci(Lj(c),a,b,r(c.linkAndRetrieveDataWithCredential,c))}))};S.prototype.reauthenticateWithPhoneNumber=function(a,b){var c=this;return this.c(E().then(function(){return Ci(Lj(c),a,b,r(c.reauthenticateAndRetrieveDataWithCredential,c))}),!0)};var bk=function(a,b,c){var d=Lg(b);b=Mi(b);return Yf({user:a,credential:d,additionalUserInfo:b,operationType:c})},dk=function(a,b){Zj(a,b);return a.reload().then(function(){return a})};
h=S.prototype;h.updateEmail=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){Zj(b,a);return b.reload()}))};h.updatePhoneNumber=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return a.Ec(b.g,c)}).then(function(a){Zj(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){Zj(b,a);return b.reload()}))};
h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Sj(this);var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Zj(b,a);Wj(b,"displayName",a.displayName||null);Wj(b,"photoURL",a.photoUrl||null);x(b.providerData,function(a){"password"===a.providerId&&(N(a,"displayName",b.displayName),N(a,"photoURL",b.photoURL))});return Pj(b)}).then(Rj))};
h.unlink=function(a){var b=this;return this.c(Xj(this).then(function(c){return Wa(Tj(b),a)?rh(b.g,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(Tj(b),function(a){c[a]||Uj(b,a)});c[Ig.PROVIDER_ID]||N(b,"phoneNumber",null);return Pj(b)}):Pj(b).then(function(){throw new O("no-such-provider");})}))};
h["delete"]=function(){var a=this;return this.c(this.getIdToken().then(function(b){return Q(a.g,Ch,{idToken:b})}).then(function(){a.dispatchEvent(new Gj("userDeleted"))})).then(function(){for(var b=0;b<a.K.length;b++)a.K[b].cancel("app-deleted");Kj(a,null);a.K=[];a.Gb=!0;Nj(a);N(a,"refreshToken",null);a.v&&a.v.unsubscribe(a)})};
h.de=function(a,b){return"linkViaPopup"==a&&(this.ka||null)==b&&this.ja||"reauthViaPopup"==a&&(this.ka||null)==b&&this.ja||"linkViaRedirect"==a&&(this.Ea||null)==b||"reauthViaRedirect"==a&&(this.Ea||null)==b?!0:!1};h.Za=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.ka||null)||(c&&this.Ta?this.Ta(c):b&&!c&&this.ja&&this.ja(b),this.M&&(this.M.cancel(),this.M=null),delete this.ja,delete this.Ta)};
h.Jb=function(a,b){return"linkViaPopup"==a&&b==(this.ka||null)?r(this.me,this):"reauthViaPopup"==a&&b==(this.ka||null)?r(this.ne,this):"linkViaRedirect"==a&&(this.Ea||null)==b?r(this.me,this):"reauthViaRedirect"==a&&(this.Ea||null)==b?r(this.ne,this):null};h.rc=function(){return Gf(this.uid+":::")};h.linkWithPopup=function(a){var b=this;return ek(this,"linkViaPopup",a,function(){return ck(b,a.providerId).then(function(){return Pj(b)})},!1)};
h.reauthenticateWithPopup=function(a){return ek(this,"reauthViaPopup",a,function(){return E()},!0)};
var ek=function(a,b,c,d,e){if(!Jf())return F(new O("operation-not-supported-in-this-environment"));if(a.ra&&!e)return F(a.ra);var f=eg(c.providerId),g=a.rc(),l=null;(!Kf()||Cf())&&a.C&&c.isOAuthProvider&&(l=Xh(a.C,a.o,a.u,b,c,null,g,firebase.SDK_VERSION||null));var n=vf(l,f&&f.Vb,f&&f.Ub);d=d().then(function(){fk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){return a.v.Wb(n,b,c,g,!!l)}).then(function(){return new D(function(c,d){a.Za(b,null,new O("cancelled-popup-request"),a.ka||
null);a.ja=c;a.Ta=d;a.ka=g;a.M=a.v.cc(a,b,n,g)})}).then(function(a){n&&uf(n);return a?Yf(a):null}).f(function(a){n&&uf(n);throw a;});return a.c(d,e)};S.prototype.linkWithRedirect=function(a){var b=this;return gk(this,"linkViaRedirect",a,function(){return ck(b,a.providerId)},!1)};S.prototype.reauthenticateWithRedirect=function(a){return gk(this,"reauthViaRedirect",a,function(){return E()},!0)};
var gk=function(a,b,c,d,e){if(!Jf())return F(new O("operation-not-supported-in-this-environment"));if(a.ra&&!e)return F(a.ra);var f=null,g=a.rc();d=d().then(function(){fk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){a.Ea=g;return Pj(a)}).then(function(b){a.Wa&&(b=a.Wa,b=b.h.set(hk,a.I(),b.j));return b}).then(function(){return a.v.Xb(b,c,g)}).f(function(b){f=b;if(a.Wa)return ik(a.Wa);throw f;}).then(function(){if(f)throw f;});return a.c(d,e)},fk=function(a){if(!a.v||!a.Jc){if(a.v&&
!a.Jc)throw new O("internal-error");throw new O("auth-domain-config-required");}};S.prototype.me=function(a,b){var c=this;this.M&&(this.M.cancel(),this.M=null);var d=null,e=this.getIdToken().then(function(d){return pg(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=bk(c,a,"link");return dk(c,a)}).then(function(){return d});return this.c(e)};
S.prototype.ne=function(a,b){var c=this;this.M&&(this.M.cancel(),this.M=null);var d=null,e=E().then(function(){return lg(qg(c.g,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=bk(c,a,"reauthenticate");Zj(c,a);c.ra=null;return c.reload()}).then(function(){return d});return this.c(e,!0)};
S.prototype.sendEmailVerification=function(a){var b=this,c=null;return this.c(this.getIdToken().then(function(b){c=b;return"undefined"===typeof a||jb(a)?{}:Ai(new zi(a))}).then(function(a){return b.g.sendEmailVerification(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};S.prototype.c=function(a,b){var c=this,d=jk(this,a,b);this.K.push(d);Ed(d,function(){Ya(c.K,d)});return d};
var jk=function(a,b,c){return a.ra&&!c?(b.cancel(),F(a.ra)):b.f(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.ra||a.dispatchEvent(new Gj("userInvalidated")),a.ra=b);throw b;})};S.prototype.toJSON=function(){return this.I()};
S.prototype.I=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.o,appName:this.u,authDomain:this.C,stsTokenManager:this.qa.I(),redirectEventId:this.Ea||null};x(this.providerData,function(b){a.providerData.push(Zf(b))});return a};
var kk=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new S(b,c,a);a.providerData&&x(a.providerData,function(a){a&&Vj(d,Yf(a))});a.redirectEventId&&(d.Ea=a.redirectEventId);return d},
lk=function(a,b,c){var d=new S(a,b);c&&(d.Wa=c);return d.reload().then(function(){return d})};var mk=function(a){this.j=a;this.h=Ri()},hk={name:"redirectUser",B:"session"},ik=function(a){return a.h.remove(hk,a.j)},nk=function(a,b){return a.h.get(hk,a.j).then(function(a){a&&b&&(a.authDomain=b);return kk(a||{})})};var pk=function(a,b){this.j=a;this.h=b||Ri();this.N=null;this.Dd=this.vd();this.h.addListener(ok("local"),this.j,r(this.mg,this))};pk.prototype.mg=function(){var a=this,b=ok("local");qk(this,function(){return E().then(function(){return a.N&&"local"!=a.N.B?a.h.get(b,a.j):null}).then(function(c){if(c)return rk(a,"local").then(function(){a.N=b})})})};var rk=function(a,b){var c=[],d;for(d in Ni)Ni[d]!==b&&c.push(a.h.remove(ok(Ni[d]),a.j));c.push(a.h.remove(sk,a.j));return Ad(c)};
pk.prototype.vd=function(){var a=this,b=ok("local"),c=ok("session"),d=ok("none");return this.h.get(c,this.j).then(function(e){return e?c:a.h.get(d,a.j).then(function(c){return c?d:a.h.get(b,a.j).then(function(c){return c?b:a.h.get(sk,a.j).then(function(a){return a?ok(a):b})})})}).then(function(b){a.N=b;return rk(a,b.B)}).f(function(){a.N||(a.N=b)})};var sk={name:"persistence",B:"session"},ok=function(a){return{name:"authUser",B:a}};
pk.prototype.Sd=function(a){var b=null,c=this;Oi(a);return qk(this,function(){return a!=c.N.B?c.h.get(c.N,c.j).then(function(d){b=d;return rk(c,a)}).then(function(){c.N=ok(a);if(b)return c.h.set(c.N,b,c.j)}):E()})};
var tk=function(a){return qk(a,function(){return a.h.set(sk,a.N.B,a.j)})},uk=function(a,b){return qk(a,function(){return a.h.set(a.N,b.I(),a.j)})},vk=function(a){return qk(a,function(){return a.h.remove(a.N,a.j)})},wk=function(a,b){return qk(a,function(){return a.h.get(a.N,a.j).then(function(a){a&&b&&(a.authDomain=b);return kk(a||{})})})},qk=function(a,b){a.Dd=a.Dd.then(b,b);return a.Dd};var T=function(a){this.Ba=!1;N(this,"app",a);if(this.i().options&&this.i().options.apiKey)a=firebase.SDK_VERSION?Ff(firebase.SDK_VERSION):null,this.g=new R(this.i().options&&this.i().options.apiKey,null,a);else throw new O("invalid-api-key");this.K=[];this.Ha=[];this.Bb=[];this.Tf=firebase.INTERNAL.createSubscribe(r(this.Hf,this));this.jc=void 0;this.Vf=firebase.INTERNAL.createSubscribe(r(this.Jf,this));xk(this,null);a=this.i().options.apiKey;var b=this.i().name;this.ma=new pk(a+":"+b);a=this.i().options.apiKey;
b=this.i().name;this.vb=new mk(a+":"+b);this.mc=this.c(yk(this));this.xa=this.c(zk(this));this.Bc=!1;this.pd=r(this.ng,this);this.Ve=r(this.lb,this);this.Cb=r(this.rd,this);this.Te=r(this.Cf,this);this.Ue=r(this.Df,this);Ak(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this["delete"],this);this.Ma=0;G.call(this);Bk(this)};t(T,G);var Ck=function(a){B.call(this,"languageCodeChanged");this.Nf=a};t(Ck,B);T.prototype.Sd=function(a){a=this.ma.Sd(a);return this.c(a)};
T.prototype.bc=function(a){this.ha===a||this.Ba||(this.ha=a,Vg(this.g,this.ha),this.dispatchEvent(new Ck(this.ha)))};var Bk=function(a){Object.defineProperty(a,"lc",{get:function(){return this.ha},set:function(a){this.bc(a)},enumerable:!1});a.ha=null};T.prototype.toJSON=function(){return{apiKey:this.i().options.apiKey,authDomain:this.i().options.authDomain,appName:this.i().name,currentUser:U(this)&&U(this).I()}};
var Dk=function(a){return a.pf||F(new O("auth-domain-config-required"))},Ak=function(a){var b=a.i().options.authDomain,c=a.i().options.apiKey;b&&Jf()&&(a.pf=a.mc.then(function(){if(!a.Ba){a.v=wj(b,c,a.i().name);a.v.subscribe(a);U(a)&&Qj(U(a));if(a.wb){Qj(a.wb);var d=a.wb;d.bc(a.ha);Kj(d,a);a.wb=null}return a.v}}))};h=T.prototype;h.de=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ka==b&&!!this.ja;default:return!1}};
h.Za=function(a,b,c,d){"signInViaPopup"==a&&this.ka==d&&(c&&this.Ta?this.Ta(c):b&&!c&&this.ja&&this.ja(b),this.M&&(this.M.cancel(),this.M=null),delete this.ja,delete this.Ta)};h.Jb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ka==b&&this.ja?r(this.rf,this):null};
h.rf=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.M&&(this.M.cancel(),this.M=null);var d=null,e=null,f=ng(c.g,a).then(function(a){d=Lg(a);e=Mi(a);return a});a=c.mc.then(function(){return f}).then(function(a){return Ek(c,a)}).then(function(){return Yf({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.c(a)};h.rc=function(){return Gf()};
h.signInWithPopup=function(a){if(!Jf())return F(new O("operation-not-supported-in-this-environment"));var b=this,c=eg(a.providerId),d=this.rc(),e=null;(!Kf()||Cf())&&this.i().options.authDomain&&a.isOAuthProvider&&(e=Xh(this.i().options.authDomain,this.i().options.apiKey,this.i().name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=vf(e,c&&c.Vb,c&&c.Ub);c=Dk(this).then(function(b){return b.Wb(f,"signInViaPopup",a,d,!!e)}).then(function(){return new D(function(a,c){b.Za("signInViaPopup",
null,new O("cancelled-popup-request"),b.ka);b.ja=a;b.Ta=c;b.ka=d;b.M=b.v.cc(b,"signInViaPopup",f,d)})}).then(function(a){f&&uf(f);return a?Yf(a):null}).f(function(a){f&&uf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!Jf())return F(new O("operation-not-supported-in-this-environment"));var b=this,c=Dk(this).then(function(){return tk(b.ma)}).then(function(){return b.v.Xb("signInViaRedirect",a)});return this.c(c)};
h.getRedirectResult=function(){if(!Jf())return F(new O("operation-not-supported-in-this-environment"));var a=this,b=Dk(this).then(function(){return a.v.getRedirectResult()}).then(function(a){return a?Yf(a):null});return this.c(b)};
var Ek=function(a,b){var c={};c.apiKey=a.i().options.apiKey;c.authDomain=a.i().options.authDomain;c.appName=a.i().name;return a.mc.then(function(){return lk(c,b,a.vb)}).then(function(b){if(U(a)&&b.uid==U(a).uid)return U(a).copy(b),a.lb(b);xk(a,b);Qj(b);return a.lb(b)}).then(function(){a.Ra()})},xk=function(a,b){U(a)&&(Oj(U(a),a.Ve),sc(U(a),"tokenChanged",a.Cb),sc(U(a),"userDeleted",a.Te),sc(U(a),"userInvalidated",a.Ue),Nj(U(a)));b&&(b.Pc.push(a.Ve),kc(b,"tokenChanged",a.Cb),kc(b,"userDeleted",a.Te),
kc(b,"userInvalidated",a.Ue),0<a.Ma&&Mj(b));N(a,"currentUser",b);b&&(b.bc(a.ha),Kj(b,a))};T.prototype.signOut=function(){var a=this,b=this.xa.then(function(){if(!U(a))return E();xk(a,null);return vk(a.ma).then(function(){a.Ra()})});return this.c(b)};
var Fk=function(a){var b=a.i().options.authDomain;b=nk(a.vb,b).then(function(b){if(a.wb=b)b.Wa=a.vb;return ik(a.vb)});return a.c(b)},yk=function(a){var b=a.i().options.authDomain,c=Fk(a).then(function(){return wk(a.ma,b)}).then(function(b){return b?(b.Wa=a.vb,a.wb&&(a.wb.Ea||null)==(b.Ea||null)?b:b.reload().then(function(){return uk(a.ma,b).then(function(){return b})}).f(function(c){return"auth/network-request-failed"==c.code?b:vk(a.ma)})):null}).then(function(b){xk(a,b||null)});return a.c(c)},zk=
function(a){return a.mc.then(function(){return a.getRedirectResult()}).f(function(){}).then(function(){if(!a.Ba)return a.pd()}).f(function(){}).then(function(){if(!a.Ba){a.Bc=!0;var b=a.ma;b.h.addListener(ok("local"),b.j,a.pd)}})};h=T.prototype;
h.ng=function(){var a=this,b=this.i().options.authDomain;return wk(this.ma,b).then(function(b){if(!a.Ba){var c;if(c=U(a)&&b){c=U(a).uid;var e=b.uid;c=void 0===c||null===c||""===c||void 0===e||null===e||""===e?!1:c==e}if(c)return U(a).copy(b),U(a).getIdToken();if(U(a)||b)xk(a,b),b&&(Qj(b),b.Wa=a.vb),a.v&&a.v.subscribe(a),a.Ra()}})};h.lb=function(a){return uk(this.ma,a)};h.rd=function(){this.Ra();this.lb(U(this))};h.Cf=function(){this.signOut()};h.Df=function(){this.signOut()};
var Gk=function(a,b){var c=null,d=null;return a.c(b.then(function(b){c=Lg(b);d=Mi(b);return Ek(a,b)}).then(function(){return Yf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=T.prototype;h.Hf=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};h.Jf=function(a){var b=this;Hk(this,function(){a.next(U(b))})};
h.onIdTokenChanged=function(a,b,c){var d=this;this.Bc&&firebase.Promise.resolve().then(function(){p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.Tf(a,b,c)};h.onAuthStateChanged=function(a,b,c){var d=this;this.Bc&&firebase.Promise.resolve().then(function(){d.jc=d.getUid();p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.Vf(a,b,c)};h.xf=function(a){var b=this,c=this.xa.then(function(){return U(b)?U(b).getIdToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};
h.signInWithCustomToken=function(a){var b=this;return this.xa.then(function(){return Gk(b,Q(b.g,Fh,{token:a}))}).then(function(a){a=a.user;Wj(a,"isAnonymous",!1);return b.lb(a)}).then(function(){return U(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.xa.then(function(){return Gk(c,Q(c.g,Bg,{email:a,password:b}))}).then(function(a){return a.user})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.xa.then(function(){return Gk(c,Q(c.g,Bh,{email:a,password:b}))}).then(function(a){return a.user})};
h.signInWithCredential=function(a){return this.signInAndRetrieveDataWithCredential(a).then(function(a){return a.user})};h.signInAndRetrieveDataWithCredential=function(a){var b=this;return this.xa.then(function(){return Gk(b,a.Kb(b.g))})};h.signInAnonymously=function(){var a=this;return this.xa.then(function(){var b=U(a);return b&&b.isAnonymous?b:Gk(a,a.g.signInAnonymously()).then(function(b){b=b.user;Wj(b,"isAnonymous",!0);return a.lb(b)}).then(function(){return U(a)})})};h.i=function(){return this.app};
var U=function(a){return a.currentUser};T.prototype.getUid=function(){return U(this)&&U(this).uid||null};var Ik=function(a){return U(a)&&U(a)._lat||null};h=T.prototype;h.Ra=function(){if(this.Bc){for(var a=0;a<this.Ha.length;a++)if(this.Ha[a])this.Ha[a](Ik(this));if(this.jc!==this.getUid()&&this.Bb.length)for(this.jc=this.getUid(),a=0;a<this.Bb.length;a++)if(this.Bb[a])this.Bb[a](Ik(this))}};h.df=function(a){this.addAuthTokenListener(a);this.Ma++;0<this.Ma&&U(this)&&Mj(U(this))};
h.ag=function(a){var b=this;x(this.Ha,function(c){c==a&&b.Ma--});0>this.Ma&&(this.Ma=0);0==this.Ma&&U(this)&&Nj(U(this));this.removeAuthTokenListener(a)};h.addAuthTokenListener=function(a){var b=this;this.Ha.push(a);this.c(this.xa.then(function(){b.Ba||Wa(b.Ha,a)&&a(Ik(b))}))};h.removeAuthTokenListener=function(a){Za(this.Ha,function(b){return b==a})};var Hk=function(a,b){a.Bb.push(b);a.c(a.xa.then(function(){!a.Ba&&Wa(a.Bb,b)&&a.jc!==a.getUid()&&(a.jc=a.getUid(),b(Ik(a)))}))};h=T.prototype;
h["delete"]=function(){this.Ba=!0;for(var a=0;a<this.K.length;a++)this.K[a].cancel("app-deleted");this.K=[];this.ma&&(a=this.ma,a.h.removeListener(ok("local"),a.j,this.pd));this.v&&this.v.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.K.push(a);Ed(a,function(){Ya(b.K,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(fh(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.g.checkActionCode(a).then(function(a){return new Di(a)}))};h.applyActionCode=function(a){return this.c(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a,b){var c=this;return this.c(E().then(function(){return"undefined"===typeof b||jb(b)?{}:Ai(new zi(b))}).then(function(b){return c.g.sendPasswordResetEmail(a,b)}).then(function(){}))};
h.signInWithPhoneNumber=function(a,b){return this.c(Ci(this,a,b,r(this.signInAndRetrieveDataWithCredential,this)))};var Jk="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),V=function(a,b){return{name:a||"",R:"a valid string",optional:!!b,S:m}},Kk=function(){return{name:"opt_forceRefresh",R:"a boolean",optional:!0,S:ca}},W=function(a,b){return{name:a||"",R:"a valid object",optional:!!b,S:q}},Lk=function(a,b){return{name:a||"",R:"a function",optional:!!b,S:p}},Mk=function(a,b){return{name:a||"",R:"null",optional:!!b,S:ha}},Nk=function(){return{name:"",R:"an HTML element",optional:!1,S:function(a){return!!(a&&
a instanceof Element)}}},Ok=function(){return{name:"auth",R:"an instance of Firebase Auth",optional:!0,S:function(a){return!!(a&&a instanceof T)}}},Pk=function(){return{name:"app",R:"an instance of Firebase App",optional:!0,S:function(a){return!!(a&&a instanceof firebase.app.App)}}},Qk=function(a){return{name:a?a+"Credential":"credential",R:a?"a valid "+a+" credential":"a valid credential",optional:!1,S:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.Kb||!c)}}},Rk=function(){return{name:"authProvider",
R:"a valid Auth provider",optional:!1,S:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Sk=function(){return{name:"applicationVerifier",R:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,S:function(a){return!!(a&&m(a.type)&&p(a.verify))}}},X=function(a,b,c,d){return{name:c||"",R:a.R+" or "+b.R,optional:!!d,S:function(c){return a.S(c)||b.S(c)}}};var Y=function(a,b){for(var c in b){var d=b[c].name;a[d]=Tk(d,a[c],b[c].a)}},Z=function(a,b,c,d){a[b]=Tk(b,c,d)},Tk=function(a,b,c){if(!c)return b;var d=Uk(a);a=function(){var a=Array.prototype.slice.call(arguments);a:{var e=Array.prototype.slice.call(a);var l=0;for(var n=!1,C=0;C<c.length;C++)if(c[C].optional)n=!0;else{if(n)throw new O("internal-error","Argument validator encountered a required argument after an optional argument.");l++}n=c.length;if(e.length<l||n<e.length)e="Expected "+(l==n?1==
l?"1 argument":l+" arguments":l+"-"+n+" arguments")+" but got "+e.length+".";else{for(l=0;l<e.length;l++)if(n=c[l].optional&&void 0===e[l],!c[l].S(e[l])&&!n){e=c[l];if(0>l||l>=Jk.length)throw new O("internal-error","Argument validator received an unsupported number of arguments.");e=Jk[l]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.R+".";break a}e=null}}if(e)throw new O("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},Uk=function(a){a=a.split(".");return a[a.length-1]};Y(T.prototype,{applyActionCode:{name:"applyActionCode",a:[V("code")]},checkActionCode:{name:"checkActionCode",a:[V("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[V("code"),V("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[V("email"),V("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[V("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[X(W(),Lk(),"nextOrObserver"),
Lk("opt_error",!0),Lk("opt_completed",!0)]},onIdTokenChanged:{name:"onIdTokenChanged",a:[X(W(),Lk(),"nextOrObserver"),Lk("opt_error",!0),Lk("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[V("email"),X(W("opt_actionCodeSettings",!0),Mk(null,!0),"opt_actionCodeSettings",!0)]},Sd:{name:"setPersistence",a:[V("persistence")]},signInAndRetrieveDataWithCredential:{name:"signInAndRetrieveDataWithCredential",a:[Qk()]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",
a:[Qk()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[V("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[V("email"),V("password")]},signInWithPhoneNumber:{name:"signInWithPhoneNumber",a:[V("phoneNumber"),Sk()]},signInWithPopup:{name:"signInWithPopup",a:[Rk()]},signInWithRedirect:{name:"signInWithRedirect",a:[Rk()]},signOut:{name:"signOut",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[V("code")]}});
T.Persistence=Ni;T.Persistence.LOCAL="local";T.Persistence.SESSION="session";T.Persistence.NONE="none";
Y(S.prototype,{"delete":{name:"delete",a:[]},getIdToken:{name:"getIdToken",a:[Kk()]},getToken:{name:"getToken",a:[Kk()]},linkAndRetrieveDataWithCredential:{name:"linkAndRetrieveDataWithCredential",a:[Qk()]},linkWithCredential:{name:"linkWithCredential",a:[Qk()]},linkWithPhoneNumber:{name:"linkWithPhoneNumber",a:[V("phoneNumber"),Sk()]},linkWithPopup:{name:"linkWithPopup",a:[Rk()]},linkWithRedirect:{name:"linkWithRedirect",a:[Rk()]},reauthenticateAndRetrieveDataWithCredential:{name:"reauthenticateAndRetrieveDataWithCredential",
a:[Qk()]},reauthenticateWithCredential:{name:"reauthenticateWithCredential",a:[Qk()]},reauthenticateWithPhoneNumber:{name:"reauthenticateWithPhoneNumber",a:[V("phoneNumber"),Sk()]},reauthenticateWithPopup:{name:"reauthenticateWithPopup",a:[Rk()]},reauthenticateWithRedirect:{name:"reauthenticateWithRedirect",a:[Rk()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[X(W("opt_actionCodeSettings",!0),Mk(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",a:[V(null,
!0)]},unlink:{name:"unlink",a:[V("provider")]},updateEmail:{name:"updateEmail",a:[V("email")]},updatePassword:{name:"updatePassword",a:[V("password")]},updatePhoneNumber:{name:"updatePhoneNumber",a:[Qk("phone")]},updateProfile:{name:"updateProfile",a:[W("profile")]}});Y(D.prototype,{f:{name:"catch"},then:{name:"then"}});Y(Bi.prototype,{confirm:{name:"confirm",a:[V("verificationCode")]}});Z(Dg,"credential",function(a,b){return new Ag(a,b)},[V("email"),V("password")]);
Y(sg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(sg,"credential",tg,[X(V(),W(),"token")]);Y(ug.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(ug,"credential",vg,[X(V(),W(),"token")]);Y(wg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(wg,"credential",xg,[X(V(),X(W(),Mk()),"idToken"),X(V(),Mk(),"accessToken",!0)]);Y(yg.prototype,{setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(yg,"credential",zg,[X(V(),W(),"token"),V("secret",!0)]);Y(P.prototype,{addScope:{name:"addScope",a:[V("scope")]},credential:{name:"credential",a:[X(V(),Mk(),"idToken",!0),X(V(),Mk(),"accessToken",!0)]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(Ig,"credential",Kg,[V("verificationId"),V("verificationCode")]);Y(Ig.prototype,{verifyPhoneNumber:{name:"verifyPhoneNumber",a:[V("phoneNumber"),Sk()]}});Y(O.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Ng.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(jg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Yh.prototype,{clear:{name:"clear",a:[]},render:{name:"render",a:[]},verify:{name:"verify",a:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:T,Error:O};Z(a,"EmailAuthProvider",Dg,[]);Z(a,"FacebookAuthProvider",sg,[]);Z(a,"GithubAuthProvider",ug,[]);Z(a,"GoogleAuthProvider",wg,[]);Z(a,"TwitterAuthProvider",yg,[]);Z(a,"OAuthProvider",P,[V("providerId")]);Z(a,"PhoneAuthProvider",Ig,[Ok()]);Z(a,"RecaptchaVerifier",Yh,[X(V(),Nk(),"recaptchaContainer"),W("recaptchaParameters",!0),Pk()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new T(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.xf,a),addAuthTokenListener:r(a.df,a),removeAuthTokenListener:r(a.ag,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:S})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__(295);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_register_form__ = __webpack_require__(294);
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
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form__["a" /* RegisterFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_form_login_form__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form__["a" /* RegisterFormComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
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
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var LoginFormComponent = (function () {
    function LoginFormComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello LoginFormComponent Component');
        this.text = 'Hello World';
    }
    // Bonne pratique pour faire une fonction réutilisable -> exemple : (click)="navigateToPage('RegisterPage')"
    // (!) Si la personne click sur "login" la page suivantes (InboxPage) a un "back boutton" alors qu'il devrait juste avoir un boutton logout -> pour cela in va créer une fonction
    // la page suivantes est InboxPage car on la défini comme première root dans les Tabs de TabsPage - Tabs => Bottom Navigation App
    LoginFormComponent.prototype.navigateToPage = function (pageName) {
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
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login-form',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/login-form/login-form.html"*/'<!-- Generated template for the LoginFormComponent component -->\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Email Adress</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </ion-card-content>\n    <ion-row class="login-form__block__buttons">\n      <div class="login-form__buttons">\n        <button ion-button (click)="navigateToPage(\'RegisterPage\')" color="secondary">Register</button>\n        <button ion-button color="primary" (click)="navigateToPage(\'TabsPage\')" >Login</button>\n      </div>\n    </ion-row>\n  </ion-card>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/login-form/login-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], LoginFormComponent);

//# sourceMappingURL=login-form.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
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
    function RegisterFormComponent(toastCrontroller, angularFireAuth) {
        this.toastCrontroller = toastCrontroller;
        this.angularFireAuth = angularFireAuth;
        this.account = {};
        console.log('Hello RegisterFormComponent Component');
        this.text = 'Hello World';
    }
    // La déclaration async function définit une fonction asynchrone qui renvoie un objet AsyncFunction.
    // Créer thread parrallèle
    RegisterFormComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.angularFireAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)];
                    case 1:
                        result = _a.sent();
                        this.toastCrontroller.create({
                            message: "Account créée avec succès",
                            duration: 3000
                        }).present();
                        // Génial ! attend la résolution d'une promesse
                        console.log("result await", result);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        this.toastCrontroller.create({
                            message: err_1.message,
                            duration: 3000
                        }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterFormComponent;
}());
RegisterFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-register-form',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/register-form/register-form.html"*/'<!-- Generated template for the RegisterFormComponent component -->\n\n<ion-card>\n  <ion-card-content>\n    <ion-item>\n      <ion-label floating>Email Adress</ion-label>\n      <ion-input [(ngModel)]="account.email" type="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="account.password" type="password"></ion-input>\n    </ion-item>\n  </ion-card-content>\n  <!--Penser à isoler le CSS en créant leur propre class-->\n  <ion-row class="login-form__block__buttons">\n    <div class="login-form__buttons">\n      <button ion-button (click)="register()">Register</button>\n    </div>\n  </ion-row>\n</ion-card>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/components/register-form/register-form.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], RegisterFormComponent);

var _a, _b;
//# sourceMappingURL=register-form.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(289);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__(298);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_module__["a"]; });


//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(27);
var Notification_1 = __webpack_require__(297);
/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return this.lift(new ObserveOnOperator(scheduler, delay));
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
/**
 * Represents a push-based event or value that an {@link Observable} can emit.
 * This class is particularly useful for operators that manage notifications,
 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
 * others. Besides wrapping the actual delivered value, it also annotates it
 * with metadata of, for instance, what type of push message it is (`next`,
 * `error`, or `complete`).
 *
 * @see {@link materialize}
 * @see {@link dematerialize}
 * @see {@link observeOn}
 *
 * @class Notification<T>
 */
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    /**
     * Delivers to the given `observer` the value wrapped by this Notification.
     * @param {Observer} observer
     * @return
     */
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    /**
     * Given some {@link Observer} callbacks, deliver the value represented by the
     * current Notification to the correctly corresponding callback.
     * @param {function(value: T): void} next An Observer `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    /**
     * Takes an Observer or its individual callback functions, and calls `observe`
     * or `do` methods accordingly.
     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
     * the `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    /**
     * Returns a simple Observable that just delivers the notification represented
     * by this Notification instance.
     * @return {any}
     */
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Observable_1.Observable.of(this.value);
            case 'E':
                return Observable_1.Observable.throw(this.error);
            case 'C':
                return Observable_1.Observable.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    /**
     * A shortcut to create a Notification instance of the type `next` from a
     * given value.
     * @param {T} value The `next` value.
     * @return {Notification<T>} The "next" Notification representing the
     * argument.
     */
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return this.undefinedValueNotification;
    };
    /**
     * A shortcut to create a Notification instance of the type `error` from a
     * given error.
     * @param {any} [err] The `error` error.
     * @return {Notification<T>} The "error" Notification representing the
     * argument.
     */
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    /**
     * A shortcut to create a Notification instance of the type `complete`.
     * @return {Notification<any>} The valueless "complete" Notification.
     */
    Notification.createComplete = function () {
        return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _getAngularFireAuth */
/* unused harmony export AngularFireAuthProvider */
/* unused harmony export AUTH_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireAuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(289);




function _getAngularFireAuth(app) {
    return new __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AngularFireAuth */](app);
}
var AngularFireAuthProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AngularFireAuth */],
    useFactory: _getAngularFireAuth,
    deps: [__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */]]
};
var AUTH_PROVIDERS = [
    AngularFireAuthProvider,
];
var AngularFireAuthModule = (function () {
    function AngularFireAuthModule() {
    }
    AngularFireAuthModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */]],
                    providers: [AUTH_PROVIDERS]
                },] },
    ];
    AngularFireAuthModule.ctorParameters = function () { return []; };
    return AngularFireAuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 300:
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
    function LoginPage() {
    }
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/img/logo_renault2.png" alt="logo">\n  <app-login-form></app-login-form>\n</ion-content>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/whatsapp-with-angular-and-ionic/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map