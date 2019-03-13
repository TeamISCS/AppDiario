import { StudentProfile } from './../student-profile/student-profile';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentOptions } from '../student-options';
import { getLocaleMonthNames } from '@angular/common';
import { StudentHome } from '../student-home/student-home';

@Component({
  selector: 'page-student-search',
  templateUrl: 'student-search.html',
})
export class StudentSearch {

  @ViewChild("inputsearch") input: HTMLInputElement

  constructor(public navCtrl: NavController, public options: StudentOptions) {
  }

  studentList = []

  goHome(){
    this.navCtrl.setRoot(StudentHome)
  }

  profile(student) {
    this.navCtrl.setRoot(StudentProfile, student)

  }

  searchStudent() {

    this.studentList.forEach(() => {
      this.studentList.pop()
    })
    this.options.search(this.input.value)
    .subscribe(data => {
      if(data != null){
        this.studentList.push(data)
      }
    })
  }
}
