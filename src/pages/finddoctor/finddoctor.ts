import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-finddoctor',
  templateUrl: 'finddoctor.html'
})
export class FindDoctorPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  coordinates: {
    lat: number
    lon: number
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    // If we navigated to this page, we will have an item available as a nav param


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad  FindDoctorPage');

    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordinates.lon = resp.coords.longitude;
      this.coordinates.lat = resp.coords.longitude;
      console.log(resp.coords.longitude);
      console.log(resp.coords.latitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



}
