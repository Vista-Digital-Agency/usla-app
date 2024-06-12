import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SponsorsPage } from './sponsors.page';
import { PipesModule } from '../pipes/pipes.modules';

const routes: Routes = [
  {
    path: '',
    component: SponsorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SponsorsPage]
})
export class SponsorsPageModule {}
