import { Injectable } from '@angular/core';
import { Api } from './../../../providers/api/api';


@Injectable()
export class BackofficeOptions {

    constructor(public api: Api) {}


    add(data) {
        return this.api.add("/api/backoffice/add", data)
    }


    //DA FARE
    /*remove(classroom) {
        return this.api.remove(`/api/classroom/remove/${classroom}`)
    }
    */
}
