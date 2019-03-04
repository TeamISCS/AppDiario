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
      name: "",
      surname: "",
      gender: "",
      ldn: "",
      classroom: "",
      username: ""
    }

    this.api.get(`api/student/info/${localStorage.getItem("username")}`)
    .subscribe(student => {
      console.log(student)
      data.name = student["name"]
      data.surname = student["surname"]
      data.gender = student["gender"]
      data.ldn = student["birth_place"]
      data.classroom = student["classroom"]
      data.username = localStorage.getItem("username")
      this.generaUser(data)
    });
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
