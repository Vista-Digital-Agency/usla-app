webpackJsonp([1],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PushProvider = /** @class */ (function () {
    function PushProvider(platform, storage) {
        this.platform = platform;
        this.storage = storage;
        //this.fetchPush();
    }
    PushProvider.prototype.fetchPush = function () {
        var _this = this;
        return this.storage.get('pushEnabled')
            .then(function (enabled) {
            _this.pushEnabled = enabled != null ? enabled : true;
        })
            .catch(function (err) { return console.log(err); });
    };
    PushProvider.prototype.setPushEnabled = function (enabled) {
        this.pushEnabled = enabled;
        this.storage.set('pushEnabled', this.pushEnabled)
            .then()
            .catch(function (err) {
            console.log(err);
        });
        if (this.platform.is('cordova')) {
            var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
            if (this.pushEnabled == true) {
                //register for pushes
                pushNotification.registerDevice(function (status) {
                    var pushToken = status;
                    console.warn('push token: ' + pushToken);
                }, function (status) {
                    console.warn(JSON.stringify(['failed to register ', status]));
                });
            }
            else {
                pushNotification.unregisterDevice();
            }
        }
    };
    PushProvider.prototype.getEnabled = function () {
        return this.pushEnabled;
    };
    PushProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], PushProvider);
    return PushProvider;
}());

