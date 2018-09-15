import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../../model/Doctor';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  doctors: Doctor[] = [
    {name: 'Dr Al Fraken', signaturePath: 'assets/imgs/signature-0.png'},
    {name: 'Dr Herb Kohl', signaturePath: 'assets/imgs/signature-1.png'},
    {name: 'Dr Charles Schumber', signaturePath: 'assets/imgs/signature-2.png'}
  ];

  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
  }

  getRandomDoctor() {
    var i = Math.floor(Math.random() * this.doctors.length)
    return this.doctors[i]
  }  

}
