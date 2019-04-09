import { TeacherAdd } from './../teacher-add/teacher-add';
import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  teacherPages = [
    {
      "title": "Add",
      "icon": "person-add",
      "where": TeacherAdd
    },
    {
      "title": "Search",
      "icon": "search"
    }
  ]

  goTo(where) {
      this.navCtrl.setRoot(where)
  }

  goBackoffice() {
    this.navCtrl.setRoot(BackofficeMenu)
  }


}
