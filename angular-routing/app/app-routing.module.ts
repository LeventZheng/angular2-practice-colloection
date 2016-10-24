import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisListComponent }  from './crisis-list.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'crisis-center', component: CrisisListComponent },
            { path:'', component: CrisisListComponent}
        ]
        , { useHash: true }//回到基于 HashLocationStrategy 的传统方式
    )],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule { }
