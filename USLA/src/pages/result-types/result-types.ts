import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndividualPointsPage } from '../individual-points/individual-points';
import { TeamScoringPage } from '../team-scoring/team-scoring';
import { EventResultsPage } from '../event-results/event-results';
import { JuniorGuardResultsPage } from '../junior-guard-results/junior-guard-results';

@IonicPage()
@Component({
  selector: 'page-result-types',
  templateUrl: 'result-types.html',
})
export class ResultTypesPage {

  eventResults: any = EventResultsPage;
  individualPoints: any = IndividualPointsPage;
  teamScoring: any = TeamScoringPage;
  juniorGuardResults: any = JuniorGuardResultsPage;

  constructor() {
  }


}
