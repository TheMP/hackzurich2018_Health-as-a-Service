import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {RestProvider} from "../../providers/rest/rest-provider";
import {Prescription} from "../../model/Prescription";

@Component({
  selector: 'page-finddoctor',
  templateUrl: 'finddoctor.html'
})
export class FindDoctorPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  careProviders: Array<Object>;
  allCareProviders: Array<Object>;
  careProvidersLoaded: boolean = false;
  prescription: Prescription;
  title: String = "Find Doctors";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider,
              private geolocation: Geolocation) {
    // If we navigated to this page, we will have an item available as a nav param
    this.prescription = this.navParams.get("prescription")

    if (this.prescription !== undefined) {
      this.title = "Find Pharmacies"
    }
  }

  reformatDist(dist:number) {
    if (dist < 1000) {
      return Math.round(dist) + " m";
    } else {
      return (Math.round(dist / 100) / 10) + " km";
    }
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
          500).then((response: Object) => {
            this.careProvidersLoaded = true;
            this.careProviders = response['result'].filter( careProvider => {
              careProvider['distStr'] = this.reformatDist(careProvider['distance']);

              if (this.prescription !== undefined) {
                return careProvider['type'] === '5b33a6142c9dd24355626349';
              }
              return 'title' in careProvider && 'phone' in careProvider ;
            }
            );
            this.allCareProviders = this.careProviders;
            // console.log(this.careProviders);
      });
    }).catch((err) => {
      console.log(err.message)
    });
  }

  onChangeTime(data) : void {

    if(data.value != '') {

      if (this.prescription === undefined) {
        this.careProviders = this.allCareProviders.filter(careProvider => {
          return careProvider['name'].toLowerCase().indexOf(data.value.toLowerCase()) >= 0;
        });
      } else {
        this.careProviders = this.allCareProviders.filter(careProvider => {
          careProvider['orderSent'] = false;
          return careProvider['type'] === '5b33a6142c9dd24355626349';
        });
      }

    } else {
      this.careProviders = this.allCareProviders;
    }
  }

  careProviderClicked(cardProvider: any) {

  }

  buyMeds(careProvider) {
    careProvider['orderSent'] = "true";
    this.restProvider.buyDrugs().then(data => {
      careProvider['orderSent'] = "true";
      console.log("Buy meds from Pharm!")
    }).catch((err) => {
      console.log(err.message)
    });

  }
}
