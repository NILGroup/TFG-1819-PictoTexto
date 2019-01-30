(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-sm\">\n      <app-translator></app-translator>\n  </div>\n    <div class=\"col-sm\">\n      <app-finder></app-finder>\n    </div>\n\n</div>\n    <div class=\"row\">\n      <app-picto-translator></app-picto-translator>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pict2textFront';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _finder_finder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder/finder.component */ "./src/app/finder/finder.component.ts");
/* harmony import */ var _picto_translator_picto_translator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./picto-translator/picto-translator.component */ "./src/app/picto-translator/picto-translator.component.ts");
/* harmony import */ var _translator_translator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translator/translator.component */ "./src/app/translator/translator.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _finder_finder_component__WEBPACK_IMPORTED_MODULE_6__["FinderComponent"],
                _picto_translator_picto_translator_component__WEBPACK_IMPORTED_MODULE_7__["PictoTranslatorComponent"],
                _translator_translator_component__WEBPACK_IMPORTED_MODULE_8__["TranslatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/finder/assets/finder.component.css":
/*!****************************************************!*\
  !*** ./src/app/finder/assets/finder.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pictoSlider{\r\n    background: rgba(226,226,226,1);\r\n}\r\n\r\n.carousel-caption {\r\n    position: relative;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZGVyL2Fzc2V0cy9maW5kZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZmluZGVyL2Fzc2V0cy9maW5kZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0b1NsaWRlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjI2LDIyNiwyMjYsMSk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/finder/assets/finder.component.html":
/*!*****************************************************!*\
  !*** ./src/app/finder/assets/finder.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group \">\n        <label>Nombre del picto</label>\n        <input type=\"text\" class=\"form-control\" id=\"pictoName\" placeholder=\"Introduzca el pictograma que desea buscar\"\n            name=\"pictoName\" #name>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"getPictosByName(name.value)\">Submit</button>\n\n    <div class=\"pictoSlider\">\n        <ngb-carousel *ngIf=\"myPicto.length>0\" [showNavigationIndicators]=\"false\">\n            <div *ngFor=\"let img of myPicto\">\n                <ng-template ngbSlide>\n                    <img src={{img.url}} class=\"img-responsive mx-auto d-flex justify-content-center flex-wrap\" alt=\"\" width=\"50%\">\n                    <div class=\"carousel-caption\">\n                        <p>{{img.id}}</p>\n                    </div>\n                </ng-template>\n               \n            </div>\n        </ngb-carousel>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/finder/finder.component.ts":
/*!********************************************!*\
  !*** ./src/app/finder/finder.component.ts ***!
  \********************************************/
/*! exports provided: FinderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinderComponent", function() { return FinderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_finder_service_finder_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/finder/service/finder-service.service */ "./src/app/finder/service/finder-service.service.ts");
/* harmony import */ var src_app_finder_transformer_picto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/finder/transformer/picto */ "./src/app/finder/transformer/picto.ts");




var FinderComponent = /** @class */ (function () {
    function FinderComponent(pictoService) {
        this.pictoService = pictoService;
        this.myPicto = [];
    }
    FinderComponent.prototype.getPictosByName = function (name) {
        var _this = this;
        this.pictoService.getPictosByName(name)
            .subscribe(function (data) {
            var i = 0;
            for (i = 0; i < data['pictos'].length; ++i)
                _this.myPicto.push(new src_app_finder_transformer_picto__WEBPACK_IMPORTED_MODULE_3__["Picto"](data['pictos'][i]));
        });
        console.log(this.myPicto);
    };
    FinderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finder',
            template: __webpack_require__(/*! ./assets/finder.component.html */ "./src/app/finder/assets/finder.component.html"),
            providers: [src_app_finder_service_finder_service_service__WEBPACK_IMPORTED_MODULE_2__["FinderService"]],
            styles: [__webpack_require__(/*! ./assets/finder.component.css */ "./src/app/finder/assets/finder.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_finder_service_finder_service_service__WEBPACK_IMPORTED_MODULE_2__["FinderService"]])
    ], FinderComponent);
    return FinderComponent;
}());



/***/ }),

/***/ "./src/app/finder/service/finder-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/finder/service/finder-service.service.ts ***!
  \**********************************************************/
