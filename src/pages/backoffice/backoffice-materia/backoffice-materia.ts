import { DiarioApiProvider } from './../../../providers/diario-api/diario-api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BackofficeMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backoffice-materia',
  templateUrl: 'backoffice-materia.html',
})
export class BackofficeMateriaPage {

  @ViewChild('materia') materia: HTMLInputElement

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  data = {
    "name": "",
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeClassPage');
  }

  aggiungi(){

    if(!this.materia.value)
    {
      document.getElementById("smss").style.display = "block"
      document.getElementById("smss").innerHTML = "C'è un campo vuoto"
    }
    else{

    document.getElementById("smss").style.display = "none"
    this.data.name=this.materia.value;

    this.api.post('api/matter/add', this.data)
    .subscribe(data => {
      console.log(data)
      if(data['status']=='added'){
        document.getElementById("smss").style.display = "block"
        document.getElementById("smss").style.color = "black"
        document.getElementById("smss").innerHTML = "La materia è stata aggiunta con successo"
      }
    },
    error => {
      console.log("errore")
    })
  }
  }

}
