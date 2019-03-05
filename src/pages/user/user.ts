import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
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

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
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

    let data = {
      name: localStorage.getItem("name"),
      surname: localStorage.getItem("surname"),
      gender: localStorage.getItem("gender"),
      ldn: localStorage.getItem("birth_place"),
      classroom: localStorage.getItem("classroom"),
      username: localStorage.getItem("username"),
      CF: localStorage.getItem("CF")
    }

    this.generaUser(data)
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
