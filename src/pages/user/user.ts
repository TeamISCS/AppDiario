
import { Home } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Search } from '../search/search';
import { Api } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class User {

  constructor(public navCtrl: NavController, public api: Api) {
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
      name: sessionStorage.getItem("name"),
      surname: sessionStorage.getItem("surname"),
      gender: sessionStorage.getItem("gender"),
      ldn: sessionStorage.getItem("birth_place"),
      classroom: sessionStorage.getItem("classroom"),
      username: sessionStorage.getItem("username"),
      CF: sessionStorage.getItem("CF")
    }

    this.generaUser(data)
  }

  calendarClick(){
    this.navCtrl.setRoot(Home)
  }

  personClick(){
    this.navCtrl.setRoot(User)
  }

  searchClick(){
    this.navCtrl.setRoot(Search)
  }
}
