import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiarioApiProvider } from '../../providers/diario-api/diario-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  outputFromServer: string

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  controlla(): void {
    this.api.getURL().subscribe( res => {this.outputFromServer = res['name']; console.log(this.outputFromServer) })
    }
}
