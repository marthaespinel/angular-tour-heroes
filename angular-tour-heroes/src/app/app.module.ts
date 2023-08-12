import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ForasModule}   from '@angular/Foras';
import { AppComponent } from './app.component';
import { HeroesComponent } from './component/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule
    ForasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
