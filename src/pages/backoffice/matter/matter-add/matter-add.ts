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
  data = {
    "name": "",
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackofficeClassPage');
  }

  goHome() {
    this.navCtrl.setRoot(MatterHomePage)
  }
  addMatter(){


      this.data.name = this.matter.nativeElement.value;


    if(!this.matter.nativeElement)
    {
      document.getElementById("smss").style.display = "block"
      document.getElementById("smss").innerHTML = "C'è un campo vuoto"
    }
    else{

    document.getElementById("smss").style.display = "none"
    this.data.name=this.matter.nativeElement;


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
