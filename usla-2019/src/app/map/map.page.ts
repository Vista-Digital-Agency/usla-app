import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SponsorModalPage } from '../sponsor-modal/sponsor-modal.page';
import { SponsorDataService } from '../sponsor-data.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  sponsors: any = [];
  platform: any;
  map: any;
  markers: any = [];
  selected: string;
  modalPage: any;
  setPosition: number;
  mMarker: any;

  constructor(platform: Platform, private sponsorService: SponsorDataService, private geolocation: Geolocation, private modalController: ModalController) {
    this.platform = platform;
    this.sponsors = this.sponsorService.getSponsors();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    
      this.initMap();
  }

  async openModal(data: any) {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: SponsorModalPage,
          componentProps: {
            'sponsor': data
          }
    });
     
    modal.onDidDismiss().then(() => {

    });
    
    await modal.present();
}

  initMap() {
    this.platform.ready().then(() => {

      this.map = new google.maps.Map(document.getElementById('map'), {
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

      let options = {
        enableHighAccuracy: true
      };

      this.setPosition = 0;

      let watch = this.geolocation.watchPosition(options);
      watch.subscribe((data) => {
       // data can be a set of coordinates, or an error (if an error occurred).
       // data.coords.latitude
       // data.coords.longitude
       

        let mPos = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
       
       if(this.setPosition == 0) {
        
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
      } else {
        this.mMarker.setPosition(mPos);
      }
       
      });

      let path = [
        new google.maps.LatLng(36.858462981966966, -75.97711378548797),
        new google.maps.LatLng(36.856578667758626, -75.97651297066864),
        new google.maps.LatLng(36.856922049588526, -75.97441011880096),
        new google.maps.LatLng(36.85874194753111, -75.9750109336203)];
        let polyline = new google.maps.Polygon({path:path, strokeColor: "#b10229", strokeOpacity: 1.0, strokeWeight: 2, map: this.map, name: "polyline"});
  
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

}
