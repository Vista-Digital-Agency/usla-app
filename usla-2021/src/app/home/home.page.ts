import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
/*import { EventDataService } from '../service/event-data.service';
import { ProgramService } from '../service/program.service';
import { SponsorDataService } from '../service/sponsor-data.service';*/

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private iab: InAppBrowser,
    /*private eventService: EventDataService,
    private sponsorService: SponsorDataService,
    private programService: ProgramService,*/
    ) { }

  ngOnInit() {
    
  }

  openResults() {
      const browser = this.iab.create("https://www.usla.org/page/Nationals", "_system");
      browser.close();
  }

}
