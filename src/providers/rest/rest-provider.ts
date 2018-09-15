import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "https://health.axa.ch/hack/api";
  apiToken = "straight sister";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  // Search by name
  // You can find drugs by searching using at least three letters of their name.
  searchDrugs(drugName) {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/drugs',
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken),
          params: {name: drugName}
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Find a specific drug
  // You can look up drugs using the swissmedic id.
  getDrugById(drugId) {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/drugs/' + drugId,
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken)
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Get information about specific drug
  // You can look up drugs using the swissmedic id.
  getPatientDrugInfo(drugId) {
    return this.getDrugByIdInternal(drugId, 'patient');
  }

  // Get information about specific drug
  // You can look up drugs using the swissmedic id.
  getProfessionalDrugInfo(drugId){
    return this.getDrugByIdInternal(drugId, 'professional');
  }

  private getDrugByIdInternal(drugId, type) {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/drugs/' + drugId + '/info/' + type,
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken)
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Get a specific tariff
  // You can look up drugs using the tarriff id.
  // Look for the properties tarmedPointsDoctor, tarmedPointsAssistant,
  // and tarmedPointsTech and sum them up, to find an initial idea about the prices.
  getTariff(id) {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/tariffs/' + id,
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken)
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Get the TARMED points
  // One TARMED point equals one Swiss cent.
  getTarmedPoints() {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/tarmedPoints/',
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken)
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // This API allows you to buy drugs and dispense them at our booth at HackZurich.
  // Buy and dispense candy
  buyDrugs() {
    return new Promise(resolve => {
      this.http.post(
        this.apiUrl + '/pharmacy/buy',
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken)
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Search for care providers
  searchCareProviders(key, value) {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/care-providers',
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken),
          params: {key, value}
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // List available types of care providers
  // This endpoint retrieves all available types of care providers.
  getCareProviderTypes() {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/care-providers/types',
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken)
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // List available categories of care providers
  // This endpoint retrieves all available categories of care providers.
  // A category bundles a set of types of care providers in a broader
  getCareProviderCategories() {
    return new Promise(resolve => {
      this.http.get(
        this.apiUrl + '/care-providers/categories',
        {
          headers: new HttpHeaders().set('Authorization', this.apiToken)
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
