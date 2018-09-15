import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest-provider";
import {Prescription} from "../../model/Prescription";
import { ModalController } from 'ionic-angular';
import {DrugInfoPage} from "./druginfo/druginfo";
import { LoadingController } from 'ionic-angular';

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
  drugHtml: Object;
  constructor(public navCtrl: NavController,
              public restProvider: RestProvider,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {

    this.prescription = navParams.get('prescription');
    console.log(this.prescription);

    this.showLoader();
  }

  showLoader() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
    console.log(this.prescription);
  }

  // TODO: Could not make inline HTML display work, please have a look!
  // see drug API at https://health.axa.ch/hack/docs/#drugs
  drugClicked(drug) {

    let prescriptionPromises = [];
    prescriptionPromises.push(this.restProvider.getPatientDrugInfo(drug.swissmedicIds));

    Promise.all(prescriptionPromises).then(drugHtml => {
        console.log(drugHtml);
      this.drugHtml = drugHtml[0];
    });
    this.navCtrl.push(DrugInfoPage, {
      swissMedicsIds: drug
    });
  }
}
