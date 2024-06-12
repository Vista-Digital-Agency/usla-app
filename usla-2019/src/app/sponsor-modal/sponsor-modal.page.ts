import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-sponsor-modal',
  templateUrl: './sponsor-modal.page.html',
  styleUrls: ['./sponsor-modal.page.scss'],
})
export class SponsorModalPage implements OnInit {
  @Input() sponsor: any;
  
  constructor(private modalController: ModalController, private iab: InAppBrowser, private callNum: CallNumber) { 
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

  async dismiss() {
    await this.modalController.dismiss();
  }

}
