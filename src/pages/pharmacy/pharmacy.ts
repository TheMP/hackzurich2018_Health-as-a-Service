import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PrescriptionPage } from '../prescription/prescription';
import { Prescription } from '../../model/Prescription';
import { RestProvider } from '../../providers/rest/rest-provider';
import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the PharmacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pharmacy',
  templateUrl: 'pharmacy.html',
})
export class PharmacyPage {
  scannedCode = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public restProvider: RestProvider,
    public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmacyPage');
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.openPrescription();
    }, (err) => {
      console.log('Error: ', err);
    });
  }

  openPrescription() {
    var drug_promises = [];
    const drugIds = ['61248', '51908', '14825'];
    
    for (let drugId of drugIds) {
      drug_promises.push(this.restProvider.getDrugById(drugId));
    };

    Promise.all(drug_promises).then(drugs => { 
      var prescription = new Prescription("Prescription", drugs, this.global.getRandomDoctor())
      this.navCtrl.push(PrescriptionPage, {prescription: prescription})
    });
  };

}
