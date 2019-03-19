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

  @ViewChild('username') username: ElementRef
  @ViewChild('password') password: ElementRef
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
    "birth_date": "",
    "cf": "",
    "gender": ""
  }

  register() {
    
    if (!this.cf.nativeElement.value || !this.name.nativeElement.value || !this.username.nativeElement.value || !this.password.nativeElement.value || !this.surname.nativeElement.value || !this.birth_place.nativeElement.value || !this.gender.nativeElement.value) {
      document.getElementById("gg").style.display = "block"
      document.getElementById("gg").innerHTML = "C'è un campo vuoto"
    }
    else if (this.cf.nativeElement.value.length != 16) {
      document.getElementById("gg").style.display = "block"
      document.getElementById("gg").innerHTML = "Il codice fiscale non ha 16 caratteri"
    }
    else {

      document.getElementById("gg").style.display = "none"
      this.data.username = this.username.nativeElement.value;
      this.data.password = this.password.nativeElement.value;
      this.data.name = this.name.nativeElement.value;
      this.data.surname = this.surname.nativeElement.value;
      this.data.birth_date = this.birth_date.nativeElement.value;
      this.data.birth_place = this.birth_place.nativeElement.value;
      this.data.cf = this.cf.nativeElement.value;
      this.data.gender = this.gender.nativeElement.value[0];
      this.options.add(this.data)
        .subscribe(data => {
          console.log(data)
          if (data['status'] == 'added') {
            document.getElementById("gg").style.display = "block"
            document.getElementById("gg").style.color = "black"
            document.getElementById("gg").innerHTML = "L'utente è stato aggiunto con successo"
            this.username.nativeElement.value = null
            this.password.nativeElement.value = null
            this.name.nativeElement.value = null
            this.surname.nativeElement.value = null
            this.birth_place.nativeElement.value = null
            this.cf.nativeElement.value = null
            this.gender.nativeElement.value = null
          }
        },
          error => {
            console.log("errore")
          })
    }
    
  }

  goHome() {
    this.navCtrl.setRoot(StudentHome)
  }


}
