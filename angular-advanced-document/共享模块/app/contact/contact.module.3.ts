import { NgModule }           from '@angular/core';

import { SharedModule }       from '../shared/shared.module';

// import { AwesomePipe }        from './awesome.pipe';

import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { ContactRoutingModule }   from './contact-routing.module.3';

@NgModule({
  imports:      [ SharedModule, ContactRoutingModule ],
  // declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],在SharedModule中
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }