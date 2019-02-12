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
    "id_user": -1,
    "username": "",
    "password": ""
  }

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }


  controlla(): void {
    this.data.username = this.user.value
    this.data.password = this.pass.value
  
    this.api.post('login', this.data)
      .subscribe(data => {
          localStorage.setItem("id", data["id"])
          localStorage.setItem("username", data["username"])
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
