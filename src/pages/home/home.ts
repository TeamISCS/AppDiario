import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
import { RegisterPage } from './../register/register';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiaryPage } from '../diary/diary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

export class HomePage {

  @ViewChild('user') user: HTMLInputElement
  @ViewChild('pass') pass: HTMLInputElement

  data = {
    "idUtente": -1,
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
          localStorage.setItem("id", data["idUtente"])
          localStorage.setItem("username", data["usernameUtente"])
          console.log(data)
          this.navCtrl.setRoot(DiaryPage)
        },
      error => {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Credenziali sbagliate"
      })

    
  }

  registerPage(): void {
    this.navCtrl.setRoot(RegisterPage)
  }
}
