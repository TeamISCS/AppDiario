import { DiarioApiProvider } from './../../providers/diario-api/diario-api';

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

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  ionViewDidLoad() {
    if(localStorage.getItem("username") != null) {

      if(localStorage.getItem("privilege") == "1") {
        this.api.get(`/api/student/info/${localStorage.getItem("username")}`)
        .subscribe(student => {
          localStorage.setItem("name", student["name"]);
          localStorage.setItem("surname", student["surname"])
          localStorage.setItem("CF", student["CF"])
          localStorage.setItem("birth_place", student["birth_place"])
          localStorage.setItem("gender", student["gender"])
          document.getElementById("welcome").innerHTML =
              `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
        })
      }
      else if(localStorage.getItem("privilege") == "2") {
        this.api.get(`/api/parent/info/${localStorage.getItem("username")}`)
        .subscribe(parent => {
          localStorage.setItem("name", parent["name"]);
          localStorage.setItem("surname", parent["surname"])
          localStorage.setItem("CF", parent["CF"])
          localStorage.setItem("birth_place", parent["birth_place"])
          localStorage.setItem("gender", parent["gender"])
          document.getElementById("welcome").innerHTML =
              `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
        })
      }
      else if(localStorage.getItem("privilege") == "3") {
        this.api.get(`/api/teacher/info/${localStorage.getItem("username")}`)
        .subscribe(teacher => {
          localStorage.setItem("name", teacher["name"]);
          localStorage.setItem("surname", teacher["surname"])
          localStorage.setItem("CF", teacher["CF"])
          localStorage.setItem("birth_place", teacher["birth_place"])
          localStorage.setItem("gender", teacher["gender"])
          document.getElementById("welcome").innerHTML =
              `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
        })
      }

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
