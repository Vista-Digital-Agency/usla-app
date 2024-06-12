import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventResultsPage } from './event-results';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    EventResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventResultsPage),
    PipesModule
  ],
})
export class EventResultsPageModule {}
