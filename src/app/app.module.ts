import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {InsurerPage} from "../pages/insurer/insurer";
import {PharmacyPage} from '../pages/pharmacy/pharmacy';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BillPage } from '../pages/bill/bill';
import { PrescriptionPage } from '../pages/prescription/prescription';
import { MymedsPage } from '../pages/mymeds/mymeds';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PrescriptionListPage} from "../pages/prescriptions/prescriptions";
import {RestProvider} from '../providers/rest/rest-provider';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Geolocation} from '@ionic-native/geolocation';
import {DrugInfoPage} from "../pages/prescription/druginfo/druginfo";
import {FindDoctorPage} from "../pages/finddoctor/finddoctor";


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
    InsurerPage,
    DrugInfoPage,
    FindDoctorPage,
    MymedsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    PrescriptionListPage,
    DrugInfoPage,
    FindDoctorPage,
    MymedsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    RestProvider,
    Geolocation
  ]
})
export class AppModule {
}
