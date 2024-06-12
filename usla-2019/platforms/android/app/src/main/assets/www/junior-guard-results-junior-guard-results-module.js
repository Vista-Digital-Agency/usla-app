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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _junior_guard_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./junior-guard-results.page */ "./src/app/junior-guard-results/junior-guard-results.page.ts");
/* harmony import */ var _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.modules */ "./src/app/pipes/pipes.modules.ts");








var routes = [
    {
        path: '',
        component: _junior_guard_results_page__WEBPACK_IMPORTED_MODULE_6__["JuniorGuardResultsPage"]
    }
];
var JuniorGuardResultsPageModule = /** @class */ (function () {
    function JuniorGuardResultsPageModule() {
    }
    JuniorGuardResultsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_modules__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_junior_guard_results_page__WEBPACK_IMPORTED_MODULE_6__["JuniorGuardResultsPage"]]
        })
    ], JuniorGuardResultsPageModule);
    return JuniorGuardResultsPageModule;
}());



/***/ }),

/***/ "./src/app/junior-guard-results/junior-guard-results.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/junior-guard-results/junior-guard-results.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"result-types\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Junior Guard Results</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ion-list>\n          <ion-item>\n            <ion-label>Events</ion-label>\n            <ion-select [(ngModel)]=\"selectedEvent\" (ionChange)=\"selectEvent()\">\n              <ion-select-option *ngFor=\"let item of events\" [value]=\"item\">{{ item }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </div>\n  \n      <div *ngIf=\"showGenderDD\">\n        <ion-list>\n          <ion-item>\n            <ion-label>Gender</ion-label>\n            <ion-select [(ngModel)]=\"selectedGender\" (ionChange)=\"selectGender()\">\n              <ion-select-option value=\"M\">Male</ion-select-option>\n              <ion-select-option value=\"F\">Female</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </div>\n    \n      <div *ngIf=\"showBracketsDD\">\n        <ion-list>\n          <ion-item>\n            <ion-label>Age Groups</ion-label>\n            <ion-select [(ngModel)]=\"selectedAgeGroup\" (ionChange)=\"selectAgeGroup()\">\n              <ion-select-option *ngFor=\"let item of groupSets | filterGroupSets: genderSpecificEventBrackets\" [value]=\"item\">{{ item }}</ion-select-option>\n                \n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </div>\n    \n      <div *ngIf=\"showResultsBtn\" id=\"showResultsBtnCon\">\n        <ion-button color=danger (click)=\"showResults()\">Show Results</ion-button>\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/junior-guard-results/junior-guard-results.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/junior-guard-results/junior-guard-results.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#showResultsBtnCon {\n  text-align: center; }\n\n#showResultsBtnCon ion-button {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9qdW5pb3ItZ3VhcmQtcmVzdWx0cy9qdW5pb3ItZ3VhcmQtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2p1bmlvci1ndWFyZC1yZXN1bHRzL2p1bmlvci1ndWFyZC1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaG93UmVzdWx0c0J0bkNvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc2hvd1Jlc3VsdHNCdG5Db24gaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scoring_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scoring-data.service */ "./src/app/scoring-data.service.ts");
/* harmony import */ var _results_results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results/results.page */ "./src/app/results/results.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var JuniorGuardResultsPage = /** @class */ (function () {
    function JuniorGuardResultsPage(dataProvider, modalController) {
        this.dataProvider = dataProvider;
        this.modalController = modalController;
        this.resultsPage = _results_results_page__WEBPACK_IMPORTED_MODULE_3__["ResultsPage"];
        this.group = "";
        this.selectedEvent = null;
        this.selectedGender = null;
        this.selectedAgeGroup = null;
        this.genderSpecificEventData = [];
        this.genderSpecificEventBrackets = [];
        this.groups = [];
        this.groupSets = ['U19', 'A', 'B', 'C'];
        this.events = ["Beach Flags", "Distance Run", "Surf Swim Race", "Ironguard", "Board Race", "Run-Swim-Run", "Rescue Race-JG",
            "Swim Relay", "Surf Ski-U19", "Rescue Race-U19", "Ironperson-U19"];
        this.showGenderDD = false;
        this.showBracketsDD = false;
        this.showResultsBtn = false;
        this.beachFlagJR = [];
    }
    JuniorGuardResultsPage.prototype.ngOnInit = function () {
    };
    JuniorGuardResultsPage.prototype.showResults = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.genderSpecificEventData);
                        return [4 /*yield*/, this.modalController.create({
                                component: _results_results_page__WEBPACK_IMPORTED_MODULE_3__["ResultsPage"],
                                componentProps: {
                                    selectedEvent: this.selectedEvent,
                                    gsed: this.genderSpecificEventData,
                                    ageGroup: this.selectedAgeGroup,
                                    gender: this.selectedGender,
                                    adults: false
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
    JuniorGuardResultsPage.prototype.selectEvent = function () {
        this.genderSpecificEventData = [];
        this.genderSpecificEventBrackets = [];
        this.selectedGender = null;
        this.selectedAgeGroup = null;
        this.showGenderDD = true;
        this.updateEventSelected();
    };
    JuniorGuardResultsPage.prototype.updateEventSelected = function () {
        if (this.selectedEvent == "Beach Flags") {
            this.eventData = this.dataProvider.getBeachFlagsJR();
        }
        else if (this.selectedEvent == "Distance Run") {
            this.eventData = this.dataProvider.getDistanceRun();
        }
        else if (this.selectedEvent == "Surf Swim Race") {
            this.eventData = this.dataProvider.getSurfSwimRaceJR();
        }
        else if (this.selectedEvent == "Ironguard") {
            this.eventData = this.dataProvider.getIronguardJR();
        }
        else if (this.selectedEvent == "Board Race") {
            this.eventData = this.dataProvider.getBoardRaceJR();
        }
        else if (this.selectedEvent == "Run-Swim-Run") {
            this.eventData = this.dataProvider.getRunSwimRunJR();
        }
        else if (this.selectedEvent == "Rescue Race-JG") {
            this.eventData = this.dataProvider.getRescueRaceJG();
        }
        else if (this.selectedEvent == "Swim Relay") {
            this.eventData = this.dataProvider.getSwimRelay();
        }
        else if (this.selectedEvent == "Surf Ski-U19") {
            this.eventData = this.dataProvider.getSurfSkiU19();
        }
        else if (this.selectedEvent == "Ironperson-U19") {
            this.eventData = this.dataProvider.getIronpersonU19();
        }
        else if (this.selectedEvent == "Rescue Race-U19") {
            this.eventData = this.dataProvider.getRescueRaceU19();
        }
        /*console.log(this.eventData[0].competitors.length);
        for (var i = 0; i < this.eventData[0].competitors.length; i++) {
          if (this.eventData[0].competitors[i]['eventGender'].toUpperCase() == 'O') {
            
            console.log(this.eventData[0].competitors[i]['eventGender']);
          }
        }*/
    };
    JuniorGuardResultsPage.prototype.selectGender = function () {
        var _this = this;
        this.selectedAgeGroup = null;
        this.genderSpecificEventBrackets = [];
        this.genderSpecificEventData = this.eventData[0].competitors.filter(function (item) {
            return item.gender.toUpperCase().indexOf(_this.selectedGender) > -1;
        });
        for (var x = 0; x < this.genderSpecificEventData.length; x++) {
            if (!this.genderSpecificEventBrackets.includes(this.genderSpecificEventData[x].scoreId)) {
                this.genderSpecificEventBrackets.push(this.genderSpecificEventData[x].scoreId);
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
    JuniorGuardResultsPage.prototype.selectAgeGroup = function () {
        if (this.selectedAgeGroup !== null) {
            this.showResultsBtn = true;
        }
    };
    JuniorGuardResultsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-junior-guard-results',
            template: __webpack_require__(/*! ./junior-guard-results.page.html */ "./src/app/junior-guard-results/junior-guard-results.page.html"),
            styles: [__webpack_require__(/*! ./junior-guard-results.page.scss */ "./src/app/junior-guard-results/junior-guard-results.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scoring_data_service__WEBPACK_IMPORTED_MODULE_2__["ScoringDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], JuniorGuardResultsPage);
    return JuniorGuardResultsPage;
}());

/*if (event == "Beach Flags") {
  this.competitors = this.dataProvider.getBeachFlagsAdults();
} else if (event == "Rescue Race-JG") {
  this.competitors = this.dataProvider.getRescueRaceJG();
} else if (event == "Rescue Race-U19") {
  this.competitors = this.dataProvider.getRescueRaceU19();
} else if (event == "Ironguard") {
  this.competitors = this.dataProvider.getIronguardAdults();
} else if (event == "Board Race") {
  this.competitors = this.dataProvider.getBoardRaceAdults();
} else if (event == "4 x 100 Run Relay") {
  this.competitors = this.dataProvider.getRunRelay();
} else if (event == "2K Beach Run") {
  this.competitors = this.dataProvider.getBeachRun();
} else if (event == "Surf Race") {
  this.competitors = this.dataProvider.getSurfRace();
} else if (event == "Run-Swim-Run") {
  this.competitors = this.dataProvider.getRunSwimRunAdults();
} else if (event == "Surf Ski Race") {
  this.competitors = this.dataProvider.getSurfSkiRace();
} else if (event == "American Ironperson") {
  this.competitors = this.dataProvider.getAmericanIronperson();
} else if (event == "Ironperson") {
  this.competitors = this.dataProvider.getIronperson();
} else if (event == "Surf Boat Race") {
  this.competitors = this.dataProvider.getSurfBoatRace();
} else if (event == "Rescue Race") {
  this.competitors = this.dataProvider.getRescueRace();
} else if (event == "Swim Relay") {
  this.competitors = this.dataProvider.getSwimRelay();
} else if (event == "Distance Run") {
  this.competitors = this.dataProvider.getDistanceRun();
} else if (event == "Surf Swim Race") {
  this.competitors = this.dataProvider.getSurfSwimRaceAdults();
} else if (event == "Ironperson-U19") {
  this.competitors = this.dataProvider.getIronpersonU19();
} else if (event == "Surf Ski-U19") {
  this.competitors = this.dataProvider.getSurfSkiU19();
}*/


/***/ })

}]);
//# sourceMappingURL=junior-guard-results-junior-guard-results-module.js.map