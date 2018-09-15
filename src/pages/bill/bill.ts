import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Prescription} from "../../model/Prescription";
import {RestProvider} from "../../providers/rest/rest-provider";
import {GlobalProvider} from "../../providers/global/global";
import {Doctor} from "../../model/Doctor";
import {PrescriptionPage} from "../prescription/prescription";

class Bill {
  prescription: Prescription;
  amount: number;
  date: String;
  state: String;
  statusColor: String;
  statusText: String;
  buttonColor: String;
  buttonText: String;

  constructor(prescription: Prescription, statusText: String) {
    this.prescription = prescription;
    this.amount = this.randomInt(30, 500);
    this.date = this.randomInt(1, 15) + " Sept 2018";
    this.statusText = statusText;

    if(statusText === "REJECTED") {
      this.statusColor = "danger";
    } else if(statusText === "REFUNDED" || statusText === "PENDING") {
      this.statusColor = "light";
    } else {
      this.statusColor="secondary";
    }

    this.buttonColor = "primary";
    this.buttonText = "Send to AXA";
  }


  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}


@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html'
})
export class BillPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  activeBills: Array<Bill> = [];
  pastBills: Array<Bill> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,
              public global: GlobalProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    //   this.newBill = {
    //     statusColor: "secondary",
    //     statusText: "New Bill",
    //     buttonColor: "primary",
    //     buttonText: "Send to AXA"};
    //
  }

  ionViewDidLoad() { const pastStates = ["PENDING", "REJECTED", "REFUNDED"];

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


      for (let pes of ps.slice(0, ps.length / 5 * 2)) {
        this.activeBills.push(new Bill(pes, "NEW BILL"));
      }
      for (let pes of ps.slice(this.activeBills.length - 1, ps.length)) {
        this.pastBills.push(new Bill(pes, pastStates[this.randomInt(0,2)]));
      }

    });
    console.log('ionViewDidLoad PrescriptionListsPage');


  }

  calculateSum() {
    var sum = 0;
    for(let bill of this.activeBills) {
      sum += bill.amount
    }
    for(let bill of this.pastBills) {
      sum += bill.amount
    }
    return sum;
  }

  calculateRefunded() {
    var sum = 0;
    for(let bill of this.pastBills) {
      if(bill.statusText === "REFUNDED") {
        sum += bill.amount
      }
    }
    return sum;
  }



  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BillPage, {
      item: item
    });
  }

  sendToInsurance(event, bill: Bill) {
    bill.statusColor = "light";
    bill.statusText = "In-process";
    bill.buttonColor = "primary";
    bill.buttonText = "Details";
  };


  detailsClick(event, bill: Bill) {
    this.navCtrl.push(PrescriptionPage, {
      prescription: bill.prescription
    });
  };
}

