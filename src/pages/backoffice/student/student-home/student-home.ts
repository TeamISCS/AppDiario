import { StudentAdd } from './../student-add/student-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHome {

  constructor(public navCtrl: NavController) {
  }


  addStudent() {
      this.navCtrl.setRoot(StudentAdd)
  }

  removeStudent() {
    //
    //
  }
}
