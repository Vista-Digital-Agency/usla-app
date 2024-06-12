import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { SponsorsPage } from '../sponsors/sponsors';
import { AboutPage } from '../about/about';
import { ProgramPage } from '../program/program';
import { PartyPage } from '../party/party';
import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schedulePage: any = SchedulePage;
  sponsorsPage: any = SponsorsPage;
  aboutPage: any = AboutPage;
  programPage: any = ProgramPage;
  partyPage: any = PartyPage;
  mapPage: any = MapPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
    
  }

  openSettings() {
    let settingsModal = this.modalCtrl.create(SettingsPage);
    settingsModal.present();
  }



}
