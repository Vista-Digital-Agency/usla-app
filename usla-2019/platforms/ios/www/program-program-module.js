(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./src/app/expandables/expandables.component.html":
/*!********************************************************!*\
  !*** ./src/app/expandables/expandables.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/expandables/expandables.component.scss":
/*!********************************************************!*\
  !*** ./src/app/expandables/expandables.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto; }\n\n.collapsed {\n  max-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9leHBhbmRhYmxlcy9leHBhbmRhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9leHBhbmRhYmxlcy9leHBhbmRhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBhdXRvOyBcbiAgfVxuXG4gIC5jb2xsYXBzZWQge1xuICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/expandables/expandables.component.ts":
/*!******************************************************!*\
  !*** ./src/app/expandables/expandables.component.ts ***!
  \******************************************************/
/*! exports provided: ExpandablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandablesComponent", function() { return ExpandablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpandablesComponent = /** @class */ (function () {
    function ExpandablesComponent(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "900px";
    }
    ExpandablesComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExpandablesComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExpandablesComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExpandablesComponent.prototype, "expandHeight", void 0);
    ExpandablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expandables',
            template: __webpack_require__(/*! ./expandables.component.html */ "./src/app/expandables/expandables.component.html"),
            styles: [__webpack_require__(/*! ./expandables.component.scss */ "./src/app/expandables/expandables.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ExpandablesComponent);
    return ExpandablesComponent;
}());



/***/ }),

/***/ "./src/app/program/program.module.ts":
/*!*******************************************!*\
  !*** ./src/app/program/program.module.ts ***!
  \*******************************************/
/*! exports provided: ProgramPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPageModule", function() { return ProgramPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _program_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program.page */ "./src/app/program/program.page.ts");
/* harmony import */ var _expandables_expandables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../expandables/expandables.component */ "./src/app/expandables/expandables.component.ts");








var routes = [
    {
        path: '',
        component: _program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"]
    }
];
var ProgramPageModule = /** @class */ (function () {
    function ProgramPageModule() {
    }
    ProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"], _expandables_expandables_component__WEBPACK_IMPORTED_MODULE_7__["ExpandablesComponent"]]
        })
    ], ProgramPageModule);
    return ProgramPageModule;
}());



/***/ }),

/***/ "./src/app/program/program.page.html":
/*!*******************************************!*\
  !*** ./src/app/program/program.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Program</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <div class=\"pdfDownload\">\n        <ion-button color=\"danger\" (click)=\"openPdf('https://vistagraphics-my.sharepoint.com/:b:/g/personal/caleb_vgnet_com/EbI0PZlds6dNrJ_K917qA4gBrf3RfzZJ-siKk6SuoY5Xjw?e=mSW4ef')\">\n          <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n          Download Full PDF\n        </ion-button>\n      </div>\n      <div>\n          <ion-card *ngFor=\"let item of events; let j = index\" (click)=\"expandItem(items[j])\"> \n            <ion-card-content>\n              <ion-row align-items-center>\n                  <ion-col size=\"3\">\n                    <div>\n                        <ion-icon name=\"add-circle-outline\" *ngIf=\"items[j].expanded == false\"></ion-icon>\n                        <ion-icon name=\"remove-circle\" *ngIf=\"items[j].expanded == true\"></ion-icon>\n                    </div>\n                  </ion-col> \n                  <ion-col size=\"9\">\n                      <h3>\n                          {{ item.name }}\n                      </h3>\n                  </ion-col>\n                </ion-row>\n                <app-expandables expandHeight=\"900px\" [expanded]=\"items[j].expanded\">\n                    <div class=\"accordCon\">\n                        <img [src]=\"item.image\" />\n                        <div>{{ item.description }}</div>\n                        <div style=\"text-align: center; margin-top: 15px;\" *ngIf=\"item.results != ''\">\n                          <ion-button class=\"addToBtn\" round icon-left (click)=\"website(item.results)\">\n                            <ion-icon name=\"globe\"></ion-icon>\n                            <div>Results</div>\n                          </ion-button>\n                        </div>\n                    </div>\n                 </app-expandables>\n              </ion-card-content>\n            </ion-card>\n          </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/program/program.page.scss":
/*!*******************************************!*\
  !*** ./src/app/program/program.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pdfDownload {\n  margin: 20px 0px;\n  text-align: center; }\n\nion-content {\n  --ion-background-color: #24608a; }\n\nion-card {\n  background-color: white; }\n\nh3 {\n  font-size: 1.6rem;\n  font-weight: 600; }\n\nion-icon {\n  font-size: 2.4rem; }\n\nion-card-content {\n  -webkit-padding-start: 10px !important;\n          padding-inline-start: 10px !important;\n  -webkit-padding-end: 5px !important;\n          padding-inline-end: 5px !important; }\n\nion-col {\n  padding-right: 0px !important; }\n\n.accordCon {\n  padding: 25px 5px 15px 5px; }\n\n.buttonCon {\n  margin-top: 20px; }\n\n.bottonCon ion-button {\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLCtCQUF1QixFQUFBOztBQUczQjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQ0FBb0M7VUFBcEMscUNBQW9DO0VBQ3BDLG1DQUFpQztVQUFqQyxrQ0FBaUMsRUFBQTs7QUFHckM7RUFDSSw2QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGRmRG93bmxvYWQge1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzI0NjA4YTtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHghaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xufVxuXG4uYWNjb3JkQ29uIHtcbiAgICBwYWRkaW5nOiAyNXB4IDVweCAxNXB4IDVweDtcbiAgfVxuXG4uYnV0dG9uQ29uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYm90dG9uQ29uIGlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/program/program.page.ts":
/*!*****************************************!*\
  !*** ./src/app/program/program.page.ts ***!
  \*****************************************/
/*! exports provided: ProgramPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPage", function() { return ProgramPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../program.service */ "./src/app/program.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");




var ProgramPage = /** @class */ (function () {
    function ProgramPage(programProvider, iab) {
        this.programProvider = programProvider;
        this.iab = iab;
        this.events = [];
        this.items = [];
        this.items = [
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false }
        ];
    }
    ProgramPage.prototype.ngOnInit = function () {
    };
    ProgramPage.prototype.openSite = function (site) {
        var browser = this.iab.create(site, '_system');
        browser.close();
    };
    ProgramPage.prototype.expandItem = function (item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    ProgramPage.prototype.ionViewWillEnter = function () {
        this.events = this.programProvider.getProgram();
    };
    ProgramPage.prototype.openPdf = function (url) {
        var browser = this.iab.create(url, '_system');
        browser.close();
    };
    ProgramPage.prototype.website = function (url) {
        var browser = this.iab.create(url, '_system');
        browser.close();
    };
    ProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! ./program.page.html */ "./src/app/program/program.page.html"),
            styles: [__webpack_require__(/*! ./program.page.scss */ "./src/app/program/program.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], ProgramPage);
    return ProgramPage;
}());



/***/ })

}]);
//# sourceMappingURL=program-program-module.js.map