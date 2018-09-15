import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugInfoPage } from './druginfo';

@NgModule({
  declarations: [
    DrugInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DrugInfoPage),
  ],
})
export class DrugInfoPageModule {}
