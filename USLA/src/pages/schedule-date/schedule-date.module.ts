import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleDatePage } from './schedule-date';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ScheduleDatePage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleDatePage),
    PipesModule
  ],
})
export class ScheduleDatePageModule {}
