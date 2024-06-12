(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-scoring-team-scoring-module"],{

/***/ "./src/app/team-scoring/team-scoring.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/team-scoring/team-scoring.module.ts ***!
  \*****************************************************/
/*! exports provided: TeamScoringPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamScoringPageModule", function() { return TeamScoringPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _team_scoring_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-scoring.page */ "./src/app/team-scoring/team-scoring.page.ts");







var routes = [
    {
        path: '',
        component: _team_scoring_page__WEBPACK_IMPORTED_MODULE_6__["TeamScoringPage"]
    }
];
var TeamScoringPageModule = /** @class */ (function () {
    function TeamScoringPageModule() {
    }
    TeamScoringPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_team_scoring_page__WEBPACK_IMPORTED_MODULE_6__["TeamScoringPage"]]
        })
    ], TeamScoringPageModule);
    return TeamScoringPageModule;
}());



/***/ }),

/***/ "./src/app/team-scoring/team-scoring.page.html":
/*!*****************************************************!*\
  !*** ./src/app/team-scoring/team-scoring.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"result-types\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Team Scoring</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n  <ion-select id=\"teamSelect\" [(ngModel)]=\"teamOption\">\n      <ion-select-option value=\"aTeam\">A Team Open & Age Group</ion-select-option>\n      <ion-select-option value=\"bTeam\">B Team Open & Age Group</ion-select-option>\n      <ion-select-option value=\"openTeam\">Open Team</ion-select-option>\n      <ion-select-option value=\"region\">Open Region</ion-select-option>\n    </ion-select>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div ion-fixed class=\"fixed-header\">\n        <ion-row class=\"headerRow\" *ngIf=\"teamOption != 'region'\">\n          <ion-col col-3>\n            Place\n          </ion-col>\n          <ion-col col-2>\n            Type\n          </ion-col>\n          <ion-col col-3>\n            Total Reg\n          </ion-col>\n          <ion-col col-4>\n            Total\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"headerRow\" *ngIf=\"teamOption == 'region'\">\n          <ion-col col-2>\n            Place\n          </ion-col>\n          <ion-col col-5>\n            Region\n          </ion-col>\n          <ion-col col-2>\n            Reg\n          </ion-col>\n          <ion-col col-3>\n            Total\n          </ion-col>\n        </ion-row>\n     </div>\n\n    <div [ngSwitch]=\"teamOption\">\n        \n      <div *ngSwitchCase=\"'aTeam'\">\n        <ion-grid class=\"outerGrid\">\n          <!-- <ion-row class=\"headerRow\">\n            <ion-col col-3>\n              Place\n            </ion-col>\n            <ion-col col-2>\n              Type\n            </ion-col>\n            <ion-col col-3>\n              Total Reg\n            </ion-col>\n            <ion-col col-4>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor=\"let item of aTeam\" class=\"teamRow\">\n            <ion-col>\n              <ion-card>\n                <ion-grid>\n                  <ion-row class=\"chapterRow\">\n                    <ion-col col-12>\n                      {{ item.chapter}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>\n                      {{ item.rank }}\n                    </ion-col>\n                    <ion-col col-2>\n                      {{ item.chapterType }}\n                    </ion-col>\n                    <ion-col col-3>\n                      {{ item.totalReg }}\n                    </ion-col>\n                    <ion-col col-4>\n                      {{ item.points.toFixed(3) }}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n      <div *ngSwitchCase=\"'bTeam'\">\n        <ion-grid class=\"outerGrid\">\n          <!-- <ion-row class=\"headerRow\">\n            <ion-col col-3>\n              Place\n            </ion-col>\n            <ion-col col-2>\n              Type\n            </ion-col>\n            <ion-col col-3>\n              Total Reg\n            </ion-col>\n            <ion-col col-4>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor=\"let item of bTeam\" class=\"teamRow\">\n            <ion-col>\n              <ion-card>\n                <ion-grid>\n                  <ion-row class=\"chapterRow\">\n                    <ion-col col-12>\n                      {{ item.chapter}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>\n                      {{ item.rank }}\n                    </ion-col>\n                    <ion-col col-2>\n                      {{ item.chapterType }}\n                    </ion-col>\n                    <ion-col col-3>\n                      {{ item.totalReg }}\n                    </ion-col>\n                    <ion-col col-4>\n                      {{ item.points.toFixed(3) }}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n      <div *ngSwitchCase=\"'openTeam'\">\n        <ion-grid class=\"outerGrid\">\n          <!-- <ion-row class=\"headerRow\">\n            <ion-col col-3>\n              Place\n            </ion-col>\n            <ion-col col-2>\n              Type\n            </ion-col>\n            <ion-col col-3>\n              Total Reg\n            </ion-col>\n            <ion-col col-4>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor=\"let item of openTeam\" class=\"teamRow\">\n            <ion-col>\n              <ion-card>\n                <ion-grid>\n                  <ion-row class=\"chapterRow\">\n                    <ion-col col-12>\n                      {{ item.chapter}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>\n                      {{ item.rank }}\n                    </ion-col>\n                    <ion-col col-2>\n                      {{ item.chapterType }}\n                    </ion-col>\n                    <ion-col col-3>\n                      {{ item.totalReg }}\n                    </ion-col>\n                    <ion-col col-4>\n                      {{ item.points.toFixed(3) }}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n      <div *ngSwitchCase=\"'region'\">\n        <ion-grid class=\"outerGrid\">\n          <!-- <ion-row class=\"headerRow\">\n            <ion-col col-2>\n              Place\n            </ion-col>\n            <ion-col col-5>\n              Region\n            </ion-col>\n            <ion-col col-2>\n              Total Reg\n            </ion-col>\n            <ion-col col-3>\n              Total\n            </ion-col>\n          </ion-row> -->\n          <ion-row *ngFor=\"let item of region\">\n\n            <ion-col col-2>\n              {{ item.rank }}\n            </ion-col>\n            <ion-col col-5>\n              {{ item.region }}\n            </ion-col>\n            <ion-col col-2>\n              {{ item.totalReg }}\n            </ion-col>\n            <ion-col col-3>\n              {{ item.points.toFixed(3) }}\n            </ion-col>\n          </ion-row>\n                  \n        </ion-grid>\n      </div>\n    \n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/team-scoring/team-scoring.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/team-scoring/team-scoring.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-header {\n  height: 28px;\n  width: 100%;\n  z-index: 1;\n  /* \n                The ionic header bar is 43px in height,\n                put your content below the header bar.\n            */ }\n\n.scroll-content {\n  margin-top: 116px !important; }\n\n.toolbar .select {\n  margin: 0px auto;\n  background-color: white;\n  max-width: 70%;\n  padding: 9px 8px 9px 16px; }\n\nion-toolbar {\n  padding-top: 0px !important; }\n\n.headerRow ion-col {\n  font-weight: 600; }\n\n.headerRow {\n  border-bottom: 1px solid black !important;\n  text-align: center; }\n\n.chapterRow {\n  background-color: #ca002d;\n  color: white;\n  font-weight: 600; }\n\nion-grid {\n  padding: 0px; }\n\n.pointsCol, .nameCol {\n  padding-left: 5px !important; }\n\n.outerGrid > ion-row:first-child > ion-col:first-of-type {\n  padding-top: 0px !important; }\n\n.outerGrid > ion-row:first-child > ion-col:first-of-type .card {\n  margin-top: 0px; }\n\nion-col {\n  border-left: 1px solid black;\n  text-align: center; }\n\n.card {\n  margin: 5px 0px;\n  width: 100%; }\n\nion-row > ion-col:first-of-type {\n  border-left: none !important;\n  text-align: center; }\n\nion-row ion-col {\n  padding: 5px 0px; }\n\nion-row {\n  border-bottom: 0.55px solid rgba(0, 0, 0, 0.322); }\n\n#teamSelect {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC90ZWFtLXNjb3JpbmcvdGVhbS1zY29yaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVhbS1zY29yaW5nL3RlYW0tc2NvcmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1E7RUFFSSxZQUFZO0VBQ1osV0FBVTtFQUVWLFVBQVU7RUFDVjs7O2FDQUMsRURHQzs7QUFlTjtFQUNJLDRCQUEyQixFQUFBOztBQUcvQjtFQUNJLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDJCQUEwQixFQUFBOztBQU85QjtFQUVJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHlDQUF3QztFQUN4QyxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSw0QkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwyQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksNEJBQTRCO0VBQzVCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBSWY7RUFDSSw0QkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBT3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0RBQWdELEVBQUE7O0FBR3hEO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZWFtLXNjb3JpbmcvdGVhbS1zY29yaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAuZml4ZWQtaGVhZGVye1xuICAgICAgICAgICAgLy9tYXJnaW4tdG9wOiA4NnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIC8vcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgLyogXG4gICAgICAgICAgICAgICAgVGhlIGlvbmljIGhlYWRlciBiYXIgaXMgNDNweCBpbiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcHV0IHlvdXIgY29udGVudCBiZWxvdyB0aGUgaGVhZGVyIGJhci5cbiAgICAgICAgICAgICovXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnBsYXRmb3JtLXdlYnZpZXcucGxhdGZvcm0taW9zLnBsYXRmb3JtLWNvcmRvdmEgLmZpeGVkLWhlYWRlcntcbiAgICAgICAgICAgIC8vbWFyZ2luLXRvcDogMTA2cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAvL21hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnBsYXRmb3JtLXdlYnZpZXcucGxhdGZvcm0taW9zLnBsYXRmb3JtLWNvcmRvdmEgLmNvbnRlbnQge1xuICAgICAgICAgICAgLy9tYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTZweCFpbXBvcnRhbnQ7XG4gICAgICAgIH0gXG4gICAgXG4gICAgICAgIC50b29sYmFyIC5zZWxlY3Qge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA5cHggOHB4IDlweCAxNnB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHghaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlvbi10b29sYmFyIC50b29sYmFyLWJhY2tncm91bmQge1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDksIDU0LCAxMjIsIDAuNjIzKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaGVhZGVyUm93IGlvbi1jb2wge1xuICAgICAgICAgICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5oZWFkZXJSb3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcHRlclJvdyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2EwMDJkO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wb2ludHNDb2wsIC5uYW1lQ29sIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAub3V0ZXJHcmlkID4gaW9uLXJvdzpmaXJzdC1jaGlsZCA+IGlvbi1jb2w6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAub3V0ZXJHcmlkID4gaW9uLXJvdzpmaXJzdC1jaGlsZCA+IGlvbi1jb2w6Zmlyc3Qtb2YtdHlwZSAuY2FyZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy93aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW9uLXJvdyA+IGlvbi1jb2w6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW9uLXJvdzpudGgtY2hpbGQoMikgaW9uLWNvbCB7XG4gICAgICAgICAgICAvL3BhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xuICAgICAgICB9XG4gICAgXG4gICAgI3RlYW1TZWxlY3Qge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9IiwiLmZpeGVkLWhlYWRlciB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIC8qIFxuICAgICAgICAgICAgICAgIFRoZSBpb25pYyBoZWFkZXIgYmFyIGlzIDQzcHggaW4gaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHB1dCB5b3VyIGNvbnRlbnQgYmVsb3cgdGhlIGhlYWRlciBiYXIuXG4gICAgICAgICAgICAqLyB9XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDExNnB4ICFpbXBvcnRhbnQ7IH1cblxuLnRvb2xiYXIgLnNlbGVjdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogOXB4IDhweCA5cHggMTZweDsgfVxuXG5pb24tdG9vbGJhciB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgfVxuXG4uaGVhZGVyUm93IGlvbi1jb2wge1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5oZWFkZXJSb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jaGFwdGVyUm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhMDAyZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5wb2ludHNDb2wsIC5uYW1lQ29sIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDsgfVxuXG4ub3V0ZXJHcmlkID4gaW9uLXJvdzpmaXJzdC1jaGlsZCA+IGlvbi1jb2w6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDsgfVxuXG4ub3V0ZXJHcmlkID4gaW9uLXJvdzpmaXJzdC1jaGlsZCA+IGlvbi1jb2w6Zmlyc3Qtb2YtdHlwZSAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDBweDsgfVxuXG5pb24tY29sIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG5pb24tcm93ID4gaW9uLWNvbDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbmlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDVweCAwcHg7IH1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDAuNTVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzIyKTsgfVxuXG4jdGVhbVNlbGVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/team-scoring/team-scoring.page.ts":
/*!***************************************************!*\
  !*** ./src/app/team-scoring/team-scoring.page.ts ***!
  \***************************************************/
/*! exports provided: TeamScoringPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamScoringPage", function() { return TeamScoringPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scoring_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scoring-data.service */ "./src/app/scoring-data.service.ts");



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
    }
    TeamScoringPage.prototype.ionWillEnter = function () {
    };
    TeamScoringPage.prototype.ngOnInit = function () {
    };
    TeamScoringPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-scoring',
            template: __webpack_require__(/*! ./team-scoring.page.html */ "./src/app/team-scoring/team-scoring.page.html"),
            styles: [__webpack_require__(/*! ./team-scoring.page.scss */ "./src/app/team-scoring/team-scoring.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scoring_data_service__WEBPACK_IMPORTED_MODULE_2__["ScoringDataService"]])
    ], TeamScoringPage);
    return TeamScoringPage;
}());



/***/ })

}]);
//# sourceMappingURL=team-scoring-team-scoring-module.js.map