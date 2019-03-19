import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { StudentAdd } from './../student-add/student-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentSearch } from '../student-search/student-search';

@IonicPage()
@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHome {

  constructor(public navCtrl: NavController) {
  }


  studentPages = [
    {
      "title": "Add",
      "icon": "person-add",
      "where": StudentAdd
    },
    {
      "title": "Search",
      "icon": "search",
      "where": StudentSearch
    }
  ]

  goTo(where) {
      this.navCtrl.setRoot(where)
  }

  goBackoffice() {
    this.navCtrl.setRoot(BackofficeMenu)
  }

}
