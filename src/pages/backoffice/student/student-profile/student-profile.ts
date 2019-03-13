import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfile {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter() {
    console.log(this.navParams.data)
    document.getElementById("name").innerHTML = this.navParams.data["name"]
    document.getElementById("surname").innerHTML = this.navParams.data["surname"]

  }

  
}
