import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {

  id = 0;

  constructor() {
    
   }

  ngOnInit() {
    this.id++;
  }

}
