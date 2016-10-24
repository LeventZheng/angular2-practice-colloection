import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HeroesModule }         from './heroes/heroes.module'
import { CrisisListComponent }  from './crisis-list.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   { path: 'crisis-center', component: CrisisListComponent },
    //   { path: 'heroes', component: HeroListComponent },
    //   { path:'', component: CrisisListComponent}
    // ])
  ],
  declarations: [
    AppComponent,
    CrisisListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}