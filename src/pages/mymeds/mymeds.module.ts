import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MymedsPage } from './mymeds';

@NgModule({
  declarations: [
    MymedsPage,
  ],
  imports: [
    IonicPageModule.forChild(MymedsPage),
  ],
})
export class MymedsPageModule {}
