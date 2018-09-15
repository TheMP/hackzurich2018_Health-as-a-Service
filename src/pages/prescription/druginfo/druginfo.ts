import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {RestProvider} from "../../../providers/rest/rest-provider";
import {Drug} from "../../../model/Drug";
/**
 * Generated class for the PrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-druginfo',
  templateUrl: 'druginfo.html',
})
export class DrugInfoPage {
  drugHtml: String;
  drug : Drug;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              public modalCtrl: ModalController) {

    this.drug = navParams.get('swissMedicsIds');

    console.log(this.drug)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad  DrugInfoPage');

    this.restProvider.getPatientDrugInfo(this.drug.swissmedicIds[0]).then(drugHtml => {
      this.drugHtml = String(drugHtml);
      this.drugHtml = this.drugHtml.slice(this.drugHtml.indexOf('Zusammensetzung'))
    });
  }




}
