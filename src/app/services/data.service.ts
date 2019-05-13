import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    baseUrl: string = "http://localhost/medrep/";

    constructor(private http: HttpClient){
        
    }

    getMedicines(){
        return this.http.get(this.baseUrl + 'medicines');
    }

    getArea(){
        return this.http.get(this.baseUrl + 'area/read.php');
    }

    getDistributors(item_id){
        return this.http.get(this.baseUrl + 'distributors/102' + item_id);
    }

    getDoctors(area_id){
        return this.http.get(this.baseUrl + 'doctors/read.php/' + area_id);
    }
}