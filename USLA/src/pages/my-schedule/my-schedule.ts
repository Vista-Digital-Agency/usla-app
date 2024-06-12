import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ItineraryProvider } from '../../providers/itinerary/itinerary';
import { EventModalPage } from '../event-modal/event-modal';

@IonicPage()
@Component({
  selector: 'page-my-schedule',
  templateUrl: 'my-schedule.html',
})
export class MySchedulePage {

  itinerary: any = [];
  
    constructor(private itineraryProvider: ItineraryProvider, 
                private modalCtrl: ModalController) {
  
      this.itinerary = this.itineraryProvider.getItinerary();
  
    }
  
    eventClicked(event: any) {
      let eventModal = this.modalCtrl.create(EventModalPage, { event: event });
      eventModal.present();
    }
  
    removeEvent(event: any) {
      this.itineraryProvider.deleteItineraryItem(event);
      this.itinerary = this.itineraryProvider.getItinerary();
    }

}
