import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { EventDataService } from './service/event-data.service';
import { SponsorDataService } from './service/sponsor-data.service';
import { ProgramService } from './service/program.service';
//import { OneSignal } from '@ionic-native/onesignal/ngx';


declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(
    private platform: Platform,
    private iab: InAppBrowser,
    private eventService: EventDataService,
    private sponsorService: SponsorDataService,
    private programService: ProgramService,
    //private oneSignal: OneSignal
    //private oneSignal: OneSignal
  ) {
    platform.ready().then(() => {
      
      setTimeout(()=>{
        SplashScreen.hide({
          fadeOutDuration: 1000
        });
      }, 2000)


      this.sponsorService.loadData();
      this.eventService.loadData();
      this.programService.loadData();

      if(this.platform.is('mobile')) {

        //alert(this.platform.is('mobile'));

        //Remove this method to stop OneSignal Debugging 
        window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
        //this.oneSignal.setLogLevel({logLevel: 6, visualLevel: 0});

        var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        // Set your iOS Settings
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = false;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

        window.plugins.OneSignal
        //this.oneSignal
            .startInit("85605cca-40f0-4cff-8746-59fb5ad9553b")
            .handleNotificationOpened(notificationOpenedCallback)
            .iOSSettings(iosSettings)
            .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
            //.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification)
            .endInit();

        // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
        window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        //window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
            console.log("User accepted notifications: " + accepted);
        });

      }

        /*this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });

        this.oneSignal.endInit();*/

    });
  }


  openPrivacy() {
    const browser = this.iab.create("https://www.freeprivacypolicy.com/privacy/view/fccb8cf693c28c96c2c740c7dc941c5c", "_system");
    browser.close();
  }
}
