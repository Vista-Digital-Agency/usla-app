import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SponsorDataService } from './sponsor-data.service';
import { EventDataService } from './event-data.service';
import { ProgramService } from './program.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sponsorService: SponsorDataService,
    private eventService: EventDataService,
    private programService: ProgramService,
    private iab: InAppBrowser
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      if(this.platform.is('cordova')) {
        this.initPushwoosh();
      }
    
    
    });
    this.sponsorService.loadData();
    this.eventService.loadData();
    this.programService.loadData();
  }

  initPushwoosh() {
    var pushNotification = (<any>window).plugins.pushNotification;

    //set push notifications handler
  document.addEventListener('push-notification',
    function(event) {
      var message = (<any>event).notification.message;
      var userData = (<any>event).notification.userdata;

      alert("Push message opened: " + message);
      console.info(JSON.stringify((<any>event).notification));

      //dump custom data to the console if it exists
      if (typeof(userData) != "undefined") {
        console.warn('user data: ' + JSON.stringify(userData));
      }
    }
  );

  document.addEventListener('push-receive',
    function (event) {
        var message = (<any>event).notification.message;
        var userData = (<any>event).notification.userdata;
                              
        alert("Push message received: " + message);
        console.info(JSON.stringify((<any>event).notification));
                              
        //dump custom data to the console if it exists
        if (typeof (userData) != "undefined") {
          console.warn('user data: ' + JSON.stringify(userData));
        }
      }
   );

  //initialize Pushwoosh with projectid: "YOUR_FCM_SENDER_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
  pushNotification.onDeviceReady({
    projectid: "981996647565",
    appid: "505DC-013E4",
    serviceName: ""
  });

  //register for push notifications
  var app = this;
  pushNotification.registerDevice(
    function(status) {
      //alert("registered with token: " + status.pushToken);
    },
    function(status) {
      //alert("failed to register: " + status);
      console.warn(JSON.stringify(['failed to register ', status]));
    }
  );
}

  openPrivacy() {
    const browser = this.iab.create("https://www.freeprivacypolicy.com/privacy/view/fccb8cf693c28c96c2c740c7dc941c5c", "_system");
    browser.close();
  }
}
