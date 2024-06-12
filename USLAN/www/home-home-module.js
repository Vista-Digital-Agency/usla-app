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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-scroll\">\n  \n  <div id=\"homeCon\">\n    <ion-grid id=\"outerGrid\">\n      <ion-row id=\"homeImgRow\">\n        <ion-col>\n          <img src=\"assets/imgs/homeLogo.jpg\" />\n        </ion-col>\n      </ion-row>\n      <ion-row id=\"homeBtnsRow\" align-items-center>\n        <ion-col>\n          <ion-grid id=\"btnGrid\">\n            <ion-row align-items-end>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/schedule']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"list\"></ion-icon>\n                    </div>\n                    <div>\n                      Schedule\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/result-types']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"trophy\"></ion-icon>\n                    </div>\n                    <div>\n                        Results\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/program']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"paper\"></ion-icon>\n                    </div>\n                    <div>\n                      Program\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-center>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/sponsors']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"help-buoy\"></ion-icon>\n                    </div>\n                    <div>\n                      Sponsors\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/party']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"glasses\"></ion-icon>\n                    </div>\n                    <div>\n                      Festivities\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"secondary\" expand=\"block\" strong [routerLink]=\"['/map']\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  <div>\n                    <div>\n                      <ion-icon name=\"map\"></ion-icon>\n                    </div>\n                    <div>\n                      Map\n                    </div>\n                  </div>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homeCon {\n  height: 100%; }\n\n#outerGrid {\n  height: 100%;\n  padding: 0px; }\n\n#outerGrid > ion-row {\n  height: calc(100% / 2);\n  padding: 0px; }\n\n#outerGrid > ion-row > ion-col {\n  padding: 0px; }\n\n#btnGrid > ion-row {\n  height: calc(100% / 2); }\n\n#homeBtnsRow > ion-col, #homeBtnsRow > ion-col, #btnGrid {\n  height: 100%; }\n\n#homeBtnsRow > ion-col {\n  max-width: 450px;\n  margin: 0px auto; }\n\n#homeImgRow > ion-col > img {\n  max-height: 100%; }\n\n#homeImgRow > ion-col {\n  display: inline-flex; }\n\nion-col {\n  max-height: 100%;\n  text-align: center; }\n\nion-button {\n  /*--background: var(--ion-color-secondary);\n  --background-activated: var(--ion-color-secondary-tint);*/\n  height: 4.2em;\n  --box-shadow: -3px 5px 2px -1px #2f2f2f; }\n\nion-icon {\n  padding-bottom: 3px;\n  font-size: 1.5rem; }\n\nion-ripple-effect {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQU4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFOzJEQ1R5RDtFRFd6RCxhQUFhO0VBRWIsdUNBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lQ29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jb3V0ZXJHcmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNvdXRlckdyaWQgPiBpb24tcm93IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAyKTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jb3V0ZXJHcmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNidG5HcmlkID4gaW9uLXJvdyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gMik7XG59XG5cbiNob21lQnRuc1JvdyA+IGlvbi1jb2wsICNob21lQnRuc1JvdyA+IGlvbi1jb2wsICNidG5HcmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaG9tZUJ0bnNSb3cgPiBpb24tY29sIHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuI2hvbWVJbWdSb3cgPiBpb24tY29sID4gaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuI2hvbWVJbWdSb3cgPiBpb24tY29sIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbmlvbi1jb2wge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICAvKi0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7Ki9cbiAgaGVpZ2h0OiA0LjJlbTtcbiAgXG4gIC0tYm94LXNoYWRvdzogLTNweCA1cHggMnB4IC0xcHggIzJmMmYyZjtcbn1cblxuaW9uLWljb24ge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3Qge1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufSIsIiNob21lQ29uIHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbiNvdXRlckdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG4jb3V0ZXJHcmlkID4gaW9uLXJvdyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gMik7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG4jb3V0ZXJHcmlkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7IH1cblxuI2J0bkdyaWQgPiBpb24tcm93IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAyKTsgfVxuXG4jaG9tZUJ0bnNSb3cgPiBpb24tY29sLCAjaG9tZUJ0bnNSb3cgPiBpb24tY29sLCAjYnRuR3JpZCB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4jaG9tZUJ0bnNSb3cgPiBpb24tY29sIHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bzsgfVxuXG4jaG9tZUltZ1JvdyA+IGlvbi1jb2wgPiBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG5cbiNob21lSW1nUm93ID4gaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XG5cbmlvbi1jb2wge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuaW9uLWJ1dHRvbiB7XG4gIC8qLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTsqL1xuICBoZWlnaHQ6IDQuMmVtO1xuICAtLWJveC1zaGFkb3c6IC0zcHggNXB4IDJweCAtMXB4ICMyZjJmMmY7IH1cblxuaW9uLWljb24ge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBmb250LXNpemU6IDEuNXJlbTsgfVxuXG5pb24tcmlwcGxlLWVmZmVjdCB7XG4gIGNvbG9yOiBibGFjazsgfVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    test() {
        console.log('test');
    }
};
HomePage = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map