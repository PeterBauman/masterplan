import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PestanasPage } from './pestanas';

@NgModule({
  declarations: [
    PestanasPage,
  ],
  imports: [
    IonicPageModule.forChild(PestanasPage),
  ],
  exports: [
    PestanasPage
  ]
})
export class PestanasPageModule {}