//# sourceMappingURL=push.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataProvider = /** @class */ (function () {
    //eventGenders: any = ['F', 'M', 'O'];
    function DataProvider(http) {
        this.http = http;
        this.data = [];
        this.allData = [];
        this.events = [];
        this.sponsors = [];
        this.festivities = [];
        this.program = [];
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
        this.loadXML();
        //var xml = fs.readFileSync('../assets/final.xml', 'utf8');
        //var finalScores;
        //finalScores = xmlToJS.xml2json(xml, {compact: true, spaces: 4});
        //console.log(finalScores);
    }
    DataProvider.prototype.ionViewWillEnter = function () {
    };
    DataProvider.prototype.loadXML = function () {
        var _this = this;
        this.http.get('http://lifeguardmetrics.com/scoring/xml/uslaxml.xml', { responseType: 'text' })
            .subscribe(function (data) {
            //console.log(data);
            var parser = new DOMParser();
            var xmlData = parser.parseFromString(data, "text/xml");
            //console.log(xmlData);
            _this.parseXML(data)
                .then(function (data) {
                _this.scores = data;
                //console.log(this.scores.length);
                //console.log(this.scores);
                /*for (var x = 0; x < this.scores.length; x++) {
                   if (this.scores[x].gender == "F") {
                     this.opF.push(this.scores[x]);
                   } else {
                     this.opM.push(this.scores[x]);
                   }
                }*/
                _this.eventSection(_this.scores);
            });
        });
    };
    DataProvider.prototype.parseXML = function (data) {
        return new Promise(function (resolve) {
            var k, arr = [], parser = new __WEBPACK_IMPORTED_MODULE_3_xml2js___default.a.Parser({
                trim: true,
                explicitArray: true
            });
            parser.parseString(data, function (err, result) {
                //console.log(result);
                var obj = result.competition;
                for (k in obj.competitor) {
                    var item = obj.competitor[k];
                    arr.push({
                        ageGroupName: item.agegroupname[0],
                        chapter: item.chapter[0],
                        chapterType: item.chaptertype[0],
                        competitorID: item.competitorid[0],
                        eventGender: item.eventgender[0],
                        eventGroup: item.eventgroup[0],
                        eventName: item.eventname[0],
                        first: item.first_name[0],
                        gender: item.gender[0],
                        id: item.id[0],
                        last: item.last_name[0],
                        memberType: item.membertype[0],
                        place: item.place[0],
                        points: item.points[0],
                        regionName: item.regionname[0],
                        scoreId: item.score_id[0]
                    });
                }
                resolve(arr);
            });
        });
    };
    DataProvider.prototype.eventSection = function (data) {
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
    DataProvider.prototype.popTeamScores = function () {
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
    DataProvider.prototype.popIndividualScores = function () {
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
    DataProvider.prototype.orderByComparator = function (a, b) {
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
    DataProvider.prototype.popSponsors = function () {
        this.sponsors = [{
                "name": "Jersey Mike's",
                "location": "",
                "link": "https://jerseymikes.com/",
                "address": "",
                "phone": "",
                "image": "assets/sponsors/jerseyMikes.png"
            },
            {
                "name": "United States Lifeguard Association",
                "location": "",
                "link": "http://engineswim.com/",
                "address": "",
                "phone": "",
                "image": "assets/sponsors/USLA.png"
            },
            {
                "name": "Engine",
                "location": "",
                "link": "http://.com",
                "address": "",
                "phone": "",
                "image": "assets/sponsors/Engine.png"
            },
            {
                "name": "City of Virginia Beach",
                "location": "",
                "link": "https://vbgov.com",
                "address": "",
                "phone": "",
                "image": "assets/sponsors/VB.png"
            },
            {
                "name": "Virginia Beach Lifeguard Association",
                "location": "",
                "link": "https://vblaguards.org",
                "address": "",
                "phone": "",
                "image": "assets/sponsors/vbLifeguard.png"
            },
            {
                "name": "Murphy's Grand Irish Pub",
                "location": {
                    "lat": 36.8578952,
                    "lng": -75.981346
                },
                "link": "http://murphyspubvb.com",
                "address": "2914 Pacific Ave, Virginia Beach, VA 23451",
                "phone": "757-417-7701",
                "image": "assets/sponsors/murphys.png"
            },
            {
                "name": "Pelon's Baja Grill",
                "location": {
                    "lat": 36.8646656,
                    "lng": -75.9824806
                },
                "link": "http://pelonsbajagrill.com/",
                "address": "3619 Pacific Ave, Virginia Beach, VA 23451",
                "phone": "757-417-3970",
                "image": "assets/sponsors/pelons.png"
            },
            {
                "name": "Doc Taylor's",
                "location": {
                    "lat": 36.8512537,
                    "lng": -75.9789249
                },
                "link": "http://doctaylors.com",
                "address": "207 23rd St, Virginia Beach, VA 23451",
                "phone": "757-425-1960",
                "image": "assets/sponsors/docTaylors.png"
            },
            {
                "name": "Tautog's Restaurant",
                "location": {
                    "lat": 36.851231,
                    "lng": -75.9787041
                },
                "link": "http://tautogs.com",
                "address": "205 23rd St, Virginia Beach, VA 23451",
                "phone": "757-422-0081",
                "image": "assets/sponsors/tautogs.png"
            },
            {
                "name": "Aloha Snacks",
                "location": {
                    "lat": 36.8582518,
                    "lng": -75.98449
                },
                "link": "http://alohasnacksvb.com/",
                "address": "501 Laskin Rd, Virginia Beach, VA 23451",
                "phone": "757-428-7653",
                "image": "assets/sponsors/alohaSnacks.jpg"
            },
            {
                "name": "7-Eleven 27th St",
                "location": {
                    "lat": 36.8568954,
                    "lng": -75.9821296
                },
                "link": "http://7-eleven.com",
                "address": "2610 Pacific Ave, Virginia Beach, VA 23451",
                "phone": "757-422-8322",
                "image": "assets/sponsors/sevenEleven.jpg"
            },
            {
                "name": "7-Eleven 40th St",
                "location": {
                    "lat": 36.8661456,
                    "lng": -75.9826391
                },
                "link": "http://7-eleven.com",
                "address": "3908 Atlantic Ave, Virginia Beach, VA 23451",
                "phone": "757-428-2519",
                "image": "assets/sponsors/sevenEleven.jpg"
            },
            {
                "name": "The Beach Bully BBQ",
                "location": {
                    "lat": 36.8464116,
                    "lng": -75.9841651
                },
                "link": "http://beachbully.com",
                "address": "601 19th St, Virginia Beach, VA 23451",
                "phone": "757-422-4222",
                "image": "assets/sponsors/beachBully.jpg"
            }];
    };
    DataProvider.prototype.popEvents = function () {
        var _this = this;
        this.popSponsors();
        return this.http.get('https://api.mongolab.com/api/1/databases/vista_apps/collections/usla?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB')
            .subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                if (_this.data[i].cat == 'schedule') {
                    _this.events.push(_this.data[i]);
                    if (_this.data[i]._id.$oid == "5b5f11837b7f60839a94d83e" || _this.data[i]._id.$oid == "5b5f11837b7f60839a94d841" || _this.data[i]._id.$oid == "5b5f11837b7f60839a94d847" || _this.data[i]._id.$oid == "5b5f11837b7f60839a94d84b") {
                        _this.festivities.push(_this.data[i]);
                    }
                }
                if (_this.data[i].cat == "program") {
                    //console.log(this.data[i].events);
                    _this.program = _this.data[i];
                }
            }
        });
    };
    DataProvider.prototype.getProgram = function () {
        return this.program;
    };
    DataProvider.prototype.getFestivities = function () {
        return this.festivities.slice();
    };
    DataProvider.prototype.getSponsors = function () {
        return this.sponsors.slice();
    };
    DataProvider.prototype.getEvents = function () {
        return this.events.slice();
    };
    DataProvider.prototype.getATeam = function () {
        return this.aTeam.slice();
    };
    DataProvider.prototype.getBTeam = function () {
        return this.bTeam.slice();
    };
    DataProvider.prototype.getOpenTeam = function () {
        return this.openTeam.slice();
    };
    DataProvider.prototype.getRegionData = function () {
        return this.openRegion.slice();
    };
    DataProvider.prototype.getCompetitors = function () {
        return this.competitors.slice();
    };
    DataProvider.prototype.getIndividualMen = function () {
        return this.individualMen.slice();
    };
    DataProvider.prototype.getIndividualWomen = function () {
        return this.individualWomen.slice();
    };
    DataProvider.prototype.getBeachFlagsAdults = function () {
        return this.beachFlagsAdults.slice();
    };
    DataProvider.prototype.getBeachFlagsJR = function () {
        return this.beachFlagsJR.slice();
    };
    DataProvider.prototype.getRescueRaceJG = function () {
        return this.rescueRaceJG.slice();
    };
    DataProvider.prototype.getRescueRaceU19 = function () {
        return this.rescueRaceU19.slice();
    };
    DataProvider.prototype.getIronguardAdults = function () {
        return this.ironguardAdults.slice();
    };
    DataProvider.prototype.getIronguardJR = function () {
        return this.ironguardJR.slice();
    };
    DataProvider.prototype.getBoardRaceAdults = function () {
        return this.boardRaceAdults.slice();
    };
    DataProvider.prototype.getBoardRaceJR = function () {
        return this.boardRaceJR.slice();
    };
    DataProvider.prototype.getRunRelay = function () {
        return this.runRelay.slice();
    };
    DataProvider.prototype.getBeachRun = function () {
        return this.beachRun.slice();
    };
    DataProvider.prototype.getSurfRace = function () {
        return this.surfRace.slice();
    };
    DataProvider.prototype.getRunSwimRunAdults = function () {
        return this.runSwimRunAdults.slice();
    };
    DataProvider.prototype.getRunSwimRunJR = function () {
        return this.runSwimRunJR.slice();
    };
    DataProvider.prototype.getSurfSkiRace = function () {
        return this.surfSkiRace.slice();
    };
    DataProvider.prototype.getAmericanIronperson = function () {
        return this.americanIronperson.slice();
    };
    DataProvider.prototype.getIronperson = function () {
        return this.ironperson.slice();
    };
    DataProvider.prototype.getSurfBoatRace = function () {
        return this.surfBoatRace.slice();
    };
    DataProvider.prototype.getRescueRace = function () {
        return this.rescueRace.slice();
    };
    DataProvider.prototype.getSwimRelay = function () {
        return this.swimRelay.slice();
    };
    DataProvider.prototype.getDistanceRun = function () {
        return this.distanceRun.slice();
    };
    DataProvider.prototype.getSurfSwimRaceAdults = function () {
        return this.surfSwimRaceAdults.slice();
    };
    DataProvider.prototype.getSurfSwimRaceJR = function () {
        return this.surfSwimRaceJR.slice();
    };
    DataProvider.prototype.getIronpersonU19 = function () {
        return this.ironpersonU19.slice();
    };
    DataProvider.prototype.getSurfSkiU19 = function () {
        return this.surfSkiU19.slice();
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		216
	],
	"../pages/comp-search/comp-search.module": [
		465,
		0
	],
	"../pages/event-modal/event-modal.module": [
		230
	],
	"../pages/event-results/event-results.module": [
		234
	],
	"../pages/individual-points/individual-points.module": [
		236
	],
	"../pages/junior-guard-results/junior-guard-results.module": [
		238
	],
	"../pages/map/map.module": [
		240
	],
	"../pages/my-schedule/my-schedule.module": [
		243
	],
	"../pages/party/party.module": [
		245
	],
	"../pages/program/program.module": [
		247
	],
	"../pages/result-types/result-types.module": [
		300
	],
	"../pages/results/results.module": [
		301
	],
	"../pages/schedule-date/schedule-date.module": [
		302
	],
	"../pages/schedule/schedule.module": [
		304
	],
	"../pages/settings/settings.module": [
		306
	],
	"../pages/sponsors/sponsors.module": [
		308
	],
	"../pages/team-scoring/team-scoring.module": [
		310
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        The 2018 USLA National Lifeguard and Junior Lifeguard Championships will be held in Virginia Beach, VA from \n        August 8 - 11, 2018. Details can be found at www.uslanationals.org. Brush up on your competition rules, train \n        hard and check back often on our website for regularly updated information! Online registration is now open. (Advance registration is strongly recommended.)\n    </div>\n      \n    <div>\n      <u><b>Who may participate:</b></u>\n      <br>\n      This competition is open to current Professional, Alumnus, Life, and Junior USLA Members. Approved international \n      competitors who are current members of a national lifesaving organization that is a Full Member of the International \n      Life Saving Federation are also eligible to compete, subject to approval. (Send a request for approval to lifesavingsport@usla.org). \n      Unfortunately, Associate Members are NOT eligible to compete, but we welcome you to attend and cheer our lifesavers on!\n    </div>\n    <div>\n      <u><b>Entry Fees: </b></u>\n      <br>\n      National Lifeguard Adult Championship Entry Fees:\n      <br>\n      July 1st - August 6th: $100\n      <br>\n      August 7th - August 11th: $130\n    </div>\n\n    <div>\n      National Junior Lifeguard & U19 Championship Entry Fees:\n      <br>\n      July 1st - August 6th: $50\n      <br>\n      August 7th - August 11th: $75\n    </div>\n\n    <div>\n      *Professionals who are competing in the U19 division will pay the Junior fee for this competition. Professionals who also \n      want to compete in the Nationals, Thursday through Saturday, must pay an additional fee for that competition\n    </div>\n\n    <div>\n      The following is important information from the Lifesaving Sport Committee for all competitors who will be \n      attending the 2018 USLA NATIONAL LIFEGUARD CHAMPIONSHIPS in Virginia Beach, VA.\n    </div>\n\n    <div>\n      <h1>\n        <u>Start Times:</u>\n      </h1>\n    </div>\n\n    <div>\n      The competition will be starting daily at the scheduled start time of 8AM. Please be prepared and allow enough time for your warm-up.\n      There will be a single call for each event. A first & final call only. The first one each morning will be at 7:30AM\n      Events will not be delayed for craft conflicts; this is a rule and will be enforced. Be prepared and make arrangements ahead of time.\n    </div>\n\n    <div>\n      It is your responsibility to know the rules. Please familiarize yourself with the rules of the event(s) you plan on participating in. Make \n      sure to review the revised rules for the American Ironwoman and the rules for the new event Ironguard. \n    </div>\n\n    <div>\n      Teams who wish to compete in the "B" Division please be aware of the rules. No exceptions or excuses will be accepted.\n      All Chapter Teams are considered in the "A" Division until they request and submit verification to be included in the "B" Division.\n      Request must be done annually and must include a letter from the involved agency/agencies employer(s) verifying the number of employed lifeguards.\n    </div>\n\n    <div>\n      The letter must be from an administrator (not the Captain or Chief of a Beach Patrol) from the agency/agencies that comprise the chapter. Letters must \n      be from an official with the agency, not involved in the daily beach patrol operations. It must be received by the Lifesaving Sport Chair by August 1, 2018. It can be emailed to lifesavingsport@usla.org.\n    </div>\n\n    <div>\n      The line for last-minute, on-site registration can get long, causing athletes to miss their events. When on-site, you will need to wait in line to use \n      one of the computers we provide with Internet access and you will need to complete all the same steps on-site as you can take today from home. Why wait at the event site? Log-in now and register.\n    </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = /** @class */ (function () {
    function EventModalPageModule() {
    }
    EventModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
            ],
        })
    ], EventModalPageModule);
    return EventModalPageModule;
}());

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResultsPageModule", function() { return EventResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_results__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventResultsPageModule = /** @class */ (function () {
    function EventResultsPageModule() {
    }
    EventResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_results__["a" /* EventResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_results__["a" /* EventResultsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], EventResultsPageModule);
    return EventResultsPageModule;
}());

//# sourceMappingURL=event-results.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventResultsPage = /** @class */ (function () {
    function EventResultsPage(navParams, dataProvider, alertCtrl) {
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.resultsPage = __WEBPACK_IMPORTED_MODULE_3__results_results__["a" /* ResultsPage */];
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
    EventResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-results',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/event-results/event-results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n   \n  <div>\n    <ion-list>\n      <ion-item>\n        <ion-label>Events</ion-label>\n        <ion-select [(ngModel)]="selectedEvent" (ionChange)="selectEvent()">\n          <ion-option *ngFor="let item of events" [value]="item">{{ item }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="showGenderDD">\n    <ion-list>\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-select [(ngModel)]="selectedGender" (ionChange)="selectGender()">\n          <ion-option value="M">Male</ion-option>\n          <ion-option value="F">Female</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="showBracketsDD">\n    <ion-list>\n      <ion-item>\n        <ion-label>Age Groups</ion-label>\n        <ion-select [(ngModel)]="selectedAgeGroup" (ionChange)="selectAgeGroup()">\n          <ion-option *ngFor="let item of groupSets | filterGroupSets: genderSpecificEventBrackets" [value]="item">{{ item }}</ion-option>\n            \n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="showResultsBtn" id="showResultsBtnCon">\n    <button ion-button round large [navPush]="resultsPage" \n    [navParams]="{ selectedEvent: selectedEvent, gsed: genderSpecificEventData, ageGroup: selectedAgeGroup, gender: selectedGender, adults: true }">Show Results</button>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/event-results/event-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EventResultsPage);
    return EventResultsPage;
}());

//# sourceMappingURL=event-results.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPointsPageModule", function() { return IndividualPointsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__individual_points__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IndividualPointsPageModule = /** @class */ (function () {
    function IndividualPointsPageModule() {
    }
    IndividualPointsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__individual_points__["a" /* IndividualPointsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__individual_points__["a" /* IndividualPointsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], IndividualPointsPageModule);
    return IndividualPointsPageModule;
}());

//# sourceMappingURL=individual-points.module.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualPointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualPointsPage = /** @class */ (function () {
    function IndividualPointsPage(dataProvider) {
        this.dataProvider = dataProvider;
        this.category = 'men';
        this.men = [];
        this.women = [];
        this.men = this.dataProvider.getIndividualMen();
        this.women = this.dataProvider.getIndividualWomen();
        //console.log(this.men);
    }
    IndividualPointsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-individual-points',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/individual-points/individual-points.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Individual Points</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <ion-segment color="" [(ngModel)]="category">\n        <ion-segment-button value="men">\n          Open Men\n        </ion-segment-button>\n        <ion-segment-button value="women">\n          Open Women\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div ion-fixed class="fixed-header">\n      <ion-row class="headerRow">\n        <ion-col col-2>\n          Rank\n        </ion-col>\n        <ion-col col-7>\n          Name\n        </ion-col>\n        <ion-col col-3>\n          Points\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div [ngSwitch]="category">\n        \n      <div *ngSwitchCase="\'men\'">\n        <ion-grid>\n          <!--<ion-row class="headerRow">\n            <ion-col col-2>\n              Rank\n            </ion-col>\n            <ion-col col-7>\n              Name\n            </ion-col>\n            <ion-col col-3>\n              Points\n            </ion-col>\n          </ion-row>-->\n          <ion-row *ngFor="let item of men" class="compRows">\n\n            <ion-col col-2>\n              {{ item.rank }}\n            </ion-col>\n            <ion-col col-7 class="nameCol">\n              {{ item.first }} {{ item.last }}\n            </ion-col>\n            <ion-col col-3 class="pointsCol">\n              {{ item.points.toFixed(3) }}\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n        \n      <div *ngSwitchCase="\'women\'">\n        <ion-grid>\n          <!--<ion-row class="headerRow">\n            <ion-col col-2>\n              Rank\n            </ion-col>\n            <ion-col col-7>\n              Name\n            </ion-col>\n            <ion-col col-3>\n              Points\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor="let item of women" class="compRows">\n\n            <ion-col col-2>\n              {{ item.rank }}\n            </ion-col>\n            <ion-col col-7 class="nameCol">\n              {{ item.first }} {{ item.last }}\n            </ion-col>\n            <ion-col col-3 class="pointsCol">\n              {{ item.points.toFixed(3) }}\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/individual-points/individual-points.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], IndividualPointsPage);
    return IndividualPointsPage;
}());

//# sourceMappingURL=individual-points.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuniorGuardResultsPageModule", function() { return JuniorGuardResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__junior_guard_results__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JuniorGuardResultsPageModule = /** @class */ (function () {
    function JuniorGuardResultsPageModule() {
    }
    JuniorGuardResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__junior_guard_results__["a" /* JuniorGuardResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__junior_guard_results__["a" /* JuniorGuardResultsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], JuniorGuardResultsPageModule);
    return JuniorGuardResultsPageModule;
}());

//# sourceMappingURL=junior-guard-results.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuniorGuardResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JuniorGuardResultsPage = /** @class */ (function () {
    function JuniorGuardResultsPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.resultsPage = __WEBPACK_IMPORTED_MODULE_3__results_results__["a" /* ResultsPage */];
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
    JuniorGuardResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-junior-guard-results',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/junior-guard-results/junior-guard-results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Junior Guard Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div>\n      <ion-list>\n        <ion-item>\n          <ion-label>Events</ion-label>\n          <ion-select [(ngModel)]="selectedEvent" (ionChange)="selectEvent()">\n            <ion-option *ngFor="let item of events" [value]="item">{{ item }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngIf="showGenderDD">\n      <ion-list>\n        <ion-item>\n          <ion-label>Gender</ion-label>\n          <ion-select [(ngModel)]="selectedGender" (ionChange)="selectGender()">\n            <ion-option value="M">Male</ion-option>\n            <ion-option value="F">Female</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div *ngIf="showBracketsDD">\n      <ion-list>\n        <ion-item>\n          <ion-label>Age Groups</ion-label>\n          <ion-select [(ngModel)]="selectedAgeGroup" (ionChange)="selectAgeGroup()">\n            <ion-option *ngFor="let item of groupSets | filterGroupSets: genderSpecificEventBrackets" [value]="item">{{ item }}</ion-option>\n              \n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  \n    <div *ngIf="showResultsBtn" id="showResultsBtnCon">\n      <button ion-button round large [navPush]="resultsPage" \n      [navParams]="{ selectedEvent: selectedEvent, gsed: genderSpecificEventData, ageGroup: selectedAgeGroup, gender: selectedGender, adults: false }">Show Results</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/junior-guard-results/junior-guard-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
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
//# sourceMappingURL=junior-guard-results.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    //myLat: number;
    //myLon: number;
    function MapPage(platform, geolocation) {
        this.geolocation = geolocation;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidEnter = function () {
        this.initializeMap();
        //this.myLat = 36.852501;
        //this.myLon = -75.978376; 
    };
    MapPage.prototype.initializeMap = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var myStyles = [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#523735"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#c9b2a6"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#dcd2be"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ae9e90"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#93817c"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#a5b076"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#447530"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fdfcf8"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f8c967"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#e9bc62"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e98d58"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#db8555"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#806b63"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8f7d77"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b9d3c2"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#92998d"
                        }
                    ]
                }
            ];
            var mapOptions = {
                maxZoom: 19,
                minZoom: 12,
                zoom: 15,
                center: new google.maps.LatLng(36.857382, -75.979877),
                styles: myStyles
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var path = [
                new google.maps.LatLng(36.858462981966966, -75.97711378548797),
                new google.maps.LatLng(36.856578667758626, -75.97651297066864),
                new google.maps.LatLng(36.856922049588526, -75.97441011880096),
                new google.maps.LatLng(36.85874194753111, -75.9750109336203)
            ];
            var polyline = new google.maps.Polygon({ path: path, strokeColor: "#FF0000", strokeOpacity: 1.0, strokeWeight: 2, map: _this.map, name: "polyline" });
            //polyline.setMap(this.map);
            var content = "<b>Contest Area</b>";
            var infowindow = new google.maps.InfoWindow({
                size: new google.maps.Size(250, 150)
            });
            //let anchor = new google.maps.LatLng(36.858462981966966, -75.97711378548797);
            google.maps.event.addListener(polyline, 'click', function (event) {
                infowindow.setContent(content);
                infowindow.setPosition(event.latLng);
                infowindow.open(this.map);
            });
            var marker;
            var imageTop = {
                labelOrigin: new google.maps.Point(11, -15),
                url: 'assets/imgs/marker_red.png',
                size: new google.maps.Size(22, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(11, 40),
            };
            var imageBottom = {
                labelOrigin: new google.maps.Point(0, 50),
                url: 'assets/imgs/marker_red.png',
                size: new google.maps.Size(22, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(11, 40),
            };
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.857049, -75.977377),
                icon: imageBottom,
                label: {
                    text: 'Best Western',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8496419, -75.9763075),
                icon: imageBottom,
                label: {
                    text: "Peabody's",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.852948, -75.975437),
                icon: imageTop,
                label: {
                    text: "VB Surf & Rescue Museum",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.859591, -75.977683),
                icon: imageTop,
                label: {
                    text: "31st St. Park",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8578952, -75.981346),
                icon: imageTop,
                label: {
                    text: "Murphy's Grand Irish Pub",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8646656, -75.9824806),
                icon: imageBottom,
                label: {
                    text: "Pelon's Baja Grill",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8512537, -75.9789249),
                icon: imageTop,
                label: {
                    text: "Doc Taylor's",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.851231, -75.9787041),
                icon: imageBottom,
                label: {
                    text: "Tautog's Restaurant",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8582518, -75.98449),
                icon: imageBottom,
                label: {
                    text: "Aloha Snacks",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8568954, -75.9821296),
                icon: imageBottom,
                label: {
                    text: "7-Eleven",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8661456, -75.9826391),
                icon: imageTop,
                label: {
                    text: "7-Eleven",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(36.8464116, -75.9841651),
                icon: imageTop,
                label: {
                    text: "The Beach Bully BBQ",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#09357a'
                },
                map: _this.map
            });
            _this.setPosition = 0;
            var options = {
                enableHighAccuracy: true
            };
            var watch = _this.geolocation.watchPosition(options);
            watch.subscribe(function (data) {
                var updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                if (_this.setPosition == 0) {
                    _this.myMarker = new google.maps.Marker({
                        position: updatelocation,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            fillColor: '#0E77E9',
                            fillOpacity: 1,
                            strokeColor: '#FFFFFF',
                            strokeWeight: 1,
                            scale: 10
                        },
                        map: _this.map
                    });
                    _this.myLoc = updatelocation;
                    _this.setPosition = 1;
                }
                else {
                    _this.myLoc = updatelocation;
                    _this.myMarker.setPosition(updatelocation);
                }
            });
            /*google.maps.event.addListener(polyline, 'click', () => {
              infoWindow.open(this.map, polyline);
              console.log('in');
            });*/
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map" data-tap-disabled="true"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySchedulePageModule", function() { return MySchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_schedule__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MySchedulePageModule = /** @class */ (function () {
    function MySchedulePageModule() {
    }
    MySchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_schedule__["a" /* MySchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_schedule__["a" /* MySchedulePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], MySchedulePageModule);
    return MySchedulePageModule;
}());

//# sourceMappingURL=my-schedule.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_itinerary_itinerary__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MySchedulePage = /** @class */ (function () {
    function MySchedulePage(itineraryProvider, modalCtrl) {
        this.itineraryProvider = itineraryProvider;
        this.modalCtrl = modalCtrl;
        this.itinerary = [];
        this.itinerary = this.itineraryProvider.getItinerary();
    }
    MySchedulePage.prototype.eventClicked = function (event) {
        var eventModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__["a" /* EventModalPage */], { event: event });
        eventModal.present();
    };
    MySchedulePage.prototype.removeEvent = function (event) {
        this.itineraryProvider.deleteItineraryItem(event);
        this.itinerary = this.itineraryProvider.getItinerary();
    };
    MySchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-schedule',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/my-schedule/my-schedule.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="itinerary.length < 1" class="schedMessage">\n    <h3>You currently do not have any events added to your schedule</h3>\n  </div>\n\n  <div class="eventsCon">\n    <div class="events" ion-item *ngFor="let item of itinerary | dateSorter: \'date\'">\n      <div class="eventTitle">{{ item.name }}</div>\n\n      <div class="eventDate">\n          {{ item.date | date: \'mediumDate\' }} \n          <br>\n          {{ item.time }}\n      </div>\n\n      <div ion-row class="mySchedBtnCon">\n        <div ion-col col-6  >\n          <button ion-button color="sGreen" (click)="removeEvent(item)">\n            Remove Event\n          </button>\n        </div>\n        <div ion-col col-6>\n            <button ion-button color="sGreen" (click)="eventClicked(item)">\n              Open Event\n            </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/my-schedule/my-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_itinerary_itinerary__["a" /* ItineraryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MySchedulePage);
    return MySchedulePage;
}());

//# sourceMappingURL=my-schedule.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyPageModule", function() { return PartyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__party__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PartyPageModule = /** @class */ (function () {
    function PartyPageModule() {
    }
    PartyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__party__["a" /* PartyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__party__["a" /* PartyPage */]),
            ],
        })
    ], PartyPageModule);
    return PartyPageModule;
}());

