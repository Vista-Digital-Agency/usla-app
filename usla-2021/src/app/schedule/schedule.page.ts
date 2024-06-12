import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { EventDataService } from '../service/event-data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  events: any = [];

  constructor(private eventsService: EventDataService, private calendar: Calendar) { 
    this.events = this.eventsService.getEvents();

    console.log(this.events);
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
