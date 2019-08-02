import { Component, ViewEncapsulation,Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'range-slider',
    templateUrl: 'range-slider.component.html',
    styleUrls: ['range-slider.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class RangeSlider implements OnInit {
    
    counter = 0;
    @Input() unit = this.counter;
    @Output() onUnitUpdate = new EventEmitter();
    @Output() onUnitClose = new EventEmitter();
    
    constructor(){
        
    }
 
    ngOnInit(){
        console.log('RangeSlide ' + this.unit);
        var range = document.getElementsByClassName('input-range')[0];
  	    var value = document.getElementsByClassName('range-value')[0];

	    value.innerHTML = range.getAttribute('value');
        
        var _this = this;
	    range.addEventListener('input', function() {
            value.innerHTML = this.value;
            _this.counter = this.value;
            _this.onUnitUpdate.emit(_this.counter);
	    });

        range.addEventListener('change', function() {
           _this.onUnitClose.emit(this.counter);
        })
    }
}