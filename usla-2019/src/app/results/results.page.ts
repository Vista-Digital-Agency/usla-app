import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  arg: string = 'place';

  results: any;
  selectedEvent: string;
  ageGroup: string;
  gender: string;
  adults: boolean;

  constructor(private modalController: ModalController,
              private navParams: NavParams) {

    
    

    /*if (this.adults == true) {
      this.ageGroup = this.navParams.get('ageGroup');
  
      //console.log(this.results);
      //this.popAdultResults();
    }
    console.log(this.ageGroup);*/
    
    
  }

  ionModalWillPresent() {
    
  }

  ngOnInit() {
    //const mapped = Object.entries(this.navParams.data.gsed).map(([type, value]) => ({type, value}));
    
    //console.log(stringify(this.navParams.data.gsed)); 
    this.results = this.navParams.data.gsed;
    this.selectedEvent = this.navParams.data.selectedEvent;
    this.ageGroup = this.navParams.data.ageGroup;
    this.gender = this.navParams.data.gender;
    this.adults = this.navParams.data.adults;

  }

  async dismiss() {
    await this.modalController.dismiss();
  }

}