//# sourceMappingURL=party.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartyPage = /** @class */ (function () {
    function PartyPage(dataProvider, modalCtrl) {
        this.dataProvider = dataProvider;
        this.modalCtrl = modalCtrl;
        this.events = [];
        this.events = this.dataProvider.getFestivities();
        for (var i = 0; i < this.events.length; i++) {
            if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d83e") {
                this.parade = this.events[i];
            }
            else if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d841") {
                this.happy = this.events[i];
            }
            else if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d847") {
                this.dinner = this.events[i];
            }
            else if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d84b") {
                this.awards = this.events[i];
            }
        }
    }
    PartyPage.prototype.openModal = function (event) {
        var eventModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__["a" /* EventModalPage */], { event: event });
        eventModal.present();
    };
    PartyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-party',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/party/party.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Festivities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="festWrapper">\n      <div class="festCon">\n        <h1 class="festTitle">\n            Parade of Athletes / Welcome Ceremony\n        </h1>\n\n        <p class="festContent">\n          All lifeguard and junior athletes, coaches and officials are invited to walk in the Championship Parade of Athletes. \n          The parade will be led by the Beach Events All-Star Marching Band from 31st Street to the 4th Street Park for a short welcome ceremony. \n          The Mayor of Virginia Beach, USLA President Peter Davis and a couple of others want to formally welcome you to the city and the 30th edition of the USLA National Lifeguard Championships.\n        </p>\n\n        <div class="buttonWrap">\n          <button ion-button color="water" (click)="openModal(parade)">\n            <div>Open Event</div>\n          </button>\n        </div>\n        \n      </div>\n      <div class="festCon">\n        <h1 class="festTitle">\n          Surf & Rescue Museum Happy Hour\n        </h1>\n\n        <p class="festContent">\n          Once the Welcome Ceremony is over, please take a moment to walk into the newly renovated Surf & Rescue Museum. \n          Those who were here in the past will remember it as the Old Coast Guard Station, but now it is truly committed to \n          the lifeguards and ocean rescue. Adults and competitors alike will enjoy the history of surf lifesaving in Virginia Beach with a section dedicated to the USLA.\n        </p>\n\n        <div class="buttonWrap">\n          <button ion-button color="water" (click)="openModal(happy)">\n            <div>Open Event</div>\n          </button>\n        </div>\n\n      </div>\n      <div class="festCon">\n        <h1 class="festTitle">\n          Competitor Dinner\n        </h1>\n\n        <p class="festContent">\n          The VBLA is graciously sponsoring a free dinner for the athletes before the Primetime National Beach \n          Flag Finals under the lights! Athletes will have their choice of two of the VB guards’ favorite restaurants, \n          Beach Bully with their famous barbecue and Pelon’s excellent Mexican fare!\n        </p>\n\n        <div class="buttonWrap">\n          <button ion-button color="water" (click)="openModal(dinner)">\n            <div>Open Event</div>\n          </button>\n        </div>\n\n      </div>\n      <div class="festCon">\n        <h1 class="festTitle">\n          Awards Party @ Peabody’s\n        </h1>\n\n        <p class="festContent">\n          Ask anyone from 2014 and they will tell you when the competition ends, the party begins! And there is only one place that can host a party big enough for this crew. The actual \n          trophy presentation to the winning teams will take place at 9:30pm sharp so make sure you have your sharpest party dress or outfit ready for a fun night of dancing and celebrating \n          the 30th edition of the USLA National Lifeguard Championships!\n        </p>\n\n        <div class="buttonWrap">\n          <button ion-button color="water" (click)="openModal(awards)">\n            <div>Open Event</div>\n          </button>\n        </div>\n      \n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/party/party.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], PartyPage);
    return PartyPage;
}());

