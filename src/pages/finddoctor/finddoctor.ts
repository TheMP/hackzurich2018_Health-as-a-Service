import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {RestProvider} from "../../providers/rest/rest-provider";

@Component({
  selector: 'page-finddoctor',
  templateUrl: 'finddoctor.html'
})
export class FindDoctorPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  careProviders: Array<Object>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              private geolocation: Geolocation) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad  FindDoctorPage');

    this.geolocation.getCurrentPosition()
      .then((resp) => {
        return resp.coords;
      }).then((value) => {
        this.restProvider.searchNearestCareProviders(
          value.longitude,
          value.latitude,
          20).then((response: Object) => {
            this.careProviders = response.result;
            console.log(this.careProviders);
      });
    }).catch((err) => {
      console.log(err.message)
    });


  }


}
