import { User } from './../user/user';
import { Home } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  calendarClick(){
    this.navCtrl.setRoot(Home)
  }

  personClick(){
    this.navCtrl.setRoot(User)
  }

  searchClick(){
    this.navCtrl.setRoot(Search)
  }
}
