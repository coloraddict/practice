import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'range-slider',
    templateUrl: 'range-slider.component.html',
    styleUrls: ['range-slider.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class RangeSlider {
    
    @Output() onUnitUpdate = new EventEmitter();
    @Output() onUnitClose = new EventEmitter();
    counter = 0;

    ngOnInit(){
        var range = document.getElementsByClassName('input-range')[0];
  	    var value = document.getElementsByClassName('range-value')[0];

	    value.innerHTML = range.getAttribute('value');
        
        var _this = this;
	    range.addEventListener('input', function() {
            value.innerHTML = this.value;
            this.counter = this.value;
            _this.onUnitUpdate.emit(this.counter);
	    });

        range.addEventListener('change', function() {
           _this.onUnitClose.emit(this.counter);
        })
    }
}