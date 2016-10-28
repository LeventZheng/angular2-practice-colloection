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
var crisis_service_1 = require('./crisis.service');
var CrisisListComponent = (function () {
    function CrisisListComponent(crisisService) {
        this.crisisService = crisisService;
    }
    CrisisListComponent.prototype.ngOnInit = function () {
        this.crisises = this.crisisService.getCrises();
    };
    CrisisListComponent = __decorate([
        core_1.Component({
            template: "\n    <h3 highlight>Crisis List</h3>\n    <div *ngFor='let crisis of crisises | async'>\n      <a routerLink=\"{{'../' + crisis.id}}\">{{crisis.id}} - {{crisis.name}}</a>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService])
    ], CrisisListComponent);
    return CrisisListComponent;
}());
exports.CrisisListComponent = CrisisListComponent;
//# sourceMappingURL=crisis-list.component.js.map