(self["webpackChunkusla_2021"] = self["webpackChunkusla_2021"] || []).push([["src_app_sponsors_sponsors_module_ts"],{

/***/ 8936:
/*!*****************************************************!*\
  !*** ./src/app/sponsors/sponsors-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorsPageRoutingModule": () => (/* binding */ SponsorsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sponsors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsors.page */ 2090);




const routes = [
    {
        path: '',
        component: _sponsors_page__WEBPACK_IMPORTED_MODULE_0__.SponsorsPage
    }
];
let SponsorsPageRoutingModule = class SponsorsPageRoutingModule {
};
SponsorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SponsorsPageRoutingModule);



/***/ }),

/***/ 9200:
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorsPageModule": () => (/* binding */ SponsorsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsors-routing.module */ 8936);
/* harmony import */ var _sponsors_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors.page */ 2090);
/* harmony import */ var _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/pipes.modules */ 5335);








let SponsorsPageModule = class SponsorsPageModule {
};
SponsorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_0__.SponsorsPageRoutingModule
        ],
        declarations: [_sponsors_page__WEBPACK_IMPORTED_MODULE_1__.SponsorsPage]
    })
], SponsorsPageModule);



/***/ }),

/***/ 2090:
/*!*******************************************!*\
  !*** ./src/app/sponsors/sponsors.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorsPage": () => (/* binding */ SponsorsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sponsors_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sponsors.page.html */ 1548);
/* harmony import */ var _sponsors_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors.page.scss */ 3952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/sponsor-data.service */ 2213);







let SponsorsPage = class SponsorsPage {
    constructor(sponsorService, iab, callNum) {
        this.sponsorService = sponsorService;
        this.iab = iab;
        this.callNum = callNum;
        this.sponsors = [];
        this.sponsors = this.sponsorService.getSponsors();
        console.log(this.sponsors);
    }
    ngOnInit() {
    }
    openWebsite(site) {
        const browser = this.iab.create(site, '_system');
        browser.close();
    }
    call(number) {
        this.callNum.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    nav(lat, lng) {
        let browser = this.iab.create("https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + lng, '_system');
        browser.close();
    }
};
SponsorsPage.ctorParameters = () => [
    { type: _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_4__.SponsorDataService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber }
];
SponsorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sponsors',
        template: _raw_loader_sponsors_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sponsors_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SponsorsPage);



/***/ }),

/***/ 3952:
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  background-color: white;\n}\n\nion-card h3 {\n  text-align: center;\n  font-weight: bold;\n}\n\nion-card img {\n  padding: 40px;\n  width: 100%;\n}\n\nion-card-content ion-item ion-label {\n  font-weight: bold;\n}\n\n#sponsorsCon {\n  background-color: #24608a;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb25zb3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQU1BO0VBQ0ksaUJBQUE7QUFISjs7QUFNQTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7QUFKSiIsImZpbGUiOiJzcG9uc29ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkIGltZyB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMjQ2MDhhO1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNzcG9uc29yc0NvbiB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NiwgNjYsIDAuNjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDYwOGE7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ 1548:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sponsors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"sponsorsCon\">\n    <ion-card class=\"sponsor\" *ngFor=\"let sponsor of sponsors | orderBy: 'order'\">\n\n      <ion-card-header class=\"sponsorHead\">\n        <h3>{{ sponsor.name }}</h3>\n      </ion-card-header>\n\n      <img class=\"sponsorImage\" *ngIf=\"sponsor.image != ''\" [src]=\"sponsor.image\"/> \n\n      <ion-card-content>\n        <ion-row class=\"sponsorBtnsRow\">\n          <ion-col>\n            <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"openWebsite(sponsor.website)\">\n              <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n              <ion-label slot=\"start\">\n                Website\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"sponsorBtnsRow\">\n          <ion-col *ngIf=\"sponsor.phone && sponsor.phone != ''\">\n            <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"call(sponsor.phone)\">\n                <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                <ion-label slot=\"start\">\n                  Call\n                </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"sponsorBtnsRow\">\n          <ion-col *ngIf=\"sponsor.lat && sponsor.lng\">\n            <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"nav(sponsor.lat, sponsor.lng)\">\n              <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n              <ion-label slot=\"start\">\n                Directions\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_sponsors_sponsors_module_ts.js.map