import { MatterAdd } from './../matter-add/matter-add';
import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-matter-home',
  templateUrl: 'matter-home.html',
})
export class MatterHome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  matterPages = [
    {
      "title": "Add",
      "icon": "person-add",
      "where": MatterAdd
    }
  ]

  goTo(where) {
      this.navCtrl.setRoot(where)
  }

  goBackoffice() {
    this.navCtrl.setRoot(BackofficeMenu)
  }

}
