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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_child_component_1 = require('./app.child.component');
var display_component_1 = require('./display-data/display.component');
var hero_form_component_1 = require('./form/hero-form.component');
var heroes_component_1 = require('./heroes/heroes.component');
var core_module_1 = require('./core/core.module');
var mission_control_component_1 = require('./communication/mission-control.component');
var astrounaut_component_1 = require('./communication/astrounaut.component');
var shared_module_1 = require('./shared/shared.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, core_module_1.CoreModule, shared_module_1.SharedModule],
            declarations: [
                app_component_1.AppComponent, app_child_component_1.AppChildComponent,
                display_component_1.DisplayComponent,
                hero_form_component_1.HeroFormComponent,
                mission_control_component_1.MissionControlComponent, astrounaut_component_1.AstronautComponent,
                heroes_component_1.HeroesComponent
            ],
            exports: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map