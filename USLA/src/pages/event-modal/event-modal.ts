import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { ItineraryProvider } from '../../providers/itinerary/itinerary';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  event: any;
  today: Date = new Date();
  isIn: any;

  eventStartDate: Date;

  eventEndDate: Date;

    constructor(public viewCtrl: ViewController,
                public navParams: NavParams,
                private calendar: Calendar,
                private itineraryProvider: ItineraryProvider,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController,
                private browser: InAppBrowser) {
  
      this.event = this.navParams.get('event');

      this.isIn = this.itineraryProvider.eventInItinerary(this.event);
      console.log(this.isIn);
    }
  
    onClose() {
      this.viewCtrl.dismiss();
    }

    addOption() {
      if(this.isIn == -1){
        
        let confirm = this.alertCtrl.create({
          title: 'Where to add?',
          message: 'Would you like to add this to your phones native calendar with alarm and navigation settings or to this apps itinerary page?',
          buttons: [
            {
              text: 'Add to Phone Calendar',
              handler: () => {
                this.addToCalendar();
              }
            },
            {
              text: 'Add to App Itinerary',
              handler: () => {
                this.addToItinerary();
              }
            },
            {
              text: 'Cancel',
              handler: () => {
    
              }
            }
          ]
        });
        confirm.present();
      } else {
        let confirm = this.alertCtrl.create({
          title: 'Where to add?',
          message: 'Event already in Itinerary. Would you like to add this to your phones native calendar with alarm and navigation settings?',
          buttons: [
            {
              text: 'Add to Phone Calendar',
              handler: () => {
                this.addToCalendar();
              }
            },
            {
              text: 'Cancel',
              handler: () => {
    
              }
            }
          ]
        });
        confirm.present();
      }
      
    }

    website(url: string) {
      this.browser.create(url, "_system");
    }
  
    addToCalendar() {

      var endDate = new Date(this.event.date + '-04:00');
      //console.log(startDate.getDate());
      endDate.setHours((endDate.getHours() + this.event.duration));


      this.calendar.createEventInteractively(this.event.name, this.event.address, this.event.info, new Date((this.event.date + "-04:00")), endDate)
      .then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
      );
      
    }
  
    addToItinerary() {
  
      let prompt = this.alertCtrl.create({
        title: 'Add to Itinerary',
        message: "Save this event to your itinerary?",
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
  
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.itineraryProvider.addToItinerary(this.event);
              const toast = this.toastCtrl.create({
                message: 'Successfully Added to Itinerary',
                duration: 1500,
                position: 'bottom'
              });
              toast.present();
              this.isIn = this.itineraryProvider.eventInItinerary(this.event);
              //console.log(this.isIn);
            }
          }
        ]
      });
      prompt.present();
    }

}
