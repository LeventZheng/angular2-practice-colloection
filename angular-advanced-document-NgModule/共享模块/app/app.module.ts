import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import { AppComponent }       from './app.component';

/* Contact Imports */
import { ContactModule }      from './contact/contact.module.3';
import { CoreModule }         from './core/core.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module.3';

@NgModule({
  imports:      [
    BrowserModule, 
    ContactModule, 
    AppRoutingModule, 
    CoreModule.forRoot({userName: 'Miss Marple'}) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }