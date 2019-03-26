import { TeacherHomePage } from '../teacher/teacher-home/teacher-home';
import { ClassroomHome } from './../classroom/classroom-menu/classroom-home';
import { StudentHome } from './../student/student-home/student-home';

import { LoginPage } from './../../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-backoffice-menu',
  templateUrl: 'backoffice-menu.html',
})
export class BackofficeMenu {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

goToStudent() {
  this.navCtrl.setRoot(StudentHome)
}

goToClassroom() {
  this.navCtrl.setRoot(ClassroomHome)
}

goToTeacher() {
  this.navCtrl.setRoot(TeacherHomePage)
}

goToParent() {
  //this.navCtrl.setRoot(ParentHome)
}

goToMatter() {
  //this.navCtrl.setRoot(MatterHome)
}

goToBackoffice() {
  //this.navCtrl.setRoot(BackofficeHome)
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
