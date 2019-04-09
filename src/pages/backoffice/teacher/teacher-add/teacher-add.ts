import { TeacherHomePage } from '../teacher-home/teacher-home';
import { TeacherOptions } from './../teacher-options';
import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-teacher-add',
  templateUrl: 'teacher-add.html',
})
export class TeacherAdd {

  constructor(public navCtrl: NavController, public options: TeacherOptions) {
  }
  @ViewChild('id') id: ElementRef
  @ViewChild('username') username: ElementRef
  @ViewChild('password') password: ElementRef
  @ViewChild('name') name: ElementRef
  @ViewChild('surname') surname: ElementRef
  @ViewChild('birth_place') birth_place: ElementRef
  @ViewChild('birth_date') birth_date: ElementRef
  @ViewChild('cf') cf: ElementRef
  @ViewChild('gender') gender: ElementRef
  @ViewChild('status') status: ElementRef

  data = {
    "username": "",
    "password": "",
    "name": "",
    "surname": "",
    "birth_place": "",
    "birth_date": "",
    "cf": "",
    "gender": "",
    "id_teacher": "",
  }


  formIsCorrect() {
    let birth_date: string = this.birth_date.nativeElement.value
    let arrayDate = birth_date.split("/")
    let today = new Date()

    if (!this.cf.nativeElement.value || !this.name.nativeElement.value || !this.username.nativeElement.value || !this.password.nativeElement.value || !this.surname.nativeElement.value || !this.birth_place.nativeElement.value || !this.gender.nativeElement.value) {
      return { correct: false, message: "C'è un campo vuoto" }
    }
    else if (this.cf.nativeElement.value.length != 16) {
      return { correct: false, message: "Il codice fiscale non ha 16 caratteri" }
    }
    else if (arrayDate[2] > today.getFullYear().toString()) {
      return { correct: false, message: "Il professore viene dal futuro?" }
    }
    else if (arrayDate[1] > today.getMonth().toString()) {
      return { correct: false, message: "Il professore viene dal futuro?" }
    }
    else if (arrayDate[0] > today.getDate().toString()) {
      return { correct: false, message: "Il professore viene dal futuro?" }
    }
    else if (this.id.nativeElement.value.length < 5) {
      return { correct: false, message: "L'id deve essere di minimo 5 cifre" }
    }
    else {
      return { correct: true, message: "" }
    }

  }



  register() {
    console.log(this.status)
    let form = this.formIsCorrect()
    if (form.correct) {

      this.data.id_teacher = this.id.nativeElement.value;
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
            this.status.nativeElement.attributes.class.value += " correct"
            this.status.nativeElement.innerHTML = "L'utente è stato aggiunto con successo"
            this.username.nativeElement.value = null
            this.password.nativeElement.value = null
            this.name.nativeElement.value = null
            this.surname.nativeElement.value = null
            this.birth_place.nativeElement.value = null
            this.cf.nativeElement.value = null
            this.gender.nativeElement.value = null
            this.id.nativeElement.value = null
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
  this.navCtrl.setRoot(TeacherHomePage)
}



}
