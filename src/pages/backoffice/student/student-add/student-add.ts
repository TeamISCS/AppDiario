import { StudentOptions } from './../student-options';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StudentHome } from '../student-home/student-home';


@Component({
  selector: 'page-student-add',
  templateUrl: 'student-add.html',
})
export class StudentAdd {

  constructor(public navCtrl: NavController, public options: StudentOptions) {
  }

  @ViewChild('username') user: ElementRef
  @ViewChild('password') pass: ElementRef
  @ViewChild('name') name: ElementRef
  @ViewChild('surname') surname: ElementRef
  @ViewChild('birth_place') birth_place: ElementRef
  @ViewChild('birth_date') birth_date: ElementRef
  @ViewChild('cf') cf: ElementRef
  @ViewChild('gender') gender: ElementRef

  data = {
    "username": "",
    "password": "",
    "name": "",
    "surname": "",
    "birth_place": "",
    "cf": "",
    "gender": "",
    "privilege": "1"
  }

  register() {
    console.log(this.user.nativeElement.value)
    console.log(this.name.nativeElement.value)
    console.log(this.gender.nativeElement.value)
    /*
    if (!this.cf.value || !this.nome.value || !this.user.value || !this.pass.value || !this.cognome.value || !this.luogo.value || !this.gender.value) {
      document.getElementById("gg").style.display = "block"
      document.getElementById("gg").innerHTML = "C'è un campo vuoto"
    }
    else if (this.cf.value.length != 16) {
      document.getElementById("gg").style.display = "block"
      document.getElementById("gg").innerHTML = "Il codice fiscale non ha 16 caratteri"
    }
    else {

      document.getElementById("gg").style.display = "none"
      this.data.username = this.user.value;
      this.data.password = this.pass.value;
      this.data.name = this.nome.value;
      this.data.surname = this.cognome.value;
      this.data.birth_place = this.luogo.value;
      this.data.cf = this.cf.value;
      this.data.gender = this.gender.value;
      this.options.add(this.data)
        .subscribe(data => {
          console.log(data)
          if (data['status'] == 'added') {
            document.getElementById("gg").style.display = "block"
            document.getElementById("gg").style.color = "black"
            document.getElementById("gg").innerHTML = "L'utente è stato aggiunto con successo"
            this.user.value = null
            this.pass.value = null
            this.nome.value = null
            this.cognome.value = null
            this.luogo.value = null
            this.cf.value = null
            this.gender.value = null
          }
        },
          error => {
            console.log("errore")
          })
    }
    */
  }

  goHome() {
    this.navCtrl.setRoot(StudentHome)
  }


}
