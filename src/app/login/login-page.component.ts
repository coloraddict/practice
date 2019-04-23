import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.component.html',
    styleUrls: ['login-page.component.css']
})
export class LoginPage {

    constructor(private router:Router){

    }

    onLogin(){
        this.router.navigate(['/landing-page']);
    }
}