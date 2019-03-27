import { BackofficeHome } from './../backoffice-home/backoffice-home';
import { StudentHome } from './../../student/student-home/student-home';
import { BackofficeOptions } from './../backoffice-options';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the BackofficeAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-backoffice-add',
  templateUrl: 'backoffice-add.html',
})
export class BackofficeAdd {

  constructor(public navCtrl: NavController, public options: BackofficeOptions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeAddPage');
  }

  @ViewChild('username') username: ElementRef
  @ViewChild('password') password: ElementRef
  @ViewChild('status') status: ElementRef

  data = {
    "username": "",
    "password": ""
  }


  formIsCorrect() {


    if (!this.username.nativeElement.value || !this.password.nativeElement.value ) {
      return { correct: false, message: "C'è un campo vuoto" }
    }
    else {
      return { correct: true, message: "" }
    }

  }



  register() {
    console.log(this.status)
    let form = this.formIsCorrect()
    if (form.correct) {

      console.log(this.username)
      this.data.username = this.username.nativeElement.value;
      this.data.password = this.password.nativeElement.value;
      this.options.add(this.data)
        .subscribe(data => {
          console.log(data)
          if (data['status'] == 'added') {
            this.status.nativeElement.attributes.class.value += " correct"
            this.status.nativeElement.innerHTML = "L'utente è stato aggiunto con successo"
            this.username.nativeElement.value = null
            this.password.nativeElement.value = null
          }
        },
          error => {
            console.log("errore")
          })
    }
    else {
      this.status.nativeElement.attributes.class.value += " error"
      this.status.nativeElement.innerHTML = form.message
    }



  }

goHome() {
  this.navCtrl.setRoot(BackofficeHome)
}


}
