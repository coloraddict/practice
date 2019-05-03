import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() list:any;
  @Input() label:any;
  @Output() locationChange = new EventEmitter();
  isLocationChanged: any = [];
  @ViewChild('dropdown') dropdown: ElementRef; 

  constructor() { }

  ngOnInit() {
  }

  myFunction(){
    this.dropdown.nativeElement.classList.toggle('show');
  }

  onItemSelect($evt){
    this.label = $evt.target.firstChild.nodeValue;
    this.hideDropdownMenu();
    this.isLocationChanged = {
      status: false,
      id: $evt.target.getAttribute("item_id")
    }
    this.locationChange.emit(this.isLocationChanged);
  }

  hideDropdownMenu(){
    this.dropdown.nativeElement.classList.remove('show');
  }

}
