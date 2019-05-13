import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-radiogroup',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RadiobuttonComponent implements OnInit {

  isHorizontalLayout:boolean = false;

  @Input() options:any;
  @Output() selectedRadio = new EventEmitter();

  constructor() {
    
   }

  ngOnInit() {
    this.isHorizontalLayout = this.options.layout=='horizontal'?true:false;
    console.log(this.isHorizontalLayout);
  }

  selectOption($event){
    this.selectedRadio.emit($event.target.value)
  }

}
