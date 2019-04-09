import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class Tasks {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
