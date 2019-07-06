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
    let drugsobj = this.dataService.getDoctors().subscribe(
        (data) => {
            this.doctors = data['records'];
            console.log(this.doctors[0].med_name);
        },
        error => console.log(error)
    );
}

}