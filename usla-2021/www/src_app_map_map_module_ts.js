(self["webpackChunkusla_2021"] = self["webpackChunkusla_2021"] || []).push([["src_app_map_map_module_ts"],{

/***/ 1216:
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 9510);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 2622:
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 1216);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 9510);







let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 9510:
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map.page.html */ 2076);
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss */ 7887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _sponsor_modal_sponsor_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sponsor-modal/sponsor-modal.page */ 5955);
/* harmony import */ var _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/sponsor-data.service */ 2213);








let MapPage = class MapPage {
    constructor(platform, sponsorService, geolocation, modalController) {
        this.sponsorService = sponsorService;
        this.geolocation = geolocation;
        this.modalController = modalController;
        this.sponsors = [];
        this.markers = [];
        this.platform = platform;
        this.sponsors = this.sponsorService.getSponsors();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.initMap();
    }
    openModal(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _sponsor_modal_sponsor_modal_page__WEBPACK_IMPORTED_MODULE_3__.SponsorModalPage,
                componentProps: {
                    'sponsor': data
                }
            });
            modal.onDidDismiss().then(() => {
            });
            yield modal.present();
        });
    }
    initMap() {
        this.platform.ready().then(() => {
            this.map = new google.maps.Map(document.getElementById('map'), {
                maxZoom: 19,
                minZoom: 12,
                zoom: 13,
                //center: new google.maps.LatLng(36.857382, -75.979877),
                //center: new google.maps.LatLng(26.089449, -97.163597),
                center: new google.maps.LatLng(26.109612, -97.170730),
                tilt: 0,
                zoomControl: true,
                streetViewControl: false,
                disableDefaultUI: true,
                //scaleControl: false,
                //mapTypeControl: true,
                navigationControl: false,
                scrollwheel: false,
                fullscreenControl: false,
                //disableDoubleClickZoom: true,
                //mapTypeId: google.maps.MapTypeId.SATELLITE,
                styles: [
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
                ]
            });
            let options = {
                enableHighAccuracy: true
            };
            this.setPosition = 0;
            let watch = this.geolocation.watchPosition(options);
            watch.subscribe((data) => {
                // data can be a set of coordinates, or an error (if an error occurred).
                // data.coords.latitude
                // data.coords.longitude
                console.log(data);
                if ("coords" in data) {
                    let mPos = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                    if (this.setPosition == 0) {
                        this.mMarker = new google.maps.Marker({
                            position: mPos,
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                fillColor: '#0E77E9',
                                fillOpacity: 1,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 1,
                                scale: 10
                            },
                            map: this.map
                        });
                        this.setPosition = 1;
                    }
                    else {
                        this.mMarker.setPosition(mPos);
                    }
                }
            });
            /*let path = [
              new google.maps.LatLng(36.858462981966966, -75.97711378548797),
              new google.maps.LatLng(36.856578667758626, -75.97651297066864),
              new google.maps.LatLng(36.856922049588526, -75.97441011880096),
              new google.maps.LatLng(36.85874194753111, -75.9750109336203)];*/
            let path = [
                new google.maps.LatLng(26.089389, -97.160977),
                new google.maps.LatLng(26.087961, -97.160760),
                new google.maps.LatLng(26.088035, -97.160136),
                new google.maps.LatLng(26.089426, -97.160343),
            ];
            let polyline = new google.maps.Polygon({ path: path, strokeColor: "#b10229", strokeOpacity: 1.0, strokeWeight: 2, map: this.map, name: "polyline" });
            //polyline.setMap(this.map);
            let content = "<b>Contest Area</b>";
            let infowindow = new google.maps.InfoWindow({
                size: new google.maps.Size(250, 150)
            });
            //let anchor = new google.maps.LatLng(36.858462981966966, -75.97711378548797);
            google.maps.event.addListener(polyline, 'click', function (event) {
                infowindow.setContent(content);
                infowindow.setPosition(event.latLng);
                infowindow.open(this.map);
            });
            let bfPath = [
                new google.maps.LatLng(26.137727, -97.169290),
                new google.maps.LatLng(26.137177, -97.169326),
                new google.maps.LatLng(26.137194, -97.168052),
                new google.maps.LatLng(26.137732, -97.168114),
            ];
            let bfPolyline = new google.maps.Polygon({ path: bfPath, strokeColor: "#b10229", strokeOpacity: 1.0, strokeWeight: 2, map: this.map, name: "polyline" });
            //polyline.setMap(this.map);
            let bfContent = "<b>Beach Flags Event Area</b>";
            let bfInfowindow = new google.maps.InfoWindow({
                size: new google.maps.Size(250, 150)
            });
            //let anchor = new google.maps.LatLng(36.858462981966966, -75.97711378548797);
            google.maps.event.addListener(bfPolyline, 'click', function (event) {
                bfInfowindow.setContent(bfContent);
                bfInfowindow.setPosition(event.latLng);
                bfInfowindow.open(this.map);
            });
            var markerPos, marker;
            for (var i = 0; i < this.sponsors.length; i++) {
                if (this.sponsors[i].onMap === "yes") {
                    markerPos = new google.maps.LatLng(this.sponsors[i].lat, this.sponsors[i].lng);
                    marker = new google.maps.Marker({
                        position: markerPos,
                        map: this.map,
                        icon: '' + this.sponsors[i].icon
                    });
                    this.markers.push(marker);
                    let sponsor = this.sponsors[i];
                    let that = this;
                    google.maps.event.addListener(marker, 'click', () => {
                        this.openModal(sponsor);
                    });
                }
            }
            this.popSponsors();
        });
    }
    popSponsors() {
        console.log('its popping');
    }
};
MapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _service_sponsor_data_service__WEBPACK_IMPORTED_MODULE_4__.SponsorDataService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapPage);



/***/ }),

/***/ 7887:
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#map {\n  height: 100%;\n}\n\n@media only screen and (min-height: 750px) and (orientation: portrait) {\n  ion-app {\n    margin-bottom: 0px !important;\n  }\n\n  ion-footer ion-toolbar:last-child {\n    padding-bottom: 0 !important;\n  }\n}\n\nion-app._gmaps_cdv_ .nav-decor {\n  background-color: transparent !important;\n}\n\n.footer ion-buttons ion-select {\n  margin: 0px auto;\n}\n\n.gm-ui-hover-effect {\n  outline: none !important;\n  display: none !important;\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLDZCQUFBO0VBQ047O0VBRUU7SUFDSSw0QkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSx3Q0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6Im1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIGlvbi1hcHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1mb290ZXIgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwIWltcG9ydGFudDtcbiAgICAgIH1cbn1cblxuaW9uLWFwcC5fZ21hcHNfY2R2XyAubmF2LWRlY29ye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXIgaW9uLWJ1dHRvbnMgaW9uLXNlbGVjdCB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmdtLXVpLWhvdmVyLWVmZmVjdCB7XG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ 2076:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" data-tap-disabled=\"true\"></div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_map_map_module_ts.js.map