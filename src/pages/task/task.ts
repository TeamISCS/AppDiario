import { Home } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})



export class Task {

  @ViewChild('descrizione') desc: HTMLTextAreaElement

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
   this.getCompito()
  }

  generaCompito(compito){

    document.getElementById("titolo").innerHTML=compito["titolo"]
    document.getElementById("materia").innerHTML=compito["materia"]
    document.getElementById("descrizione").innerHTML = compito["descrizione"]
  }

  getCompito() {
    this.generaCompito({
      "idCompito": "1",
      "titolo": "studia",
      "materia": "storia",
      "descrizione": "Studiare da pag 20 a pag 50 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    })
  }


  tornaindietro(){
      this.navCtrl.setRoot(Home);
  }


}
