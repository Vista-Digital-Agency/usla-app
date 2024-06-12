(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");







var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/map/map.page.html":
/*!***********************************!*\
  !*** ./src/app/map/map.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" data-tap-disabled=\"true\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%; }\n\n@media only screen and (min-height: 750px) and (orientation: portrait) {\n  ion-app {\n    margin-bottom: 0px !important; }\n  ion-footer ion-toolbar:last-child {\n    padding-bottom: 0 !important; } }\n\nion-app._gmaps_cdv_ .nav-decor {\n  background-color: transparent !important; }\n\n.footer ion-buttons ion-select {\n  margin: 0px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGV3L0Rlc2t0b3AvVVNMQSBwcm9qZWN0cy91c2xhLTIwMTkvc3JjL2FwcC9tYXAvbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSTtJQUNJLDZCQUE0QixFQUFBO0VBR2hDO0lBQ0ksNEJBQTJCLEVBQUEsRUFDNUI7O0FBR1A7RUFDSSx3Q0FBd0MsRUFBQTs7QUFHNUM7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NTBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICBpb24tYXBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tZm9vdGVyIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgICB9XG59XG5cbmlvbi1hcHAuX2dtYXBzX2Nkdl8gLm5hdi1kZWNvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIGlvbi1idXR0b25zIGlvbi1zZWxlY3Qge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/map/map.page.ts":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _sponsor_modal_sponsor_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sponsor-modal/sponsor-modal.page */ "./src/app/sponsor-modal/sponsor-modal.page.ts");
/* harmony import */ var _sponsor_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sponsor-data.service */ "./src/app/sponsor-data.service.ts");






var MapPage = /** @class */ (function () {
    function MapPage(platform, sponsorService, geolocation, modalController) {
        this.sponsorService = sponsorService;
        this.geolocation = geolocation;
        this.modalController = modalController;
        this.sponsors = [];
        this.markers = [];
        this.platform = platform;
        this.sponsors = this.sponsorService.getSponsors();
    }
    MapPage.prototype.ngOnInit = function () {
    };
    MapPage.prototype.ionViewDidEnter = function () {
        this.initMap();
    };
    MapPage.prototype.openModal = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _sponsor_modal_sponsor_modal_page__WEBPACK_IMPORTED_MODULE_4__["SponsorModalPage"],
                            componentProps: {
                                'sponsor': data
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.initMap = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.map = new google.maps.Map(document.getElementById('map'), {
                maxZoom: 19,
                minZoom: 12,
                zoom: 15,
                center: new google.maps.LatLng(36.857382, -75.979877),
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
            var options = {
                enableHighAccuracy: true
            };
            _this.setPosition = 0;
            var watch = _this.geolocation.watchPosition(options);
            watch.subscribe(function (data) {
                // data can be a set of coordinates, or an error (if an error occurred).
                // data.coords.latitude
                // data.coords.longitude
                var mPos = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                if (_this.setPosition == 0) {
                    _this.mMarker = new google.maps.Marker({
                        position: mPos,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            fillColor: '#0E77E9',
                            fillOpacity: 1,
                            strokeColor: '#FFFFFF',
                            strokeWeight: 1,
                            scale: 10
                        },
                        map: _this.map
                    });
                    _this.setPosition = 1;
                }
                else {
                    _this.mMarker.setPosition(mPos);
                }
            });
            var path = [
                new google.maps.LatLng(36.858462981966966, -75.97711378548797),
                new google.maps.LatLng(36.856578667758626, -75.97651297066864),
                new google.maps.LatLng(36.856922049588526, -75.97441011880096),
                new google.maps.LatLng(36.85874194753111, -75.9750109336203)
            ];
            var polyline = new google.maps.Polygon({ path: path, strokeColor: "#b10229", strokeOpacity: 1.0, strokeWeight: 2, map: _this.map, name: "polyline" });
            //polyline.setMap(this.map);
            var content = "<b>Contest Area</b>";
            var infowindow = new google.maps.InfoWindow({
                size: new google.maps.Size(250, 150)
            });
            //let anchor = new google.maps.LatLng(36.858462981966966, -75.97711378548797);
            google.maps.event.addListener(polyline, 'click', function (event) {
                infowindow.setContent(content);
                infowindow.setPosition(event.latLng);
                infowindow.open(this.map);
            });
            var markerPos, marker;
            var _loop_1 = function () {
                if (_this.sponsors[i].onMap === "yes") {
                    markerPos = new google.maps.LatLng(_this.sponsors[i].lat, _this.sponsors[i].lng);
                    marker = new google.maps.Marker({
                        position: markerPos,
                        map: _this.map,
                        icon: '' + _this.sponsors[i].icon
                    });
                    _this.markers.push(marker);
                    var sponsor_1 = _this.sponsors[i];
                    var that = _this;
                    google.maps.event.addListener(marker, 'click', function () {
                        _this.openModal(sponsor_1);
                    });
                }
            };
            for (var i = 0; i < _this.sponsors.length; i++) {
                _loop_1();
            }
            _this.popSponsors();
        });
    };
    MapPage.prototype.popSponsors = function () {
        console.log('its popping');
    };
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _sponsor_data_service__WEBPACK_IMPORTED_MODULE_5__["SponsorDataService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map