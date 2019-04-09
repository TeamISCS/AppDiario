import { Api } from './../../providers/api/api';
import { Home } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting-task',
  templateUrl: 'setting-task.html',
})
export class SettingTask {

  @ViewChild('select') select: HTMLSelectElement
  @ViewChild('title') titolo: HTMLInputElement
  @ViewChild('task') task: HTMLTextAreaElement
  @ViewChild('date') date: HTMLInputElement

  data = {
    "title": "",
    "task": "",
    "matter": "",
    "createdTask": "",
    "expiryTask": "",
    "teacher": "2"
  }

  materie = []

  constructor(public navParams: NavParams, public navCtrl: NavController, public api: Api) {
  }

  ionViewWillEnter(){
   this.date.value = this.navParams.get("date")
  }


  inserisci() {
    this.data.createdTask = new Date().toLocaleDateString()
    this.data.expiryTask = this.date.value
    this.data.title = this.titolo.value
    this.data.matter = this.select.value
    this.data.task = this.task.value
    console.log(this.date.value)

    this.api.post("api/task/add", this.data)
    .subscribe(data => {
      console.log(data["status"])
    },
    error =>{
      console.log("errore")
    })


    console.log(this.select.value)
  }

  tornahome(): void {
    this.navCtrl.setRoot(Home)
  }
}
