import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipantesPage } from './participantes';

@NgModule({
  declarations: [
    ParticipantesPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticipantesPage),
  ],
  exports: [
    ParticipantesPage
  ]
})
export class ParticipantesPageModule {}
