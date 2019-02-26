import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable()

export class DiarioApiProvider {
  urlApp ="http://localhost:8080/"
  dataExit = []

  constructor(public http: HttpClient) {

  }


  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",

      })
    };

  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  post(pathUrl, data){
    return this.http.post((this.urlApp + pathUrl), data, this.httpOptions)
  }


  get(pathUrl){
    return this.http.get((this.urlApp + pathUrl), this.httpOptions)
  }
}
