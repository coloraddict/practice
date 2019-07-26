import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService implements HttpInterceptor {
    baseUrl: string = "http://ajay.byethost31.com/medrep/";
    // baseUrl: string = "http://localhost/medrep/";

    constructor(private http: HttpClient){
        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
              'Authorization': `bc5ac4d4704afce664db8bafa6449e77`
            },
          });
        return next.handle(request);
    }

    getMedicines(){
        return this.http.get(this.baseUrl + 'medicines/read.php');
    }

    getArea(){
        return this.http.get(this.baseUrl + 'area/read.php');
    }

    getDistributors(item_id){
        return this.http.get(this.baseUrl + 'distributors/102' + item_id);
    }

    getDoctors(patch){
        return this.http.get(this.baseUrl + 'doctors/read.php?patch=' + patch);
    }

    getPatches(area_id){
        return this.http.get(this.baseUrl + 'patch/read.php?area_id=' + area_id);
    }

    loginuser(obj){
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.baseUrl + 'login.php', obj);
    }
}