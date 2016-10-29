import { Component } from '@angular/core';
@Component({
  template:  `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./crises" routerLinkActive="active">Manage Crises</a>
      <a routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}

//由于 AdminModule 中管理仪表盘的 RouterLink 是一个空路径的路由，所以它会匹配到admin特性区的任何路由
//但我们只有在访问 Dashboard 路由时才希望该链接被激活
//所以我们往 Dashboard 这个 routerLink 上添加了另一个绑定 [routerLinkActiveOptions]="{ exact: true }" 
//这样就只有当我们导航到 /admin 这个 URL 时才会激活它，而不会在导航到它的某个子路由时