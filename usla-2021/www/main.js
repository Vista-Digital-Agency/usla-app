(self["webpackChunkusla_2021"] = self["webpackChunkusla_2021"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 6985)).then(m => m.AboutPageModule)
    },
    {
        path: 'event-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./event-modal/event-modal.module */ 5081)).then(m => m.EventModalPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'map',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_map_map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./map/map.module */ 2622)).then(m => m.MapPageModule)
    },
    {
        path: 'my-schedule',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-schedule_my-schedule_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-schedule/my-schedule.module */ 6223)).then(m => m.MySchedulePageModule)
    },
    {
        path: 'party',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_party_party_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./party/party.module */ 6351)).then(m => m.PartyPageModule)
    },
    {
        path: 'program',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_program_program_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./program/program.module */ 4554)).then(m => m.ProgramPageModule)
    },
    {
        path: 'schedule',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_schedule_schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./schedule/schedule.module */ 7911)).then(m => m.SchedulePageModule)
    },
    {
        path: 'schedule-date',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_schedule-date_schedule-date_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./schedule-date/schedule-date.module */ 1224)).then(m => m.ScheduleDatePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'sponsors',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sponsors_sponsors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sponsors/sponsors.module */ 9200)).then(m => m.SponsorsPageModule)
    },
    {
        path: 'sponsor-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./sponsor-modal/sponsor-modal.module */ 1893)).then(m => m.SponsorModalPageModule)
    },
    {
        path: 'travel',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_travel_travel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./travel/travel.module */ 6910)).then(m => m.TravelPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 8592);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_event_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/event-data.service */ 6204);
/* harmony import */ var _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/sponsor-data.service */ 2213);
/* harmony import */ var _service_program_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/program.service */ 1053);










let AppComponent = class AppComponent {
    constructor(platform, iab, eventService, sponsorService, programService) {
        this.platform = platform;
        this.iab = iab;
        this.eventService = eventService;
        this.sponsorService = sponsorService;
        this.programService = programService;
        platform.ready().then(() => {
            setTimeout(() => {
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide({
                    fadeOutDuration: 1000
                });
            }, 2000);
            this.sponsorService.loadData();
            this.eventService.loadData();
            this.programService.loadData();
            if (this.platform.is('mobile')) {
                //alert(this.platform.is('mobile'));
                //Remove this method to stop OneSignal Debugging 
                window.plugins.OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });
                //this.oneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
                var notificationOpenedCallback = function (jsonData) {
                    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                };
                // Set your iOS Settings
                var iosSettings = {};
                iosSettings["kOSSettingsKeyAutoPrompt"] = false;
                iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
                window.plugins.OneSignal
                    //this.oneSignal
                    .startInit("85605cca-40f0-4cff-8746-59fb5ad9553b")
                    .handleNotificationOpened(notificationOpenedCallback)
                    .iOSSettings(iosSettings)
                    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
                    //.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification)
                    .endInit();
                // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
                window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
                    //window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
                    console.log("User accepted notifications: " + accepted);
                });
            }
            /*this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');
    
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
            this.oneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
            });
    
            this.oneSignal.handleNotificationOpened().subscribe(() => {
              // do something when a notification is opened
            });
    
            this.oneSignal.endInit();*/
        });
    }
    openPrivacy() {
        const browser = this.iab.create("https://www.freeprivacypolicy.com/privacy/view/fccb8cf693c28c96c2c740c7dc941c5c", "_system");
        browser.close();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _service_event_data_service__WEBPACK_IMPORTED_MODULE_4__.EventDataService },
    { type: _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_5__.SponsorDataService },
    { type: _service_program_service__WEBPACK_IMPORTED_MODULE_6__.ProgramService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ 287);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _sponsor_modal_sponsor_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sponsor-modal/sponsor-modal.module */ 1893);
