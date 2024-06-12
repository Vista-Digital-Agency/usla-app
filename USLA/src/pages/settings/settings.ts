import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { PushProvider } from '../../providers/push/push';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  pushEnabled: boolean;

  constructor(private pushService: PushProvider, public viewCtrl: ViewController) {
    this.pushEnabled = pushService.getEnabled();
  }

  pushChange() {
    if (this.pushEnabled == true) {
      this.pushEnabled = false;
      this.pushService.setPushEnabled(this.pushEnabled);
    } else {
      this.pushEnabled = true;
      this.pushService.setPushEnabled(this.pushEnabled);
    }

  }

  onClose() {
    this.viewCtrl.dismiss();
  }


}
