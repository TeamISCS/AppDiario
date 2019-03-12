import { ClassroomOptions } from './../classroom-options';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-classroom-add',
  templateUrl: 'classroom-add.html',
})
export class ClassroomAdd {

  @ViewChild('classe') classe: HTMLInputElement
  @ViewChild('sezione') sezione: HTMLInputElement

  constructor(public navCtrl: NavController, public option: ClassroomOptions) { }

  data = {
    "year": "",
    "section": "",
    "art": null
  }


  addClassroom() {

    if (!this.classe.value || !this.sezione.value) {
      document.getElementById("sms").style.display = "block"
      document.getElementById("sms").innerHTML = "C'è un campo vuoto"
    }
    else {
      document.getElementById("sms").style.display = "none"
      this.data.year = this.classe.value;
      this.data.section = this.sezione.value;

      this.option.add(this.data)
        .subscribe(status => {
          if (status["status"] == "added") {
            //
            //
            console.log("added")
          }
          else {
            //
            //
            console.log("no")
          }
        },
          error => {
            //
            //
            console.log("error")
          })
    }
  }
}
