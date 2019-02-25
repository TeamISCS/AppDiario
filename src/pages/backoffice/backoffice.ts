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
    "username": "",
    "password": "",
    "name": "",
    "surname": "",
    "birth_place": "",
    "cf": "",
    "privilege": ""
 }

  register() {
    this.data.username=this.user.value;
    this.data.password=this.pass.value;
    this.data.name=this.nome.value;
    this.data.surname=this.cognome.value;
    this.data.birth_place=this.luogo.value;
    if(this.privilegio.value == "studente")
    this.data.privilege="1";
    else if(this.privilegio.value == "genitore")
    this.data.privilege="2";
    else if(this.privilegio.value == "docente")
    this.data.privilege="3";


    this.api.post('add', this.data)
    .subscribe(data => {
      console.log(data)

    },
    error => {
      console.log("errore")
    })

  }

}