/*! exports provided: FinderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinderService", function() { return FinderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var FinderService = /** @class */ (function () {
    function FinderService(http) {
        this.http = http;
        this.configUrl = 'http://127.0.0.1:8000/picto/getPicto?pictoName=';
    }
    FinderService.prototype.getPictosByName = function (name) {
        return this.http.get("http://127.0.0.1:8000/picto/getPicto?pictoName=" + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ;
    FinderService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    FinderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FinderService);
    return FinderService;
}());



/***/ }),

/***/ "./src/app/finder/transformer/picto.ts":
/*!*********************************************!*\
  !*** ./src/app/finder/transformer/picto.ts ***!
  \*********************************************/
/*! exports provided: Picto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picto", function() { return Picto; });
var Picto = /** @class */ (function () {
    function Picto(data) {
        this.id = data.id;
        this.url = data.url;
    }
    return Picto;
}());



/***/ }),

/***/ "./src/app/picto-translator/assets/picto-translator.component.css":
/*!************************************************************************!*\
  !*** ./src/app/picto-translator/assets/picto-translator.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpY3RvLXRyYW5zbGF0b3IvYXNzZXRzL3BpY3RvLXRyYW5zbGF0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/picto-translator/assets/picto-translator.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/picto-translator/assets/picto-translator.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form action=\"/getPictoTranslate\" method=\"get\">\n    <div class=\"form-group \">\n      <label>Identificador del picto</label>\n      <input type=\"text\" class=\"form-control\" id=\"pictoId\" placeholder=\"Introduzca el pictograma que desea buscar\" name=\"pictoId\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n  <div class=\"container\">\n    <p></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/picto-translator/picto-translator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/picto-translator/picto-translator.component.ts ***!
  \****************************************************************/
/*! exports provided: PictoTranslatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictoTranslatorComponent", function() { return PictoTranslatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PictoTranslatorComponent = /** @class */ (function () {
    function PictoTranslatorComponent() {
    }
    PictoTranslatorComponent.prototype.ngOnInit = function () {
    };
    PictoTranslatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-picto-translator',
            template: __webpack_require__(/*! ./assets/picto-translator.component.html */ "./src/app/picto-translator/assets/picto-translator.component.html"),
            styles: [__webpack_require__(/*! ./assets/picto-translator.component.css */ "./src/app/picto-translator/assets/picto-translator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PictoTranslatorComponent);
    return PictoTranslatorComponent;
}());



/***/ }),

/***/ "./src/app/translator/assets/translator.component.css":
/*!************************************************************!*\
  !*** ./src/app/translator/assets/translator.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zbGF0b3IvYXNzZXRzL3RyYW5zbGF0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/translator/assets/translator.component.html":
/*!*************************************************************!*\
  !*** ./src/app/translator/assets/translator.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form action=\"/getTranslate\" method=\"post\">\n      <div class=\"form-group \">\n          <label >Sujeto</label>\n          <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Introduzca un sujeto\" name=\"subject\">\n      </div>\n      <div class=\"form-group\">\n          <label >Verbo</label>\n          <input type=\"text\" class=\"form-control\" id=\"verb\" placeholder=\"Introduzca un verbo\" name=\"verb\">\n      </div>\n        <div class=\"form-group\">\n          <label >Objeto</label>\n          <input type=\"text\" class=\"form-control\" id=\"object\" placeholder=\"Introduzca el complemento directo\" name=\"object\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n<div class=\"container\">\n      <p></p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/translator/translator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/translator/translator.component.ts ***!
  \****************************************************/
/*! exports provided: TranslatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorComponent", function() { return TranslatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TranslatorComponent = /** @class */ (function () {
    function TranslatorComponent() {
    }
    TranslatorComponent.prototype.ngOnInit = function () {
    };
    TranslatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-translator',
            template: __webpack_require__(/*! ./assets/translator.component.html */ "./src/app/translator/assets/translator.component.html"),
            styles: [__webpack_require__(/*! ./assets/translator.component.css */ "./src/app/translator/assets/translator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TranslatorComponent);
    return TranslatorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chema Lopez\Documents\GitHub\TFG-1718-PictoTexto\Codigo\pict2textFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map