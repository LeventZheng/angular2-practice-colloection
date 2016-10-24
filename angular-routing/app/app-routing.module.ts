import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './heroes/hero-list.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
      { path: 'crisis-center', component: CrisisListComponent },
      { path: 'heroes', component: HeroListComponent }
    ]
    , { useHash: true }//回到基于 HashLocationStrategy 的传统方式
    )
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule { }
