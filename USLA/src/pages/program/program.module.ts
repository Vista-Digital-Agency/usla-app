import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramPage } from './program';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramPage),
    NgbModule
  ],
})
export class ProgramPageModule {}
