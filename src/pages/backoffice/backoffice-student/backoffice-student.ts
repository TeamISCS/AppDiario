import { DiarioApiProvider } from './../../../providers/diario-api/diario-api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BackofficeStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backoffice-student',
  templateUrl: 'backoffice-student.html',
})
export class BackofficeStudentPage {

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  @ViewChild('username') user: HTMLInputElement
  @ViewChild('password') pass: HTMLInputElement
  @ViewChild('nome') nome: HTMLInputElement
  @ViewChild('cognome') cognome: HTMLInputElement
  @ViewChild('luogo') luogo: HTMLInputElement
  @ViewChild('cf') cf: HTMLInputElement
  @ViewChild('gender') gender: HTMLSelectElement

  data = {
    "username": "",
    "password": "",
    "name": "",
    "surname": "",
    "birth_place": "",
    "cf": "",
    "gender":"",
    "privilege":"1"
  }

  register() {
    console.log(this.cognome.value)

    if(!this.cf.value ||!this.nome.value ||!this.user.value ||!this.pass.value  ||!this.cognome.value ||!this.luogo.value  ||!this.gender.value ){
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
        this.luogo.value = null
        this.cf.value = null
        this.gender.value = null
      }
    },
    error => {
      console.log("errore")
    })
  }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeStudentPage');
  }

}
