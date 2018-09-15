import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html'
})
export class BillPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  newBill: {
    statusColor: string,
    statusText: string,
    buttonColor: string,
    buttonText: string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.newBill = {
      statusColor: "secondary",
      statusText: "New Bill",
      buttonColor: "primary",
      buttonText: "Send to AXA"};

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BillPage, {
      item: item
    });
  }

  sendToInsurance(event, item) {
    this.newBill = {
      statusColor: "light",
      statusText: "In-process",
      buttonColor: "primary",
      buttonText: "Details"
    };
  }
}
