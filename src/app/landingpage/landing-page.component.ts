import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as math from 'mathjs'
import { DrugList } from '../components/drug-list.component';
import { DataService } from '../services/data.service';


@Component({
    selector: 'landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class LandingPage implements OnInit{
	// ddOverlay:boolean = false;
	private medicines = [];

    distributors = ['Sachin', 'Hari Om', 'S Parikh', 'ATOR', 'DJ & Sons', 'Shree Pharma', 'P D Doshi', 'Kay Pharma', 'Nayak', 'JK Dist', 'Eastern', 'Galaxy Star', 'Prabhart', 'GR Pharma', 'AMED', 'Arpit', 'Avani', 'Desai', 'Deepali', 'AVS Pharma', 'Kishore Pharma'];

	locations: any = ["BHAYANDER EAST ", "BHAYANDER WEST", "BOISAR", "DAHANU", "MANOR", "NAGINDAS NALASOPARA EAST", "NALASOPARA EAST", "NALASOPARA WEST", "NIRMAL NALASOPARA WEST", "PALGHAR", "SANTOSH BHUVAN NALASOPARA EAST", "SAFALE", "VASAI EAST", "VASAI WEST", "VIKRAMGAD", "VIRAR EAST", "VIRAR WEST", "WADA", "CHAROTI", "TALASARI", "MIRAROAD", "KASHIMIRA", "NAIGAON", "BHYANDER EAST", "BHYANDER WEST", "VIRAR EAST ", "VANGAON", "SAATPATI", "TARAPUR", "SANTOSH BHUVAN", "PHOOLPADA", "UTTAN", "VASAI VILLAGE", "ANDHERI EAST", "ANDHERI WEST", "BANDRA EAST", "BORIVALI EAST", "BORIVALI WEST", "DAHISAR EAST", "DAHISAR WEST", "GOREGAON EAST", "GOREGAON WEST", "JOGESHWARI EAST", "JOGESHWARI WEST", "KANDIVALI EAST", "KANDIVALI WEST", "KHAR EAST", "KHAR WEST", "MALAD EAST", "MALAD WEST", "MIRAROAD EAST", "VILEPARLE EAST", "VILEPARLE WEST", "VASAI", "BHANDUP", "BHAYANDAR", "SANTACRUZ EAST", "SANTACRUZ WEST", "CARTER ROAD BORIVALI EAST", "CHANDAVARKAR ROAD BORIVALI WEST", "CHARKOP KANDIVALI WEST", "CHIKUWADI BORIVALI WEST", "GANESHNAGAR KANDIVALI WEST", "GORAI 2 BORIVALI WEST", "KAJUPADA", "BORIVALI EAST", "KULUPWADI", "BORIVALI EAST", "L T ROAD", "BOIVALI WEST", "LINK ROAD", "DAHISAR WEST", "NANCY COLONY DAHISAR EAST", "ORLEM MALAD WEST", "RAWALPADA", "DAHISAR EAST", "ROKADIA LANE", "BORIVALI WEST", "TATAPOWER BORIVALI EAST", "THAKUR COMPLEX KANDIVALI EAST", "THAKUR VILLAGE", "KANDIVALI EAST", "VAZIRANAKA BORIVALI WEST", "YOGINAGAR", "BORIVALI WEST", "BANDRA WEST", "NALLASOPARA", "SANTACRUZ", "VILEPARLE", "MALAD", "KANDIVALI", "BORIVALI", "GOREGAON", "DAHISAR", "ANDHERI", "JOGESHWARI", "BANDRA", "KHAR", "KHAR EAST(SAU PHARMA)", "SAKINAKA", "CAVES ROAD", "JOGESHWARI EAST", "GORAI", "BORIVALI WEST", "FILMCITY ROAD", "GOREGAON EAST", "DEVIPADA", "BORIVALI EAST", "THAKURCOMPLEX", "KANDIVALI EAST", "PATHANWADI", "MALAD EAST", "S V ROAD", "JOGESHWARI WEST", "KASTURBA ROAD NO.5", "BORIVALI EAST", "CHARKOP", "KANDIVALI WEST", "EKTA NAGAR", "KANDIVALI WEST", "LOKHANDWALA ", "KANDIVALI EAST", "DAULAT NAGAR", "BORIVALI EAST", "IRANI WADI", "KANDIVALI WEST", "EKSAR ROAD", "BORIVALI WEST", "SANTOSH NAGAR", "GOREGAON EAST", "MAHAVIR NAGAR", "KANDIVALI WEST", "M G ROAD ", "KANDIVALI WEST", "KETAKIPADA", "DAHISAR EAST", "ROAD NO.5", "DAHISAR EAST", "LALJIPADA", "KANDIVALI WEST", "SHIMPOLI", "BORIVALI WEST", "SHIVAJI NAGAR", "MALAD EAST", "AMBAWADI", "DAHISAR EAST", "KURAR VILLAGE", "MALAD EAST", "KOKANIPADA", "DAHISAR EAST", "RAM MANDIR ROAD", "BORIVALI WEST", "CARTER ROAD NO.5", "BORIVALI EAST", "NEAR SAIBABA TEMPLE", "KURAR VILLAGE", "MALAD EAST", "GORAI 1", "BORIVALI WEST", "OPP.MANGALAM DAIRY", "KANDIVALI EAST", "LT ROAD", "BORIVALI WEST", "JEENOFAR PLOT", "JOGESHWARI EAST", "OSHIWIRA GARDEN ROAD", "JOGESHWARI WEST", "VILEPARLE EAST AND WEST", "KHAR EAST AND WEST", "BANDRA EAST AND WEST", "GOREGAON EAST AND WEST", "MALAD ESAT AND WEST", "KANDIVALI EAST AND WEST", "BORIVALI EAST AND WEST", "DAHISAR EAST AND WEST", "VILE PARLE EAST AND WEST", "MALAD EAST AND WEST", "BHANDUP WEST", "CHEMBUR", "DADAR", "GHATKOPAR", "DOMBIVALI EAST AND WEST", "KURLA", "MAHIM", "MATUNGA", "MULUND", "THANE EAST", "VIKHROLI", "MIRA ROAD", "PAREL", "DHARAVI", "SION", "BHYANDER", "TARDEO", "GOVANDI"]

	total:any=0;

	ddOverlay:boolean = false;

	selectedElement;

	distributor_label: string = 'Select Distributor';
	location_label: string = 'Select Location';

	count;

	area: any;

    constructor(private dataService: DataService){
      
    }

    toggleDropdown($event){
        $event.target.parentNode.classList.toggle('active');
        this.ddOverlay = $event.target.parentNode.classList.contains('active');
	}

	selectItem($evt, p_str){
		console.log(p_str);
		$evt.target.parentNode.parentNode.parentNode.classList.remove("active");
		if(p_str=='dist'){
			document.querySelector("#distname").innerHTML = $evt.target.getAttribute("value");
		}else if(p_str=='loc'){
			document.querySelector("#locname").innerHTML = $evt.target.childNodes[1].textContent;
		}
		
		this.ddOverlay = false;
	}

	openTab($event){
		var tab_id;
		this.closeAllTabs();
		tab_id = $event.target.getAttribute("for");
		document.getElementById(tab_id+'-content').classList.remove("hide");
		document.getElementById(tab_id+'-content').classList.add("active");
	}

	closeAllTabs(){
		var content_list = document.querySelectorAll(".tab-content section");
		for(var i=0; i<content_list.length; i++){
			content_list[i].classList.remove('active');
			content_list[i].classList.add('hide');
		}
	}

	displayTotal($event){
		this.total = $event;
	}

	increment(){

	}

	decrement(){}

	ngOnInit(){
		// var pageHeaderHeight = document.getElementsByClassName('page-header')[0].clientHeight;
		// var tabContainerHeight = document.getElementsByClassName('tab-container')[0].clientHeight;
		// var footerHeight = document.getElementsByClassName('footer-container')[0].clientHeight;
		// var bodyHeight = document.body.clientHeight;

		// var drugListHeight = bodyHeight - (pageHeaderHeight + tabContainerHeight + footerHeight) - 290;
		
		// var list = document.querySelectorAll('.list');
		// for(var i=0; i<list.length; i++){
			// list[i].style.height =  drugListHeight + 'px';
		// }
		// document.getElementsByClassName('list').style.height = drugListHeight + 'px';
		// let area = this.dataService.getArea().subscribe(
		// 	(data) => {
		// 		this.locations = data['records'];
		// 		console.log(this.locations);
		// 	},
		// 	error => console.log(error)
		// );
	}
	
	openModal($event){
		// this.dataIndex = $event.target.getAttribute("data-index");
		// this.quantity=0;
		// this.selectedElement = $event.target.querySelector('.quantity');
		this.count = $event.quantity;
		// this.clearHighlight();
		// $event.target.classList.add("active-drug");
		var modal = document.getElementById("modal-popup");
		modal.classList.add("active");
	}
	
	hidePopup($event){
		// this.selectedElement.firstChild.nodeValue = this.quantity;
		$event.target.classList.remove("active");
		// document.querySelector(".")
	}

	modifyCount($event){
		$event.element.firstChild.textContent = $event.quantity;
		var total = document.getElementById('total').firstChild.textContent = '100';


		// if($event.event){
		// 	this.total = math.add(this.total, this.drugs[$event.index].price).toFixed(2);
		// }else{
		// 	if(this.total>0){
		// 		this.total = math.subtract(this.total, this.drugs[$event.index].price).toFixed(2);
        //     }
        // }
	}

}