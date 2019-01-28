import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable()

export class DiarioApiProvider {
  urlPath=""
  urlApp ="http://localhost:8080/APP_DIARIO/log/"
  urlIsAlive = "isAlive"
  urlLogIn = "getlog"
  urlSignUp = "signUp"
  dataExit = []

  constructor(public http: HttpClient) {

  }


  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':  'application/json'
      })
    };

  
  postServer(postData){
  
  }


  getURL(pathUrl, postData){
    switch(pathUrl) {
      case "isAlive": {
        this.urlPath = this.urlApp+this.urlIsAlive;
         break;
      }
      case 'getlog': {
        this.http.post((this.urlApp+this.urlLogIn), postData, this.httpOptions)
          .subscribe(data => {
             this.dataExit[0] = data;
          }, error => {
            console.log("errore");
          });
         break;
      }
      case 'signUp': {
        this.http.post((this.urlApp + this.urlSignUp), postData, this.httpOptions)
          .subscribe(data => {
            this.dataExit[0] = data;
          }, error => {
            console.log("errore");
          });
          break;
      }
      default: {
         //statements;
         break;
      }
   }


    return this.dataExit;
  }

}
