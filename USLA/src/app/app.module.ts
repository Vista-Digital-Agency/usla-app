import { BrowserModule } from '@angular/platform-browser';
import { PipesModule } from '../pipes/pipes.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';

import { IonicStorageModule } from '@ionic/storage';

import { ItineraryProvider } from '../providers/itinerary/itinerary';
import { DataProvider } from '../providers/data/data';
import { PushProvider } from '../providers/push/push';

import { AboutPageModule } from '../pages/about/about.module';
import { MapPageModule } from '../pages/map/map.module';
import { MySchedulePageModule } from '../pages/my-schedule/my-schedule.module';
import { PartyPageModule } from '../pages/party/party.module';
import { ProgramPageModule } from '../pages/program/program.module';
import { ScheduleDatePageModule } from '../pages/schedule-date/schedule-date.module';
import { SchedulePageModule } from '../pages/schedule/schedule.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { SponsorsPageModule } from '../pages/sponsors/sponsors.module';
import { EventModalPageModule } from '../pages/event-modal/event-modal.module';
import { ResultsPageModule } from '../pages/results/results.module';
import { EventResultsPageModule } from '../pages/event-results/event-results.module';
import { ResultTypesPageModule } from '../pages/result-types/result-types.module';
import { IndividualPointsPageModule } from '../pages/individual-points/individual-points.module';
import { TeamScoringPageModule } from '../pages/team-scoring/team-scoring.module';
import { JuniorGuardResultsPageModule } from '../pages/junior-guard-results/junior-guard-results.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    PipesModule,
    HttpClientModule,
    NgbModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonIcon: "ios-arrow-back",
      mode: 'ios'
    }),
    IonicStorageModule.forRoot(),
    AboutPageModule,
    MapPageModule,
    MySchedulePageModule,
    PartyPageModule,
    ProgramPageModule,
    ScheduleDatePageModule,
    SchedulePageModule,
    SettingsPageModule,
    SponsorsPageModule,
    EventModalPageModule,
    ResultsPageModule,
    ResultTypesPageModule,
    EventResultsPageModule,
    IndividualPointsPageModule,
    TeamScoringPageModule,
    JuniorGuardResultsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    InAppBrowser,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItineraryProvider,
    DataProvider,
    PushProvider
  ]
})
export class AppModule {}
