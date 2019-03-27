import { BackofficeAdd } from '../backoffice-add/backoffice-add';
import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-backoffice-home',
  templateUrl: 'backoffice-home.html',
})
export class BackofficeHome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  backofficePages = [
    {
      "title": "Add",
      "icon": "person-add",
      "where": BackofficeAdd
    }
  ]

  goTo(where) {
      this.navCtrl.setRoot(where)
  }

  goBackoffice() {
    this.navCtrl.setRoot(BackofficeMenu)
  }


}
