import { Component, OnInit } from '@angular/core';
import { SponsorDataService } from '../sponsor-data.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {

  sponsors: any = [];

  constructor(private sponsorService: SponsorDataService, private iab: InAppBrowser, private callNum: CallNumber) { 
    this.sponsors = this.sponsorService.getSponsors();
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
    let browser = this.iab.create("https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + lng , '_system');
    browser.close();
  }

}
