import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  events: any = [];

  constructor(private eventsService: EventDataService, private calendar: Calendar) { 
    this.events = this.eventsService.getEvents();
  }

  ngOnInit() {
  }

  addCal(event: any) {
      
    var start = new Date (event.dateTime);



    this.calendar.createEventInteractively(event.name, event.address, '', start)
    .then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
          
  }

  get sortFunc () {
    return this.events.sort((b, a) => {
      return <any>new Date(b.dateTime) - <any>new Date(a.dateTime);
    });
  }

}
