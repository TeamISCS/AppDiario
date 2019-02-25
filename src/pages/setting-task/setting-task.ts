import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiarioApiProvider } from '../../providers/diario-api/diario-api';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';

/**
 * Generated class for the SettingTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-task',
  templateUrl: 'setting-task.html',
})
export class SettingTaskPage {

  @ViewChild('select') select: HTMLSelectElement
  @ViewChild('title') titolo: HTMLInputElement
  @ViewChild('task') task: HTMLTextAreaElement

  data = {
  "title": "",
  "task": "",
  "matter": "",
  "teacher": "2"
}

materie = []

IonViewDidLoad(){
  this.api.get("/matter/all")
  .subscribe(data => {
    this.materie.push(data)
  })
}

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  inserisci() {

    /*this.data.title = this.titolo.value
    this.data.matter = this.select.value
    this.data.task = this.task.value

    this.api.post("inseriscitask", this.data)
    .subscribe(data => {
      console.log(data["status"])
    },
    error =>{
      console.log("errore")
    })
*/

console.log(this.select.value)
  }

  tornahome():void{
      this.navCtrl.setRoot(HomePage)
  }
}
