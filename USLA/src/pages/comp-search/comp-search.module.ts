import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompSearchPage } from './comp-search';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CompSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CompSearchPage),
    PipesModule
  ],
})
export class CompSearchPageModule {}
