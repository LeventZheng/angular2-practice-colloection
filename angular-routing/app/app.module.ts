import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Routes, RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { CrisisListComponent }  from './crisis-list.component';

const routes: Routes = [

];
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HeroesModule
  ],
  declarations: [ 
    AppComponent, 
    CrisisListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
