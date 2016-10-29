import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes.component';

import { AuthGuard }                from '../auth-guard.service';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],  //在无组件路由中添加而不是在子路由中挨个添加守卫
            children: [
              { path: 'crises', component: ManageCrisesComponent },
              { path: 'heroes', component: ManageHeroesComponent },
              { path: '', component: AdminDashboardComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}

// AdminComponent 下的子路由，有一个带 path 和 children 的子路由，但它没有使用 component 
// 这并不是配置中的失误，而是在使用 无组件 路由。
// 这样就不需要另一个仅用来分组路由的组件
// 同时也允许我们守卫子路由

//canActivate:引用 AuthGuard守卫路由
//canActivateChild守卫子路由