import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html',
})
export class DiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    document.getElementById("aa").innerHTML = "Benvenuto " + localStorage.getItem("username")
  }

}
