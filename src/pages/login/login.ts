import { BackofficeMenuPage } from './../backoffice/backoffice-menu/backoffice-menu';
import { HomePage } from './../home/home';
import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home', templateUrl: 'login.html',
})

export class LoginPage {

  @ViewChild('user') user: HTMLInputElement
  @ViewChild('pass') pass: HTMLInputElement

  data = { "username": "", "password": "" }

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) { }

  controlla(): void {
    this.data.username = this.user.value
    this.data.password = this.pass.value
    this.api.post('/login', this.data)
    .subscribe(data => {
      if(data["status"] == "incorrect"){
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Credenziali sbagliate"
      }
      else if(data["status"] == "inexistent"){
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Username inesistente"
      }
      else {
        console.log(data)
        if(data["username"]) {
          localStorage.setItem("logged", "true");
          localStorage.setItem("username", data["username"])
          localStorage.setItem("privilege", data["privilege"])
          if(localStorage.getItem("privilege") == "4") {
            this.navCtrl.setRoot(BackofficeMenuPage)
          }
          else {
            this.navCtrl.setRoot(HomePage)
          }
        }
      }
    },
    error => {
      console.log("error")
      document.getElementById("error").style.display = "block";
      document.getElementById("error").innerHTML = "Errore di connessione"
    })
  }

  ionViewDidLoad(){
    if(localStorage.getItem('logged') == "true"){
      if(localStorage.getItem("privilege") == "4") {
        this.navCtrl.setRoot(BackofficeMenuPage)
      }
      else {
        this.navCtrl.setRoot(HomePage)
      }
    }
  }
}
