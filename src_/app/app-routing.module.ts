import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
// import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LoginPage } from './login/login-page.component';
import { LandingPage } from './landingpage/landing-page.component';
import { DrugList } from './components/drug-list.component';
import { Scheduler } from './schedule/schedule';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { DoctorsList } from './doctors_list/doctors.list';
import { PatchList } from './patch/patch.component';
import { RangeSlider } from './components/range-slider/range-slider.component';
import 'hammerjs';

import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

declare var Hammer: any;

const routes: Routes = [
  { path: 'login-page', component: LoginPage },
  { path: 'landing-page', component: LandingPage },
  { path: 'schedule', component: Scheduler },
  { path: 'doctors_list', component: DoctorsList },
  { path: 'patch_list', component: PatchList },
  { path: 'drug_list', component: DrugList },
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
    LoginPage, 
    LandingPage, 
    DrugList, 
    DropdownComponent, 
    RadiobuttonComponent, 
    Scheduler, 
    Header, 
    Footer, 
    DoctorsList, 
    PatchList, 
    RangeSlider
  ],
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule, 
    HttpClientModule, 
    FormsModule,
    // FlatpickrModule.forRoot(),
    NgbModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
   
  ],
  exports: [RouterModule],
  providers: [{
    // hammer instantion with custom config
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig ,
  }],
  entryComponents: [
    
  ]
})
export class AppRoutingModule { }