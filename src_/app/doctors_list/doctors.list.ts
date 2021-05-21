import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
 
@Component({
    selector: 'doctors-list',
    templateUrl: 'doctors.list.html',
    styleUrls: ['doctors.list.css']
})
export class DoctorsList {

doctors:any = [];

constructor(private dataService: DataService){

}

ngOnInit(){
    // let doctorsobj = this.dataService.getDoctors('EVERSHINE').subscribe(
    //     (data) => {
    //         this.doctors = data['records'];
    //         console.log(this.doctors);
    //     },
    //     error => console.log(error)
    // );
}

}