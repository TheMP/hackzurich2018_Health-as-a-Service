import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class PrescriptionPage {
  prescriptionId: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.prescriptionId = navParams.get('prescriptionId');
    this.prescriptionId = '1';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }

}
