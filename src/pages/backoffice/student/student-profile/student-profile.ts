import { StudentHome } from './../student-home/student-home';
import { StudentOptions } from './../student-options';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfile {

  constructor(public navCtrl: NavController, public navParams: NavParams, public options: StudentOptions) {
  }
  ionViewWillEnter() {
    console.log(this.navParams.data)
    document.getElementById("name").innerHTML = this.navParams.data["name"]
    document.getElementById("surname").innerHTML = this.navParams.data["surname"]
    document.getElementById("cf").innerHTML = this.navParams.data["cf"]
    document.getElementById("gender").innerHTML = this.navParams.data["gender"]
    document.getElementById("birth_date").innerHTML = this.navParams.data["birth_date"]
    document.getElementById("birth_place").innerHTML = this.navParams.data["birth_place"]
    document.getElementById("classroom").innerHTML = this.navParams.data["classroom"]
  }

  zz() {
    this.navCtrl.setRoot(StudentHome)
  }

  removeStudent() {
    this.options.remove(this.navParams.data["user"])
    .subscribe(data => {
      document.getElementById("removed").style.display = "block"
      document.getElementById("message").style.display = "block"
    })
  }
  
}
