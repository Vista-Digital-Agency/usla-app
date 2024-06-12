import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ItineraryProvider {

  itineraryList: any = [];

  constructor(private storage: Storage) {}

  addToItinerary(event: any) {

      this.itineraryList.push(event);
      this.storage.set('itinerary', JSON.stringify(this.itineraryList))
        .then()
        .catch(
          err => {
            console.log(err);
            this.itineraryList.splice(this.itineraryList.findIndex(x => x._id.$oid == event['_id']['$oid']), 1);
          }
        );
    } 

  loadItineraryList() {
    return this.itineraryList.slice();
  }

  fetchItineraryList() {
    this.storage.get('itinerary').then((val) => {
      if (val) {
        //this.itineraryList = val;
        this.itineraryList = JSON.parse(val);
      } else {
        this.itineraryList = [];
      }
      
    })
  }

  getItinerary() {
    return this.itineraryList.slice();
  }

  eventInItinerary(event: any) {
    return this.itineraryList.findIndex(x => x._id.$oid == event['_id']['$oid']);
  }

    deleteItineraryItem(event: any) {
    //const itineraryItem = this.itineraryList[index];
    this.itineraryList.splice(this.itineraryList.findIndex(x => x._id.$oid == event['_id']['$oid']), 1);
    this.storage.set('itinerary', JSON.stringify(this.itineraryList))
    .then(
      () => {
      }
    )
    .catch(
      err => console.log(err)
    );
  }

}

