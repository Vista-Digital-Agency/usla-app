import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuniorGuardResultsPage } from './junior-guard-results';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    JuniorGuardResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(JuniorGuardResultsPage),
    PipesModule
  ],
})
export class JuniorGuardResultsPageModule {}
