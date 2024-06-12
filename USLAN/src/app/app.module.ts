import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DateSorterPipe } from './date-sorter.pipe';
import { FilterGroupSetsPipe } from './filter-group-sets.pipe';
import { GroupSorterPipe } from './group-sorter.pipe';
import { SortPipe } from './sort.pipe';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [AppComponent, DateSorterPipe, FilterGroupSetsPipe, GroupSorterPipe, SortPipe, SortByPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
