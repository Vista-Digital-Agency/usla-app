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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-results.page */ "./src/app/event-results/event-results.page.ts");
/* harmony import */ var _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.modules */ "./src/app/pipes/pipes.modules.ts");








var routes = [
    {
        path: '',
        component: _event_results_page__WEBPACK_IMPORTED_MODULE_6__["EventResultsPage"]
    }
];
var EventResultsPageModule = /** @class */ (function () {
    function EventResultsPageModule() {
    }
    EventResultsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_event_results_page__WEBPACK_IMPORTED_MODULE_6__["EventResultsPage"]]
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

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"result-types\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Event Results</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div>\n      <ion-list>\n        <ion-item>\n          <ion-label>Events</ion-label>\n          <ion-select [(ngModel)]=\"selectedEvent\" (ionChange)=\"selectEvent()\">\n            <ion-select-option *ngFor=\"let item of events\" [value]=\"item\">{{ item }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div *ngIf=\"showGenderDD\">\n      <ion-list>\n        <ion-item>\n          <ion-label>Gender</ion-label>\n          <ion-select [(ngModel)]=\"selectedGender\" (ionChange)=\"selectGender()\">\n            <ion-select-option value=\"M\">Male</ion-select-option>\n            <ion-select-option value=\"F\">Female</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div *ngIf=\"showBracketsDD\">\n      <ion-list>\n        <ion-item>\n          <ion-label>Age Groups</ion-label>\n          <ion-select [(ngModel)]=\"selectedAgeGroup\" (ionChange)=\"selectAgeGroup()\">\n            <ion-select-option *ngFor=\"let item of groupSets | filterGroupSets: genderSpecificEventBrackets\" [value]=\"item\">{{ item }}</ion-select-option>\n              \n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div *ngIf=\"showResultsBtn\" id=\"showResultsBtnCon\">\n      <ion-button color=danger (click)=\"showResults()\">Show Results</ion-button>\n    </div>\n  </ion-content>\n  "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scoring_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scoring-data.service */ "./src/app/scoring-data.service.ts");
/* harmony import */ var _results_results_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results/results.page */ "./src/app/results/results.page.ts");





var EventResultsPage = /** @class */ (function () {
    function EventResultsPage(dataProvider, alertCtrl, modalController) {
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
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
    EventResultsPage.prototype.ngOnInit = function () {
    };
    EventResultsPage.prototype.showResults = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.genderSpecificEventData);
                        return [4 /*yield*/, this.modalController.create({
                                component: _results_results_page__WEBPACK_IMPORTED_MODULE_4__["ResultsPage"],
                                componentProps: {
                                    selectedEvent: this.selectedEvent,
                                    gsed: this.genderSpecificEventData,
                                    ageGroup: this.selectedAgeGroup,
                                    gender: this.selectedGender,
                                    adults: true
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventResultsPage.prototype.selectEvent = function () {
        this.genderSpecificEventData = [];
        this.genderSpecificEventBrackets = [];
        this.selectedGender = null;
        this.selectedAgeGroup = null;
        this.showGenderDD = true;
        this.updateEventSelected();
    };
    EventResultsPage.prototype.updateEventSelected = function () {
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
    };
    EventResultsPage.prototype.selectGender = function () {
        var _this = this;
        this.selectedAgeGroup = null;
        this.genderSpecificEventBrackets = [];
        this.genderSpecificEventData = this.eventData[0].competitors.filter(function (item) {
            return item.gender.toUpperCase().indexOf(_this.selectedGender) > -1;
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
    };
    EventResultsPage.prototype.selectAgeGroup = function () {
        if (this.selectedAgeGroup !== null) {
            this.showResultsBtn = true;
        }
    };
    EventResultsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-results',
            template: __webpack_require__(/*! ./event-results.page.html */ "./src/app/event-results/event-results.page.html"),
            styles: [__webpack_require__(/*! ./event-results.page.scss */ "./src/app/event-results/event-results.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scoring_data_service__WEBPACK_IMPORTED_MODULE_3__["ScoringDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EventResultsPage);
    return EventResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=event-results-event-results-module.js.map