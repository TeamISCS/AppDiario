import { DiarioApiProvider } from './../../../providers/diario-api/diario-api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BackofficeClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backoffice-class',
  templateUrl: 'backoffice-class.html',
})
export class BackofficeClassPage {


  @ViewChild('classe') classe: HTMLInputElement
  @ViewChild('sezione') sezione: HTMLInputElement

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  data = {
    "year": "",
    "section": "",
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeClassPage');
  }

  aggiungi(){

    if(!this.classe.value || !this.sezione.value)
    {
      document.getElementById("sms").style.display = "block"
      document.getElementById("sms").innerHTML = "C'è un campo vuoto"
    }
   /* else if(!new RegExp('^[0-9]+$').test(document.getElementById("oo").innerHTML)) {
      document.getElementById("sms").style.display = "block"
      document.getElementById("sms").innerHTML= "Non hai inserito un numero nel campo Classe o numero non valido"

    }*/
    else
    {
    document.getElementById("sms").style.display = "none"
    this.data.year=this.classe.value;
    this.data.section=this.sezione.value;

    this.api.post('api/classroom/add', this.data)
    .subscribe(data => {
      console.log(data)
      if(data['status']=='added'){
        document.getElementById("sms").style.display = "block"
        document.getElementById("sms").style.color = "black"
        document.getElementById("sms").innerHTML = "La classe è stato aggiunta con successo"
      }
    },
    error => {
      console.log("errore")
    })
  }
  }



}
