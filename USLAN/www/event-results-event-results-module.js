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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_results_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-results.page */ "./src/app/event-results/event-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    {
        path: '',
        component: _event_results_page__WEBPACK_IMPORTED_MODULE_5__["EventResultsPage"]
    }
];
let EventResultsPageModule = class EventResultsPageModule {
};
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



/***/ }),

/***/ "./src/app/event-results/event-results.page.html":
/*!*******************************************************!*\
  !*** ./src/app/event-results/event-results.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"result-types\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Event Results</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-list>\n      <ion-item>\n        <ion-label>Events</ion-label>\n        <ion-select [(ngModel)]=\"selectedEvent\" (ionChange)=\"selectEvent()\">\n          <ion-option *ngFor=\"let item of events\" [value]=\"item\">{{ item }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"showGenderDD\">\n    <ion-list>\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-select [(ngModel)]=\"selectedGender\" (ionChange)=\"selectGender()\">\n          <ion-option value=\"M\">Male</ion-option>\n          <ion-option value=\"F\">Female</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"showBracketsDD\">\n    <ion-list>\n      <ion-item>\n        <ion-label>Age Groups</ion-label>\n        <ion-select [(ngModel)]=\"selectedAgeGroup\" (ionChange)=\"selectAgeGroup()\">\n          <ion-option *ngFor=\"let item of groupSets | filterGroupSets: genderSpecificEventBrackets\" [value]=\"item\">{{ item }}</ion-option>\n            \n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"showResultsBtn\" id=\"showResultsBtnCon\">\n    <!--<button ion-button round large [navPush]=\"resultsPage\" \n    [navParams]=\"{ selectedEvent: selectedEvent, gsed: genderSpecificEventData, ageGroup: selectedAgeGroup, gender: selectedGender, adults: true }\">Show Results</button>-->\n  </div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let EventResultsPage = class EventResultsPage {
    constructor(dataProvider, alertCtrl) {
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.group = "";
        this.selectedEvent = null;
        this.selectedGender = null;
        this.selectedAgeGroup = null;
        this.genderSpecificEventData = [];
        this.genderSpecificEventBrackets = [];
        this.groups = [];
        this.groupSets = ['OPEN', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70+'];
        this.events = ["Beach Flags", "Ironguard", "Board Race", "4 x 100 Run Relay", "2K Beach Run", "Surf Race", "Run-Swim-Run",
            "Surf Ski Race", "American Ironperson", "Ironperson", "Surf Boat Race", "Rescue Race"];
        this.showGenderDD = false;
        this.showBracketsDD = false;
        this.showResultsBtn = false;
    }
    ngOnInit() {
    }
    selectEvent() {
        this.genderSpecificEventData = [];
        this.genderSpecificEventBrackets = [];
        this.selectedGender = null;
        this.selectedAgeGroup = null;
        this.showGenderDD = true;
        this.updateEventSelected();
    }
    updateEventSelected() {
        if (this.selectedEvent == "Beach Flags") {
            this.eventData = this.dataProvider.getBeachFlagsAdults();
        }
        else if (this.selectedEvent == "Ironguard") {
            this.eventData = this.dataProvider.getIronguardAdults();
        }
        else if (this.selectedEvent == "Board Race") {
            this.eventData = this.dataProvider.getBoardRaceAdults();
        }
        else if (this.selectedEvent == "4 x 100 Run Relay") {
            this.eventData = this.dataProvider.getRunRelay();
        }
        else if (this.selectedEvent == "2K Beach Run") {
            this.eventData = this.dataProvider.getBeachRun();
        }
        else if (this.selectedEvent == "Surf Race") {
            this.eventData = this.dataProvider.getSurfRace();
        }
        else if (this.selectedEvent == "Run-Swim-Run") {
            this.eventData = this.dataProvider.getRunSwimRunAdults();
        }
        else if (this.selectedEvent == "Surf Ski Race") {
            this.eventData = this.dataProvider.getSurfSkiRace();
        }
        else if (this.selectedEvent == "American Ironperson") {
            this.eventData = this.dataProvider.getAmericanIronperson();
        }
        else if (this.selectedEvent == "Ironperson") {
            this.eventData = this.dataProvider.getIronperson();
        }
        else if (this.selectedEvent == "Surf Boat Race") {
            this.eventData = this.dataProvider.getSurfBoatRace();
        }
        else if (this.selectedEvent == "Rescue Race") {
            this.eventData = this.dataProvider.getRescueRace();
        }
        else if (this.selectedEvent == "Surf Swim Race") {
            this.eventData = this.dataProvider.getSurfSwimRaceAdults();
        }
    }
    selectGender() {
        this.selectedAgeGroup = null;
        this.genderSpecificEventBrackets = [];
        this.genderSpecificEventData = this.eventData[0].competitors.filter((item) => {
            return item.gender.toUpperCase().indexOf(this.selectedGender) > -1;
        });
        for (var x = 0; x < this.genderSpecificEventData.length; x++) {
            if (!this.genderSpecificEventBrackets.includes(this.genderSpecificEventData[x].ageGroupName)) {
                this.genderSpecificEventBrackets.push(this.genderSpecificEventData[x].ageGroupName);
            }
        }
        if (this.selectedGender === null && (this.showBracketsDD == true || this.showResultsBtn == true)) {
            this.showBracketsDD = false;
            this.showResultsBtn = false;
        }
        else {
            if (this.genderSpecificEventBrackets.length < 2) {
                this.showResultsBtn = true;
                this.showBracketsDD = false;
            }
            else {
                this.showBracketsDD = true;
                this.showResultsBtn = false;
            }
        }
    }
    selectAgeGroup() {
        if (this.selectedAgeGroup !== null) {
            this.showResultsBtn = true;
        }
    }
};
EventResultsPage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-event-results',
        template: __webpack_require__(/*! ./event-results.page.html */ "./src/app/event-results/event-results.page.html"),
        styles: [__webpack_require__(/*! ./event-results.page.scss */ "./src/app/event-results/event-results.page.scss")]
    }),
    __metadata("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], EventResultsPage);



/***/ })

}]);
//# sourceMappingURL=event-results-event-results-module.js.map