//# sourceMappingURL=party.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPageModule", function() { return ProgramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgramPageModule = /** @class */ (function () {
    function ProgramPageModule() {
    }
    ProgramPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__program__["a" /* ProgramPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__program__["a" /* ProgramPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
        })
    ], ProgramPageModule);
    return ProgramPageModule;
}());

//# sourceMappingURL=program.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_types_result_types__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProgramPage = /** @class */ (function () {
    function ProgramPage(dataProvider, browser) {
        this.dataProvider = dataProvider;
        this.browser = browser;
        this.events = [];
        this.resultsPage = __WEBPACK_IMPORTED_MODULE_3__results_results__["a" /* ResultsPage */];
        this.resultTypes = __WEBPACK_IMPORTED_MODULE_4__result_types_result_types__["a" /* ResultTypesPage */];
    }
    ProgramPage.prototype.ionViewWillEnter = function () {
        var getProgram = this.dataProvider.getProgram();
        console.log(getProgram);
        this.events = getProgram.events;
    };
    ProgramPage.prototype.openPdf = function (url) {
        this.browser.create(url, "_system");
    };
    ProgramPage.prototype.website = function (url) {
        this.browser.create(url, "_system");
    };
    ProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-program',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/program/program.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Program</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <div class="pdfDownload">\n      <button ion-button [navPush]="resultTypes" [color]="water">Results Types</button>\n    </div>\n\n    <div class="pdfDownload">\n      <button ion-button icon-left [color]="water" (click)="openPdf(\'https://vistagraphics-my.sharepoint.com/:b:/g/personal/caleb_vgnet_com/EUYKlWxnxtdJrtXnwXgN8KgBeLz54cvhaXgJsUdR-SrV0w?e=Wc2Uy2\')">\n        <ion-icon name="document"></ion-icon>\n        Download Full PDF\n      </button>\n    </div>\n    <ngb-accordion [closeOthers]="true">\n        <ngb-panel *ngFor="let item of events; let j = index" id="static-{{j}}"> \n            <ng-template  ngbPanelTitle>\n            <div>\n              &nbsp;{{ item.name }}\n            </div>\n          </ng-template>\n          <ng-template ngbPanelContent>\n\n            <ion-card>\n              <ion-card-content>\n                  <img [src]="item.image">\n                  <div>{{ item.description }}</div>\n                  <div style="text-align: center; margin-top: 15px;" *ngIf="item.results != \'\'">\n                    <button class="addToBtn" ion-button round icon-left (click)="website(item.results)">\n                      <ion-icon name="globe"></ion-icon>\n                      <div>Results</div>\n                    </button>\n                  </div>\n              </ion-card-content>\n            </ion-card>\n          </ng-template>\n        </ngb-panel>\n    </ngb-accordion>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/program/program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ProgramPage);
    return ProgramPage;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultTypesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__individual_points_individual_points__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_scoring_team_scoring__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_results_event_results__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__junior_guard_results_junior_guard_results__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultTypesPage = /** @class */ (function () {
    function ResultTypesPage() {
        this.eventResults = __WEBPACK_IMPORTED_MODULE_3__event_results_event_results__["a" /* EventResultsPage */];
        this.individualPoints = __WEBPACK_IMPORTED_MODULE_1__individual_points_individual_points__["a" /* IndividualPointsPage */];
        this.teamScoring = __WEBPACK_IMPORTED_MODULE_2__team_scoring_team_scoring__["a" /* TeamScoringPage */];
        this.juniorGuardResults = __WEBPACK_IMPORTED_MODULE_4__junior_guard_results_junior_guard_results__["a" /* JuniorGuardResultsPage */];
    }
    ResultTypesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result-types',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/result-types/result-types.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Result Types</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <button ion-button full [navPush]="eventResults">\n    Event Results\n  </button>\n\n  <button ion-button full [navPush]="teamScoring">\n    Team Scoring\n  </button>\n\n  <button ion-button full [navPush]="individualPoints">\n    Individual Points\n  </button>\n\n  <button ion-button full [navPush]="juniorGuardResults">\n    Junior Guard Results\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/result-types/result-types.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ResultTypesPage);
    return ResultTypesPage;
}());

//# sourceMappingURL=result-types.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamScoringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamScoringPage = /** @class */ (function () {
    function TeamScoringPage(dataProvider) {
        this.dataProvider = dataProvider;
        this.aTeam = [];
        this.bTeam = [];
        this.openTeam = [];
        //chapter: any = [];
        this.region = [];
        this.teamOption = "aTeam";
        this.aTeam = this.dataProvider.getATeam();
        this.bTeam = this.dataProvider.getBTeam();
        this.openTeam = this.dataProvider.getOpenTeam();
        this.region = this.dataProvider.getRegionData();
        console.log(this.region);
    }
    TeamScoringPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-scoring',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/team-scoring/team-scoring.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Team Results</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-select [(ngModel)]="teamOption">\n      <ion-option value="aTeam">A Team Open & Age Group</ion-option>\n      <ion-option value="bTeam">B Team Open & Age Group</ion-option>\n      <ion-option value="openTeam">Open Team</ion-option>\n      <ion-option value="region">Open Region</ion-option>\n    </ion-select>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <div ion-fixed class="fixed-header">\n        <ion-row class="headerRow" *ngIf="teamOption != \'region\'">\n          <ion-col col-3>\n            Place\n          </ion-col>\n          <ion-col col-2>\n            Type\n          </ion-col>\n          <ion-col col-3>\n            Total Reg\n          </ion-col>\n          <ion-col col-4>\n            Total\n          </ion-col>\n        </ion-row>\n        <ion-row class="headerRow" *ngIf="teamOption == \'region\'">\n          <ion-col col-2>\n            Place\n          </ion-col>\n          <ion-col col-5>\n            Region\n          </ion-col>\n          <ion-col col-2>\n            Reg\n          </ion-col>\n          <ion-col col-3>\n            Total\n          </ion-col>\n        </ion-row>\n     </div>\n\n    <div [ngSwitch]="teamOption">\n        \n      <div *ngSwitchCase="\'aTeam\'">\n        <ion-grid class="outerGrid">\n          <!-- <ion-row class="headerRow">\n            <ion-col col-3>\n              Place\n            </ion-col>\n            <ion-col col-2>\n              Type\n            </ion-col>\n            <ion-col col-3>\n              Total Reg\n            </ion-col>\n            <ion-col col-4>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor="let item of aTeam" class="teamRow">\n            <ion-col>\n              <ion-card>\n                <ion-grid>\n                  <ion-row class="chapterRow">\n                    <ion-col col-12>\n                      {{ item.chapter}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>\n                      {{ item.rank }}\n                    </ion-col>\n                    <ion-col col-2>\n                      {{ item.chapterType }}\n                    </ion-col>\n                    <ion-col col-3>\n                      {{ item.totalReg }}\n                    </ion-col>\n                    <ion-col col-4>\n                      {{ item.points.toFixed(3) }}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n      <div *ngSwitchCase="\'bTeam\'">\n        <ion-grid class="outerGrid">\n          <!-- <ion-row class="headerRow">\n            <ion-col col-3>\n              Place\n            </ion-col>\n            <ion-col col-2>\n              Type\n            </ion-col>\n            <ion-col col-3>\n              Total Reg\n            </ion-col>\n            <ion-col col-4>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor="let item of bTeam" class="teamRow">\n            <ion-col>\n              <ion-card>\n                <ion-grid>\n                  <ion-row class="chapterRow">\n                    <ion-col col-12>\n                      {{ item.chapter}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>\n                      {{ item.rank }}\n                    </ion-col>\n                    <ion-col col-2>\n                      {{ item.chapterType }}\n                    </ion-col>\n                    <ion-col col-3>\n                      {{ item.totalReg }}\n                    </ion-col>\n                    <ion-col col-4>\n                      {{ item.points.toFixed(3) }}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n      <div *ngSwitchCase="\'openTeam\'">\n        <ion-grid class="outerGrid">\n          <!-- <ion-row class="headerRow">\n            <ion-col col-3>\n              Place\n            </ion-col>\n            <ion-col col-2>\n              Type\n            </ion-col>\n            <ion-col col-3>\n              Total Reg\n            </ion-col>\n            <ion-col col-4>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor="let item of openTeam" class="teamRow">\n            <ion-col>\n              <ion-card>\n                <ion-grid>\n                  <ion-row class="chapterRow">\n                    <ion-col col-12>\n                      {{ item.chapter}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>\n                      {{ item.rank }}\n                    </ion-col>\n                    <ion-col col-2>\n                      {{ item.chapterType }}\n                    </ion-col>\n                    <ion-col col-3>\n                      {{ item.totalReg }}\n                    </ion-col>\n                    <ion-col col-4>\n                      {{ item.points.toFixed(3) }}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n      <div *ngSwitchCase="\'region\'">\n        <ion-grid class="outerGrid">\n          <!-- <ion-row class="headerRow">\n            <ion-col col-2>\n              Place\n            </ion-col>\n            <ion-col col-5>\n              Region\n            </ion-col>\n            <ion-col col-2>\n              Total Reg\n            </ion-col>\n            <ion-col col-3>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor="let item of region">\n\n            <ion-col col-2>\n              {{ item.rank }}\n            </ion-col>\n            <ion-col col-5>\n              {{ item.region }}\n            </ion-col>\n            <ion-col col-2>\n              {{ item.totalReg }}\n            </ion-col>\n            <ion-col col-3>\n              {{ item.points.toFixed(3) }}\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n    \n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/team-scoring/team-scoring.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], TeamScoringPage);
    return TeamScoringPage;
}());

//# sourceMappingURL=team-scoring.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultTypesPageModule", function() { return ResultTypesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_types__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultTypesPageModule = /** @class */ (function () {
    function ResultTypesPageModule() {
    }
    ResultTypesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__result_types__["a" /* ResultTypesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__result_types__["a" /* ResultTypesPage */]),
            ],
        })
    ], ResultTypesPageModule);
    return ResultTypesPageModule;
}());

