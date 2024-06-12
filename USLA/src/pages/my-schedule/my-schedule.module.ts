import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySchedulePage } from './my-schedule';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MySchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(MySchedulePage),
    PipesModule
  ],
})
export class MySchedulePageModule {}
