import { Api } from './../../../providers/api/api';
import { Injectable } from '@angular/core';


@Injectable()
export class ParentOptins {

    constructor(public api: Api) {}


    add(data) {
        return this.api.add("/api/parent/add", data)        
    }


    //DA FARE
    /*remove(classroom) {
        return this.api.remove(`/api/classroom/remove/${classroom}`)
    }
    */
}