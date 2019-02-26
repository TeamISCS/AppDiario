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
      `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
  }


  logout() {
    localStorage.removeItem("jwt")
    localStorage.removeItem("username")
    localStorage.removeItem("name")
    localStorage.removeItem("surname")
    localStorage.removeItem("birth_place")
    localStorage.removeItem("classroom")
    localStorage.removeItem("CF")
    localStorage.removeItem("gender")
    this.navCtrl.setRoot(LoginPage)
  }

}
