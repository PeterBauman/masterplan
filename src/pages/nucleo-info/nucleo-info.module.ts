import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NucleoInfoPage } from './nucleo-info';

@NgModule({
  declarations: [
    NucleoInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(NucleoInfoPage),
  ],
  exports: [
    NucleoInfoPage
  ]
})
export class NucleoInfoPageModule {}
