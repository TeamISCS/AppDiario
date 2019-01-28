import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the DiarioApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiarioApiProvider {
  urlPath=""
  urlApp ="http://localhost:8080/APP_DIARIO/log/getlog"
  urlIsAlive = "isAlive"
  urlLogIn = "getlog"

  constructor(public http: HttpClient) {

  }

  getURL(pathUrl){
    switch(pathUrl) {
      case "isAlive": {
        this.urlPath = this.urlApp+this.urlIsAlive;
         break;
      }
      case "getlog": {
        this.urlPath = this.urlApp+this.urlLogIn;
         break;
      }
      default: {
         //statements;
         break;
      }
   }




    return this.http.get(this.urlPath);
  }

}
