import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { MymedsPage } from '../mymeds/mymeds';
import { BillPage } from '../bill/bill';
import { PrescriptionListPage } from '../prescriptions/prescriptions';
import { FindDoctorPage } from "../finddoctor/finddoctor";
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  p1: string = "assets/img/home1.png";
  p2: string = "assets/img/home2.png";
  p3: string = "assets/img/home3.png";
  p4: string = "assets/img/home4.png";
  gauge: string = "assets/img/gauge.png";

  constructor(public navCtrl: NavController,
              public localNotifications: LocalNotifications) {

    this.scheduleNotifications();
  }

  scheduleNotifications() {
    this.localNotifications.schedule({
      text: 'Take your meds today at 4PM',
      trigger: { at: new Date(new Date().getTime() + 3600) },
      led: 'FF0000',
      sound: null
    });
  }

  openPrescriptions() {
    this.navCtrl.push(ListPage);
  }

  openMeds() {
    this.navCtrl.push(MymedsPage);
  }

  openBill() {
    this.navCtrl.push(BillPage);
  }

  openPres() {
    this.navCtrl.push(PrescriptionListPage);
  }

  findDocs() {
    this.navCtrl.push(FindDoctorPage);
  }


}
