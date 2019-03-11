import { DiarioApiProvider } from './../../../providers/diario-api/diario-api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BackofficeParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backoffice-parent',
  templateUrl: 'backoffice-parent.html',
})
export class BackofficeParentPage {

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }
  @ViewChild('username') user: HTMLInputElement
  @ViewChild('password') pass: HTMLInputElement
  @ViewChild('nome') nome: HTMLInputElement
  @ViewChild('cognome') cognome: HTMLInputElement
  @ViewChild('gender') gender: HTMLSelectElement

  data = {
    "username": "",
    "password": "",
    "name": "",
    "surname": "",
    "gender":"",
    "privilege":"3"
  }

  register() {
    console.log(this.cognome.value)

    if( !this.nome.value ||!this.user.value ||!this.pass.value  ||!this.cognome.value   ||!this.gender.value ){
      document.getElementById("gg").style.display = "block"
      document.getElementById("gg").innerHTML = "C'è un campo vuoto"
    }
    else{

    document.getElementById("gg").style.display = "none"
    this.data.username=this.user.value;
    this.data.password=this.pass.value;
    this.data.name=this.nome.value;
    this.data.surname=this.cognome.value;
    this.data.gender=this.gender.value;
    this.api.post('api/user/add', this.data)
    .subscribe(data => {
      console.log(data)
      if(data['status']=='added'){
        document.getElementById("gg").style.display = "block"
        document.getElementById("gg").style.color = "black"
        document.getElementById("gg").innerHTML = "L'utente è stato aggiunto con successo"
        this.user.value = null
        this.pass.value = null
        this.nome.value = null
        this.cognome.value = null
        this.gender.value = null
      }
    },
    error => {
      console.log("errore")
    })
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeParentPage');
  }

}
