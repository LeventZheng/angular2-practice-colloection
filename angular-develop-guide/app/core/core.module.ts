import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@NgModule({
  imports: [
    CommonModule // we use ngFor
  ],
  exports: [NavComponent, SpinnerComponent],
  declarations: [NavComponent, SpinnerComponent],
  providers: [LoggerService, SpinnerService]
  // exports: [NavComponent],
  // declarations: [NavComponent, SpinnerComponent],
  // providers: [LoggerService ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
