import { BackofficeMenuPage } from './../backoffice/backoffice-menu/backoffice-menu';
import { HomePage } from './../home/home';
import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
import { RegisterPage } from './../register/register';
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
        if(data != null) {
          if(data["status"] == "incorrect"){
            console.log("else")
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = "Credenziali sbagliate"
          }
          else if(data["status"] == "inexistent"){
            console.log("else")
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = "Username inesistente"
          }
          else {
            console.log(data)

            if(data["username"]) {
              localStorage.setItem("username", data["username"])
              localStorage.setItem("privilege", data["privilege"])
              if(localStorage.getItem("privilege") == "4")
               this.navCtrl.setRoot(BackofficeMenuPage)
               else this.navCtrl.setRoot(HomePage)
              }
            }
          }
        },
        error => {
          console.log("error")
          document.getElementById("error").style.display = "block";
          document.getElementById("error").innerHTML = "Credenziali sbagliate"
        })
      }

      ionViewDidLoad(){
        if(localStorage.getItem('username') != null){
          this.navCtrl.setRoot(HomePage)
        }
      }
    }
