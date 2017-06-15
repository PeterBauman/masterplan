import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NucleoBalancePage } from './nucleo-balance';

@NgModule({
  declarations: [
    NucleoBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(NucleoBalancePage),
  ],
  exports: [
    NucleoBalancePage
  ]
})
export class NucleoBalancePageModule {}
