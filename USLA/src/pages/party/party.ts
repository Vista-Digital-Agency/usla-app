import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { EventModalPage } from '../event-modal/event-modal';

@IonicPage()
@Component({
  selector: 'page-party',
  templateUrl: 'party.html',
})
export class PartyPage {

  events: any = [];

  happy: any;
  parade: any;
  dinner: any;
  awards: any;

  constructor(private dataProvider: DataProvider, public modalCtrl: ModalController) {
    this.events = this.dataProvider.getFestivities();

    for(var i = 0; i < this.events.length; i++) {
      if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d83e") {
        this.parade = this.events[i];
      } else if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d841") {
        this.happy = this.events[i];
      } else if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d847") {
        this.dinner = this.events[i];
      } else if (this.events[i]._id.$oid == "5b5f11837b7f60839a94d84b") {
        this.awards = this.events[i];
      }
    }
  }

  openModal(event: any) {
    let eventModal = this.modalCtrl.create(EventModalPage, { event: event });
    eventModal.present();
  }


}
