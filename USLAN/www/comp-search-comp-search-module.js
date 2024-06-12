(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-search-comp-search-module"],{

/***/ "./src/app/comp-search/comp-search.module.ts":
/*!***************************************************!*\
  !*** ./src/app/comp-search/comp-search.module.ts ***!
  \***************************************************/
/*! exports provided: CompSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompSearchPageModule", function() { return CompSearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comp_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp-search.page */ "./src/app/comp-search/comp-search.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    {
        path: '',
        component: _comp_search_page__WEBPACK_IMPORTED_MODULE_5__["CompSearchPage"]
    }
];
let CompSearchPageModule = class CompSearchPageModule {
};
CompSearchPageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_comp_search_page__WEBPACK_IMPORTED_MODULE_5__["CompSearchPage"]]
    })
], CompSearchPageModule);



/***/ }),

/***/ "./src/app/comp-search/comp-search.page.html":
/*!***************************************************!*\
  !*** ./src/app/comp-search/comp-search.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>compSearch</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/comp-search/comp-search.page.scss":
/*!***************************************************!*\
  !*** ./src/app/comp-search/comp-search.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtc2VhcmNoL2NvbXAtc2VhcmNoLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/comp-search/comp-search.page.ts":
/*!*************************************************!*\
  !*** ./src/app/comp-search/comp-search.page.ts ***!
  \*************************************************/
/*! exports provided: CompSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompSearchPage", function() { return CompSearchPage; });
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

let CompSearchPage = class CompSearchPage {
    constructor() { }
    ngOnInit() {
    }
};
CompSearchPage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-comp-search',
        template: __webpack_require__(/*! ./comp-search.page.html */ "./src/app/comp-search/comp-search.page.html"),
        styles: [__webpack_require__(/*! ./comp-search.page.scss */ "./src/app/comp-search/comp-search.page.scss")]
    }),
    __metadata("design:paramtypes", [])
], CompSearchPage);



/***/ })

}]);
//# sourceMappingURL=comp-search-comp-search-module.js.map