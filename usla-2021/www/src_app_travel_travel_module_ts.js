(self["webpackChunkusla_2021"] = self["webpackChunkusla_2021"] || []).push([["src_app_travel_travel_module_ts"],{

/***/ 3667:
/*!*************************************************!*\
  !*** ./src/app/travel/travel-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelPageRoutingModule": () => (/* binding */ TravelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _travel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel.page */ 7118);




const routes = [
    {
        path: '',
        component: _travel_page__WEBPACK_IMPORTED_MODULE_0__.TravelPage
    }
];
let TravelPageRoutingModule = class TravelPageRoutingModule {
};
TravelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TravelPageRoutingModule);



/***/ }),

/***/ 6910:
/*!*****************************************!*\
  !*** ./src/app/travel/travel.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelPageModule": () => (/* binding */ TravelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _travel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-routing.module */ 3667);
/* harmony import */ var _travel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel.page */ 7118);







let TravelPageModule = class TravelPageModule {
};
TravelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _travel_routing_module__WEBPACK_IMPORTED_MODULE_0__.TravelPageRoutingModule
        ],
        declarations: [_travel_page__WEBPACK_IMPORTED_MODULE_1__.TravelPage]
    })
], TravelPageModule);



/***/ }),

/***/ 7118:
/*!***************************************!*\
  !*** ./src/app/travel/travel.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelPage": () => (/* binding */ TravelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_travel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./travel.page.html */ 4468);
/* harmony import */ var _travel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel.page.scss */ 43);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);





let TravelPage = class TravelPage {
    constructor(iab) {
        this.iab = iab;
    }
    openWebsite(site) {
        const browser = this.iab.create(site, '_system');
        browser.close();
    }
};
TravelPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
TravelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-travel',
        template: _raw_loader_travel_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_travel_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TravelPage);



/***/ }),

/***/ 43:
/*!*****************************************!*\
  !*** ./src/app/travel/travel.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-content div p {\n  margin-bottom: 20px;\n  line-height: 1.5;\n  font-weight: 500;\n  color: black;\n  font-size: 1.2rem;\n}\n\nion-card-content h2 {\n  font-weight: 600;\n  line-height: 1.5;\n  color: black;\n}\n\n/*ion-card-content div {\n    color: black;\n    font-size: 2.3rem;\n    line-height: 1.5;\n}*/\n\nion-card {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7Ozs7RUFBQTs7QUFPQTtFQUNJLHVCQUFBO0FBREoiLCJmaWxlIjoidHJhdmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQgZGl2IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaDIge1xuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi8qaW9uLWNhcmQtY29udGVudCBkaXYge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xufSovXG5cblxuaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ 4468:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel/travel.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Travel</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      Transportation from Aiport:\n    </ion-card-header>\n    <ion-card-content>\n      \n      <div>\n\n          <h2>The lifeguards and their family members can book their Brownsville or Harlingen airport shuttle on: SPI Surf Shuttle</h2>\n\n         <!-- <a href=\"#\" (click)=\"openWebsite('https://spisurfshuttle.com')\">www.spisurfshuttle.com</a> -->\n          <!--<div style=\"margin-top: 10px; margin-bottom: 10px; width: 100%; text-align: center;\">\n            <ion-button color=\"danger\" (click)=\"openWebsite('https://spisurfshuttle.com')\">\n                <ion-icon color=\"light\" name=\"book\"></ion-icon>\n                <ion-label style=\"color: white;\">Book Now</ion-label>\n            </ion-button>-->\n            <div style=\"margin-top: 10px; margin-bottom: 10px; width: 100%; text-align: center;\">\n              <ion-button color=\"danger\" (click)=\"openWebsite('https://spisurfshuttle.com')\">\n                <ion-icon slot=\"start\" name=\"book\"></ion-icon>\n                Book Now\n              </ion-button>\n            </div>\n\n          <p>Select the 7-10 group rate at $35.00/participant one-way or $60.00 round-trip!</p>\n          <p>Under the special requests tab, write: LIFEGUARD CHAMPIONSHIPS</p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n    \n</ion-content>\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_travel_travel_module_ts.js.map