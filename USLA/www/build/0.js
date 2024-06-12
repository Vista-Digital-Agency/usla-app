webpackJsonp([0],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompSearchPageModule", function() { return CompSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_search__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompSearchPageModule = /** @class */ (function () {
    function CompSearchPageModule() {
    }
    CompSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comp_search__["a" /* CompSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comp_search__["a" /* CompSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CompSearchPageModule);
    return CompSearchPageModule;
}());

//# sourceMappingURL=comp-search.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompSearchPage; });
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


var CompSearchPage = /** @class */ (function () {
    function CompSearchPage(dataProvider) {
        this.dataProvider = dataProvider;
        this.searchQuery = '';
        this.competitors = [];
        this.initializeItems();
    }
    CompSearchPage.prototype.initializeItems = function () {
        this.competitors = this.dataProvider.getCompetitors();
    };
    CompSearchPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.competitors = this.competitors.filter(function (v) {
            if (v.first && v.last && q) {
                if (q.indexOf(' ') > -1) {
                    var firstName = q.substring(0, q.indexOf(' '));
                    var lastName = q.substring(q.indexOf(' ') + 1);
                    //console.log(item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1);
                    if (v.first.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && v.last.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if (v.first.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1 || v.last.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        });
    };
    CompSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comp-search',template:/*ion-inline-start:"/Users/clew/Desktop/USLA/src/pages/comp-search/comp-search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search Competitors</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <form>\n      <ion-searchbar [type]="search" (ionInput)="getItems($event)"></ion-searchbar>\n    </form>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of competitors | sortBy"  (click)="competitorClick(item)">\n      <ion-label>{{ item.first }} {{ item.last }}</ion-label>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/USLA/src/pages/comp-search/comp-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], CompSearchPage);
    return CompSearchPage;
}());

//# sourceMappingURL=comp-search.js.map

/***/ })

});
//# sourceMappingURL=0.js.map