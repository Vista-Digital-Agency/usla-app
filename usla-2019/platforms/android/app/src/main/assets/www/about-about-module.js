(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <div>\n        The 2019 USLA National Lifeguard and Junior Lifeguard Championships will be held in Virginia Beach, VA from \n        August 7 - 10, 2019. Details can be found at www.uslanationals.org. Brush up on your competition rules, train \n        hard and check back often on our website for regularly updated information! Online registration is now open. (Advance registration is strongly recommended.)\n    </div>\n      \n    <div>\n      <u><b>Who may participate:</b></u>\n      <br>\n      This competition is open to current Professional, Alumnus, Life, and Junior USLA Members. Approved international \n      competitors who are current members of a national lifesaving organization that is a Full Member of the International \n      Life Saving Federation are also eligible to compete, subject to approval. (Send a request for approval to lifesavingsport@usla.org). \n      Unfortunately, Associate Members are NOT eligible to compete, but we welcome you to attend and cheer our lifesavers on!\n    </div>\n    <!--<div>\n      <u><b>Entry Fees: </b></u>\n      <br>\n      National Lifeguard Adult Championship Entry Fees:\n      <br>\n      July 1st - August 6th: $100\n      <br>\n      August 7th - August 11th: $130\n    </div>\n\n    <div>\n      National Junior Lifeguard & U19 Championship Entry Fees:\n      <br>\n      July 1st - August 6th: $50\n      <br>\n      August 7th - August 11th: $75\n    </div> -->\n\n    <div>\n      *Professionals who are competing in the U19 division will pay the Junior fee for this competition. Professionals who also \n      want to compete in the Nationals, Thursday through Saturday, must pay an additional fee for that competition\n    </div>\n\n    <div>\n      The following is important information from the Lifesaving Sport Committee for all competitors who will be \n      attending the 2019 USLA NATIONAL LIFEGUARD CHAMPIONSHIPS in Virginia Beach, VA.\n    </div>\n\n    <div>\n      <h1>\n        <u>Start Times:</u>\n      </h1>\n    </div>\n\n    <div>\n      The competition will be starting daily at the scheduled start time of 8AM. Please be prepared and allow enough time for your warm-up.\n      There will be a single call for each event. A first & final call only. The first one each morning will be at 7:30AM\n      Events will not be delayed for craft conflicts; this is a rule and will be enforced. Be prepared and make arrangements ahead of time.\n    </div>\n\n    <div>\n      It is your responsibility to know the rules. Please familiarize yourself with the rules of the event(s) you plan on participating in. Make \n      sure to review the revised rules for the American Ironwoman and the rules for the new event Ironguard. \n    </div>\n\n    <div>\n      Teams who wish to compete in the \"B\" Division please be aware of the rules. No exceptions or excuses will be accepted.\n      All Chapter Teams are considered in the \"A\" Division until they request and submit verification to be included in the \"B\" Division.\n      Request must be done annually and must include a letter from the involved agency/agencies employer(s) verifying the number of employed lifeguards.\n    </div>\n\n    <div>\n      The letter must be from an administrator (not the Captain or Chief of a Beach Patrol) from the agency/agencies that comprise the chapter. Letters must \n      be from an official with the agency, not involved in the daily beach patrol operations. It must be received by the Lifesaving Sport Chair by August 1, 2019. It can be emailed to lifesavingsport@usla.org.\n    </div>\n\n    <div>\n      The line for last-minute, on-site registration can get long, causing athletes to miss their events. When on-site, you will need to wait in line to use \n      one of the computers we provide with Internet access and you will need to complete all the same steps on-site as you can take today from home. Why wait at the event site? Log-in now and register.\n    </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content div {\n  margin-bottom: 20px;\n  line-height: 1.5;\n  font-weight: 500;\n  color: black; }\n\nion-card-content h1 {\n  text-align: center;\n  font-weight: 600;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNhcmQtY29udGVudCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map