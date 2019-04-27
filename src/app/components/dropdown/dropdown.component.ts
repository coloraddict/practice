import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() list:any;
  @Input() label:any;

  constructor() { }

  ngOnInit() {

    console.log(this.list);
  }

  myFunction(){
    document.getElementById('myDropdown').classList.toggle("show");
  }

}
