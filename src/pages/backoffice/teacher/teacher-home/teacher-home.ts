import { TeacherAdd } from './../teacher-add/teacher-add';
import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeacherHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-home',
  templateUrl: 'teacher-home.html',
})
export class TeacherHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  studentPages = [
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherHomePage');
  }

}
