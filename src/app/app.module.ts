import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BillPage } from '../pages/bill/bill';
import {InsurerPage} from "../pages/insurer/insurer";
import { PrescriptionPage } from '../pages/prescription/prescription';
import { PharmacyPage } from '../pages/pharmacy/pharmacy';
import {PrescriptionListPage} from "../pages/prescriptions/prescriptions";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BillPage,
    PrescriptionPage,
    InsurerPage,
    PharmacyPage,
    PrescriptionListPage,
    InsurerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BillPage,
    PrescriptionPage,
    InsurerPage,
    PharmacyPage,
    PrescriptionListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
