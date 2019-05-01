import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    baseUrl: string = "http://localhost/rest_medrep/api/";

    constructor(private http: HttpClient){
        
    }

    getMedicines(){
        return this.http.get(this.baseUrl + 'medicines/read.php');
    }

    getArea(){
        return this.http.get(this.baseUrl + 'area/read.php');
    }

    getDistributors(){
        return this.http.get(this.baseUrl + 'distributors/read.php');
    }
}