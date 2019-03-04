
import { TaskPage } from './../task/task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserPage } from '../user/user';
import { SearchPage } from '../search/search';


@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(localStorage.getItem("username") != null) {
      document.getElementById("welcome").innerHTML =
      `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
    }
    else {
    this.navCtrl.setRoot(LoginPage)
    }
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

  calendarClick(){
    this.navCtrl.setRoot(HomePage)
  }

  personClick(){
    this.navCtrl.setRoot(UserPage)
  }

  searchClick(){
    this.navCtrl.setRoot(SearchPage)
  }

}
