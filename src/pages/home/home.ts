import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PrescriptionPage } from '../prescription/prescription';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scannedCode = null;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.text);
      this.scannedCode = barcodeData.text;
      this.navCtrl.push(PrescriptionPage);
    }, (err) => {
        console.log('Error: ', err);
    });
  }
}
