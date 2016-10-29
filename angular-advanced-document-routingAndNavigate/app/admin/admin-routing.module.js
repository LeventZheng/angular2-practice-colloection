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
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var admin_dashboard_component_1 = require('./admin-dashboard.component');
var manage_crises_component_1 = require('./manage-crises.component');
var manage_heroes_component_1 = require('./manage-heroes.component');
var auth_guard_service_1 = require('../auth-guard.service');
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: admin_component_1.AdminComponent,
                        canActivate: [auth_guard_service_1.AuthGuard],
                        children: [
                            {
                                path: '',
                                canActivateChild: [auth_guard_service_1.AuthGuard],
                                children: [
                                    { path: 'crises', component: manage_crises_component_1.ManageCrisesComponent },
                                    { path: 'heroes', component: manage_heroes_component_1.ManageHeroesComponent },
                                    { path: '', component: admin_dashboard_component_1.AdminDashboardComponent }
                                ]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
// AdminComponent 下的子路由，有一个带 path 和 children 的子路由，但它没有使用 component 
// 这并不是配置中的失误，而是在使用 无组件 路由。
// 这样就不需要另一个仅用来分组路由的组件
// 同时也允许我们守卫子路由
//canActivate:引用 AuthGuard守卫路由
//canActivateChild守卫子路由 
//# sourceMappingURL=admin-routing.module.js.map