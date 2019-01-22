import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //http: HTTP;
  constructor(public navCtrl: NavController, private http: HTTP) {

  }

  controlla(): void {
    console.log("ok")
    this.http.get('http://localhost:8080/APP_DIARIO/log/isalive', {}, {})
      .then(data => {
        console.log("va");
      })
      .catch(error => {
        console.log("non va");
      });
    }
}
