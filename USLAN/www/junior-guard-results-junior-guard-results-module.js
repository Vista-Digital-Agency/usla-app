(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["junior-guard-results-junior-guard-results-module"],{

/***/ "./src/app/junior-guard-results/junior-guard-results.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/junior-guard-results/junior-guard-results.module.ts ***!
  \*********************************************************************/
/*! exports provided: JuniorGuardResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuniorGuardResultsPageModule", function() { return JuniorGuardResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _junior_guard_results_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./junior-guard-results.page */ "./src/app/junior-guard-results/junior-guard-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    {
        path: '',
        component: _junior_guard_results_page__WEBPACK_IMPORTED_MODULE_5__["JuniorGuardResultsPage"]
    }
];
let JuniorGuardResultsPageModule = class JuniorGuardResultsPageModule {
};
JuniorGuardResultsPageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_junior_guard_results_page__WEBPACK_IMPORTED_MODULE_5__["JuniorGuardResultsPage"]]
    })
], JuniorGuardResultsPageModule);



/***/ }),

/***/ "./src/app/junior-guard-results/junior-guard-results.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/junior-guard-results/junior-guard-results.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"result-types\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Junior Guard Results</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/junior-guard-results/junior-guard-results.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/junior-guard-results/junior-guard-results.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1bmlvci1ndWFyZC1yZXN1bHRzL2p1bmlvci1ndWFyZC1yZXN1bHRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/junior-guard-results/junior-guard-results.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/junior-guard-results/junior-guard-results.page.ts ***!
  \*******************************************************************/
/*! exports provided: JuniorGuardResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuniorGuardResultsPage", function() { return JuniorGuardResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let JuniorGuardResultsPage = class JuniorGuardResultsPage {
    constructor() { }
    ngOnInit() {
    }
};
JuniorGuardResultsPage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-junior-guard-results',
        template: __webpack_require__(/*! ./junior-guard-results.page.html */ "./src/app/junior-guard-results/junior-guard-results.page.html"),
        styles: [__webpack_require__(/*! ./junior-guard-results.page.scss */ "./src/app/junior-guard-results/junior-guard-results.page.scss")]
    }),
    __metadata("design:paramtypes", [])
], JuniorGuardResultsPage);



/***/ })

}]);
//# sourceMappingURL=junior-guard-results-junior-guard-results-module.js.map