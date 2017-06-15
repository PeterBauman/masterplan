import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NucleoPlanPage } from './nucleo-plan';

@NgModule({
  declarations: [
    NucleoPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(NucleoPlanPage),
  ],
  exports: [
    NucleoPlanPage
  ]
})
export class NucleoPlanPageModule {}