//# sourceMappingURL=result-types.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageModule", function() { return ResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResultsPageModule = /** @class */ (function () {
    function ResultsPageModule() {
    }
    ResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__results__["a" /* ResultsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__results__["a" /* ResultsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ResultsPageModule);
    return ResultsPageModule;
}());

//# sourceMappingURL=results.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDatePageModule", function() { return ScheduleDatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_date__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ScheduleDatePageModule = /** @class */ (function () {
    function ScheduleDatePageModule() {
    }
    ScheduleDatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedule_date__["a" /* ScheduleDatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule_date__["a" /* ScheduleDatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ScheduleDatePageModule);
    return ScheduleDatePageModule;
}());

//# sourceMappingURL=schedule-date.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleDatePage = /** @class */ (function () {
    function ScheduleDatePage(dataProvider, navParams, modalCtrl) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = [];
        this.selectedDate = this.navParams.get('date');
        this.allEvents = this.dataProvider.getEvents();
        var date;
        for (var x = 0; x < this.allEvents.length; x++) {
            date = new Date(this.allEvents[x].dateTime).getDate();
            if (date == this.selectedDate) {
                this.events.push(this.allEvents[x]);
            }
        }
    }
    ScheduleDatePage.prototype.eventClicked = function (event) {
        var eventModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__["a" /* EventModalPage */], { event: event });
        eventModal.present();
    };
    ScheduleDatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-date',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/schedule-date/schedule-date.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>August {{ selectedDate }}th</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="eventsCon">\n    <div class="events" ion-item *ngFor="let item of events | dateSorter: \'dateTime\'" (click)="eventClicked(item)">\n      <div class="eventTitle">{{ item.name }}</div>\n\n      <div class="eventDate">\n          {{ item.time }}\n          <div class="blankSpace"></div>\n          {{ item.dateTime | date: \'mediumDate\' }} \n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/schedule-date/schedule-date.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], ScheduleDatePage);
    return ScheduleDatePage;
}());

//# sourceMappingURL=schedule-date.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */]),
            ],
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_date_schedule_date__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_schedule_my_schedule__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulePage = /** @class */ (function () {
    function SchedulePage() {
        this.scheduleDate = __WEBPACK_IMPORTED_MODULE_1__schedule_date_schedule_date__["a" /* ScheduleDatePage */];
        this.mySchedule = __WEBPACK_IMPORTED_MODULE_2__my_schedule_my_schedule__["a" /* MySchedulePage */];
    }
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/schedule/schedule.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="no-scroll">\n\n  <div class="logoDiv">\n    <img src="https://www.usla.org/graphics/logo.png" />\n  </div>\n\n  <div class="outerCon">\n  <ion-grid class="buttonGrid">\n    <ion-row id="schedFirstRow">\n    <ion-col style="text-align: center;">\n      <button ion-button [navPush]="scheduleDate" [navParams]="{ date: \'5\' }">\n        <div>August 5th</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button [navPush]="scheduleDate" [navParams]="{ date: \'6\' }">\n        <div>August 6th</div>\n      </button>\n    </ion-col>\n  <!-- </ion-row>\n  <ion-row> -->\n    <ion-col>\n      <button ion-button [navPush]="scheduleDate" [navParams]="{ date: \'7\' }">\n        <div>August 7th</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button [navPush]="scheduleDate" [navParams]="{ date: \'8\' }">\n        <div>August 8th</div>\n      </button>\n    </ion-col>\n  <!-- </ion-row>\n  <ion-row> -->\n    <ion-col>\n      <button ion-button [navPush]="scheduleDate" [navParams]="{ date: \'9\' }">\n        <div>August 9th</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row id="schedLastRow">\n    <ion-col>\n      <button ion-button [navPush]="scheduleDate" [navParams]="{ date: \'10\' }">\n        <div>August 10th</div>\n      </button>\n    </ion-col>\n  <!-- </ion-row>\n  <ion-row> -->\n    <ion-col>\n      <button ion-button [navPush]="scheduleDate" [navParams]="{ date: \'11\' }">\n        <div>August 11th</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row id="schedRow">\n    <ion-col>\n      <button id="mySchedButton" block ion-button icon-left [navPush]="mySchedule">\n        <ion-icon name="list-box"></ion-icon>\n        <div>My Schedule</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/schedule/schedule.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_push_push__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(pushService, viewCtrl) {
        this.pushService = pushService;
        this.viewCtrl = viewCtrl;
        this.pushEnabled = pushService.getEnabled();
    }
    SettingsPage.prototype.pushChange = function () {
        if (this.pushEnabled == true) {
            this.pushEnabled = false;
            this.pushService.setPushEnabled(this.pushEnabled);
        }
        else {
            this.pushEnabled = true;
            this.pushService.setPushEnabled(this.pushEnabled);
        }
    };
    SettingsPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/settings/settings.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="onClose()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Settings</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-item class="push">\n      <ion-label>Push Notifications</ion-label>\n      <ion-toggle [checked]="pushEnabled" (ionChange)="pushChange()"></ion-toggle>\n    </ion-item>\n  \n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_push_push__["a" /* PushProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsPageModule", function() { return SponsorsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsors__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SponsorsPageModule = /** @class */ (function () {
    function SponsorsPageModule() {
    }
    SponsorsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sponsors__["a" /* SponsorsPage */]),
            ],
        })
    ], SponsorsPageModule);
    return SponsorsPageModule;
}());

