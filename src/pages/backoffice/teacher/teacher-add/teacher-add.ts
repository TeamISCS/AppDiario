import { TeacherOptions } from './../teacher-options';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-teacher-add',
  templateUrl: 'teacher-add.html',
})
export class TeacherAdd {

  constructor(public navCtrl: NavController, public options: TeacherOptions) {
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
    "privilege":"2"
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
    this.options.add(this.data)
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
    console.log('ionViewDidLoad BackofficeTeacherPage');
  }

}
