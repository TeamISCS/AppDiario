import { BackofficeUserPage } from './../backoffice-user/backoffice-user';
import { BackofficeMateriaPage } from './../backoffice-materia/backoffice-materia';
import { BackofficeClassPage } from './../backoffice-class/backoffice-class';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BackofficeMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backoffice-menu',
  templateUrl: 'backoffice-menu.html',
})
export class BackofficeMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeMenuPage');
  }

  utente(){
    this.navCtrl.push(BackofficeUserPage)
  }
  materia(){
    this.navCtrl.push(BackofficeMateriaPage)
  }
  classe(){
    this.navCtrl.push(BackofficeClassPage)
  }
}