//# sourceMappingURL=sponsors.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SponsorsPage = /** @class */ (function () {
    function SponsorsPage(dataProvider, browser) {
        this.dataProvider = dataProvider;
        this.browser = browser;
        this.options = {
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            closebuttoncaption: 'Close',
            toolbar: 'yes'
        };
        this.sponsors = this.dataProvider.getSponsors();
        console.log(this.sponsors);
    }
    SponsorsPage.prototype.call = function (phoneNum) {
        window.open("tel:" + phoneNum, "_system");
    };
    SponsorsPage.prototype.website = function (url) {
        this.browser.create(url, "_system", this.options);
    };
    SponsorsPage.prototype.directions = function (address) {
        var urlAddress = encodeURIComponent(address);
        if ((navigator.platform.indexOf("iPhone") != -1)
            || (navigator.platform.indexOf("iPod") != -1)
            || (navigator.platform.indexOf("iPad") != -1)) {
            window.open("https://www.google.com/maps/dir/?api=1&destination=" + urlAddress, '_blank');
        }
        else {
            window.open("https://www.google.com/maps/dir/?api=1&destination=" + urlAddress, '_system');
        }
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/sponsors/sponsors.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sponsors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="busCon">\n    <div class="events" ion-item *ngFor="let item of sponsors">\n        <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n              {{ item.name }}\n            </ion-card-title>\n\n            <div class="imageCon">\n              <img [src]="item.image"/>\n            </div>\n          </ion-card-content>\n          <ion-row *ngIf="item.address != \'\'" class="allInfo">\n            <ion-col col-4>\n              <button ion-button color="water" (click)="website(item.link)">\n                <div>Website</div>\n\n                <div>\n                  <ion-icon name=\'globe\'></ion-icon>\n                </div>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button color="water" (click)="directions(item.address)">\n                <div>Directions</div>\n\n                <div>\n                  <ion-icon name=\'car\'></ion-icon>\n                </div>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button color="water" (click)="call(item.phone)">\n                <div>Phone</div>\n                \n                <div>\n                  <ion-icon name=\'call\'></ion-icon>\n                </div>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="item.address == \'\'">\n            <ion-col style="text-align: center;">\n              <button ion-button icon-left color="water" (click)="website(item.link)">\n                <ion-icon name=\'globe\'></ion-icon>\n                Website\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/sponsors/sponsors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamScoringPageModule", function() { return TeamScoringPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_scoring__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamScoringPageModule = /** @class */ (function () {
    function TeamScoringPageModule() {
    }
    TeamScoringPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__team_scoring__["a" /* TeamScoringPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_scoring__["a" /* TeamScoringPage */]),
            ],
        })
    ], TeamScoringPageModule);
    return TeamScoringPageModule;
}());