/* harmony import */ var _event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-modal/event-modal.module */ 5081);
/* harmony import */ var _service_event_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/event-data.service */ 6204);
/* harmony import */ var _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/sponsor-data.service */ 2213);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 1779);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot({
                mode: 'ios'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule,
            _sponsor_modal_sponsor_modal_module__WEBPACK_IMPORTED_MODULE_7__.SponsorModalPageModule,
            _event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_8__.EventModalPageModule,
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__.InAppBrowser,
            _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__.Calendar,
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP,
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__.OneSignal,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy },
            _service_event_data_service__WEBPACK_IMPORTED_MODULE_9__.EventDataService,
            _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_10__.SponsorDataService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3453:
/*!***********************************************************!*\
  !*** ./src/app/event-modal/event-modal-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventModalPageRoutingModule": () => (/* binding */ EventModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _event_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-modal.page */ 9718);




const routes = [
    {
        path: '',
        component: _event_modal_page__WEBPACK_IMPORTED_MODULE_0__.EventModalPage
    }
];
let EventModalPageRoutingModule = class EventModalPageRoutingModule {
};
EventModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventModalPageRoutingModule);



/***/ }),

/***/ 5081:
/*!***************************************************!*\
  !*** ./src/app/event-modal/event-modal.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventModalPageModule": () => (/* binding */ EventModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _event_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-modal-routing.module */ 3453);
/* harmony import */ var _event_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-modal.page */ 9718);







let EventModalPageModule = class EventModalPageModule {
};
EventModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _event_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventModalPageRoutingModule
        ],
        declarations: [_event_modal_page__WEBPACK_IMPORTED_MODULE_1__.EventModalPage]
    })
], EventModalPageModule);



/***/ }),

/***/ 9718:
/*!*************************************************!*\
  !*** ./src/app/event-modal/event-modal.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventModalPage": () => (/* binding */ EventModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./event-modal.page.html */ 9095);
/* harmony import */ var _event_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-modal.page.scss */ 9365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EventModalPage = class EventModalPage {
    constructor() { }
    ngOnInit() {
    }
};
EventModalPage.ctorParameters = () => [];
EventModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-event-modal',
        template: _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_event_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EventModalPage);



/***/ }),

/***/ 6204:
/*!***********************************************!*\
  !*** ./src/app/service/event-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDataService": () => (/* binding */ EventDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);



//import { Http, HttpResponse } from '@capacitor-community/http';
let EventDataService = class EventDataService {
    constructor(http) {
        this.http = http;
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /*const options = {
              url: 'https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaEvents?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB'
            };
        
            const response: HttpResponse = await Http.get(options);
        
            //console.log(JSON.stringify(response));
        
            this.events = response.data[0].events;*/
            this.http.get('https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaEvents?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB', {}, {})
                .then(data => {
                this.data = JSON.parse(data['data']);
                //console.log(this.data[0].events);
                this.events = this.data[0].events;
            }, err => {
                console.log(err);
            });
        });
    }
    getEvents() {
        return this.events;
    }
};
EventDataService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP }
];
EventDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EventDataService);



/***/ }),

/***/ 1053:
/*!********************************************!*\
  !*** ./src/app/service/program.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramService": () => (/* binding */ ProgramService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);



//import { Http, HttpResponse } from '@capacitor-community/http';
let ProgramService = class ProgramService {
    constructor(http) {
        this.http = http;
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /*const options = {
              url: 'https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaProgram?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB'
            };
        
            const response: HttpResponse = await Http.get(options);
        
            //console.log(response);
        
            this.events = response.data[0].program;*/
            this.http.get('https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaProgram?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB', {}, {})
                .then(data => {
                this.data = JSON.parse(data['data']);
                this.events = this.data[0].program;
            }, err => {
                console.log(err);
            });
        });
    }
    getProgram() {
        return this.events;
    }
};
ProgramService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP }
];
ProgramService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ProgramService);



/***/ }),

/***/ 2213:
/*!*************************************************!*\
  !*** ./src/app/service/sponsor-data.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorDataService": () => (/* binding */ SponsorDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);



