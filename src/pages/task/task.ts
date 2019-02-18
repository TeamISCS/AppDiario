import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
   this.getCompito()
  }

  generaCompito(compito){
    console.log(compito["idCompito"])

  }

  getCompito() {
    this.generaCompito({
      "idCompito": "1",
      "titolo": "studia",
      "materia": "storia",
      "descrizione": "Studiare da pag 20 a pag 50"
    })
  }

}
