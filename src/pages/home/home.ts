import { SettingTaskPage } from '../setting-task/setting-task';
import { DiarioApiProvider } from './../../providers/diario-api/diario-api';
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

  constructor(public navCtrl: NavController, public api: DiarioApiProvider) {
  }

  @ViewChild("myslide") slides: Slides

  ionViewWillEnter(){

	  let today = new Date()
		  for(let i = 0; i < this.monthsy.length; i++){
        if(today.getMonth() == this.monthsy[i]){
          this.slides.slideTo(i, 0)
			  }
		  }
	  }


  ionViewDidLoad() {
    if(localStorage.getItem("username") != null) {

      if(localStorage.getItem("privilege") == "1") {
        this.api.get(`/api/student/info/${localStorage.getItem("username")}`)
        .subscribe(student => {
          localStorage.setItem("name", student["name"]);
          localStorage.setItem("surname", student["surname"])
          localStorage.setItem("CF", student["CF"])
          localStorage.setItem("birth_place", student["birth_place"])
          localStorage.setItem("gender", student["gender"])
          document.getElementById("welcome").innerHTML =
              `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
        })
      }
      else if(localStorage.getItem("privilege") == "2") {
        this.api.get(`/api/parent/info/${localStorage.getItem("username")}`)
        .subscribe(parent => {
          localStorage.setItem("name", parent["name"]);
          localStorage.setItem("surname", parent["surname"])
          localStorage.setItem("CF", parent["CF"])
          localStorage.setItem("birth_place", parent["birth_place"])
          localStorage.setItem("gender", parent["gender"])
          document.getElementById("welcome").innerHTML =
              `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
        })
      }
      else if(localStorage.getItem("privilege") == "3") {
        this.api.get(`/api/teacher/info/${localStorage.getItem("username")}`)
        .subscribe(teacher => {
          localStorage.setItem("name", teacher["name"]);
          localStorage.setItem("surname", teacher["surname"])
          localStorage.setItem("CF", teacher["CF"])
          localStorage.setItem("birth_place", teacher["birth_place"])
          localStorage.setItem("gender", teacher["gender"])
          document.getElementById("welcome").innerHTML =
              `Benvenuto ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
        })
      }

    }
    else {
    this.navCtrl.setRoot(LoginPage)
    }
  }


  logout() {
    localStorage.removeItem("jwt")
    localStorage.removeItem("username")
    localStorage.removeItem("name")
    localStorage.removeItem("surname")
    localStorage.removeItem("birth_place")
    localStorage.removeItem("classroom")
    localStorage.removeItem("CF")
    localStorage.removeItem("gender")
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

provaprova(){
  console.log("ciao")
  this.navCtrl.push(SearchPage)
}
//DA FARE NEL CALENDAR.TS
calendars(data){
	let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
	let div = document.getElementById(data.getMonth())
    let table = document.createElement("table")
    table.id = "calendar"
    let days = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"]
  
   	table.innerHTML += `<caption id="cap" data-year="${data.getFullYear()}" data-month="${data.getMonth()}">${months[data.getMonth()]} ${data.getFullYear()}</caption>`
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
                    ttd.setAttribute("date", cc.toLocaleDateString())
                    ttd.setAttribute("ex", "true")
                    ttd.onclick = this.provaprova
            	    ttr.appendChild(ttd)
            	    if(g != this.getDays(cc.getFullYear(), cc.getMonth() + 1)){
              	        g++
                        }
       		    }
          	    else{
            	    let ttd = document.createElement("td")
            	    ttd.innerHTML = "/"
            	    ttr.appendChild(ttd)
          	    }
        	}
        	else if( j == 7) {
         		if(cc.getDay() == 0 && g <= this.getDays(cc.getFullYear(), cc.getMonth() +1)) {
            	let ttd = document.createElement("td")
                ttd.innerHTML = (cc.getDate()).toString()
                ttd.setAttribute("ex", "true")
                ttd.setAttribute("date", cc.toLocaleDateString())
                ttd.onclick = this.provaprova
            	ttr.appendChild(ttd)
            	if(g != this.getDays(cc.getFullYear(), cc.getMonth() + 1)){
              	g++
              }
          	}
            else{
            	let ttd = document.createElement("td")
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

