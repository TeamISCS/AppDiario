import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
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

    this.data.year=this.classe.value;
    this.data.section=this.sezione.value;

    this.api.post('add', this.data)
    .subscribe(data => {
      console.log(data)

    },
    error => {
      console.log("errore")
    })
  }

}
