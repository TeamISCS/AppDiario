import { MatterAdd } from './../matter-add/matter-add';
import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MatterHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matter-home',
  templateUrl: 'matter-home.html',
})
export class MatterHomePage {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatterHomePage');
  }

}
