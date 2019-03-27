import { Api } from './../../../providers/api/api';
import { Injectable } from '@angular/core';


@Injectable()
export class StudentOptions {

    constructor(public api: Api) {}


    add(data) {
        return this.api.add("/api/student/add", data)
    }

    remove(user) {
        return this.api.remove(`/api/student/remove/${user}`)
    }

    search(user, by) {
        return this.api.search(`/api/student/search/${by}/${user}`)
    }

    allClass(){
      return this.api.get('/api/classroom/all')
    }
    //DA FARE
    /*remove(classroom) {
        return this.api.remove(`/api/classroom/remove/${classroom}`)
    }
    */
}
