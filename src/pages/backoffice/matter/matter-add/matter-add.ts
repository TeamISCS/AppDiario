import { MatterHomePage } from './../matter-home/matter-home';
import { MatterOptions } from './../matter-options';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@Component({
  selector: 'page-matter-add',
  templateUrl: 'matter-add.html',
})
export class MatterAdd {



  constructor(public navCtrl: NavController, public option: MatterOptions) {
  }

  @ViewChild('matter') matter: ElementRef
  @ViewChild('status') status: ElementRef
  data = {
    "name": "",
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeClassPage');
  }

  goHome() {
    this.navCtrl.setRoot(MatterHomePage)
  }

  formIsCorrect() {

    if (!this.matter.nativeElement.value)
      return { correct: false, message: "C'è un campo vuoto" }
    else {
        return { correct: true, message: "" }
    }
  }

  addMatter(){

    console.log(this.status)
    let form = this.formIsCorrect()
    if (form.correct) {
      console.log(this.matter)
      this.data.name = this.matter.nativeElement.value;
      this.option.add(this.data)
      .subscribe(data => {
        console.log(data)
        if (data['status'] == 'added') {
          this.status.nativeElement.attributes.class.value += " correct"
          this.status.nativeElement.innerHTML = "La materia è stata aggiunta con successo"
          this.matter.nativeElement.value = null
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


}
