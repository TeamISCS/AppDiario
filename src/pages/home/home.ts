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
    "user": "",
    "pass": ""
  }

  cicci
  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }


  controlla(): void {
    this.data.user = this.user.value
    this.data.pass = this.pass.value
  
    this.api.post('new', this.data)
      .subscribe(data => {
          localStorage.setItem("id", data["id_user"])
          localStorage.setItem("user", data["user"])
          this.navCtrl.setRoot(DiaryPage)
        },
      error => {
        document.getElementById("bello").style.display = "block";
        document.getElementById("bello").innerHTML = "Credenziali sbagliate"
      })

    
  }

  registerPage(): void {
    this.navCtrl.setRoot(RegisterPage)
  }
}
