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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comp_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-search.page */ "./src/app/comp-search/comp-search.page.ts");







var routes = [
    {
        path: '',
        component: _comp_search_page__WEBPACK_IMPORTED_MODULE_6__["CompSearchPage"]
    }
];
var CompSearchPageModule = /** @class */ (function () {
    function CompSearchPageModule() {
    }
    CompSearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_comp_search_page__WEBPACK_IMPORTED_MODULE_6__["CompSearchPage"]]
        })
    ], CompSearchPageModule);
    return CompSearchPageModule;
}());



/***/ }),

/***/ "./src/app/comp-search/comp-search.page.html":
/*!***************************************************!*\
  !*** ./src/app/comp-search/comp-search.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>compSearch</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompSearchPage = /** @class */ (function () {
    function CompSearchPage() {
    }
    CompSearchPage.prototype.ngOnInit = function () {
    };
    CompSearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comp-search',
            template: __webpack_require__(/*! ./comp-search.page.html */ "./src/app/comp-search/comp-search.page.html"),
            styles: [__webpack_require__(/*! ./comp-search.page.scss */ "./src/app/comp-search/comp-search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompSearchPage);
    return CompSearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=comp-search-comp-search-module.js.map