import { Api } from './../../../providers/api/api';
import { Injectable } from '@angular/core';


@Injectable()
export class StudentOptions {

    constructor(public api: Api) {}


    add(data) {
        return this.api.add("/api/student/add", data)        
    }


    search(user, by) {
        return this.api.search(`/api/student/search/${by}/${user}`)
    }
    //DA FARE
    /*remove(classroom) {
        return this.api.remove(`/api/classroom/remove/${classroom}`)
    }
    */
}