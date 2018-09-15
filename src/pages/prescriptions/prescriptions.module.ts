import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrescriptionsPage } from './prescriptions';

@NgModule({
  declarations: [
    PrescriptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrescriptionsPage),
  ],
})
export class PrescriptionsPageModule {}
