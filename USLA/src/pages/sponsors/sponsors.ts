import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {

  sponsors: any;

  options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };

  constructor(public dataProvider: DataProvider, public browser: InAppBrowser) {
    this.sponsors = this.dataProvider.getSponsors();

    console.log(this.sponsors);
  }

  call(phoneNum: string) {
    window.open("tel:" + phoneNum, "_system");
  }

  website(url: string) {
    this.browser.create(url, "_system", this.options);
  }

  directions(address: string) {
    var urlAddress = encodeURIComponent(address);
    if( (navigator.platform.indexOf("iPhone") != -1)
      || (navigator.platform.indexOf("iPod") != -1)
      || (navigator.platform.indexOf("iPad") != -1)) {

      window.open("https://www.google.com/maps/dir/?api=1&destination=" + urlAddress, '_blank');
    } else {

      window.open("https://www.google.com/maps/dir/?api=1&destination=" + urlAddress, '_system');
    }
  }
}
