(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~event-results-event-results-module~individual-points-individual-points-module~junior-guard-r~634949df"],{

/***/ "./src/app/scoring-data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/scoring-data.service.ts ***!
  \*****************************************/
/*! exports provided: ScoringDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoringDataService", function() { return ScoringDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ScoringDataService = /** @class */ (function () {
    function ScoringDataService(http) {
        this.http = http;
        this.allData = [];
        this.scores = [];
        this.beachFlags = [];
        this.beachFlagsAdults = [{ 'competitors': [], 'genders': [] }];
        this.beachFlagsJR = [{ 'competitors': [], 'genders': [] }];
        this.ironguard = [];
        this.ironguardJR = [{ 'competitors': [], 'genders': [] }];
        this.ironguardAdults = [{ 'competitors': [], 'genders': [] }];
        this.boardRace = [];
        this.boardRaceJR = [{ 'competitors': [], 'genders': [] }];
        this.boardRaceAdults = [{ 'competitors': [], 'genders': [] }];
        this.runSwimRun = [];
        this.runSwimRunJR = [{ 'competitors': [], 'genders': [] }];
        this.runSwimRunAdults = [{ 'competitors': [], 'genders': [] }];
        this.surfSwimRace = [];
        this.surfSwimRaceJR = [{ 'competitors': [], 'genders': [] }];
        this.surfSwimRaceAdults = [{ 'competitors': [], 'genders': [] }];
        this.rescueRaceJG = [{ 'competitors': [], 'genders': [] }];
        this.rescueRaceU19 = [{ 'competitors': [], 'genders': [] }];
        this.runRelay = [{ 'competitors': [], 'genders': [] }];
        this.beachRun = [{ 'competitors': [], 'genders': [] }];
        this.surfRace = [{ 'competitors': [], 'genders': [] }];
        this.surfSkiRace = [{ 'competitors': [], 'genders': [] }];
        this.americanIronperson = [{ 'competitors': [], 'genders': [] }];
        this.ironperson = [{ 'competitors': [], 'genders': [] }];
        this.surfBoatRace = [{ 'competitors': [], 'genders': [] }];
        this.rescueRace = [{ 'competitors': [], 'genders': [] }];
        this.swimRelay = [{ 'competitors': [], 'genders': [] }];
        this.distanceRun = [{ 'competitors': [], 'genders': [] }];
        this.ironpersonU19 = [{ 'competitors': [], 'genders': [] }];
        this.surfSkiU19 = [{ 'competitors': [], 'genders': [] }];
        this.competitors = [];
        this.individualMen = [];
        this.individualWomen = [];
        this.chapterNames = [];
        this.regionNames = [];
        this.chapterData = [];
        this.aTeam = [];
        this.bTeam = [];
        this.openTeam = [];
        this.openRegion = [];
        this.loadData();
    }
    ScoringDataService.prototype.loadData = function () {
        var _this = this;
        return this.http.get('https://api.mongolab.com/api/1/databases/vista_apps/collections/uslaScores?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB')
            .subscribe(function (data) {
            _this.eventSection(data);
        });
    };
    ScoringDataService.prototype.eventSection = function (data) {
        this.allData = data;
        //var openEvents: any = [];
        var compIds = [];
        var chapNames = [];
        for (var x = 0; x < data.length; x++) {
            if (data[x].regionName !== "International") {
                if (!chapNames.includes(data[x].chapter)) {
                    chapNames.push(data[x].chapter);
                    this.chapterNames.push({ 'chapter': data[x].chapter, 'type': data[x].chapterType });
                }
                if (!this.regionNames.includes(data[x].regionName)) {
                    this.regionNames.push(data[x].regionName);
                }
                if (!compIds.includes(data[x].id)) {
                    compIds.push(data[x].id);
                    this.competitors.push(data[x]);
                }
                if (!this.beachFlagsJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                    this.beachFlagsJR[0]['genders'].push(data[x].eventGender.toUpperCase());
                }
                if (data[x].eventGroup == "Beach Flags") {
                    this.beachFlags.push(data[x]);
                    if (data[x].ageGroupName == "") {
                        this.beachFlagsJR[0]['competitors'].push(data[x]);
                        if (!this.beachFlagsJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.beachFlagsJR[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                    else {
                        this.beachFlagsAdults[0]['competitors'].push(data[x]);
                        if (!this.beachFlagsAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.beachFlagsAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                }
                else if (data[x].eventGroup == "Rescue Race-JG") {
                    this.rescueRaceJG[0]['competitors'].push(data[x]);
                    if (!this.rescueRaceJG[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.rescueRaceJG[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Rescue Race-U19") {
                    this.rescueRaceU19[0]['competitors'].push(data[x]);
                    if (!this.rescueRaceU19[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.rescueRaceU19[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Ironguard") {
                    this.ironguard.push(data[x]);
                    if (data[x].ageGroupName == "") {
                        this.ironguardJR[0]['competitors'].push(data[x]);
                        if (!this.ironguardJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.ironguardJR[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                    else {
                        this.ironguardAdults[0]['competitors'].push(data[x]);
                        if (!this.ironguardAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.ironguardAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                }
                else if (data[x].eventGroup == "Board Race") {
                    this.boardRace.push(data[x]);
                    if (data[x].ageGroupName == "") {
                        this.boardRaceJR[0]['competitors'].push(data[x]);
                        if (!this.boardRaceJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.boardRaceJR[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                    else {
                        this.boardRaceAdults[0]['competitors'].push(data[x]);
                        if (!this.boardRaceAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.boardRaceAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                }
                else if (data[x].eventGroup == "4 x 100 Run Relay") {
                    this.runRelay[0]['competitors'].push(data[x]);
                    if (!this.runRelay[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.runRelay[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "2K Beach Run") {
                    this.beachRun[0]['competitors'].push(data[x]);
                    if (!this.beachRun[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.beachRun[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Surf Race") {
                    this.surfRace[0]['competitors'].push(data[x]);
                    if (!this.surfRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.surfRace[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Run-Swim-Run") {
                    this.runSwimRun.push(data[x]);
                    if (data[x].ageGroupName == "") {
                        this.runSwimRunJR[0]['competitors'].push(data[x]);
                        if (!this.runSwimRunJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.runSwimRunJR[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                    else {
                        this.runSwimRunAdults[0]['competitors'].push(data[x]);
                        if (!this.runSwimRunAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.runSwimRunAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                }
                else if (data[x].eventGroup == "Surf Ski Race") {
                    this.surfSkiRace[0]['competitors'].push(data[x]);
                    if (!this.surfSkiRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.surfSkiRace[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "American Ironperson") {
                    this.americanIronperson[0]['competitors'].push(data[x]);
                    if (!this.americanIronperson[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.americanIronperson[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Ironperson") {
                    this.ironperson[0]['competitors'].push(data[x]);
                    if (!this.ironperson[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.ironperson[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Surf Boat Race") {
                    this.surfBoatRace[0]['competitors'].push(data[x]);
                    if (!this.surfBoatRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.surfBoatRace[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Rescue Race") {
                    this.rescueRace[0]['competitors'].push(data[x]);
                    if (!this.rescueRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.rescueRace[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Swim Relay") {
                    this.swimRelay[0]['competitors'].push(data[x]);
                    if (!this.swimRelay[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.swimRelay[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Distance Run") {
                    this.distanceRun[0]['competitors'].push(data[x]);
                    if (!this.distanceRun[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.distanceRun[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Surf Swim Race") {
                    this.surfSwimRace.push(data[x]);
                    if (data[x].ageGroupName == "") {
                        this.surfSwimRaceJR[0]['competitors'].push(data[x]);
                        if (!this.surfSwimRaceJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.surfSwimRaceJR[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                    else {
                        this.surfSwimRaceAdults[0]['competitors'].push(data[x]);
                        if (!this.surfSwimRaceAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                            this.surfSwimRaceAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
                        }
                    }
                }
                else if (data[x].eventGroup == "Ironperson-U19") {
                    this.ironpersonU19[0]['competitors'].push(data[x]);
                    if (!this.ironpersonU19[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.ironpersonU19[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
                else if (data[x].eventGroup == "Surf Ski-U19") {
                    this.surfSkiU19[0]['competitors'].push(data[x]);
                    if (!this.surfSkiU19[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
                        this.surfSkiU19[0]['genders'].push(data[x].eventGender.toUpperCase());
                    }
                }
            }
            /*if (data[x].eventGender == 'O'){
              if (!openEvents.includes(data[x].eventGroup)) {
                openEvents.push(data[x].eventGroup);
              }
              
            }*/
        }
        //console.log(this.beachFlagsAdults);
        //console.log(this.surfBoatRace);
        //console.log(openEvents);
        //console.log(this.swimRelay);
        this.popIndividualScores();
        this.popTeamScores();
    };
    ScoringDataService.prototype.popTeamScores = function () {
        var _this = this;
        //console.log(this.chapterNames);
        for (var x = 0; x < this.chapterNames.length; x++) {
            var points = 0;
            var count = 0;
            var totalReg = 0;
            var type = '';
            var chapter = '';
            var chapIds = [];
            for (var y = 0; y < this.allData.length; y++) {
                if (this.chapterNames[x].chapter == this.allData[y].chapter) {
                    if (this.allData[y].ageGroupName != "") {
                        if (count == 0) {
                            chapter = this.chapterNames[x].chapter;
                            type = this.allData[y].chapterType;
                        }
                        if (!chapIds.includes(this.allData[y].id)) {
                            chapIds.push(this.allData[y].id);
                        }
                        count++;
                        points = parseFloat(points) + parseFloat(this.allData[y].points);
                    }
                }
            }
            totalReg = chapIds.length;
            var chapData = { 'chapter': chapter, 'points': points, 'totalReg': totalReg, 'chapterType': type };
            if (type == 'A') {
                this.aTeam.push(chapData);
            }
            else if (type == 'B') {
                this.bTeam.push(chapData);
            }
        }
        this.aTeam.sort(function (item1, item2) {
            return _this.orderByComparator(item2['points'], item1['points']);
        });
        var rank = 1;
        var addRank = 0;
        for (var a = 0; a < this.aTeam.length; a++) {
            if (a == 0) {
                this.aTeam[a].rank = rank;
            }
            else {
                if (this.aTeam[(a - 1)].points == this.aTeam[a].points) {
                    this.aTeam[a].rank = rank;
                    addRank++;
                }
                else {
                    rank++;
                    rank = rank + addRank;
                    this.aTeam[a].rank = rank;
                    addRank = 0;
                }
            }
        }
        this.bTeam.sort(function (item1, item2) {
            return _this.orderByComparator(item2['points'], item1['points']);
        });
        rank = 1;
        addRank = 0;
        for (var b = 0; b < this.bTeam.length; b++) {
            if (b == 0) {
                this.bTeam[b].rank = rank;
            }
            else {
                if (this.bTeam[(b - 1)].points == this.bTeam[b].points) {
                    this.bTeam[b].rank = rank;
                    addRank++;
                }
                else {
                    rank++;
                    rank = rank + addRank;
                    this.bTeam[b].rank = rank;
                    addRank = 0;
                }
            }
        }
        for (var z = 0; z < this.chapterNames.length; z++) {
            var points = 0;
            var count = 0;
            var totalReg = 0;
            var type = '';
            var chapter = '';
            var chapIds = [];
            for (var n = 0; n < this.allData.length; n++) {
                if (this.chapterNames[z].chapter == this.allData[n].chapter) {
                    if (this.allData[n].ageGroupName == "OPEN" || this.allData[n].ageGroupName == "OPEN 3+") {
                        if (count == 0) {
                            chapter = this.chapterNames[z].chapter;
                            type = this.allData[n].chapterType;
                        }
                        if (!chapIds.includes(this.allData[n].id)) {
                            chapIds.push(this.allData[n].id);
                        }
                        count++;
                        points = parseFloat(points) + parseFloat(this.allData[n].points);
                    }
                }
            }
            if (chapter != "" && points != 0) {
                totalReg = chapIds.length;
                var chapData = { 'chapter': chapter, 'points': points, 'totalReg': totalReg, 'chapterType': type };
                this.openTeam.push(chapData);
            }
        }
        this.openTeam.sort(function (item1, item2) {
            return _this.orderByComparator(item2['points'], item1['points']);
        });
        rank = 1;
        addRank = 0;
        for (var f = 0; f < this.openTeam.length; f++) {
            if (f == 0) {
                this.openTeam[f].rank = rank;
            }
            else {
                if (this.openTeam[(f - 1)].points == this.openTeam[f].points) {
                    this.openTeam[f].rank = rank;
                    addRank++;
                }
                else {
                    rank++;
                    rank = rank + addRank;
                    this.openTeam[f].rank = rank;
                    addRank = 0;
                }
            }
        }
        for (var r = 0; r < this.regionNames.length; r++) {
            var points = 0;
            var count = 0;
            var totalReg = 0;
            var region = '';
            var regIds = [];
            for (var p = 0; p < this.allData.length; p++) {
                if (this.regionNames[r] == this.allData[p].regionName) {
                    if (this.allData[p].ageGroupName !== "") {
                        if (count == 0) {
                            region = this.regionNames[r];
                            //console.log(region);
                        }
                        if (!regIds.includes(this.allData[p].id)) {
                            regIds.push(this.allData[p].id);
                        }
                        count++;
                        points = parseFloat(points) + parseFloat(this.allData[p].points);
                    }
                }
            }
            totalReg = regIds.length;
            var regData = { 'region': region, 'points': points, 'totalReg': totalReg };
            this.openRegion.push(regData);
        }
        this.openRegion.sort(function (item1, item2) {
            return _this.orderByComparator(item2['points'], item1['points']);
        });
        rank = 1;
        addRank = 0;
        for (var p = 0; p < this.openRegion.length; p++) {
            if (p == 0) {
                this.openRegion[p].rank = rank;
            }
            else {
                if (this.openRegion[(p - 1)].points == this.openRegion[p].points) {
                    this.openRegion[p].rank = rank;
                    addRank++;
                }
                else {
                    rank++;
                    rank = rank + addRank;
                    this.openRegion[p].rank = rank;
                    addRank = 0;
                }
            }
        }
        //console.log(this.openTeam);
    };
    ScoringDataService.prototype.popIndividualScores = function () {
        var _this = this;
        for (var x = 0; x < this.competitors.length; x++) {
            var points = 0;
            var count = 0;
            var first = '';
            var last = '';
            var chapter = '';
            var gender = '';
            for (var y = 0; y < this.allData.length; y++) {
                if (this.allData[y].id == this.competitors[x].id) {
                    if (this.allData[y].ageGroupName == "OPEN" || this.allData[y].ageGroupName == "OPEN 3+") {
                        if (count == 0) {
                            first = this.allData[y].first;
                            last = this.allData[y].last;
                            chapter = this.allData[y].chapter;
                            gender = this.allData[y].gender;
                        }
                        count++;
                        points = parseFloat(points) + parseFloat(this.allData[y].points);
                    }
                }
            }
            var compData = { 'id': this.competitors[x].id, 'first': first, 'last': last, 'chapter': chapter, 'gender': gender, 'points': points };
            if (gender.toUpperCase() == 'M') {
                this.individualMen.push(compData);
            }
            if (gender.toUpperCase() == 'F') {
                this.individualWomen.push(compData);
            }
        }
        this.individualMen.sort(function (item1, item2) {
            return _this.orderByComparator(item2['points'], item1['points']);
        });
        var rank = 1;
        var addRank = 0;
        for (var g = 0; g < this.individualMen.length; g++) {
            if (g == 0) {
                this.individualMen[g].rank = rank;
            }
            else {
                if (this.individualMen[(g - 1)].points == this.individualMen[g].points) {
                    this.individualMen[g].rank = rank;
                    addRank++;
                }
                else {
                    rank++;
                    rank = rank + addRank;
                    this.individualMen[g].rank = rank;
                    addRank = 0;
                }
            }
        }
        this.individualWomen.sort(function (item1, item2) {
            return _this.orderByComparator(item2['points'], item1['points']);
        });
        rank = 1;
        addRank = 0;
        for (var g = 0; g < this.individualWomen.length; g++) {
            if (g == 0) {
                this.individualWomen[g].rank = rank;
            }
            else {
                if (this.individualWomen[(g - 1)].points == this.individualWomen[g].points) {
                    this.individualWomen[g].rank = rank;
                    addRank++;
                }
                else {
                    rank++;
                    rank = rank + addRank;
                    this.individualWomen[g].rank = rank;
                    addRank = 0;
                }
            }
        }
    };
    ScoringDataService.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    ScoringDataService.prototype.getATeam = function () {
        return this.aTeam.slice();
    };
    ScoringDataService.prototype.getBTeam = function () {
        return this.bTeam.slice();
    };
    ScoringDataService.prototype.getOpenTeam = function () {
        return this.openTeam.slice();
    };
    ScoringDataService.prototype.getRegionData = function () {
        return this.openRegion.slice();
    };
    ScoringDataService.prototype.getCompetitors = function () {
        return this.competitors.slice();
    };
    ScoringDataService.prototype.getIndividualMen = function () {
        return this.individualMen.slice();
    };
    ScoringDataService.prototype.getIndividualWomen = function () {
        return this.individualWomen.slice();
    };
    ScoringDataService.prototype.getBeachFlagsAdults = function () {
        return this.beachFlagsAdults.slice();
    };
    ScoringDataService.prototype.getBeachFlagsJR = function () {
        return this.beachFlagsJR.slice();
    };
    ScoringDataService.prototype.getRescueRaceJG = function () {
        return this.rescueRaceJG.slice();
    };
    ScoringDataService.prototype.getRescueRaceU19 = function () {
        return this.rescueRaceU19.slice();
    };
    ScoringDataService.prototype.getIronguardAdults = function () {
        return this.ironguardAdults.slice();
    };
    ScoringDataService.prototype.getIronguardJR = function () {
        return this.ironguardJR.slice();
    };
    ScoringDataService.prototype.getBoardRaceAdults = function () {
        return this.boardRaceAdults.slice();
    };
    ScoringDataService.prototype.getBoardRaceJR = function () {
        return this.boardRaceJR.slice();
    };
    ScoringDataService.prototype.getRunRelay = function () {
        return this.runRelay.slice();
    };
    ScoringDataService.prototype.getBeachRun = function () {
        return this.beachRun.slice();
    };
    ScoringDataService.prototype.getSurfRace = function () {
        return this.surfRace.slice();
    };
    ScoringDataService.prototype.getRunSwimRunAdults = function () {
        return this.runSwimRunAdults.slice();
    };
    ScoringDataService.prototype.getRunSwimRunJR = function () {
        return this.runSwimRunJR.slice();
    };
    ScoringDataService.prototype.getSurfSkiRace = function () {
        return this.surfSkiRace.slice();
    };
    ScoringDataService.prototype.getAmericanIronperson = function () {
        return this.americanIronperson.slice();
    };
    ScoringDataService.prototype.getIronperson = function () {
        return this.ironperson.slice();
    };
    ScoringDataService.prototype.getSurfBoatRace = function () {
        return this.surfBoatRace.slice();
    };
    ScoringDataService.prototype.getRescueRace = function () {
        return this.rescueRace.slice();
    };
    ScoringDataService.prototype.getSwimRelay = function () {
        return this.swimRelay.slice();
    };
    ScoringDataService.prototype.getDistanceRun = function () {
        return this.distanceRun.slice();
    };
    ScoringDataService.prototype.getSurfSwimRaceAdults = function () {
        return this.surfSwimRaceAdults.slice();
    };
    ScoringDataService.prototype.getSurfSwimRaceJR = function () {
        return this.surfSwimRaceJR.slice();
    };
    ScoringDataService.prototype.getIronpersonU19 = function () {
        return this.ironpersonU19.slice();
    };
    ScoringDataService.prototype.getSurfSkiU19 = function () {
        return this.surfSkiU19.slice();
    };
    ScoringDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ScoringDataService);
    return ScoringDataService;
}());



/***/ })

}]);
//# sourceMappingURL=default~event-results-event-results-module~individual-points-individual-points-module~junior-guard-r~634949df.js.map