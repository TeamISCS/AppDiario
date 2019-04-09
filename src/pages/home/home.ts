import { Api } from './../../providers/api/api';
import { SettingTaskPage } from '../setting-task/setting-task';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserPage } from '../user/user';
import { SearchPage } from '../search/search';



@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public api: Api) {
  }

  @ViewChild("myslide") slides: Slides

  ionViewWillEnter(){
    document.getElementById("welcome").innerHTML =
      `Benvenuto ${sessionStorage.getItem('name')} ${sessionStorage.getItem('surname')}`

	  let today = new Date()
		  for(let i = 0; i < this.monthsy.length; i++){
        if(today.getMonth() == this.monthsy[i]){
          this.slides.slideTo(i, 0)
			  }
		  }
	  }


  ionViewDidLoad() {
    if(sessionStorage.getItem("logged") == "true") {
      if(sessionStorage.getItem("name") == null){
        if(sessionStorage.getItem("privilege") == "1") {
          this.api.get(`/api/student/info/${sessionStorage.getItem("username")}`)
          .subscribe(student => {
            console.log(student)
            sessionStorage.setItem("name", student["name"]);
            sessionStorage.setItem("surname", student["surname"])
            sessionStorage.setItem("CF", student["CF"])
            sessionStorage.setItem("birth_place", student["birth_place"])
            sessionStorage.setItem("gender", student["gender"])

          })
        }
        else if(sessionStorage.getItem("privilege") == "2") {
          this.api.get(`/api/parent/info/${sessionStorage.getItem("username")}`)
          .subscribe(parent => {
            console.log(parent)
            sessionStorage.setItem("name", parent["name"]);
            sessionStorage.setItem("surname", parent["surname"])
            sessionStorage.setItem("CF", parent["CF"])
            sessionStorage.setItem("birth_place", parent["birth_place"])
            sessionStorage.setItem("gender", parent["gender"])
          })
        }
        else if(sessionStorage.getItem("privilege") == "3") {
          this.api.get(`/api/teacher/info/${sessionStorage.getItem("username")}`)
          .subscribe(teacher => {
            console.log(teacher)
            sessionStorage.setItem("name", teacher["name"]);
            sessionStorage.setItem("surname", teacher["surname"])
            sessionStorage.setItem("CF", teacher["CF"])
            sessionStorage.setItem("birth_place", teacher["birth_place"])
            sessionStorage.setItem("gender", teacher["gender"])
          })
        }
      }
    }
    else {
      this.navCtrl.setRoot(LoginPage)
    }
  }


  logout() {
    sessionStorage.removeItem("jwt")
    sessionStorage.setItem("logged", "false")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("name")
    sessionStorage.removeItem("surname")
    sessionStorage.removeItem("birth_place")
    sessionStorage.removeItem("classroom")
    sessionStorage.removeItem("CF")
    sessionStorage.removeItem("gender")
    this.navCtrl.setRoot(LoginPage)
  }

  calendarClick(){
    this.navCtrl.setRoot(HomePage)
  }

  personClick(){
    this.navCtrl.setRoot(UserPage)
  }

  searchClick(){
    this.navCtrl.setRoot(SearchPage)
  }

monthsy = [8, 9, 10, 11, 0, 1, 2, 3, 4, 5]

createCalendar(month) {
	this.calendars(new Date(new Date().getFullYear(), month))
}


setTask = element => {
  let date = element.path[0].attributes.date.value
  this.navCtrl.push(SettingTaskPage, {'date': date})
}
//DA FARE NEL CALENDAR.TS
calendars(data){
	let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
	let div = document.getElementById(data.getMonth())
    let table = document.createElement("table")
    table.id = "calendar"
    let days = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"]


    table.innerHTML += `<tr class="month"><th colspan="7">${months[data.getMonth()]} ${data.getFullYear()}</th></tr>`
    let tr = document.createElement("tr")
    for(let i = 0; i < 7; i++){
    		let el = document.createElement("td")
        el.innerHTML = days[i]
        tr.appendChild(el)
        table.appendChild(tr)
    }

  	let g = 1
    let finish = false
  	while(!finish){
   		let ttr = document.createElement("tr")
      	for(let j = 1; j < 8; j++){
        	let cc = new Date(data.getFullYear(), data.getMonth(), g)
        	if(j != 7) {
        	    if(cc.getDay() == j && g <= this.getDays(cc.getFullYear(), cc.getMonth() + 1)){
            	    let ttd = document.createElement("td")
                    ttd.innerHTML = (cc.getDate()).toString()
                    if(cc.toLocaleDateString() == new Date().toLocaleDateString()){
                      ttd.classList.add("currentDay")
                    }
                    ttd.setAttribute("date", cc.toLocaleDateString())
                    ttd.setAttribute("ex", "true")
                    ttd.onclick = this.setTask
            	      ttr.appendChild(ttd)
            	      if(g != this.getDays(cc.getFullYear(), cc.getMonth() + 1)){
              	      g++
                    }
       		    }
          	    else{
                  let ttd = document.createElement("td")
                  ttd.classList.add("noDay")
            	    ttd.innerHTML = "/"
            	    ttr.appendChild(ttd)
          	    }
        	}
        	else if( j == 7) {
         		if(cc.getDay() == 0 && g <= this.getDays(cc.getFullYear(), cc.getMonth() +1)) {
            	let ttd = document.createElement("td")
                ttd.innerHTML = (cc.getDate()).toString()
                if(cc.toLocaleDateString() == new Date().toLocaleDateString()){
                  ttd.classList.add("currentDay")
                }
                ttd.setAttribute("ex", "true")
                ttd.setAttribute("date", cc.toLocaleDateString())
                ttd.onclick = this.setTask
            	ttr.appendChild(ttd)
            	if(g != this.getDays(cc.getFullYear(), cc.getMonth() + 1)){
              	g++
              }
          	}
            else{
              let ttd = document.createElement("td")
              ttd.classList.add("noDay")
            	ttd.innerHTML = "/"
            	ttr.appendChild(ttd)
          	}
        	}
          if(g >= this.getDays(cc.getFullYear(), cc.getMonth() + 1)) {
          	finish = true
          }
        }
				table.appendChild(ttr);
			}
			div.removeChild(div.firstChild)
		div.appendChild(table)
	}

	getDays(anno, mese) {
		return new Date(anno, mese, 0).getDate();
  }


}

