(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["individual-points-individual-points-module"],{

/***/ "./src/app/individual-points/individual-points.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/individual-points/individual-points.module.ts ***!
  \***************************************************************/
/*! exports provided: IndividualPointsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPointsPageModule", function() { return IndividualPointsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _individual_points_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./individual-points.page */ "./src/app/individual-points/individual-points.page.ts");







var routes = [
    {
        path: '',
        component: _individual_points_page__WEBPACK_IMPORTED_MODULE_6__["IndividualPointsPage"]
    }
];
var IndividualPointsPageModule = /** @class */ (function () {
    function IndividualPointsPageModule() {
    }
    IndividualPointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_individual_points_page__WEBPACK_IMPORTED_MODULE_6__["IndividualPointsPage"]]
        })
    ], IndividualPointsPageModule);
    return IndividualPointsPageModule;
}());



/***/ }),

/***/ "./src/app/individual-points/individual-points.page.html":
/*!***************************************************************!*\
  !*** ./src/app/individual-points/individual-points.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"result-types\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Individual Points</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n      <ion-segment color=\"primary\" [(ngModel)]=\"category\">\n        <ion-segment-button value=\"men\">\n          Open Men\n        </ion-segment-button>\n        <ion-segment-button value=\"women\">\n          Open Women\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div ion-fixed class=\"fixed-header\">\n        <ion-row class=\"headerRow\">\n          <ion-col size=\"2\">\n            Rank\n          </ion-col>\n          <ion-col size=\"7\">\n            Name\n          </ion-col>\n          <ion-col size=\"3\">\n            Points\n          </ion-col>\n        </ion-row>\n      </div>\n  \n      <div [ngSwitch]=\"category\">\n          \n        <div *ngSwitchCase=\"'men'\">\n          <ion-grid>\n            <!--<ion-row class=\"headerRow\">\n              <ion-col col-2>\n                Rank\n              </ion-col>\n              <ion-col col-7>\n                Name\n              </ion-col>\n              <ion-col col-3>\n                Points\n              </ion-col>\n            </ion-row>-->\n            <ion-row *ngFor=\"let item of men\" class=\"compRows\">\n  \n              <ion-col size=\"2\">\n                {{ item.rank }}\n              </ion-col>\n              <ion-col size=\"7\" class=\"nameCol\">\n                {{ item.first }} {{ item.last }}\n              </ion-col>\n              <ion-col size=\"3\" class=\"pointsCol\">\n                {{ item.points.toFixed(3) }}\n              </ion-col>\n            </ion-row>\n                    \n          </ion-grid>\n        </div>\n          \n        <div *ngSwitchCase=\"'women'\">\n          <ion-grid>\n            <!--<ion-row class=\"headerRow\">\n              <ion-col col-2>\n                Rank\n              </ion-col>\n              <ion-col col-7>\n                Name\n              </ion-col>\n              <ion-col col-3>\n                Points\n              </ion-col>\n            </ion-row> -->\n            <ion-row *ngFor=\"let item of women\" class=\"compRows\">\n  \n              <ion-col size=\"2\">\n                {{ item.rank }}\n              </ion-col>\n              <ion-col size=\"7\" class=\"nameCol\">\n                {{ item.first }} {{ item.last }}\n              </ion-col>\n              <ion-col size=\"3\" class=\"pointsCol\">\n                {{ item.points.toFixed(3) }}\n              </ion-col>\n            </ion-row>\n                    \n          </ion-grid>\n        </div>\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/individual-points/individual-points.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/individual-points/individual-points.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar-input {\n  background-color: white !important; }\n\nion-segment-button {\n  color: white !important;\n  font-weight: bold;\n  border-color: #d63d3d !important;\n  height: 40px; }\n\n.headerRow ion-col {\n  font-weight: 600; }\n\n.headerRow {\n  border-bottom: 1px solid black !important;\n  text-align: center; }\n\nion-grid {\n  padding: 0px; }\n\n.pointsCol, .nameCol {\n  padding-left: 5px !important; }\n\nion-col {\n  border-left: 1px solid black; }\n\nion-row > ion-col:first-of-type {\n  border-left: none !important;\n  text-align: center; }\n\nion-row ion-col {\n  padding: 10px 0px; }\n\nion-row {\n  border-bottom: 0.55px solid rgba(0, 0, 0, 0.322); }\n\n.fixed-header {\n  height: 28px;\n  width: 100%;\n  z-index: 1;\n  /* \n        The ionic header bar is 43px in height,\n        put your content below the header bar.\n    */ }\n\n.fixed-header ion-col {\n  height: 28px;\n  padding: 5px 0px !important; }\n\n.scroll-content {\n  margin-top: 116px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9pbmRpdmlkdWFsLXBvaW50cy9pbmRpdmlkdWFsLXBvaW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZGl2aWR1YWwtcG9pbnRzL2luZGl2aWR1YWwtcG9pbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFpQyxFQUFBOztBQUdyQztFQUNJLHVCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0NBQXdDO0VBQ3hDLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5Q0FBd0M7RUFDeEMsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLDRCQUEyQixFQUFBOztBQUcvQjtFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLDRCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTs7QUFPdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnREFBZ0QsRUFBQTs7QUFHcEQ7RUFFSSxZQUFZO0VBQ1osV0FBVTtFQUVWLFVBQVU7RUFDVjs7O0tDZkMsRURrQkM7O0FBR047RUFDSSxZQUFZO0VBQ1osMkJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksNEJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmRpdmlkdWFsLXBvaW50cy9pbmRpdmlkdWFsLXBvaW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoYmFyLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTQsIDYxLCA2MSkhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmhlYWRlclJvdyBpb24tY29sIHtcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZGVyUm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2shaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wb2ludHNDb2wsIC5uYW1lQ29sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbmlvbi1yb3cgPiBpb24tY29sOmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1yb3c6bnRoLWNoaWxkKDIpIGlvbi1jb2wge1xuICAgIC8vcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmlvbi1yb3cgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlvbi1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDAuNTVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzIyKTtcbn1cblxuLmZpeGVkLWhlYWRlcntcbiAgICAvL21hcmdpbi10b3A6IDg2cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLy9wb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIFxuICAgICAgICBUaGUgaW9uaWMgaGVhZGVyIGJhciBpcyA0M3B4IGluIGhlaWdodCxcbiAgICAgICAgcHV0IHlvdXIgY29udGVudCBiZWxvdyB0aGUgaGVhZGVyIGJhci5cbiAgICAqL1xufVxuXG4uZml4ZWQtaGVhZGVyIGlvbi1jb2wge1xuICAgIGhlaWdodDogMjhweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMTZweCFpbXBvcnRhbnQ7XG59ICIsIi5zZWFyY2hiYXItaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWNvbG9yOiAjZDYzZDNkICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweDsgfVxuXG4uaGVhZGVyUm93IGlvbi1jb2wge1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5oZWFkZXJSb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5wb2ludHNDb2wsIC5uYW1lQ29sIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDsgfVxuXG5pb24tY29sIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjazsgfVxuXG5pb24tcm93ID4gaW9uLWNvbDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbmlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4OyB9XG5cbmlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMyMik7IH1cblxuLmZpeGVkLWhlYWRlciB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIC8qIFxuICAgICAgICBUaGUgaW9uaWMgaGVhZGVyIGJhciBpcyA0M3B4IGluIGhlaWdodCxcbiAgICAgICAgcHV0IHlvdXIgY29udGVudCBiZWxvdyB0aGUgaGVhZGVyIGJhci5cbiAgICAqLyB9XG5cbi5maXhlZC1oZWFkZXIgaW9uLWNvbCB7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogNXB4IDBweCAhaW1wb3J0YW50OyB9XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDExNnB4ICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/individual-points/individual-points.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/individual-points/individual-points.page.ts ***!
  \*************************************************************/
/*! exports provided: IndividualPointsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPointsPage", function() { return IndividualPointsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scoring_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scoring-data.service */ "./src/app/scoring-data.service.ts");



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
    IndividualPointsPage.prototype.ngOnInit = function () {
    };
    IndividualPointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-individual-points',
            template: __webpack_require__(/*! ./individual-points.page.html */ "./src/app/individual-points/individual-points.page.html"),
            styles: [__webpack_require__(/*! ./individual-points.page.scss */ "./src/app/individual-points/individual-points.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scoring_data_service__WEBPACK_IMPORTED_MODULE_2__["ScoringDataService"]])
    ], IndividualPointsPage);
    return IndividualPointsPage;
}());



/***/ })

}]);
//# sourceMappingURL=individual-points-individual-points-module.js.map