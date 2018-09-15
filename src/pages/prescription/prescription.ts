import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest-provider";

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
  prescriptionId: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider) {
    //this.prescriptionId = navParams.get('prescriptionId');
    this.prescriptionId = '1';
    this.restProvider = restProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');

    this.restProvider.getDrugById("33124")
      .then(data => {
        console.log(data);
      });

  }

}
