import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { LoginPage } from './login/login-page.component';
import { LandingPage } from './landingpage/landing-page.component';
import { DrugList } from './components/drug-list.component';
import 'hammerjs';

import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

declare var Hammer: any;

const routes: Routes = [
  { path: 'login-page', component: LoginPage },
  { path: 'landing-page', component: LandingPage },
  { path: '**', redirectTo: 'login-page' }
];

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y",
    });
    return mc;
  }
}

@NgModule({
  declarations: [ 
    LoginPage, LandingPage, DrugList
  ],
  imports: [RouterModule.forRoot(routes), CommonModule, HttpClientModule],
  exports: [RouterModule],
  providers: [{
    // hammer instantion with custom config
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig ,
  }]
})
export class AppRoutingModule { }