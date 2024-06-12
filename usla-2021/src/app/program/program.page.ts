import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ProgramService } from '../service/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {

  events: any = [];
  public items: any = [];

  constructor(private programProvider: ProgramService, private iab: InAppBrowser) {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }

  ngOnInit() {
  }

  openSite(site: string) {
    const browser = this.iab.create(site, '_system');    
    browser.close();
  }
  

expandItem(item): void {
  if (item.expanded) {
    item.expanded = false;
  } else {
    this.items.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}

  ionViewWillEnter() {
    this.events = this.programProvider.getProgram();
  }

  openPdf(url: string) {
    const browser = this.iab.create(url, '_system');    
    browser.close();
  }

  website(url: string) {
    const browser = this.iab.create(url, '_system');    
    browser.close();
  }

}
