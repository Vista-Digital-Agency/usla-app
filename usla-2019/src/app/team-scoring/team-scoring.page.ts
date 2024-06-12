import { Component, OnInit } from '@angular/core';
import { ScoringDataService } from '../scoring-data.service';

@Component({
  selector: 'app-team-scoring',
  templateUrl: './team-scoring.page.html',
  styleUrls: ['./team-scoring.page.scss'],
})
export class TeamScoringPage implements OnInit {
  aTeam: any = [];
  bTeam: any = [];
  openTeam: any = [];
  //chapter: any = [];
  region: any = [];

  teamOption: string = "aTeam";

  constructor(private dataProvider: ScoringDataService) {
    this.aTeam = this.dataProvider.getATeam();
    this.bTeam = this.dataProvider.getBTeam();
    this.openTeam = this.dataProvider.getOpenTeam();
    this.region = this.dataProvider.getRegionData();
 
  }

  ionWillEnter() {
    
  }

  ngOnInit() {
  }

}
