import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {BillPage} from '../pages/bill/bill';
import {InsurerPage} from "../pages/insurer/insurer";
import {PrescriptionPage} from '../pages/prescription/prescription';
import {PharmacyPage} from '../pages/pharmacy/pharmacy';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PrescriptionListPage} from "../pages/prescriptions/prescriptions";
import {RestProvider} from '../providers/rest/rest-provider';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {DrugInfoPage} from "../pages/prescription/druginfo/druginfo";


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
    DrugInfoPage
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
    DrugInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    RestProvider
  ]
})
export class AppModule {
}
