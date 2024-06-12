(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["result-types-result-types-module"],{

/***/ "./src/app/result-types/result-types.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/result-types/result-types.module.ts ***!
  \*****************************************************/
/*! exports provided: ResultTypesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultTypesPageModule", function() { return ResultTypesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _result_types_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result-types.page */ "./src/app/result-types/result-types.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    {
        path: '',
        component: _result_types_page__WEBPACK_IMPORTED_MODULE_5__["ResultTypesPage"]
    }
];
let ResultTypesPageModule = class ResultTypesPageModule {
};
ResultTypesPageModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_result_types_page__WEBPACK_IMPORTED_MODULE_5__["ResultTypesPage"]]
    })
], ResultTypesPageModule);



/***/ }),

/***/ "./src/app/result-types/result-types.page.html":
/*!*****************************************************!*\
  !*** ./src/app/result-types/result-types.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Results Types</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button expand=\"full\" color=\"secondary\" [routerLink]=\"['/event-results']\">\n    Event Results\n  </ion-button>\n\n  <ion-button expand=\"full\" color=\"secondary\" [routerLink]=\"['/team-scoring']\">\n    Team Scoring\n  </ion-button>\n\n  <ion-button expand=\"full\" color=\"secondary\" [routerLink]=\"['/individual-points']\">\n    Individual Points\n  </ion-button>\n\n  <ion-button expand=\"full\" color=\"secondary\" [routerLink]=\"['/junior-guard-results']\">\n    Junior Guard Results\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/result-types/result-types.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/result-types/result-types.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC10eXBlcy9yZXN1bHQtdHlwZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/result-types/result-types.page.ts":
/*!***************************************************!*\
  !*** ./src/app/result-types/result-types.page.ts ***!
  \***************************************************/
/*! exports provided: ResultTypesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultTypesPage", function() { return ResultTypesPage; });
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

let ResultTypesPage = class ResultTypesPage {
    constructor() { }
    ngOnInit() {
    }
};
ResultTypesPage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-result-types',
        template: __webpack_require__(/*! ./result-types.page.html */ "./src/app/result-types/result-types.page.html"),
        styles: [__webpack_require__(/*! ./result-types.page.scss */ "./src/app/result-types/result-types.page.scss")]
    }),
    __metadata("design:paramtypes", [])
], ResultTypesPage);



/***/ })

}]);
//# sourceMappingURL=result-types-result-types-module.js.map