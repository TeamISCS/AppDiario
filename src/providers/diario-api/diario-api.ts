import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable()

export class DiarioApiProvider {
  urlApp ="http://localhost:8080/APP_DIARIO/log/"
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

    this.http.post((this.urlApp + pathUrl), postData, this.httpOptions)
      .subscribe(data => {
        this.dataExit[0] = data;
      }, error => {
        console.log("errore")
      })

    return this.dataExit;
  }

}
