import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NucleosPage } from "./nucleos";

@NgModule({
  declarations: [
    NucleosPage,
  ],
  imports: [
    IonicPageModule.forChild(NucleosPage),
  ],
  exports: [
    NucleosPage
  ]
})
export class NucleosPageModule {}
