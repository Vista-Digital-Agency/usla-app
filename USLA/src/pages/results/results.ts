import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { EventResultsPage } from '../event-results/event-results';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  /*events: any = ["Beach Flags", "Rescue Race-JG", "Rescue Race-U19", "Ironguard", "Board Race", "4 x 100 Run Relay", "2K Beach Run", "Surf Race", "Run-Swim-Run",
  "Surf Ski Race", "American Ironperson", "Ironperson", "Surf Boat Race", "Rescue Race", "Swim Relay", "Distance Run", "Surf Swim Race", "Ironperson-U19", "Surf Ski-U19"];
*/

  //eventData: any = [];
  arg: string = 'place';

  selectedEvent: string;
  ageGroup: string;
  gender: string;
  adults: boolean;
  results: any;

  constructor(private dataProvider: DataProvider, public navParams: NavParams) {

    this.adults = this.navParams.get('adults');
    this.selectedEvent = this.navParams.get('selectedEvent');
    this.ageGroup = this.navParams.get('ageGroup');
    this.gender = this.navParams.get('gender');


    this.results = this.navParams.get('gsed');

    /*if (this.adults == true) {
      this.ageGroup = this.navParams.get('ageGroup');
  
      //console.log(this.results);
      //this.popAdultResults();
    }
    console.log(this.ageGroup);*/
    console.log(this.results);
    


  }

  popAdultResults() {
   /* if (this.selectedEvent == "Beach Flags") {
      this.eventData = this.dataProvider.getBeachFlagsAdults();
    } else if (this.selectedEvent == "Ironguard") {
      this.eventData = this.dataProvider.getIronguardAdults();
    } else if (this.selectedEvent == "Board Race") {
      this.eventData = this.dataProvider.getBoardRaceAdults();
    } else if (this.selectedEvent == "4 x 100 Run Relay") {
      this.eventData = this.dataProvider.getRunRelay();
    } else if (this.selectedEvent == "2K Beach Run") {
      this.eventData = this.dataProvider.getBeachRun();
    } else if (this.selectedEvent == "Surf Race") {
      this.eventData = this.dataProvider.getSurfRace();
    } else if (this.selectedEvent == "Run-Swim-Run") {
      this.eventData = this.dataProvider.getRunSwimRunAdults();
    } else if (this.selectedEvent == "Surf Ski Race") {
      this.eventData = this.dataProvider.getSurfSkiRace();
    } else if (this.selectedEvent == "American Ironperson") {
      this.eventData = this.dataProvider.getAmericanIronperson();
    } else if (this.selectedEvent == "Ironperson") {
      this.eventData = this.dataProvider.getIronperson();
    } else if (this.selectedEvent == "Surf Boat Race") {
      this.eventData = this.dataProvider.getSurfBoatRace();
    } else if (this.selectedEvent == "Rescue Race") {
      this.eventData = this.dataProvider.getRescueRace();
    } else if (this.selectedEvent == "Surf Swim Race") {
      this.eventData = this.dataProvider.getSurfSwimRaceAdults();
    }

    console.log(this.eventData); */
  }

}
