"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            template: "\n    <h3>ADMIN</h3>\n    <nav>\n      <a routerLink=\"./\" routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n      <a routerLink=\"./crises\" routerLinkActive=\"active\">Manage Crises</a>\n      <a routerLink=\"./heroes\" routerLinkActive=\"active\">Manage Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//由于 AdminModule 中管理仪表盘的 RouterLink 是一个空路径的路由，所以它会匹配到admin特性区的任何路由
//但我们只有在访问 Dashboard 路由时才希望该链接被激活
//所以我们往 Dashboard 这个 routerLink 上添加了另一个绑定 [routerLinkActiveOptions]="{ exact: true }" 
//这样就只有当我们导航到 /admin 这个 URL 时才会激活它，而不会在导航到它的某个子路由时 
//# sourceMappingURL=admin.component.js.map