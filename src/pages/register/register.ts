import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DiarioApiProvider } from '../../providers/diario-api/diario-api';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('user') user: HTMLInputElement
  @ViewChild('pass') pass: HTMLInputElement

  postData = {
    "user": "",
    "pass": ""
  }

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  register(){

    this.postData.user = this.user.value
    this.postData.pass = this.pass.value

    console.log(this.api.getURL('signUp', this.postData))

  
  }

}
