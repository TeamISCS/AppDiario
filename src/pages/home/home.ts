import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    document.getElementById("welcome").innerHTML = 
      `Benvenuto ${localStorage.getItem('nome')} ${localStorage.getItem('cognome')}`
  }


  logout() {
    localStorage.removeItem("jwt")
    localStorage.removeItem("mail")
    localStorage.removeItem("nome")
    localStorage.removeItem("cognome")
    localStorage.removeItem("username")
    this.navCtrl.setRoot(LoginPage)
  }

}
