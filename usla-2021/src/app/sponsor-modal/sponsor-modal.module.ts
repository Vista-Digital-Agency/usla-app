import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsorModalPageRoutingModule } from './sponsor-modal-routing.module';

import { SponsorModalPage } from './sponsor-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SponsorModalPageRoutingModule
  ],
  declarations: [SponsorModalPage]
})
export class SponsorModalPageModule {}
