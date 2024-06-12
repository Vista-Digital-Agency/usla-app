import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgramPage } from './program.page';
import { ExpandablesComponent } from '../expandables/expandables.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgramPage, ExpandablesComponent]
})
export class ProgramPageModule {}
