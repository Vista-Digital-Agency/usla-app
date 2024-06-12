(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sponsors-sponsors-module"],{

/***/ "./src/app/sponsors/sponsors.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.module.ts ***!
  \*********************************************/
/*! exports provided: SponsorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPageModule", function() { return SponsorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sponsors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsors.page */ "./src/app/sponsors/sponsors.page.ts");
/* harmony import */ var _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.modules */ "./src/app/pipes/pipes.modules.ts");








var routes = [
    {
        path: '',
        component: _sponsors_page__WEBPACK_IMPORTED_MODULE_6__["SponsorsPage"]
    }
];
var SponsorsPageModule = /** @class */ (function () {
    function SponsorsPageModule() {
    }
    SponsorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sponsors_page__WEBPACK_IMPORTED_MODULE_6__["SponsorsPage"]]
        })
    ], SponsorsPageModule);
    return SponsorsPageModule;
}());



/***/ }),

/***/ "./src/app/sponsors/sponsors.page.html":
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sponsors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"sponsorsCon\">\n    <ion-card class=\"sponsor\" *ngFor=\"let sponsor of sponsors | orderBy: 'order'\">\n\n      <ion-card-header class=\"sponsorHead\">\n        <h3>{{ sponsor.name }}</h3>\n      </ion-card-header>\n\n      <img class=\"sponsorImage\" *ngIf=\"sponsor.image != ''\" [src]=\"sponsor.image\"/> \n\n      <ion-card-content>\n        <ion-row class=\"sponsorBtnsRow\">\n          <ion-col>\n            <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"openWebsite(sponsor.website)\">\n              <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n              <ion-label slot=\"start\">\n                Website\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"sponsorBtnsRow\">\n          <ion-col *ngIf=\"sponsor.phone && sponsor.phone != ''\">\n            <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"call(sponsor.phone)\">\n                <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                <ion-label slot=\"start\">\n                  Call\n                </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"sponsorBtnsRow\">\n          <ion-col *ngIf=\"sponsor.lat && sponsor.lng\">\n            <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"nav(sponsor.lat, sponsor.lng)\">\n              <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n              <ion-label slot=\"start\">\n                Directions\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sponsors/sponsors.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sponsors/sponsors.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background-color: white; }\n\nion-card h3 {\n  text-align: center;\n  font-weight: bold; }\n\nion-card img {\n  padding: 40px; }\n\nion-card-content {\n  background-color: #24608a; }\n\nion-card-content ion-item ion-label {\n  font-weight: bold; }\n\n#sponsorsCon {\n  background-color: rgba(66, 66, 66, 0.65);\n  padding-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9zcG9uc29ycy9zcG9uc29ycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHdDQUF3QztFQUN4QyxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNhcmQgaW1nIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ2MDhhO1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNzcG9uc29yc0NvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjYsIDY2LCAwLjY1KTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sponsors/sponsors.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sponsors/sponsors.page.ts ***!
  \*******************************************/
/*! exports provided: SponsorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPage", function() { return SponsorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sponsor_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sponsor-data.service */ "./src/app/sponsor-data.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");





var SponsorsPage = /** @class */ (function () {
    function SponsorsPage(sponsorService, iab, callNum) {
        this.sponsorService = sponsorService;
        this.iab = iab;
        this.callNum = callNum;
        this.sponsors = [];
        this.sponsors = this.sponsorService.getSponsors();
    }
    SponsorsPage.prototype.ngOnInit = function () {
    };
    SponsorsPage.prototype.openWebsite = function (site) {
        var browser = this.iab.create(site, '_system');
        browser.close();
    };
    SponsorsPage.prototype.call = function (number) {
        this.callNum.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    SponsorsPage.prototype.nav = function (lat, lng) {
        var browser = this.iab.create("https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + lng, '_system');
        browser.close();
    };
    SponsorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sponsors',
            template: __webpack_require__(/*! ./sponsors.page.html */ "./src/app/sponsors/sponsors.page.html"),
            styles: [__webpack_require__(/*! ./sponsors.page.scss */ "./src/app/sponsors/sponsors.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sponsor_data_service__WEBPACK_IMPORTED_MODULE_2__["SponsorDataService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"]])
    ], SponsorsPage);
    return SponsorsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sponsors-sponsors-module.js.map