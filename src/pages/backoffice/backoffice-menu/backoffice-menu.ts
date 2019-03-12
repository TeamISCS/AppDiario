
import { BackofficeStudentPage } from './../student/backoffice-student/backoffice-student';
import { LoginPage } from './../../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-backoffice-menu',
  templateUrl: 'backoffice-menu.html',
})
export class BackofficeMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToStudent(){
    this.navCtrl.setRoot(BackofficeStudentPage)
  }


  goToBackoffice() {
    
  }

  logout() {
    sessionStorage.removeItem("jwt")
    sessionStorage.setItem("logged", "false")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("name")
    sessionStorage.removeItem("surname")
    sessionStorage.removeItem("birth_place")
    sessionStorage.removeItem("classroom")
    sessionStorage.removeItem("CF")
    sessionStorage.removeItem("gender")
    this.navCtrl.setRoot(LoginPage)
  }
}
