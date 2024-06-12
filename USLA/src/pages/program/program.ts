import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ResultsPage } from '../results/results';
import { ResultTypesPage } from '../result-types/result-types';

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {
events: any = [];
resultsPage: any = ResultsPage;
resultTypes: any = ResultTypesPage;

  constructor(private dataProvider: DataProvider, private browser: InAppBrowser) {

  }

  ionViewWillEnter() {
    var getProgram = this.dataProvider.getProgram();
    console.log(getProgram);
    this.events = getProgram.events;
  }

  openPdf(url: string) {
    this.browser.create(url, "_system");
  }

  website(url: string) {
    this.browser.create(url, "_system");
  }

}