//import { Http, HttpResponse } from '@capacitor-community/http';
let SponsorDataService = class SponsorDataService {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.sponsors = [];
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            //console.log('hey');
            //const doGet = async () => {
            /*const options = {
              url: 'https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaSponsors?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB'
            };
    
            const response: HttpResponse = await Http.get(options);
    
            console.log(JSON.stringify(response));
    
            this.sponsors = response.data[0].sponsors; */
            //console.log(this.sponsors);
            //};
            this.http.get('https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaSponsors?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB', {}, {})
                .then(data => {
                this.data = JSON.parse(data['data']);
                //console.log(this.data);
                this.sponsors = this.data[0].sponsors;
            }, err => {
                console.log(err);
            });
        });
    }
    getSponsors() {
        return this.sponsors;
    }
};
SponsorDataService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP }
];
SponsorDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SponsorDataService);



/***/ }),

/***/ 6885:
/*!***************************************************************!*\
  !*** ./src/app/sponsor-modal/sponsor-modal-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorModalPageRoutingModule": () => (/* binding */ SponsorModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sponsor_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsor-modal.page */ 5955);




const routes = [
    {
        path: '',
        component: _sponsor_modal_page__WEBPACK_IMPORTED_MODULE_0__.SponsorModalPage
    }
];
let SponsorModalPageRoutingModule = class SponsorModalPageRoutingModule {
};
SponsorModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SponsorModalPageRoutingModule);



/***/ }),

/***/ 1893:
/*!*******************************************************!*\
  !*** ./src/app/sponsor-modal/sponsor-modal.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorModalPageModule": () => (/* binding */ SponsorModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sponsor_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsor-modal-routing.module */ 6885);
/* harmony import */ var _sponsor_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsor-modal.page */ 5955);







let SponsorModalPageModule = class SponsorModalPageModule {
};
SponsorModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sponsor_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.SponsorModalPageRoutingModule
        ],
        declarations: [_sponsor_modal_page__WEBPACK_IMPORTED_MODULE_1__.SponsorModalPage]
    })
], SponsorModalPageModule);



/***/ }),

/***/ 5955:
/*!*****************************************************!*\
  !*** ./src/app/sponsor-modal/sponsor-modal.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorModalPage": () => (/* binding */ SponsorModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sponsor_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sponsor-modal.page.html */ 7001);
/* harmony import */ var _sponsor_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsor-modal.page.scss */ 8909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);







