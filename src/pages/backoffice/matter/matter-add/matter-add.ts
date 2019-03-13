import { MatterOptions } from './../matter-options';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@Component({
  selector: 'page-matter-add',
  templateUrl: 'matter-add.html',
})
export class MatterAdd {

  @ViewChild('materia') materia: HTMLInputElement

  constructor(public navCtrl: NavController, public option: MatterOptions) {
  }

  data = {
    "name": "",
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeClassPage');
  }

  addMatter(){

    if(!this.materia.value)
    {
      document.getElementById("smss").style.display = "block"
      document.getElementById("smss").innerHTML = "C'è un campo vuoto"
    }
    else{

    document.getElementById("smss").style.display = "none"
    this.data.name=this.materia.value;


      this.option.add(this.data)
      .subscribe(data => {
        console.log(data)
        if(data['status']=='added'){
          document.getElementById("smss").style.display = "block"
          document.getElementById("smss").style.color = "black"
          document.getElementById("smss").innerHTML = "La materia è stata aggiunta con successo"
        }
      },
      error => {
        console.log("errore")
      })
  }
  }

}
