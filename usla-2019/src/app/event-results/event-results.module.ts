import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventResultsPage } from './event-results.page';
import { PipesModule } from '../pipes/pipes.modules';

const routes: Routes = [
  {
    path: '',
    component: EventResultsPage
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
  declarations: [EventResultsPage]
})
export class EventResultsPageModule {}
