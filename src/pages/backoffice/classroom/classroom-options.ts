import { Api } from './../../../providers/api/api';
import { Injectable } from '@angular/core';


@Injectable()
export class ClassroomOptions {

    constructor(public api: Api) {}


    add(data) {
        return this.api.add("/api/classroom/add", data)        
    }


    //DA FARE
    /*remove(classroom) {
        return this.api.remove(`/api/classroom/remove/${classroom}`)
    }
    */
}