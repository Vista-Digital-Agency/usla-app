import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

declare var cordova: any;

@Injectable()
export class PushProvider {
  private pushEnabled: boolean;

    constructor(private platform: Platform, private storage: Storage) {
      //this.fetchPush();
    }

    fetchPush() {
        return this.storage.get('pushEnabled')
          .then(
            (enabled: boolean) => {
              this.pushEnabled = enabled != null ? enabled : true;
            }
          )
          .catch(
            err => console.log(err)
          );
      }

    setPushEnabled(enabled: boolean) {
      this.pushEnabled = enabled;
      this.storage.set('pushEnabled', this.pushEnabled)
        .then()
        .catch(
          err => {
            console.log(err);
          }
        );

      if (this.platform.is('cordova')) {
        var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");

        if(this.pushEnabled == true) {
          //register for pushes
           pushNotification.registerDevice(
              function (status) {
                var pushToken = status;
                console.warn('push token: ' + pushToken);
              },
              function (status) {
                console.warn(JSON.stringify(['failed to register ', status]));
              }
          );
        } else {
          pushNotification.unregisterDevice();
        }
      }
    }

    getEnabled() {
      return this.pushEnabled;
    }

}
