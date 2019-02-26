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
    "username": "",
    "password": ""
  }

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }


  controlla(): void {
    this.data.username = this.user.value
    this.data.password = this.pass.value

    this.api.post('/login', this.data)
      .subscribe(data => {
        if(data != null) {
          console.log(data)
          localStorage.setItem("jwt", data["jwt"])
          localStorage.setItem("username", data["username"])
          localStorage.setItem("name", data["name"])
          localStorage.setItem("surname", data["surname"])
          localStorage.setItem("birth_place", data["birth_place"])
          localStorage.setItem("classroom", data["classroom"])
          localStorage.setItem("CF", data["CF"])
          localStorage.setItem("gender", data["gender"])
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

  ionViewDidLoad(){
   if(localStorage.getItem('jwt') != null){
     this.navCtrl.setRoot(HomePage)
   }
  }
}
