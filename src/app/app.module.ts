import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';


@NgModule({  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataService,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
