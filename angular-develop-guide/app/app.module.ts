import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { AppChildComponent }   from './app.child.component';
import { DisplayComponent }   from './display-data/display.component';
import { HeroFormComponent }   from './form/hero-form.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CoreModule }    from './core/core.module';
import { MissionControlComponent }   from './communication/mission-control.component';
import { AstronautComponent }   from './communication/astrounaut.component';
import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, CoreModule, SharedModule],
  declarations: [
    AppComponent, AppChildComponent, 
    DisplayComponent,
    HeroFormComponent,
    MissionControlComponent, AstronautComponent, 
    HeroesComponent 
  ],
  exports: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