let SponsorModalPage = class SponsorModalPage {
    constructor(modalController, iab, callNum) {
        this.modalController = modalController;
        this.iab = iab;
        this.callNum = callNum;
    }
    ngOnInit() {
    }
    openWebsite(site) {
        const browser = this.iab.create(site, '_system');
        browser.close();
    }
    call(number) {
        this.callNum.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    nav(lat, lng) {
        let browser = this.iab.create("https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + lng, '_system');
        browser.close();
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
SponsorModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber }
];
SponsorModalPage.propDecorators = {
    sponsor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
SponsorModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sponsor-modal',
        template: _raw_loader_sponsor_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sponsor_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SponsorModalPage);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n\n  margin-bottom: 18px;\n\n  color: #757575;\n\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n} */\n#sideMenuGrid {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n#sideMenuGrid, #sideMenuGrid ion-row {\n  padding: 0px !important;\n}\n#sideMenuGrid ion-row:first-of-type {\n  border-bottom: 1px solid white;\n}\n#sideMenuGrid ion-row:last-of-type {\n  flex-grow: 1;\n  background-image: url('sideMenuImg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n}\n#sideMenuGrid ion-list {\n  width: 100% !important;\n  margin-bottom: 0px !important;\n  background: transparent;\n}\n#sideMenuGrid ion-item {\n  --detail-icon-color: white;\n  --color: white;\n  --background: #24608a;\n}\n#sideMenuGrid ion-item ion-icon {\n  --color: white!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBeUhBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSx1QkFBQTtBQURGO0FBSUE7RUFDQSw4QkFBQTtBQURBO0FBSUE7RUFDRSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFERjtBQUlBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBREY7QUFJQTtFQUNFLHdCQUFBO0FBREYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyppb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSAqL1xuXG5cbiNzaWRlTWVudUdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4jc2lkZU1lbnVHcmlkLCAjc2lkZU1lbnVHcmlkIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xufVxuXG4jc2lkZU1lbnVHcmlkIGlvbi1yb3c6Zmlyc3Qtb2YtdHlwZSB7XG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG5cbiNzaWRlTWVudUdyaWQgaW9uLXJvdzpsYXN0LW9mLXR5cGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9zaWRlTWVudUltZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG59XG5cbiNzaWRlTWVudUdyaWQgaW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jc2lkZU1lbnVHcmlkIGlvbi1pdGVtIHtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMyNDYwOGE7XG59XG5cbiNzaWRlTWVudUdyaWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAtLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 9365:
/*!***************************************************!*\
  !*** ./src/app/event-modal/event-modal.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8909:
/*!*******************************************************!*\
  !*** ./src/app/sponsor-modal/sponsor-modal.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#sponsorGrid {\n  padding: 0px;\n}\n\n#sponsorDefaultImageRow {\n  background-color: #2e5ca0;\n  padding: 0px;\n}\n\n#sponsorDefaultImageRow ion-col {\n  padding: 20px;\n}\n\n#sponsorImageRow {\n  padding: 0px;\n}\n\n#sponsorImageRow ion-col {\n  background-color: white;\n}\n\n.sponsorBtnsRow {\n  padding: 0px;\n}\n\n.sponsorBtnsRow ion-col {\n  padding: 0px;\n  /*padding-left: 1px;\n  padding-right: 1px;*/\n}\n\n/*#sponsorBtnsRow ion-col:first-of-type {\n    padding-left: 2px;\n    padding-right: 1px;\n}\n\n#sponsorBtnsRow ion-col:last-of-type {\n    padding-left: 1px;\n    padding-right: 2px;\n}*/\n\n.sponsorBtnsRow ion-col ion-item {\n  --inner-border-width: 0px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: rgba(202, 0, 0, 0.9);\n  --padding-bottom: 5px;\n  --padding-top: 5px;\n}\n\nion-row:nth-child(2) ion-col ion-item {\n  border-top: 1px solid whitesmoke;\n}\n\nion-row:last-of-type {\n  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.5);\n}\n\n.sponsorBtnsRow ion-col ion-item ion-label {\n  font-weight: 500;\n  font-size: 1.4rem;\n}\n\n.sponsorBtn {\n  width: 100%;\n  margin: 0px;\n}\n\n.sponsorBtn ion-icon {\n  /*display: block;\n  margin: 10px auto;*/\n  font-size: 2.4rem;\n  font-weight: bold;\n}\n\nion-toolbar {\n  --background: #24608a;\n}\n\nion-toolbar ion-button {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb25zb3ItbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFHSSx1QkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtBQUhKOztBQU9BO0VBRUksWUFBQTtFQUNBO3NCQUFBO0FBSko7O0FBUUE7Ozs7Ozs7O0VBQUE7O0FBVUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTQTtFQUNJLGdDQUFBO0FBTko7O0FBU0E7RUFDSSw4Q0FBQTtBQU5KOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFQSjs7QUFVQTtFQUNJO3FCQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVVBO0VBQ0kscUJBQUE7QUFQSjs7QUFVQTtFQUNJLGNBQUE7QUFQSiIsImZpbGUiOiJzcG9uc29yLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcG9uc29yR3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4jc3BvbnNvckRlZmF1bHRJbWFnZVJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNWNhMDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbiNzcG9uc29yRGVmYXVsdEltYWdlUm93IGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy9ib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4jc3BvbnNvckltYWdlUm93IHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbiNzcG9uc29ySW1hZ2VSb3cgaW9uLWNvbCB7XG4gICAgLy9ib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3BvbnNvckJ0bnNSb3cge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvL21hcmdpbi10b3A6IDVweDtcbn1cblxuLnNwb25zb3JCdG5zUm93IGlvbi1jb2wge1xuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvKnBhZGRpbmctbGVmdDogMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweDsqL1xufVxuXG4vKiNzcG9uc29yQnRuc1JvdyBpb24tY29sOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcbn1cblxuI3Nwb25zb3JCdG5zUm93IGlvbi1jb2w6bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59Ki9cblxuLnNwb25zb3JCdG5zUm93IGlvbi1jb2wgaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjAyLCAwLCAwLCAwLjkpO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG59XG5cbmlvbi1yb3c6bnRoLWNoaWxkKDIpIGlvbi1jb2wgaW9uLWl0ZW17XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbmlvbi1yb3c6bGFzdC1vZi10eXBlIHtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5cbi5zcG9uc29yQnRuc1JvdyBpb24tY29sIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLnNwb25zb3JCdG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uc3BvbnNvckJ0biBpb24taWNvbiB7XG4gICAgLypkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0bzsqL1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjQ2MDhhO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n    <!--<ion-menu contentId=\"main-content\" type=\"overlay\">-->\n    <ion-menu type=\"overlay\" id=\"sideMenu\" contentId=\"main-content\" [swipeGesture]=\"false\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        \n        <ion-grid id=\"sideMenuGrid\">\n          <ion-row>\n            <ion-list>\n              <ion-menu-toggle auto-hide=\"true\">\n                <ion-item [routerDirection]=\"'root'\" routerLink=\"/home\">\n                  <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n                  <ion-label>\n                    Home\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n\n              <ion-menu-toggle auto-hide=\"true\">\n                <ion-item [routerDirection]=\"'root'\" routerLink=\"/about\">\n                  <ion-icon slot=\"start\" name=\"information-circle\"></ion-icon>\n                  <ion-label>\n                    About\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n\n              <ion-menu-toggle auto-hide=\"true\">\n                <ion-item (click)=\"openPrivacy()\">\n                  <ion-icon slot=\"start\" name=\"lock-closed\"></ion-icon>\n                  <ion-label>\n                    Privacy Policy\n                  </ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n              \n            </ion-list>\n          </ion-row>\n\n          <ion-row align-items-stretch style=\"background-color:beige;\">\n\n          </ion-row>\n        </ion-grid>\n        <!-- <ion-list>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item [routerDirection]=\"'root'\" routerLink=\"/home\">\n              <ion-icon color=\"light\" slot=\"start\" name=\"home\"></ion-icon>\n              <ion-label>\n                Home\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list> -->\n\n\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-app>\n\n        <!-- <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list> -->");

/***/ }),

/***/ 9095:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-modal/event-modal.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>event-modal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 7001:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsor-modal/sponsor-modal.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"font-weight: bold;\" (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-title>{{ sponsor.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid id=\"sponsorGrid\">\n    <ion-row id=\"sponsorImageRow\" *ngIf=\"sponsor.image != ''\">\n      <ion-col>\n          <img [src]=\"sponsor.image\"/> \n      </ion-col>\n    </ion-row>\n    <ion-row id=\"sponsorDefaultImageRow\" *ngIf=\"sponsor.image == ''\">\n      <ion-col>\n          <img src=\"assets/lgLogo.png\"/> \n      </ion-col>\n    </ion-row>\n    <ion-row class=\"sponsorBtnsRow\">\n      <ion-col>\n        <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"openWebsite(sponsor.website)\">\n          <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n          <ion-label slot=\"start\">\n            Website\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"sponsorBtnsRow\">\n      <ion-col *ngIf=\"sponsor.phone && sponsor.phone != ''\">\n        <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"call(sponsor.phone)\">\n            <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n            <ion-label slot=\"start\">\n              Call\n            </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"sponsorBtnsRow\">\n      <ion-col *ngIf=\"sponsor.lat && sponsor.lng\">\n        <ion-item class=\"sponsorBtn\" color=\"danger\" (click)=\"nav(sponsor.lat, sponsor.lng)\">\n          <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n          <ion-label slot=\"start\">\n            Directions\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map