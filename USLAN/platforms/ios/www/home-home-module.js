(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div id=\"homeCon\">\n    <ion-grid id=\"outerGrid\">\n      <ion-row id=\"homeImgRow\">\n        <ion-col>\n          <img src=\"assets/imgs/homeLogo.jpg\" />\n        </ion-col>\n      </ion-row>\n      <ion-row id=\"homeBtnsRow\" align-items-center>\n        <ion-col>\n          <ion-grid id=\"btnGrid\">\n            <ion-row align-items-end>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/schedule']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"list\"></ion-icon>\n                    </div>\n                    <div>\n                      Schedule\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/result-types']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"trophy\"></ion-icon>\n                    </div>\n                    <div>\n                        Results\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/program']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"paper\"></ion-icon>\n                    </div>\n                    <div>\n                      Program\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-center>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/sponsors']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"help-buoy\"></ion-icon>\n                    </div>\n                    <div>\n                      Sponsors\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/party']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"glasses\"></ion-icon>\n                    </div>\n                    <div>\n                      Festivities\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/map']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"map\"></ion-icon>\n                    </div>\n                    <div>\n                      Map\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homeCon {\n  height: 100%; }\n\nion-content {\n  --overflow: hidden; }\n\n#outerGrid {\n  height: 100%;\n  padding: 0px; }\n\n#outerGrid > ion-row {\n  height: calc(100% / 2);\n  padding: 0px; }\n\n#outerGrid > ion-row > ion-col {\n  padding: 0px; }\n\n#btnGrid > ion-row {\n  height: calc(100% / 2); }\n\n#homeBtnsRow > ion-col, #homeBtnsRow > ion-col, #btnGrid {\n  height: 100%; }\n\n#homeBtnsRow > ion-col {\n  max-width: 450px;\n  margin: 0px auto; }\n\n#homeImgRow > ion-col > img {\n  max-height: 100%; }\n\n#homeImgRow > ion-col {\n  display: inline-flex; }\n\nion-col {\n  max-height: 100%;\n  text-align: center; }\n\nion-button {\n  /*--background: var(--ion-color-secondary);\n  --background-activated: var(--ion-color-secondary-tint);*/\n  height: 4.2em;\n  --box-shadow: -3px 5px 2px -1px #2f2f2f; }\n\nion-icon {\n  padding-bottom: 3px;\n  font-size: 1.5rem; }\n\nion-ripple-effect {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQU4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRTsyRENWeUQ7RURZekQsYUFBYTtFQUViLHVDQUFhLEVBQUE7O0FBR2Y7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZUNvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNvdXRlckdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI291dGVyR3JpZCA+IGlvbi1yb3cge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDIpO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNvdXRlckdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI2J0bkdyaWQgPiBpb24tcm93IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAyKTtcbn1cblxuI2hvbWVCdG5zUm93ID4gaW9uLWNvbCwgI2hvbWVCdG5zUm93ID4gaW9uLWNvbCwgI2J0bkdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNob21lQnRuc1JvdyA+IGlvbi1jb2wge1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4jaG9tZUltZ1JvdyA+IGlvbi1jb2wgPiBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4jaG9tZUltZ1JvdyA+IGlvbi1jb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuaW9uLWNvbCB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC8qLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTsqL1xuICBoZWlnaHQ6IDQuMmVtO1xuICBcbiAgLS1ib3gtc2hhZG93OiAtM3B4IDVweCAycHggLTFweCAjMmYyZjJmO1xufVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5pb24tcmlwcGxlLWVmZmVjdCB7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG59IiwiI2hvbWVDb24ge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47IH1cblxuI291dGVyR3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4OyB9XG5cbiNvdXRlckdyaWQgPiBpb24tcm93IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAyKTtcbiAgcGFkZGluZzogMHB4OyB9XG5cbiNvdXRlckdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG4jYnRuR3JpZCA+IGlvbi1yb3cge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDIpOyB9XG5cbiNob21lQnRuc1JvdyA+IGlvbi1jb2wsICNob21lQnRuc1JvdyA+IGlvbi1jb2wsICNidG5HcmlkIHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbiNob21lQnRuc1JvdyA+IGlvbi1jb2wge1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDBweCBhdXRvOyB9XG5cbiNob21lSW1nUm93ID4gaW9uLWNvbCA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cblxuI2hvbWVJbWdSb3cgPiBpb24tY29sIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cblxuaW9uLWNvbCB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5pb24tYnV0dG9uIHtcbiAgLyotLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpOyovXG4gIGhlaWdodDogNC4yZW07XG4gIC0tYm94LXNoYWRvdzogLTNweCA1cHggMnB4IC0xcHggIzJmMmYyZjsgfVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtOyB9XG5cbmlvbi1yaXBwbGUtZWZmZWN0IHtcbiAgY29sb3I6IGJsYWNrOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
    }
    HomePage.prototype.test = function () {
        console.log('test');
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map