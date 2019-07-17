import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.component.html',
    styleUrls: ['login-page.component.css']
})
export class LoginPage {

    user_obj = {
        email:'ajay@j.com',
        password: '123'
    }

    constructor(private router:Router, private dataService: DataService){

    }

    onLogin(){
        // this.dataService.loginuser(this.user_obj).subscribe( (result) => {
        //     console.log(result);
        // })
        this.router.navigate(['/landing-page']);
    }
}