import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ScoringDataService } from '../scoring-data.service';
import { ResultsPage } from '../results/results.page';

@Component({
  selector: 'app-event-results',
  templateUrl: './event-results.page.html',
  styleUrls: ['./event-results.page.scss'],
})
export class EventResultsPage implements OnInit {
  group: any = "";
  selectedEvent: any = null;
  selectedGender: any = null;
  selectedAgeGroup: any = null;


  eventData: any;
  genderSpecificEventData: any = [];
  genderSpecificEventBrackets: any = [];

  groups: any = [];

  

  groupSets: any = ['OPEN', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70+'];

  events: any = ["Beach Flags", "Ironguard", "Board Race", "4 x 100 Run Relay", "2K Beach Run", "Surf Race", "Run-Swim-Run",
  "Surf Ski Race", "American Ironperson", "Ironperson", "Surf Boat Race", "Rescue Race"];

  showGenderDD: boolean = false;
  showBracketsDD: boolean = false;
  showResultsBtn: boolean = false;

  constructor(private dataProvider: ScoringDataService, public alertCtrl: AlertController, private modalController: ModalController) { }

  ngOnInit() {
  }

  async showResults () { 
    console.log(this.genderSpecificEventData);
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ResultsPage,
        componentProps: { 
          selectedEvent: this.selectedEvent, 
          gsed: this.genderSpecificEventData, 
          ageGroup: this.selectedAgeGroup, 
          gender: this.selectedGender, 
          adults: true 
        }
      });
        
      modal.onDidDismiss().then(() => {

      });
      
      await modal.present();
  }
  

  selectEvent() {
    this.genderSpecificEventData = [];
    this.genderSpecificEventBrackets = [];
    this.selectedGender = null;
    this.selectedAgeGroup = null;
    

    this.showGenderDD = true;
    

    this.updateEventSelected()

  }

  updateEventSelected() {
    if (this.selectedEvent == "Beach Flags") {
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

  }

  selectGender() {

    this.selectedAgeGroup = null;
    this.genderSpecificEventBrackets = [];

    this.genderSpecificEventData = this.eventData[0].competitors.filter((item) => {

      return item.gender.toUpperCase().indexOf(this.selectedGender) > -1;

    });

    for (var x = 0; x < this.genderSpecificEventData.length; x++) {
      if (!this.genderSpecificEventBrackets.includes(this.genderSpecificEventData[x].ageGroupName)) {
        this.genderSpecificEventBrackets.push(this.genderSpecificEventData[x].ageGroupName);
      }
    }


    if (this.selectedGender === null && (this.showBracketsDD == true || this.showResultsBtn == true)) {
      this.showBracketsDD = false;
      this.showResultsBtn = false;
    } else {
      if (this.genderSpecificEventBrackets.length < 2) {
    
          this.showResultsBtn = true;
          this.showBracketsDD = false;

      } else {

          this.showBracketsDD = true;
          this.showResultsBtn = false;
      }
    }
  }

  selectAgeGroup() {
    if (this.selectedAgeGroup !== null) {
      this.showResultsBtn = true;
    }
  }

}
