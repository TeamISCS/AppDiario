import { RegisterPage } from './../register/register';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiarioApiProvider } from '../../providers/diario-api/diario-api';

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
    this.postData.user = this.user.value
    this.postData.pass = this.pass.value
  
    console.log(this.api.getURL('getlog', this.postData))
  }

  register(): void {
    this.navCtrl.push(RegisterPage)
  }
}
