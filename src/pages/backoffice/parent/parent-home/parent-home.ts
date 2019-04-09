import { ParentAdd } from './../parent-add/parent-add';
import { BackofficeMenu } from './../../backoffice-menu/backoffice-menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParentHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent-home',
  templateUrl: 'parent-home.html',
})
export class ParentHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  parentPages = [
    {
      "title": "Add",
      "icon": "person-add",
      "where": ParentAdd
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
    console.log('ionViewDidLoad ParentHomePage');
  }

}
