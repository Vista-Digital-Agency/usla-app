import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ResultsPage } from '../results/results';

@IonicPage()
@Component({
  selector: 'page-junior-guard-results',
  templateUrl: 'junior-guard-results.html',
})
export class JuniorGuardResultsPage {

  resultsPage: any = ResultsPage;

  group: any = "";
  selectedEvent: any = null;
  selectedGender: any = null;
  selectedAgeGroup: any = null;


  eventData: any;
  genderSpecificEventData: any = [];
  genderSpecificEventBrackets: any = [];

  groups: any = [];

  

  groupSets: any = ['U19', 'A', 'B', 'C'];

  events: any = ["Beach Flags", "Distance Run", "Surf Swim Race", "Ironguard", "Board Race", "Run-Swim-Run", "Rescue Race-JG",
  "Swim Relay", "Surf Ski-U19", "Rescue Race-U19", "Ironperson-U19" ];

  showGenderDD: boolean = false;
  showBracketsDD: boolean = false;
  showResultsBtn: boolean = false;


  beachFlagJR: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    
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
      this.eventData = this.dataProvider.getBeachFlagsJR();
    } else if (this.selectedEvent == "Distance Run") {
      this.eventData = this.dataProvider.getDistanceRun();
    } else if (this.selectedEvent == "Surf Swim Race") {
      this.eventData = this.dataProvider.getSurfSwimRaceJR();
    } else if (this.selectedEvent == "Ironguard") {
      this.eventData = this.dataProvider.getIronguardJR();
    } else if (this.selectedEvent == "Board Race") {
      this.eventData = this.dataProvider.getBoardRaceJR();
    }  else if (this.selectedEvent == "Run-Swim-Run") {
      this.eventData = this.dataProvider.getRunSwimRunJR();
    } else if (this.selectedEvent == "Rescue Race-JG") {
      this.eventData = this.dataProvider.getRescueRaceJG();
    } else if (this.selectedEvent == "Swim Relay") {
      this.eventData = this.dataProvider.getSwimRelay();
    } else if (this.selectedEvent == "Surf Ski-U19") {
      this.eventData = this.dataProvider.getSurfSkiU19();
    }  else if (this.selectedEvent == "Ironperson-U19") {
      this.eventData = this.dataProvider.getIronpersonU19();
    } else if (this.selectedEvent == "Rescue Race-U19") {
      this.eventData = this.dataProvider.getRescueRaceU19();
    } 
    
    
    /*console.log(this.eventData[0].competitors.length);
    for (var i = 0; i < this.eventData[0].competitors.length; i++) {
      if (this.eventData[0].competitors[i]['eventGender'].toUpperCase() == 'O') {
        
        console.log(this.eventData[0].competitors[i]['eventGender']);
      }
    }*/

  }

  selectGender() {

    this.selectedAgeGroup = null;
    this.genderSpecificEventBrackets = [];

    this.genderSpecificEventData = this.eventData[0].competitors.filter((item) => {

      return item.gender.toUpperCase().indexOf(this.selectedGender) > -1;

    });

    for (var x = 0; x < this.genderSpecificEventData.length; x++) {
      if (!this.genderSpecificEventBrackets.includes(this.genderSpecificEventData[x].scoreId)) {
        this.genderSpecificEventBrackets.push(this.genderSpecificEventData[x].scoreId);
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
/*if (event == "Beach Flags") {
  this.competitors = this.dataProvider.getBeachFlagsAdults();
} else if (event == "Rescue Race-JG") {
  this.competitors = this.dataProvider.getRescueRaceJG();
} else if (event == "Rescue Race-U19") {
  this.competitors = this.dataProvider.getRescueRaceU19();
} else if (event == "Ironguard") {
  this.competitors = this.dataProvider.getIronguardAdults();
} else if (event == "Board Race") {
  this.competitors = this.dataProvider.getBoardRaceAdults();
} else if (event == "4 x 100 Run Relay") {
  this.competitors = this.dataProvider.getRunRelay();
} else if (event == "2K Beach Run") {
  this.competitors = this.dataProvider.getBeachRun();
} else if (event == "Surf Race") {
  this.competitors = this.dataProvider.getSurfRace();
} else if (event == "Run-Swim-Run") {
  this.competitors = this.dataProvider.getRunSwimRunAdults();
} else if (event == "Surf Ski Race") {
  this.competitors = this.dataProvider.getSurfSkiRace();
} else if (event == "American Ironperson") {
  this.competitors = this.dataProvider.getAmericanIronperson();
} else if (event == "Ironperson") {
  this.competitors = this.dataProvider.getIronperson();
} else if (event == "Surf Boat Race") {
  this.competitors = this.dataProvider.getSurfBoatRace();
} else if (event == "Rescue Race") {
  this.competitors = this.dataProvider.getRescueRace();
} else if (event == "Swim Relay") {
  this.competitors = this.dataProvider.getSwimRelay();
} else if (event == "Distance Run") {
  this.competitors = this.dataProvider.getDistanceRun();
} else if (event == "Surf Swim Race") {
  this.competitors = this.dataProvider.getSurfSwimRaceAdults();
} else if (event == "Ironperson-U19") {
  this.competitors = this.dataProvider.getIronpersonU19();
} else if (event == "Surf Ski-U19") {
  this.competitors = this.dataProvider.getSurfSkiU19();
}*/