//# sourceMappingURL=team-scoring.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_sorter_date_sorter__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_sorter_group_sorter__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_by_sort_by__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_group_sets_filter_group_sets__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sort_sort__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__date_sorter_date_sorter__["a" /* DateSorterPipe */],
                __WEBPACK_IMPORTED_MODULE_2__group_sorter_group_sorter__["a" /* GroupSorterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__sort_by_sort_by__["a" /* SortByPipe */],
                __WEBPACK_IMPORTED_MODULE_4__filter_group_sets_filter_group_sets__["a" /* FilterGroupSetsPipe */],
                __WEBPACK_IMPORTED_MODULE_5__sort_sort__["a" /* SortPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__date_sorter_date_sorter__["a" /* DateSorterPipe */],
                __WEBPACK_IMPORTED_MODULE_2__group_sorter_group_sorter__["a" /* GroupSorterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__sort_by_sort_by__["a" /* SortByPipe */],
                __WEBPACK_IMPORTED_MODULE_4__filter_group_sets_filter_group_sets__["a" /* FilterGroupSetsPipe */],
                __WEBPACK_IMPORTED_MODULE_5__sort_sort__["a" /* SortPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sponsors_sponsors__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_program__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__party_party__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.schedulePage = __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */];
        this.sponsorsPage = __WEBPACK_IMPORTED_MODULE_3__sponsors_sponsors__["a" /* SponsorsPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */];
        this.programPage = __WEBPACK_IMPORTED_MODULE_5__program_program__["a" /* ProgramPage */];
        this.partyPage = __WEBPACK_IMPORTED_MODULE_6__party_party__["a" /* PartyPage */];
        this.mapPage = __WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */];
        var res = [{
                latitude: 48.8698679,
                longitude: 2.3072976,
                country: 'France',
                countryCode: 'FR',
                city: 'Paris',
                zipcode: '75008',
                streetName: 'Champs-Élysées',
                streetNumber: '29',
                administrativeLevels: {
                    level1long: 'Île-de-France',
                    level1short: 'IDF',
                    level2long: 'Paris',
                    level2short: '75'
                },
                provider: 'google'
            }];
        console.log(res[0].latitude);
    }
    HomePage.prototype.openSettings = function () {
        var settingsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
        settingsModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <ion-title>Home</ion-title>\n\n    <ion-buttons start>\n        <button ion-button icon-only (click)="openSettings()">\n          <ion-icon name="settings"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-scroll">\n  <div class="logoDiv">\n    <img src="assets/imgs/homeLogo.jpg" />\n  </div>\n\n  <ion-grid class="btnGrid">\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button [navPush]="schedulePage">\n          <div>\n            <ion-icon name="calendar"></ion-icon>\n          </div>\n          \n          <div>\n            Schedule\n          </div>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button [navPush]="sponsorsPage">\n          <div>\n            <ion-icon name="help-buoy"></ion-icon>\n          </div>\n\n          <div>\n            Sponsors\n          </div>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button [navPush]="aboutPage">\n          <div>\n            <ion-icon name="information-circle"></ion-icon>\n          </div>\n          <div>\n            About\n          </div>\n          \n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button [navPush]="programPage">\n          <div>\n            <ion-icon name="list-box"></ion-icon>\n          </div>\n          \n          <div>\n            Program\n          </div>\n          \n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button [navPush]="partyPage">\n          <div>\n            <ion-icon name="beer"></ion-icon>\n          </div>\n          \n          <div>\n            Festivities\n          </div>\n          \n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button [navPush]="mapPage">\n          <div>\n            <ion-icon name="map"></ion-icon>\n          </div>\n          \n          <div>\n              Map\n          </div>\n          \n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_pipes_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_itinerary_itinerary__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_push_push__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_map_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_schedule_my_schedule_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_party_party_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_program_program_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_schedule_date_schedule_date_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_schedule_schedule_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings_module__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_sponsors_sponsors_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_event_modal_event_modal_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_results_results_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_event_results_event_results_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_result_types_result_types_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_individual_points_individual_points_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_team_scoring_team_scoring_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_junior_guard_results_junior_guard_results_module__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    backButtonIcon: "ios-arrow-back",
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comp-search/comp-search.module#CompSearchPageModule', name: 'CompSearchPage', segment: 'comp-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-results/event-results.module#EventResultsPageModule', name: 'EventResultsPage', segment: 'event-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/individual-points/individual-points.module#IndividualPointsPageModule', name: 'IndividualPointsPage', segment: 'individual-points', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/junior-guard-results/junior-guard-results.module#JuniorGuardResultsPageModule', name: 'JuniorGuardResultsPage', segment: 'junior-guard-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-schedule/my-schedule.module#MySchedulePageModule', name: 'MySchedulePage', segment: 'my-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/party/party.module#PartyPageModule', name: 'PartyPage', segment: 'party', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program/program.module#ProgramPageModule', name: 'ProgramPage', segment: 'program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result-types/result-types.module#ResultTypesPageModule', name: 'ResultTypesPage', segment: 'result-types', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-date/schedule-date.module#ScheduleDatePageModule', name: 'ScheduleDatePage', segment: 'schedule-date', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sponsors/sponsors.module#SponsorsPageModule', name: 'SponsorsPage', segment: 'sponsors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-scoring/team-scoring.module#TeamScoringPageModule', name: 'TeamScoringPage', segment: 'team-scoring', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_map_map_module__["MapPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_my_schedule_my_schedule_module__["MySchedulePageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_party_party_module__["PartyPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_program_program_module__["ProgramPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_schedule_date_schedule_date_module__["ScheduleDatePageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_schedule_schedule_module__["SchedulePageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_sponsors_sponsors_module__["SponsorsPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_event_modal_event_modal_module__["EventModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_results_results_module__["ResultsPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_result_types_result_types_module__["ResultTypesPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_event_results_event_results_module__["EventResultsPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_individual_points_individual_points_module__["IndividualPointsPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_team_scoring_team_scoring_module__["TeamScoringPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_junior_guard_results_junior_guard_results_module__["JuniorGuardResultsPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_itinerary_itinerary__["a" /* ItineraryProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_push_push__["a" /* PushProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateSorterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateSorterPipe = /** @class */ (function () {
    function DateSorterPipe() {
    }
    DateSorterPipe.prototype.transform = function (array, args) {
        if (typeof args[0] === "undefined") {
            return array;
        }
        var direction = args[0][0];
        var column = args.replace('-', '');
        array.sort(function (a, b) {
            var left = Number(new Date(a[column]));
            var right = Number(new Date(b[column]));
            return (direction === "-") ? right - left : left - right;
        });
        return array;
    };
    DateSorterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'dateSorter',
        })
    ], DateSorterPipe);
    return DateSorterPipe;
}());

//# sourceMappingURL=date-sorter.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSorterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupSorterPipe = /** @class */ (function () {
    function GroupSorterPipe() {
    }
    GroupSorterPipe.prototype.transform = function (competitors, group, adult) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (adult == true) {
            //console.log(group);
            return competitors.filter(function (item) { return item.ageGroupName.indexOf(group) !== -1; });
        }
        else {
            return competitors.filter(function (item) { return item.scoreId.indexOf(group) !== -1; });
        }
    };
    GroupSorterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'groupSorter',
        })
    ], GroupSorterPipe);
    return GroupSorterPipe;
}());

//# sourceMappingURL=group-sorter.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByPipe = /** @class */ (function () {
    function SortByPipe() {
    }
    /*transform(array: Array<string>, args: string): Array<string> {
      array.sort((a: any, b: any) => {
          if ( a[args] < b[args] ){
              return -1;
          }else if( a[args] > b[args] ){
              return 1;
          }else{
              return 0;
          }
      });
      return array;
      }*/
    SortByPipe.prototype.transform = function (array) {
        var _this = this;
        return Array.from(array).sort(function (item1, item2) {
            return _this.orderByComparator(item2['first'] + ' ' + item2['last'], item1['first'] + ' ' + item1['last']);
        });
    };
    SortByPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() > b.toLowerCase())
                return -1;
            if (a.toLowerCase() < b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) > parseFloat(b))
                return -1;
            if (parseFloat(a) < parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    SortByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sortBy',
        })
    ], SortByPipe);
    return SortByPipe;
}());

//# sourceMappingURL=sort-by.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterGroupSetsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterGroupSetsPipe = /** @class */ (function () {
    function FilterGroupSetsPipe() {
    }
    FilterGroupSetsPipe.prototype.transform = function (groupSets, genderSpecificEventBrackets) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return groupSets.filter(function (item) { return genderSpecificEventBrackets.includes(item); });
    };
    FilterGroupSetsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filterGroupSets',
        })
    ], FilterGroupSetsPipe);
    return FilterGroupSetsPipe;
}());

