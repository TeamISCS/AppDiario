import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable()

export class DiarioApiProvider {
  urlApp ="http://localhost:8080/diario/api/v1/todo/"
  dataExit = []

  constructor(public http: HttpClient) {

  }


  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':  'application/json'
      })
    };


  post(pathUrl, data){

    return this.http.post((this.urlApp + pathUrl), data, this.httpOptions) 
  }


  get(pathUrl, data){
    return this.http.get((this.urlApp + pathUrl), data)
  }
}
