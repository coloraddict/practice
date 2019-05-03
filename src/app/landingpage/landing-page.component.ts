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

    distributors;

	locations:any;

	total:any=0;

	ddOverlay:boolean = false;

	selectedElement;

	distributor_label: string = 'Select Distributor';
	location_label: string = 'Select Location';

	count;

	area: any;

    constructor(private dataService: DataService){
    //   alert(this.distributors.length);
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
		let area = this.dataService.getArea().subscribe(
			(data) => {
				this.locations = data['records'];
				console.log(this.locations);
			},
			error => console.log(error)
		);
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

	onSelection($evt){
		console.log();
		this.loadDistributors($evt.id);
	}

	loadDistributors(item_id){
		let distributor = this.dataService.getDistributors(item_id).subscribe(
			(data) => {
				this.distributors = data['records'];
				console.log(this.distributors);
			},
			error => console.log(error)
		);
	}

}