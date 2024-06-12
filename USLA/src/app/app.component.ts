import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ItineraryProvider } from '../providers/itinerary/itinerary';
import { DataProvider } from '../providers/data/data';
import { PushProvider } from '../providers/push/push';

declare var cordova:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private pushEnabled: boolean;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              public itineraryProvider: ItineraryProvider,
              public dataProvider: DataProvider,
              public pushService: PushProvider) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.dataProvider.popEvents();
      this.itineraryProvider.fetchItineraryList();

      this.pushService.fetchPush()
      .then(() => {
        //alert(platform.is('cordova'));
        if (this.platform.is('cordova')) {
          this.initPushwoosh();
        }
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public initPushwoosh() {
    var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
  
    //set push notifications handler
    document.addEventListener('push-notification', function (event:any) {
  
      var title = event.notification.message;
      var userData = event.notification.userdata;
      //var title = "Titel";
      //var userData = "Userdata Text";
      if (typeof(userData) != "undefined") {
        console.warn('user data: ' + JSON.stringify(userData));
        //alert(JSON.stringify(userData));
      }
  
      alert("Push Notification\n" + title);
    });
  
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
  pushNotification.onDeviceReady({projectid: "981996647565", pw_appid: "505DC-013E4"});
  
  
  this.pushEnabled = this.pushService.getEnabled();
  //alert(this.pushEnabled);
  if(this.pushEnabled == true) {
    //register for pushes
     pushNotification.registerDevice(
        function (status) {
          var pushToken = status;
          console.warn('push token: ' + pushToken);
        },
        function (status) {
          console.warn(JSON.stringify(['failed to register ', status]));
          //alert(JSON.stringify(['failed to register ', status]));
        }
    );
  } else {
    pushNotification.unregisterDevice();
  }
  
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
