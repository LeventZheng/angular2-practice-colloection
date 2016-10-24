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
var mission_service_1 = require('./mission.service');
var AstronautComponent = (function () {
    function AstronautComponent(missionService) {
        var _this = this;
        this.missionService = missionService;
        this.mission = '<no mission announced>';
        this.confirmed = false;
        this.announced = false;
        this.subscription = missionService.missionAnnounced$.subscribe(function (mission) {
            _this.mission = mission;
            _this.announced = true;
            _this.confirmed = false;
        });
    }
    AstronautComponent.prototype.confirm = function () {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronaut);
    };
    AstronautComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AstronautComponent.prototype, "astronaut", void 0);
    AstronautComponent = __decorate([
        core_1.Component({
            selector: 'my-astronaut',
            template: "\n    <p>\n      {{astronaut}}: <strong>{{mission}}</strong>\n      <button\n        (click)=\"confirm()\"\n        [disabled]=\"!announced || confirmed\">\n        Confirm\n      </button>\n    </p>\n  "
        }), 
        __metadata('design:paramtypes', [mission_service_1.MissionService])
    ], AstronautComponent);
    return AstronautComponent;
}());
exports.AstronautComponent = AstronautComponent;
//# sourceMappingURL=astrounaut.component.js.map