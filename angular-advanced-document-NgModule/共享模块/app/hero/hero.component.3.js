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
var hero_service_1 = require('./hero.service');
var user_service_1 = require('../core/user.service');
var HeroComponent = (function () {
    function HeroComponent(userService) {
        this.userName = '';
        this.userName = userService.userName;
    }
    HeroComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Heroes of {{userName}}</h2>\n    <router-outlet></router-outlet>\n  ",
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.3.js.map