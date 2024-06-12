import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndividualPointsPage } from './individual-points';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    IndividualPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(IndividualPointsPage),
    PipesModule,
  ],
})
export class IndividualPointsPageModule {}
