import { Api } from './../../../providers/api/api';
import { Injectable } from '@angular/core';


@Injectable()
export class MatterOptions {

    constructor(public api: Api) {}


    add(data) {
        return this.api.add("/api/matter/add", data)        
    }

    //DA FARE
    /*remove(matter) {
        return this.api.remove(`/api/matter/remove/${matter}`)
    }
    */
}