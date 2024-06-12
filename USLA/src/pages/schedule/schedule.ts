import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ScheduleDatePage } from '../schedule-date/schedule-date';
import { MySchedulePage } from '../my-schedule/my-schedule';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  scheduleDate: any = ScheduleDatePage;
  mySchedule: any = MySchedulePage;

  constructor() {
  }

}
