import { ParentHomePage } from './../parent-home/parent-home';
import { ParentOptions } from './../parent-options';
import { ViewChild, Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-parent-add',
  templateUrl: 'parent-add.html',
})
export class ParentAdd {

  constructor(public navCtrl: NavController, public options: ParentOptions) {
  }
  @ViewChild('id') id: ElementRef
  @ViewChild('username') username: ElementRef
  @ViewChild('password') password: ElementRef
  @ViewChild('name') name: ElementRef
  @ViewChild('surname') surname: ElementRef
  @ViewChild('status') status: ElementRef
  data = {
    "username": "",
    "password": "",
    "name": "",
    "surname": "",
    "id_parent":""
  }

  formIsCorrect() {
    if (!this.name.nativeElement.value || !this.username.nativeElement.value || !this.password.nativeElement.value || !this.surname.nativeElement.value ) {
      return { correct: false, message: "C'è un campo vuoto" }
    }else if (this.id.nativeElement.value.length < 5) {
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
      this.data.id_parent = this.id.nativeElement.value;
      this.data.username = this.username.nativeElement.value;
      this.data.password = this.password.nativeElement.value;
      this.data.name = this.name.nativeElement.value;
      this.data.surname = this.surname.nativeElement.value;
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
  this.navCtrl.setRoot(ParentHomePage)
}
}
