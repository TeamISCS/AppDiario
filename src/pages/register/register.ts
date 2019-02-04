import { HomePage } from './../home/home';
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
  @ViewChild('cpass') cpass: HTMLInputElement

  postData = {
    "user": "",
    "pass": ""
  }

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }


  loginPage() {
    this.navCtrl.setRoot(HomePage)
  }


  register(){

    if(!this.user.value || !this.pass.value || !this.cpass.value){
      document.getElementById("vs").style.display = "block"
      document.getElementById("vs").innerHTML = "Compila tutti i campi"
    }
    else if(this.pass.value != this.cpass.value){
      document.getElementById("vs").style.display = "block"
      document.getElementById("vs").innerHTML = "La password non corrisponde"
    }
    else{
      document.getElementById("vs").style.display = "none"

      this.postData.user = this.user.value
      this.postData.pass = this.pass.value

      console.log(this.api.getURL('signUp', this.postData))

    }
  }

}
