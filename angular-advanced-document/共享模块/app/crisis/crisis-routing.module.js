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
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_detail_component_1 = require('./crisis-detail.component');
var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: crisis_list_component_1.CrisisListComponent },
    { path: ':id', component: crisis_detail_component_1.CrisisDetailComponent }
];
var CrisisRoutingModule = (function () {
    function CrisisRoutingModule() {
    }
    CrisisRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisRoutingModule);
    return CrisisRoutingModule;
}());
exports.CrisisRoutingModule = CrisisRoutingModule;
//# sourceMappingURL=crisis-routing.module.js.map