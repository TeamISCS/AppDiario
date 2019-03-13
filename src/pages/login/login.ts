import { BackofficeMenu } from './../backoffice/backoffice-menu/backoffice-menu';
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
          sessionStorage.setItem("logged", "true");
          sessionStorage.setItem("username", data["username"])
          sessionStorage.setItem("privilege", data["privilege"])
          if(sessionStorage.getItem("privilege") == "4") {
            this.navCtrl.setRoot(BackofficeMenu)
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
    if(sessionStorage.getItem('logged') == "true"){
      if(sessionStorage.getItem("privilege") == "4") {
        this.navCtrl.setRoot(BackofficeMenu)
      }
      else {
        this.navCtrl.setRoot(HomePage)
      }
    }
  }
}
