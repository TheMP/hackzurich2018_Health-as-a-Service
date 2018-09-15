import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PrescriptionPage} from "../prescription/prescription";
import {Prescription} from "../../model/Prescription";
import {RestProvider} from "../../providers/rest/rest-provider";
import {GlobalProvider} from "../../providers/global/global";

/**
 * Generated class for the PrescriptionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescriptionlist',
  templateUrl: 'prescriptions.html',
})
export class PrescriptionListPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  prescriptions: Array<Prescription>;
  activePrescriptions: Array<Prescription>;
  pastPrescriptions: Array<Prescription>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              public loadingController: LoadingController,
              public global: GlobalProvider) {

    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //   'american-football', 'boat', 'bluetooth', 'build'];
    //
    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Prescription ',
    //     note: '#' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
    this.showLoader();
  }

  showLoader() {
    const loader = this.loadingController.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionListsPage');

    // const drugSwissIDs = ['61248', '51908', '14825', '65794', '66687', '65067', '65774', '63177', '56209', '57813', '63182',
    //   '65823', '62978', '66465', '53750', '54637', '50141', '51946', '57258', '45209', '52132', '66960', '60325',
    //   '61876', '61354', '55746', '36752', '48799', '56224', '57363', '62513', '47033', '30096', '30097', '61467',
    //   '48313', '58665', '57002', '54708', '55214', '55378', '53181', '55691', '53668', '52524', '51065', '47528',
    //   '44780', '56907', '62132', '62169'];
    
    const drugSwissIDs = ['61248', '51908', '14825', '65794', '66687', '65067', '65774', '63177', '56209',
      '65823', '62978', '66465', '53750', '54637', '50141'];

    const NumDrugsPerPrescription = 3;
    let prescriptionPromises = [];

    while (drugSwissIDs.length > 0) {
      let drug_swiss_ids = drugSwissIDs.splice(0, NumDrugsPerPrescription);
      var drug_promises = [];

      for (let drug_swiss_id of drug_swiss_ids) {
        drug_promises.push(this.restProvider.getDrugById(drug_swiss_id));
      }

      prescriptionPromises.push(Promise.all(drug_promises).then(drugs => {        
        var prescription = new Prescription("Prescription", drugs, this.global.getRandomDoctor());
        return prescription;
      }));
    }

    Promise.all(prescriptionPromises).then(ps => {
      console.log("Loaded all prescriptions!")
      this.prescriptions = ps;

      this.activePrescriptions = ps.slice(0, ps.length / 5 * 2);
      this.pastPrescriptions = ps.slice(this.activePrescriptions.length - 1, ps.length);
    });
    console.log('ionViewDidLoad PrescriptionListsPage');
  }

  prescriptionTapped(event, prescription) {
    console.log("Prescription clicked!");
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PrescriptionPage, {
      prescription: prescription
    });
  }
}
