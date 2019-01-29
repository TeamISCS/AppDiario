import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
import { RegisterPage } from './../register/register';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

export class HomePage {

  @ViewChild('user') user: HTMLInputElement
  @ViewChild('pass') pass: HTMLInputElement

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
  
    console.log(this.api.getURL('signIn', this.postData))
    

    /*
    localStorage.setItem("user", this.postData.user)
    localStorage.setItem("pass", this.postData.pass)
    console.log(localStorage.getItem("user"))
    console.log(localStorage.getItem("pass"))
    */
  }

  registerPage(): void {
    this.navCtrl.setRoot(RegisterPage)
  }
}
