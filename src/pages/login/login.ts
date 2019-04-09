import { Api } from './../../providers/api/api';
import { BackofficeMenu } from './../backoffice/backoffice-menu/backoffice-menu';
import { Home } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home', templateUrl: 'login.html',
})

export class Login {

  @ViewChild('user') user: HTMLInputElement
  @ViewChild('pass') pass: HTMLInputElement

  data = { "username": "", "password": "" }

  constructor(public navCtrl: NavController, public api: Api) { }

  controlla(): void {
    this.data.username = this.user.value
    this.data.password = this.pass.value
    this.api.login(this.data)
    .subscribe(data => {
      if(data["status"] == "409") {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Username inesistente"
      }
      else if(data["status"] == "400"){
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Credenziali sbagliate"
      }
      else if(data["status"] == "200") {
        console.log(data)
        if(data["message"].username) {
          sessionStorage.setItem("logged", "true");
          sessionStorage.setItem("username", data["message"].username)
          sessionStorage.setItem("privilege", data["message"].privilege)
          if(sessionStorage.getItem("privilege") == "4") {
            this.navCtrl.setRoot(BackofficeMenu)
          }
          else {
            this.navCtrl.setRoot(Home)
          }
        }
      }
    },
    error => {
      console.log(error)
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
        this.navCtrl.setRoot(Home)
      }
    }
  }
}
