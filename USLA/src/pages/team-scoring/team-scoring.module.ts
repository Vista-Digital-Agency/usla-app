import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamScoringPage } from './team-scoring';

@NgModule({
  declarations: [
    TeamScoringPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamScoringPage),
  ],
})
export class TeamScoringPageModule {}
