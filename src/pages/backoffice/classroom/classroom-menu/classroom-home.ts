import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { ClassroomAdd } from './../classroom-add/classroom-add';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-classroom-home',
  templateUrl: 'classroom-home.html',
})
export class ClassroomHome {

  constructor(public navCtrl: NavController) {
  }

  classroomPages = [
    {
      "title": "Add",
      "icon": "people",
      "where": ClassroomAdd
    },
    {
      "title": "Remove",
      "icon": "people",
      "where": ClassroomAdd
    }
  ]


 goTo(where){
   this.navCtrl.setRoot(where)
 }

 goBackoffice() {
   this.navCtrl.setRoot(BackofficeMenu)
 }
 

}
