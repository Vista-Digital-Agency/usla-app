import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { SponsorModalPageModule } from './sponsor-modal/sponsor-modal.module';
import { EventModalPageModule } from './event-modal/event-modal.module';
import { EventDataService } from './service/event-data.service';
import { SponsorDataService } from './service/sponsor-data.service';

import { OneSignal } from '@ionic-native/onesignal/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
      mode: 'ios'
    }), 
    AppRoutingModule,
    SponsorModalPageModule,
    EventModalPageModule,
  ],
  providers: [
    Geolocation,
    InAppBrowser,
    Calendar,
    CallNumber,
    HTTP,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EventDataService,
    SponsorDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
