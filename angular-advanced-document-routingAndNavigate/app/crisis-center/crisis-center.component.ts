import { Component } from '@angular/core';

@Component({
    template:  `
        <h2>CRISIS CENTER</h2>
        <router-outlet></router-outlet>
    `
})
export class CrisisCenterComponent {}

//这是危机中心特性区的根组件，而AppComponent是整个应用的根组件
//它没有内容没有链接，只有一个用来存放危机中心子视图的<router-outlet>指令
//该组件不需要选择器，因为只能通过外部导航到它
