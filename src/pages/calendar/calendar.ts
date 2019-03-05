import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slide, Slides } from 'ionic-angular';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

	@ViewChild("myslide") slides: Slides

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	monthsy = [8, 9, 10, 11, 0, 1, 2, 3, 4, 5]
	
	ionViewWillEnter(){

		let today = new Date()
		for(let i = 0; i < this.monthsy.length; i++){
			if(today.getMonth() == this.monthsy[i]){
				this.slides.slideTo(i, 0)
			}
		}
	}

	createCalendar(month) {
		this.calendar(new Date(new Date().getFullYear(), month))
	}


 calendar(data){
		let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
		let div = document.getElementById(data.getMonth())
    let table = document.createElement("table")
    table.id = "calendar"
    let days = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"]
  
   	table.innerHTML += `<caption id="cap" data-year="${data.getFullYear()}" data-month="${data.getMonth()}">${months[data.getMonth()]}</caption>`
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
