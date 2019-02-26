import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUser()
  }

  generaUser(user){
    for(let c in user) {
      document.getElementById(c).innerHTML = user[c]
    }
  }

  getUser(){

    this.generaUser({
      nome: "Mirko",
      cognome: "Aliano",
      classe: "5F",
      username: "Mirkooooo19292",
      ldn: "Torino",
      sex: "M"
    })
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
