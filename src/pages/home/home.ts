import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiarioApiProvider } from '../../providers/diario-api/diario-api';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

export class HomePage {

  @ViewChild('user') user: HTMLInputElement
  @ViewChild('pass') pass: HTMLInputElement

  urlApp ="http://localhost:8080/APP_DIARIO/log/getlog"

  outputFromServer: string
  postData = {
    "id_user": -1,
    "user": "",
    "pass": ""
  }

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  controlla(): void {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type':  'application/json'
        })
      };

    
    this.postData.user = this.user.value
    this.postData.pass = this.pass.value
  
    this.api.http.post(this.urlApp, this.postData, httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log("errore");
      });
  }
}
