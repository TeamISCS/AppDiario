import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BackofficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backoffice',
  templateUrl: 'backoffice.html',
})
export class BackofficePage {

  @ViewChild('username') user: HTMLInputElement
  @ViewChild('password') pass: HTMLInputElement
  @ViewChild('nome') nome: HTMLInputElement
  @ViewChild('cognome') cognome: HTMLInputElement
  @ViewChild('luogo') luogo: HTMLInputElement
  @ViewChild('cf') cf: HTMLInputElement
  @ViewChild('privilegio') privilegio: HTMLSelectElement

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }


  data = {
    "usernameUtente": "",
    "passwordUtente": "",
    "mailUtente": ""
 }
  register() {
    this.api.post('registrazioneutente', this.data)
    .subscribe(data => {
      console.log(data)
      localStorage.setItem('jwt', data['jwt'])
    },
    error => {
      console.log("errore")
    })

  }

}
