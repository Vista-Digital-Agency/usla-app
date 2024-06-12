(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-results-event-results-module"],{

/***/ "./src/app/event-results/event-results.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/event-results/event-results.module.ts ***!
  \*******************************************************/
/*! exports provided: EventResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResultsPageModule", function() { return EventResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_results_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-results.page */ "./src/app/event-results/event-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _event_results_page__WEBPACK_IMPORTED_MODULE_5__["EventResultsPage"]
    }
];
var EventResultsPageModule = /** @class */ (function () {
    function EventResultsPageModule() {
    }
    EventResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_event_results_page__WEBPACK_IMPORTED_MODULE_5__["EventResultsPage"]]
        })
    ], EventResultsPageModule);
    return EventResultsPageModule;
}());



/***/ }),

/***/ "./src/app/event-results/event-results.page.html":
/*!*******************************************************!*\
  !*** ./src/app/event-results/event-results.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>eventResults</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/event-results/event-results.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/event-results/event-results.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LXJlc3VsdHMvZXZlbnQtcmVzdWx0cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/event-results/event-results.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/event-results/event-results.page.ts ***!
  \*****************************************************/
/*! exports provided: EventResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResultsPage", function() { return EventResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventResultsPage = /** @class */ (function () {
    function EventResultsPage() {
    }
    EventResultsPage.prototype.ngOnInit = function () {
    };
    EventResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-results',
            template: __webpack_require__(/*! ./event-results.page.html */ "./src/app/event-results/event-results.page.html"),
            styles: [__webpack_require__(/*! ./event-results.page.scss */ "./src/app/event-results/event-results.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventResultsPage);
    return EventResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=event-results-event-results-module.js.map