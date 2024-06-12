(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["party-party-module"],{

/***/ "./src/app/party/party.module.ts":
/*!***************************************!*\
  !*** ./src/app/party/party.module.ts ***!
  \***************************************/
/*! exports provided: PartyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyPageModule", function() { return PartyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _party_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./party.page */ "./src/app/party/party.page.ts");







var routes = [
    {
        path: '',
        component: _party_page__WEBPACK_IMPORTED_MODULE_6__["PartyPage"]
    }
];
var PartyPageModule = /** @class */ (function () {
    function PartyPageModule() {
    }
    PartyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_party_page__WEBPACK_IMPORTED_MODULE_6__["PartyPage"]]
        })
    ], PartyPageModule);
    return PartyPageModule;
}());



/***/ }),

/***/ "./src/app/party/party.page.html":
/*!***************************************!*\
  !*** ./src/app/party/party.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>party</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/party/party.page.scss":
/*!***************************************!*\
  !*** ./src/app/party/party.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnR5L3BhcnR5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/party/party.page.ts":
/*!*************************************!*\
  !*** ./src/app/party/party.page.ts ***!
  \*************************************/
/*! exports provided: PartyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyPage", function() { return PartyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartyPage = /** @class */ (function () {
    function PartyPage() {
    }
    PartyPage.prototype.ngOnInit = function () {
    };
    PartyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-party',
            template: __webpack_require__(/*! ./party.page.html */ "./src/app/party/party.page.html"),
            styles: [__webpack_require__(/*! ./party.page.scss */ "./src/app/party/party.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartyPage);
    return PartyPage;
}());



/***/ })

}]);
//# sourceMappingURL=party-party-module.js.map