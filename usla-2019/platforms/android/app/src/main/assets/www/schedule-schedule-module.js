(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"],{

/***/ "./src/app/schedule/schedule.module.ts":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");
/* harmony import */ var _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.modules */ "./src/app/pipes/pipes.modules.ts");








var routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]
    }
];
var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.page.html":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Schedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"outerRow\" color=\"danger\" *ngFor=\"let event of sortFunc\">\n    <ion-col>\n      <ion-row>\n          <ion-col class=\"eventTitle\">\n            <h2>\n              {{event.name}}\n            </h2>  \n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"dTime\">\n          {{ event.dateTime | date }} {{ event.dateTime | date:'shortTime' }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"calBtn\">\n          <ion-button color=\"danger\" (click)=\"addCal(event)\">\n            Add to Calendar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n   \n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/schedule/schedule.page.scss":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerRow {\n  border: 1px solid black; }\n\n.dTime {\n  text-align: center; }\n\n.outerRow > ion-col {\n  padding-bottom: 10px; }\n\n.outerRow:first-of-type {\n  border-top-width: 2px; }\n\nion-button {\n  font-weight: bold; }\n\n.calBtn {\n  text-align: center; }\n\n.eventTitle {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlclJvdyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5kVGltZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3V0ZXJSb3cgPiBpb24tY29sIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm91dGVyUm93OmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYWxCdG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV2ZW50VGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/schedule/schedule.page.ts":
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-data.service */ "./src/app/event-data.service.ts");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");




var SchedulePage = /** @class */ (function () {
    function SchedulePage(eventsService, calendar) {
        this.eventsService = eventsService;
        this.calendar = calendar;
        this.events = [];
        this.events = this.eventsService.getEvents();
    }
    SchedulePage.prototype.ngOnInit = function () {
    };
    SchedulePage.prototype.addCal = function (event) {
        var start = new Date(event.dateTime);
        this.calendar.createEventInteractively(event.name, event.address, '', start)
            .then(function (msg) { console.log(msg); }, function (err) { console.log(err); });
    };
    Object.defineProperty(SchedulePage.prototype, "sortFunc", {
        get: function () {
            return this.events.sort(function (b, a) {
                return new Date(b.dateTime) - new Date(a.dateTime);
            });
        },
        enumerable: true,
        configurable: true
    });
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.page.html */ "./src/app/schedule/schedule.page.html"),
            styles: [__webpack_require__(/*! ./schedule.page.scss */ "./src/app/schedule/schedule.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_data_service__WEBPACK_IMPORTED_MODULE_2__["EventDataService"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__["Calendar"]])
    ], SchedulePage);
    return SchedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=schedule-schedule-module.js.map