(self["webpackChunkusla_2021"] = self["webpackChunkusla_2021"] || []).push([["src_app_program_program_module_ts"],{

/***/ 1951:
/*!******************************************************!*\
  !*** ./src/app/expandables/expandables.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandablesComponent": () => (/* binding */ ExpandablesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_expandables_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./expandables.component.html */ 3619);
/* harmony import */ var _expandables_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expandables.component.scss */ 6604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let ExpandablesComponent = class ExpandablesComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "900px";
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
ExpandablesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }
];
ExpandablesComponent.propDecorators = {
    expandWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["expanded",] }],
    expandHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["expandHeight",] }]
};
ExpandablesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-expandables',
        template: _raw_loader_expandables_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_expandables_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExpandablesComponent);



/***/ }),

/***/ 3664:
/*!***************************************************!*\
  !*** ./src/app/program/program-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramPageRoutingModule": () => (/* binding */ ProgramPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _program_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program.page */ 9374);




const routes = [
    {
        path: '',
        component: _program_page__WEBPACK_IMPORTED_MODULE_0__.ProgramPage
    }
];
let ProgramPageRoutingModule = class ProgramPageRoutingModule {
};
ProgramPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProgramPageRoutingModule);



/***/ }),

/***/ 4554:
/*!*******************************************!*\
  !*** ./src/app/program/program.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramPageModule": () => (/* binding */ ProgramPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _program_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program-routing.module */ 3664);
/* harmony import */ var _program_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program.page */ 9374);
/* harmony import */ var _expandables_expandables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expandables/expandables.component */ 1951);








let ProgramPageModule = class ProgramPageModule {
};
ProgramPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _program_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgramPageRoutingModule
        ],
        declarations: [_program_page__WEBPACK_IMPORTED_MODULE_1__.ProgramPage, _expandables_expandables_component__WEBPACK_IMPORTED_MODULE_2__.ExpandablesComponent]
    })
], ProgramPageModule);



/***/ }),

/***/ 9374:
/*!*****************************************!*\
  !*** ./src/app/program/program.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramPage": () => (/* binding */ ProgramPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_program_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./program.page.html */ 2416);
/* harmony import */ var _program_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program.page.scss */ 65);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);
/* harmony import */ var _service_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/program.service */ 1053);






let ProgramPage = class ProgramPage {
    constructor(programProvider, iab) {
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
    ngOnInit() {
    }
    openSite(site) {
        const browser = this.iab.create(site, '_system');
        browser.close();
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    ionViewWillEnter() {
        this.events = this.programProvider.getProgram();
    }
    openPdf(url) {
        const browser = this.iab.create(url, '_system');
        browser.close();
    }
    website(url) {
        const browser = this.iab.create(url, '_system');
        browser.close();
    }
};
ProgramPage.ctorParameters = () => [
    { type: _service_program_service__WEBPACK_IMPORTED_MODULE_3__.ProgramService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
ProgramPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-program',
        template: _raw_loader_program_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_program_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProgramPage);



/***/ }),

/***/ 6604:
/*!********************************************************!*\
  !*** ./src/app/expandables/expandables.component.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHdCQUFBO0FBQ0oiLCJmaWxlIjoiZXhwYW5kYWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kLXdyYXBwZXIge1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogYXV0bzsgXG4gIH1cblxuICAuY29sbGFwc2VkIHtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH0iXX0= */");

/***/ }),

/***/ 65:
/*!*******************************************!*\
  !*** ./src/app/program/program.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".pdfDownload {\n  margin: 20px 0px;\n  text-align: center;\n}\n\nion-content {\n  --ion-background-color: #24608a;\n}\n\nion-card {\n  background-color: white;\n}\n\nh3 {\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n\nion-icon {\n  font-size: 2.4rem;\n}\n\nion-card-content {\n  padding-inline-start: 10px !important;\n  padding-inline-end: 5px !important;\n}\n\nion-col {\n  padding-right: 0px !important;\n}\n\n.accordCon {\n  padding: 25px 5px 15px 5px;\n}\n\n.buttonCon {\n  margin-top: 20px;\n}\n\n.bottonCon ion-button {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUNBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJwcm9ncmFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZGZEb3dubG9hZCB7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjQ2MDhhO1xufVxuXG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4IWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDVweCFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG59XG5cbi5hY2NvcmRDb24ge1xuICAgIHBhZGRpbmc6IDI1cHggNXB4IDE1cHggNXB4O1xuICB9XG5cbi5idXR0b25Db24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ib3R0b25Db24gaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ 3619:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expandables/expandables.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ 2416:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/program.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Program</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <div class=\"pdfDownload\">\n        <ion-button color=\"danger\" (click)=\"openPdf('https://vistagraphics-my.sharepoint.com/:b:/g/personal/caleb_vgnet_com/Ed4xFtLp6xpDmL-mzNyK3XQBuu2bkOfX6K-OJYSx8t6G5Q?e=ZovH9a')\">\n          <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n          Download Full PDF\n        </ion-button>\n      </div>\n      <div>\n          <ion-card *ngFor=\"let item of events; let j = index\" (click)=\"expandItem(items[j])\"> \n            <ion-card-content>\n              <ion-row align-items-center>\n                  <ion-col size=\"3\">\n                    <div>\n                        <ion-icon name=\"add-circle-outline\" *ngIf=\"items[j].expanded == false\"></ion-icon>\n                        <ion-icon name=\"remove-circle\" *ngIf=\"items[j].expanded == true\"></ion-icon>\n                    </div>\n                  </ion-col> \n                  <ion-col size=\"9\">\n                      <h3>\n                          {{ item.name }}\n                      </h3>\n                  </ion-col>\n                </ion-row>\n                <app-expandables expandHeight=\"900px\" [expanded]=\"items[j].expanded\">\n                    <div class=\"accordCon\">\n                        <img [src]=\"item.image\" />\n                        <div>{{ item.description }}</div>\n                        <div style=\"text-align: center; margin-top: 15px;\" *ngIf=\"item.results != ''\">\n                          <ion-button class=\"addToBtn\" round icon-left (click)=\"website(item.results)\">\n                            <ion-icon name=\"globe\"></ion-icon>\n                            <div>Results</div>\n                          </ion-button>\n                        </div>\n                    </div>\n                 </app-expandables>\n              </ion-card-content>\n            </ion-card>\n          </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_program_program_module_ts.js.map