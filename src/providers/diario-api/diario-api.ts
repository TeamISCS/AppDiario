import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the DiarioApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiarioApiProvider {


  url = "http://localhost:8080/APP_DIARIO/log/isAlive"

  constructor(public http: HttpClient) {
    
  }

  getURL(){
    return this.http.get(this.url);
  }

}
