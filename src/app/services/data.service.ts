import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService implements HttpInterceptor {
    baseUrl: string = "http://localhost/medrep/";

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
        return this.http.get(this.baseUrl + 'medicines');
    }

    getArea(){
        return this.http.get(this.baseUrl + 'area');
    }

    getDistributors(item_id){
        return this.http.get(this.baseUrl + 'distributors/102' + item_id);
    }

    getDoctors(){
        return this.http.get(this.baseUrl + 'doctors');
    }
}