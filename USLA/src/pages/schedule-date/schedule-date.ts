import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { EventModalPage } from '../event-modal/event-modal';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@IonicPage()
@Component({
  selector: 'page-schedule-date',
  templateUrl: 'schedule-date.html',
})
export class ScheduleDatePage {
  selectedDate: number;

  allEvents: any;
  events: any = [];

  constructor(private dataProvider: DataProvider, private navParams: NavParams, public modalCtrl: ModalController) {
    this.selectedDate = this.navParams.get('date');

    this.allEvents = this.dataProvider.getEvents();
    var date
    for (var x = 0; x < this.allEvents.length; x++) {
      date = new Date(this.allEvents[x].dateTime).getDate();

      if(date == this.selectedDate) {
        this.events.push(this.allEvents[x]);
      }
    }
  }

  eventClicked(event: any) {
    let eventModal = this.modalCtrl.create(EventModalPage, { event: event });
    eventModal.present();
  }

}