//# sourceMappingURL=filter-group-sets.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, arg) {
        var _this = this;
        return Array.from(array).sort(function (item1, item2) {
            return _this.orderByComparator(item2['place'], item1['place']);
        });
    };
    SortPipe.prototype.orderByComparator = function (a, b) {
        //console.log(a);
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() > b.toLowerCase())
                return -1;
            if (a.toLowerCase() < b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) > parseFloat(b))
                return -1;
            if (parseFloat(a) < parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_itinerary_itinerary__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_push_push__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, itineraryProvider, dataProvider, pushService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.itineraryProvider = itineraryProvider;
        this.dataProvider = dataProvider;
        this.pushService = pushService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.dataProvider.popEvents();
            _this.itineraryProvider.fetchItineraryList();
            _this.pushService.fetchPush()
                .then(function () {
                //alert(platform.is('cordova'));
                if (_this.platform.is('cordova')) {
                    _this.initPushwoosh();
                }
            });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initPushwoosh = function () {
        var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
        //set push notifications handler
        document.addEventListener('push-notification', function (event) {
            var title = event.notification.message;
            var userData = event.notification.userdata;
            //var title = "Titel";
            //var userData = "Userdata Text";
            if (typeof (userData) != "undefined") {
                console.warn('user data: ' + JSON.stringify(userData));
                //alert(JSON.stringify(userData));
            }
            alert("Push Notification\n" + title);
        });
        //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
        pushNotification.onDeviceReady({ projectid: "981996647565", pw_appid: "505DC-013E4" });
        this.pushEnabled = this.pushService.getEnabled();
        //alert(this.pushEnabled);
        if (this.pushEnabled == true) {
            //register for pushes
            pushNotification.registerDevice(function (status) {
                var pushToken = status;
                console.warn('push token: ' + pushToken);
            }, function (status) {
                console.warn(JSON.stringify(['failed to register ', status]));
                //alert(JSON.stringify(['failed to register ', status]));
            });
        }
        else {
            pushNotification.unregisterDevice();
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/app/app.html"*/'<!--><ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>-->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_itinerary_itinerary__["a" /* ItineraryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_push_push__["a" /* PushProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_itinerary_itinerary__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventModalPage = /** @class */ (function () {
    function EventModalPage(viewCtrl, navParams, calendar, itineraryProvider, alertCtrl, toastCtrl, browser) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.itineraryProvider = itineraryProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.browser = browser;
        this.today = new Date();
        this.event = this.navParams.get('event');
        this.isIn = this.itineraryProvider.eventInItinerary(this.event);
        console.log(this.isIn);
    }
    EventModalPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.addOption = function () {
        var _this = this;
        if (this.isIn == -1) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Where to add?',
                message: 'Would you like to add this to your phones native calendar with alarm and navigation settings or to this apps itinerary page?',
                buttons: [
                    {
                        text: 'Add to Phone Calendar',
                        handler: function () {
                            _this.addToCalendar();
                        }
                    },
                    {
                        text: 'Add to App Itinerary',
                        handler: function () {
                            _this.addToItinerary();
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var confirm_2 = this.alertCtrl.create({
                title: 'Where to add?',
                message: 'Event already in Itinerary. Would you like to add this to your phones native calendar with alarm and navigation settings?',
                buttons: [
                    {
                        text: 'Add to Phone Calendar',
                        handler: function () {
                            _this.addToCalendar();
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function () {
                        }
                    }
                ]
            });
            confirm_2.present();
        }
    };
    EventModalPage.prototype.website = function (url) {
        this.browser.create(url, "_system");
    };
    EventModalPage.prototype.addToCalendar = function () {
        var endDate = new Date(this.event.date + '-04:00');
        //console.log(startDate.getDate());
        endDate.setHours((endDate.getHours() + this.event.duration));
        this.calendar.createEventInteractively(this.event.name, this.event.address, this.event.info, new Date((this.event.date + "-04:00")), endDate)
            .then(function (msg) { console.log(msg); }, function (err) { console.log(err); });
    };
    EventModalPage.prototype.addToItinerary = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add to Itinerary',
            message: "Save this event to your itinerary?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.itineraryProvider.addToItinerary(_this.event);
                        var toast = _this.toastCtrl.create({
                            message: 'Successfully Added to Itinerary',
                            duration: 1500,
                            position: 'bottom'
                        });
                        toast.present();
                        _this.isIn = _this.itineraryProvider.eventInItinerary(_this.event);
                        //console.log(this.isIn);
                    }
                }
            ]
        });
        prompt.present();
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/event-modal/event-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onClose()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="eventWrapper">\n    <ion-grid id="topGrid">\n      <ion-row class="eventTitleRow">\n        <ion-col class="eventTitleCol">\n          <h2 class="eventTitle">{{ event.name }}</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row class="eventAddressRow">\n        <ion-col class="eventAddressCol">\n          <div class="eventAddress">\n            {{ event.address }}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="eventDateRow">\n        <ion-col class="eventDateCol">\n          <div class="eventDate">\n              {{ event.dateTime | date: \'mediumDate\' }}\n          </div>\n          <div class="eventTime">\n              {{ event.time }}\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="eventInfo" *ngIf="event.info != \'\'">\n      {{ event.info }}\n    </div>\n\n    <ion-grid id="bottomGrid">\n      <!-- <ion-row *ngIf="event.info != \'\'" class="eventInfoRow">\n        <ion-col class="eventInfoCol">\n          \n        </ion-col>\n      </ion-row> -->\n      <ion-row class="addToBtnRow" *ngIf="event.url != \'\'">\n        <ion-col class="addToBtnCol" text-center align-self-center>\n          <button class="addToBtn" ion-button round icon-left (click)="website(event.url)">\n            <ion-icon name="globe"></ion-icon>\n            <div>Website</div>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="addToBtnCol" text-center align-self-center>\n          <button class="addToBtn" ion-button round icon-left (click)="directions(event.location)">\n            <ion-icon name="car"></ion-icon>\n            <div>Directions</div>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row class="addToBtnRow">\n        <ion-col class="addToBtnCol" text-center align-self-center>\n          <button class="addToBtn" ion-button round icon-left (click)="addOption()">\n            <ion-icon name="add-circle"></ion-icon>\n            <div>Add to Calendar</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/event-modal/event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_3__providers_itinerary_itinerary__["a" /* ItineraryProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItineraryProvider = /** @class */ (function () {
    function ItineraryProvider(storage) {
        this.storage = storage;
        this.itineraryList = [];
    }
    ItineraryProvider.prototype.addToItinerary = function (event) {
        var _this = this;
        this.itineraryList.push(event);
        this.storage.set('itinerary', JSON.stringify(this.itineraryList))
            .then()
            .catch(function (err) {
            console.log(err);
            _this.itineraryList.splice(_this.itineraryList.findIndex(function (x) { return x._id.$oid == event['_id']['$oid']; }), 1);
        });
    };
    ItineraryProvider.prototype.loadItineraryList = function () {
        return this.itineraryList.slice();
    };
    ItineraryProvider.prototype.fetchItineraryList = function () {
        var _this = this;
        this.storage.get('itinerary').then(function (val) {
            if (val) {
                //this.itineraryList = val;
                _this.itineraryList = JSON.parse(val);
            }
            else {
                _this.itineraryList = [];
            }
        });
    };
    ItineraryProvider.prototype.getItinerary = function () {
        return this.itineraryList.slice();
    };
    ItineraryProvider.prototype.eventInItinerary = function (event) {
        return this.itineraryList.findIndex(function (x) { return x._id.$oid == event['_id']['$oid']; });
    };
    ItineraryProvider.prototype.deleteItineraryItem = function (event) {
        //const itineraryItem = this.itineraryList[index];
        this.itineraryList.splice(this.itineraryList.findIndex(function (x) { return x._id.$oid == event['_id']['$oid']; }), 1);
        this.storage.set('itinerary', JSON.stringify(this.itineraryList))
            .then(function () {
        })
            .catch(function (err) { return console.log(err); });
    };
    ItineraryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ItineraryProvider);
    return ItineraryProvider;
}());

//# sourceMappingURL=itinerary.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsPage = /** @class */ (function () {
    function ResultsPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
        /*events: any = ["Beach Flags", "Rescue Race-JG", "Rescue Race-U19", "Ironguard", "Board Race", "4 x 100 Run Relay", "2K Beach Run", "Surf Race", "Run-Swim-Run",
        "Surf Ski Race", "American Ironperson", "Ironperson", "Surf Boat Race", "Rescue Race", "Swim Relay", "Distance Run", "Surf Swim Race", "Ironperson-U19", "Surf Ski-U19"];
      */
        //eventData: any = [];
        this.arg = 'place';
        this.adults = this.navParams.get('adults');
        this.selectedEvent = this.navParams.get('selectedEvent');
        this.ageGroup = this.navParams.get('ageGroup');
        this.gender = this.navParams.get('gender');
        this.results = this.navParams.get('gsed');
        /*if (this.adults == true) {
          this.ageGroup = this.navParams.get('ageGroup');
      
          //console.log(this.results);
          //this.popAdultResults();
        }
        console.log(this.ageGroup);*/
        console.log(this.results);
    }
    ResultsPage.prototype.popAdultResults = function () {
        /* if (this.selectedEvent == "Beach Flags") {
           this.eventData = this.dataProvider.getBeachFlagsAdults();
         } else if (this.selectedEvent == "Ironguard") {
           this.eventData = this.dataProvider.getIronguardAdults();
         } else if (this.selectedEvent == "Board Race") {
           this.eventData = this.dataProvider.getBoardRaceAdults();
         } else if (this.selectedEvent == "4 x 100 Run Relay") {
           this.eventData = this.dataProvider.getRunRelay();
         } else if (this.selectedEvent == "2K Beach Run") {
           this.eventData = this.dataProvider.getBeachRun();
         } else if (this.selectedEvent == "Surf Race") {
           this.eventData = this.dataProvider.getSurfRace();
         } else if (this.selectedEvent == "Run-Swim-Run") {
           this.eventData = this.dataProvider.getRunSwimRunAdults();
         } else if (this.selectedEvent == "Surf Ski Race") {
           this.eventData = this.dataProvider.getSurfSkiRace();
         } else if (this.selectedEvent == "American Ironperson") {
           this.eventData = this.dataProvider.getAmericanIronperson();
         } else if (this.selectedEvent == "Ironperson") {
           this.eventData = this.dataProvider.getIronperson();
         } else if (this.selectedEvent == "Surf Boat Race") {
           this.eventData = this.dataProvider.getSurfBoatRace();
         } else if (this.selectedEvent == "Rescue Race") {
           this.eventData = this.dataProvider.getRescueRace();
         } else if (this.selectedEvent == "Surf Swim Race") {
           this.eventData = this.dataProvider.getSurfSwimRaceAdults();
         }
     
         console.log(this.eventData); */
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/results/results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="ageGroup" id="outerGrid">\n\n    <ion-card *ngFor="let item of results | groupSorter: ageGroup: adults | sort">\n\n        <ion-grid id="innerGrid">\n          <ion-row align-items-center>\n\n            <ion-col col-2>\n              <h1>{{ item.place }}</h1>\n            </ion-col>\n\n            <ion-col col-10>\n              <h1>{{ item.first }} {{ item.last }}</h1>\n            </ion-col>\n\n          </ion-row>\n          <ion-row>\n\n            <ion-col>\n              <div>\n                Points: {{ item.points }}\n              </div>\n            </ion-col>\n\n            <ion-col>\n              <div>\n                Number: {{ item.id }} \n              </div>\n            </ion-col>\n\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div>\n                Chapter:<br> {{ item.chapter }}\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div>\n                Region:<br> {{ item.regionName }}\n              </div>\n            </ion-col>\n          </ion-row>\n            \n        </ion-grid>\n    </ion-card>\n\n  </div>\n\n  <div *ngIf="!ageGroup" id="outerGrid">\n    <ion-card *ngFor="let item of results | sort">\n          <ion-grid id="innerGrid">\n            <ion-row align-items-center>\n\n              <ion-col col-2>\n                <h1>{{ item.place }}</h1>\n              </ion-col>\n\n              <ion-col col-10>\n                <h1>{{ item.first }} {{ item.last }}</h1>\n              </ion-col>\n\n            </ion-row>\n            <ion-row>\n\n              <ion-col>\n                <div>\n                  Points: {{ item.points }}\n                </div>\n              </ion-col>\n\n              <ion-col>\n                <div>\n                  Number: {{ item.id }} \n                </div>\n              </ion-col>\n\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div>\n                  Chapter:<br> {{ item.chapter }}\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div>\n                  Region:<br> {{ item.regionName }}\n                </div>\n              </ion-col>\n            </ion-row>\n              \n          </ion-grid>\n\n        </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map