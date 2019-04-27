import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

import * as math from 'mathjs';
import 'hammerjs';

@Component({
    selector: 'drug-list',
    templateUrl: 'drug-list.component.html',
    styleUrls: ['drug-list.component.css']
})

export class DrugList implements OnDestroy {

    @Input() list: any;
	@Output() result = new EventEmitter<any>();
	@Output() openModifier = new EventEmitter<any>();

	drugs: any = [];

    total = 0;
    dataIndex;
    quantity = 0;
    selectedElement;
	ddOverlay:boolean = false;
	modifierStatus:boolean = false;


	constructor(private dataService: DataService){
		
	}

	ngOnInit(){
		let drugsobj = this.dataService.getMedicines().subscribe(
			(data) => {
				this.drugs = data['records'];
				console.log(this.drugs[0].med_name);
			},
			error => console.log(error)
		);
	}	

    toggleDropdown($event){
        $event.target.parentNode.classList.toggle('active');
        this.ddOverlay = $event.target.parentNode.classList.contains('active');
	}

    updateResult(obj_drug, p_bool){
        var price = parseFloat(obj_drug.price).toFixed(2);
		if(p_bool){
			this.total = math.add(this.total, price).toFixed(2);
		}else{
			if(this.total>0){
				this.total = math.subtract(this.total, price).toFixed(2);
            }
        }
        this.result.emit(this.total);
    }
    
    clearHighlight(){
		var list = document.querySelectorAll(".list li");
		for(var i=0; i<list.length; i++){
			list[i].querySelector("a").classList.remove("active-drug");
		}
    }

    selectItem($evt, p_str){
		$evt.target.parentNode.parentNode.parentNode.classList.remove("active");
		if(p_str=='dist'){
			document.querySelector("#distname").innerHTML = $evt.target.getAttribute("value");
		}else if(p_str=='loc'){
			document.querySelector("#locname").innerHTML = $evt.target.getAttribute("value");
		}
		
		this.ddOverlay = false;
	}

	ngOnDestroy(){
		console.log("asdfhg");
	}

	notify($event){
		this.selectedElement = $event.target.querySelector('.quantity');
		this.quantity = this.selectedElement.firstChild.nodeValue;
		this.modifierStatus=!this.modifierStatus;
		this.openModifier.emit({event: this.modifierStatus, quantity: this.quantity});
	}

	onPanRight($event){
		this.selectedElement = $event.target.querySelector('.quantity');
		this.quantity = this.selectedElement.firstChild.nodeValue;
		var filler =  $event.target.parentNode.querySelector('.filler').style.width = this.quantity + '%';
		this.modifierStatus=!this.modifierStatus;
		
		if(this.quantity<100){
			this.quantity = math.add(this.quantity, 1).toFixed(0);
			this.openModifier.emit({event: true, quantity: this.quantity, element: this.selectedElement,  index: $event.target.getAttribute("data-index"), indicator: $event.target.getElementsByClassName('filler')[0]});
		}
	}

	onPanLeft($event){
		this.selectedElement = $event.target.querySelector('.quantity');
		this.quantity = this.selectedElement.firstChild.nodeValue;
		this.modifierStatus=!this.modifierStatus;
		var filler =  $event.target.parentNode.querySelector('.filler').style.width = this.quantity + '%';

		if(this.quantity>0){
			this.quantity = math.subtract(this.quantity, 1).toFixed(0);
			this.openModifier.emit({event: false, quantity: this.quantity, element: this.selectedElement, index: $event.target.getAttribute("data-index"), indicator: $event.target.getElementsByClassName('filler')[0]});
		}
	}

	populateDrugs(){
		console.log('asdas');
	}

	onDrag($event) {
		this.selectedElement = $event.target.parentNode.parentNode.querySelector('.quantity');
		this.quantity = this.selectedElement.firstChild.nodeValue;
		this.modifierStatus =! this.modifierStatus;
		this.openModifier.emit({event: this.modifierStatus, quantity: this.quantity});
		$event.stopPropagation();
	}
	
	openTab($evt){}

}