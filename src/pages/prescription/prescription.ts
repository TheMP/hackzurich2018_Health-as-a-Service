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
  prescriptionId: string;
  private ids: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider) {
    //this.prescriptionId = navParams.get('prescriptionId');
    this.prescriptionId = '1';
    this.restProvider = restProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');

    this.ids = ['61248', '51908', '53662', '14825', '65794', '66687', '65067', '65774', '63177', '56209', '57813', '63182', '65823', '62978', '66465', '53750', '54637', '50141', '51946', '34186', '57258', '45209', '52132', '66960', '60325', '61876', '61354', '55746', '36752', '48799', '56224', '57363', '62513', '47033', '30096', '30097', '58868', '61467', '48313', '58665', '57002', '54708', '55214', '55378', '53181', '55691', '53668', '52524', '51065', '47528', '44780', '56907', '62132', '62169'];

    var prescriptionSize = 10;
    for (let prescription_id = 0; prescription_id < this.ids.length / prescriptionSize; prescription_id++) {
      var drug_array = [];
      for (let drug_index = 0; drug_index < prescriptionSize; drug_index++) {
        var id = prescription_id * prescriptionSize + drug_index;
        this.restProvider.getDrugById(id)
          .then(drug => {
            drug_array.push(drug);
            // console.log(drug);
          });
      }
      var prescription = new Prescription(String(prescription_id), drug_array);
      console.log(prescription);
    }


    // for(let i=0; i<this.ids.length; i++){
    //   var id = this.ids[i];
    //   this.restProvider.getDrugById(id)
    //     .then(data => {
    //       console.log(data);
    //     });
    // }

    this.restProvider.getDrugById("33124")
      .then(data => {
        console.log(data);
      });

  }

}
