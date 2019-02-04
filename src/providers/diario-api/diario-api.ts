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


  getURL(pathUrl, postData){

    return this.http.post((this.urlApp + pathUrl), postData, this.httpOptions) 
  }
}
