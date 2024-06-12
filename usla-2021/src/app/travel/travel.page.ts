import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.page.html',
  styleUrls: ['./travel.page.scss'],
})
export class TravelPage {

  constructor(private iab: InAppBrowser) { }

  openWebsite(site) {
    const browser = this.iab.create(site, '_system');    
    browser.close();
  }

}
