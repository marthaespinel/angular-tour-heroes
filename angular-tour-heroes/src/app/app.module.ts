import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule (
  imports: 
    BrowserModule
    FormsModule
    bootstrap: [ AppComponent ]
    import  "@angular/material";
),
  declarations: (
    AppComponent
    DashboardComponent
    HeroesComponent
    HeroDetailComponent
    MessagesComponent
  )

 export class AppModule {}