(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-schedule-my-schedule-module"],{

/***/ "./src/app/my-schedule/my-schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/my-schedule/my-schedule.module.ts ***!
  \***************************************************/
/*! exports provided: MySchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySchedulePageModule", function() { return MySchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-schedule.page */ "./src/app/my-schedule/my-schedule.page.ts");







var routes = [
    {
        path: '',
        component: _my_schedule_page__WEBPACK_IMPORTED_MODULE_6__["MySchedulePage"]
    }
];
var MySchedulePageModule = /** @class */ (function () {
    function MySchedulePageModule() {
    }
    MySchedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_schedule_page__WEBPACK_IMPORTED_MODULE_6__["MySchedulePage"]]
        })
    ], MySchedulePageModule);
    return MySchedulePageModule;
}());



/***/ }),

/***/ "./src/app/my-schedule/my-schedule.page.html":
/*!***************************************************!*\
  !*** ./src/app/my-schedule/my-schedule.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>mySchedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/my-schedule/my-schedule.page.scss":
/*!***************************************************!*\
  !*** ./src/app/my-schedule/my-schedule.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXNjaGVkdWxlL215LXNjaGVkdWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/my-schedule/my-schedule.page.ts":
/*!*************************************************!*\
  !*** ./src/app/my-schedule/my-schedule.page.ts ***!
  \*************************************************/
/*! exports provided: MySchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySchedulePage", function() { return MySchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MySchedulePage = /** @class */ (function () {
    function MySchedulePage() {
    }
    MySchedulePage.prototype.ngOnInit = function () {
    };
    MySchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-schedule',
            template: __webpack_require__(/*! ./my-schedule.page.html */ "./src/app/my-schedule/my-schedule.page.html"),
            styles: [__webpack_require__(/*! ./my-schedule.page.scss */ "./src/app/my-schedule/my-schedule.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MySchedulePage);
    return MySchedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=my-schedule-my-schedule-module.js.map