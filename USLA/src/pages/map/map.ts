import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;

  platform: any;
  map: any;

  setPosition: any;
  myMarker: any;

  myLoc: any;
  //myLat: number;
  //myLon: number;

  constructor(platform: Platform, private geolocation: Geolocation) {
    this.platform = platform;
  }

  ionViewDidEnter() {
    this.initializeMap();
    //this.myLat = 36.852501;
    //this.myLon = -75.978376; 
  }

  initializeMap() {
    
  this.platform.ready().then(() => {

    var myStyles =[
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
    ];

      let mapOptions = {
        maxZoom: 19,
        minZoom: 12,
        zoom: 15,
        center: new google.maps.LatLng(36.857382, -75.979877),
        styles: myStyles
      };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let path = [
      new google.maps.LatLng(36.858462981966966, -75.97711378548797),
      new google.maps.LatLng(36.856578667758626, -75.97651297066864),
      new google.maps.LatLng(36.856922049588526, -75.97441011880096),
      new google.maps.LatLng(36.85874194753111, -75.9750109336203)];
      let polyline = new google.maps.Polygon({path:path, strokeColor: "#FF0000", strokeOpacity: 1.0, strokeWeight: 2, map: this.map, name: "polyline"});

    //polyline.setMap(this.map);
    let content = "<b>Contest Area</b>";

    let infowindow = new google.maps.InfoWindow({
      size: new google.maps.Size(250, 150)
    });

    //let anchor = new google.maps.LatLng(36.858462981966966, -75.97711378548797);

    google.maps.event.addListener(polyline, 'click', function(event) {
      infowindow.setContent(content);
      infowindow.setPosition(event.latLng);
      infowindow.open(this.map);
    });

    var marker;
    var imageTop = {
      labelOrigin: new google.maps.Point(11, -15),
      url: 'assets/imgs/marker_red.png',
      size: new google.maps.Size(22, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(11, 40),
    }

    var imageBottom = {
      labelOrigin: new google.maps.Point(0, 50),
      url: 'assets/imgs/marker_red.png',
      size: new google.maps.Size(22, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(11, 40),
    }

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.857049, -75.977377),
      icon: imageBottom,
      label: {
        text: 'Best Western',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8496419, -75.9763075),
      icon: imageBottom,
      label: {
        text: "Peabody's",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.852948, -75.975437),
      icon: imageTop,
      label: {
        text: "VB Surf & Rescue Museum",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });
    
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.859591, -75.977683),
      icon: imageTop,
      label: {
        text: "31st St. Park",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8578952, -75.981346),
      icon: imageTop,
      label: {
        text: "Murphy's Grand Irish Pub",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8646656, -75.9824806),
      icon: imageBottom,
      label: {
        text: "Pelon's Baja Grill",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8512537, -75.9789249),
      icon: imageTop,
      label: {
        text: "Doc Taylor's",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.851231, -75.9787041),
      icon: imageBottom,
      label: {
        text: "Tautog's Restaurant",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8582518, -75.98449),
      icon: imageBottom,
      label: {
        text: "Aloha Snacks",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8568954, -75.9821296),
      icon: imageBottom,
      label: {
        text: "7-Eleven",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8661456, -75.9826391),
      icon: imageTop,
      label: {
        text: "7-Eleven",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(36.8464116, -75.9841651),
      icon: imageTop,
      label: {
        text: "The Beach Bully BBQ",
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#09357a'
      },
      map: this.map
    });

    this.setPosition = 0;
    
          let options = {
            enableHighAccuracy: true
          };
    
          let watch = this.geolocation.watchPosition(options);
    
          watch.subscribe((data) => {
            
            let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
    
            if (this.setPosition == 0) {
              this.myMarker = new google.maps.Marker({
                position: updatelocation,
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
              this.myLoc = updatelocation;
    
              this.setPosition = 1;
            } else {
              this.myLoc = updatelocation;
              this.myMarker.setPosition(updatelocation);
            }
            
          });
    /*google.maps.event.addListener(polyline, 'click', () => {
      infoWindow.open(this.map, polyline);
      console.log('in');
    });*/

    })

  }

}
