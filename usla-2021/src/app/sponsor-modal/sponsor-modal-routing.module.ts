import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsorModalPage } from './sponsor-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SponsorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorModalPageRoutingModule {}
