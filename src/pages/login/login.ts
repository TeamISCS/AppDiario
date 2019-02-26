import { HomePage } from './../home/home';
import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
import { RegisterPage } from './../register/register';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',

})

export class LoginPage {

  @ViewChild('user') user: HTMLInputElement
  @ViewChild('pass') pass: HTMLInputElement

  data = {
    "usernameUtente": "",
    "passwordUtente": ""
  }

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }


  controlla(): void {
    this.data.usernameUtente = this.user.value
    this.data.passwordUtente = this.pass.value

    this.api.post('login', this.data)
      .subscribe(data => {

        if(data != null) {
          localStorage.setItem("jwt", data["jwt"])
          localStorage.setItem("mail", data["mailUtente"])
          localStorage.setItem("nome", data["nomeUtente"])
          localStorage.setItem("cognome", data["cognomeUtente"])
          localStorage.setItem("username", data["usernameUtente"])
          this.navCtrl.setRoot(HomePage)
        }
        else {
          document.getElementById("error").style.display = "block";
          document.getElementById("error").innerHTML = "Credenziali sbagliate"
        }
      },
      error => {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Credenziali sbagliate"
      })


  }

  registerPage(): void {
    this.navCtrl.setRoot(RegisterPage)
  }

  ionViewDidLoad(){
   if(localStorage.getItem('jwt') != null){
     this.navCtrl.setRoot(HomePage)
   }
  }
}
