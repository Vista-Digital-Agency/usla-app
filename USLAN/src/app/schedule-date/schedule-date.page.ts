import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-date',
  templateUrl: './schedule-date.page.html',
  styleUrls: ['./schedule-date.page.scss'],
})
export class ScheduleDatePage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        console.log(data.date);
      });
  }

}
