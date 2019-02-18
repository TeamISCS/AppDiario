import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-task',
  templateUrl: 'setting-task.html',
})
export class SettingTaskPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingTaskPage');
  }

  tornahome():void{
      this.navCtrl.setRoot(HomePage)
  }
}
