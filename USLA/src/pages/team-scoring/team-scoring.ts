import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-team-scoring',
  templateUrl: 'team-scoring.html',
})
export class TeamScoringPage {
  aTeam: any = [];
  bTeam: any = [];
  openTeam: any = [];
  //chapter: any = [];
  region: any = [];

  teamOption: string = "aTeam";

  constructor(private dataProvider: DataProvider) {
    this.aTeam = this.dataProvider.getATeam();
    this.bTeam = this.dataProvider.getBTeam();
    this.openTeam = this.dataProvider.getOpenTeam();
    this.region = this.dataProvider.getRegionData();
      
    console.log(this.region);
  }

}
