(self["webpackChunkusla_2021"] = self["webpackChunkusla_2021"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 2774:
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.page */ 3217);




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ 7911:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageModule": () => (/* binding */ SchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-routing.module */ 2774);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page */ 3217);
/* harmony import */ var _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/pipes.modules */ 5335);








let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedulePageRoutingModule
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_1__.SchedulePage]
    })
], SchedulePageModule);



/***/ }),

/***/ 3217:
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./schedule.page.html */ 2780);
/* harmony import */ var _schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page.scss */ 2044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ 287);
/* harmony import */ var _service_event_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/event-data.service */ 6204);






let SchedulePage = class SchedulePage {
    constructor(eventsService, calendar) {
        this.eventsService = eventsService;
        this.calendar = calendar;
        this.events = [];
        this.events = this.eventsService.getEvents();
        console.log(this.events);
    }
    ngOnInit() {
    }
    addCal(event) {
        var start = new Date(event.dateTime);
        this.calendar.createEventInteractively(event.name, event.address, '', start)
            .then((msg) => { console.log(msg); }, (err) => { console.log(err); });
    }
    get sortFunc() {
        return this.events.sort((b, a) => {
            return new Date(b.dateTime) - new Date(a.dateTime);
        });
    }
};
SchedulePage.ctorParameters = () => [
    { type: _service_event_data_service__WEBPACK_IMPORTED_MODULE_3__.EventDataService },
    { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__.Calendar }
];
SchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-schedule',
        template: _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchedulePage);



/***/ }),

/***/ 2044:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".outerRow {\n  border: 1px solid black;\n}\n\n.dTime {\n  text-align: center;\n}\n\n.outerRow > ion-col {\n  padding-bottom: 10px;\n}\n\n.outerRow:first-of-type {\n  border-top-width: 2px;\n}\n\nion-button {\n  font-weight: bold;\n}\n\n.calBtn {\n  text-align: center;\n}\n\n.eventTitle {\n  text-align: center;\n}\n\nh2, ion-col {\n  color: white;\n}\n\nion-card {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKIiwiZmlsZSI6InNjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlclJvdyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5kVGltZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3V0ZXJSb3cgPiBpb24tY29sIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm91dGVyUm93OmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYWxCdG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV2ZW50VGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDIsIGlvbi1jb2wge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ 2780:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Schedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"outerRow\" color=\"danger\" *ngFor=\"let event of sortFunc\">\n    <ion-col>\n      <ion-row>\n          <ion-col class=\"eventTitle\">\n            <h2>\n              {{event.name}}\n            </h2>  \n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"dTime\">\n          {{ event.dateTime | date }} {{ event.dateTime | date:'shortTime' }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"calBtn\">\n          <ion-button color=\"danger\" (click)=\"addCal(event)\">\n            Add to Calendar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n   \n  </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_schedule_schedule_module_ts.js.map