import { DiarioApiProvider } from './../../../providers/diario-api/diario-api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BackofficeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backoffice-user',
  templateUrl: 'backoffice-user.html',
})
export class BackofficeUserPage {

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  @ViewChild('username') user: HTMLInputElement
  @ViewChild('password') pass: HTMLInputElement
  @ViewChild('nome') nome: HTMLInputElement
  @ViewChild('cognome') cognome: HTMLInputElement
  @ViewChild('luogo') luogo: HTMLInputElement
  @ViewChild('cf') cf: HTMLInputElement
  @ViewChild('gender') gender: HTMLSelectElement
  @ViewChild('privilegio') privilegio: HTMLSelectElement



  data = {
    "username": "",
    "password": "",
    "name": "",
    "surname": "",
    "birth_place": "",
    "cf": "",
    "gender":"",
    "privilege": ""
 }

  register() {
    console.log(this.cognome.value)

    if(!this.cf.value ||!this.nome.value ||!this.user.value ||!this.pass.value  ||!this.cognome.value ||!this.luogo.value  ||!this.privilegio.value ||!this.gender.value ){
      document.getElementById("gg").style.display = "block"
      document.getElementById("gg").innerHTML = "C'è un campo vuoto"
    }
    else if(this.cf.value.length != 16)
    {
      document.getElementById("gg").style.display = "block"
      document.getElementById("gg").innerHTML = "Il codice fiscale non ha 16 caratteri"
    }
    else{

    document.getElementById("gg").style.display = "none"
    this.data.username=this.user.value;
    this.data.password=this.pass.value;
    this.data.name=this.nome.value;
    this.data.surname=this.cognome.value;
    this.data.birth_place=this.luogo.value;
    this.data.cf=this.cf.value;
    this.data.gender=this.gender.value;

    if(this.privilegio.value == "studente")
    this.data.privilege="1";
    else if(this.privilegio.value == "genitore")
    this.data.privilege="2";
    else if(this.privilegio.value == "docente")
    this.data.privilege="3";
    else if(this.privilegio.value == "backoffice")
    this.data.privilege="4"


    this.api.post('api/user/add', this.data)
    .subscribe(data => {
      console.log(data)
      if(data['status']=='added'){
        document.getElementById("gg").style.display = "block"
        document.getElementById("gg").style.color = "black"
        document.getElementById("gg").innerHTML = "L'utente è stato aggiunto con successo"
      }
    },
    error => {
      console.log("errore")
    })
  }
  }

}
