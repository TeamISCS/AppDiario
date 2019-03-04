import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  months = []

  ionViewDidLoad() {

    for(let i = new Date().getMonth(); i < 12; i++) {
      this.months.push(i)
    }
    
    for(let m of this.months) {
      this.createCalendar(m)
    }
  }

  
createCalendar(month) {
	//this.funziona(new Date(new Date().getFullYear(), month))
}

prova(){
  console.log("ciao")
}

/*
 calendar(data){
	let months = ["Gennario", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
  
  let fuu = document.getElementById("fuu")
    console.log(fuu)
    let table = document.createElement("table");
    table.id = "calendar";
    let days = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
  
   	table.innerHTML += `<caption id="cap" data-year="${data.getFullYear()}" data-month="${data.getMonth()}">${months[data.getMonth()]}</caption>`;
    let tr = document.createElement("tr");
    for(let i = 0; i < 7; i++){
    	let el = document.createElement("td");
        el.innerHTML = days[i];
        tr.appendChild(el);
        table.appendChild(tr);
    }
    	
  	let gg = 1;
    let finish = false;
  	while(!finish){
   		let ttr = document.createElement("tr");
      	for(let j = 1; j < 8; j++){
        	let cc = new Date(data.getFullYear(), data.getMonth(), gg);
        	if(j != 7) {
        		if(cc.getDay() == j && gg <= this.giorni(cc.getFullYear(), cc.getMonth() + 1)){
            		let ttd = document.createElement("td");
            		ttd.innerHTML = (cc.getDate()).toString();
    
            		ttr.appendChild(ttd);
            		if(gg != this.giorni(cc.getFullYear(), cc.getMonth() + 1)){
                    	gg++;
                    }
       			}
          		else{
            		let ttd = document.createElement("td");
            		ttd.innerHTML = "/";
            		ttr.appendChild(ttd);
          		}
        	}
        	else if( j == 7) {
         		if(cc.getDay() == 0 && gg <= this.giorni(cc.getFullYear(), cc.getMonth() +1)) {
            		let ttd = document.createElement("td");
           	 		ttd.innerHTML = (cc.getDate()).toString();
            		ttr.appendChild(ttd);
            		if(gg != this.giorni(cc.getFullYear(), cc.getMonth() + 1)){
                    	gg++;
                    }
          		}
                else{
            		var ttd = document.createElement("td");
            		ttd.innerHTML = "/";
            		ttr.appendChild(ttd);
          		}
        	}
            if(gg >= this.giorni(cc.getFullYear(), cc.getMonth() + 1)) {
             	finish = true;         
            }
            
		}
		
    	table.appendChild(ttr);
	}
    fuu.appendChild(table);

}
*/

 giorni(anno, mese) {

	return new Date(anno, mese, 0).getDate();
}



}
