import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest-provider";
import {Prescription} from "../../model/Prescription";

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
  prescription: Prescription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.prescription = navParams.get('prescription');
    console.log(this.prescription);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
    console.log(this.prescription);
  }

}
