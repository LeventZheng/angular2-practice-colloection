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
var crisis_service_1 = require('./crisis.service');
var CrisisListComponent = (function () {
    function CrisisListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    CrisisListComponent.prototype.isSelected = function (crisis) {
        return crisis.id === this.selectedId;
    };
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.selectedId = params['id'];
            _this.service.getCrises()
                .then(function (crises) { return _this.crises = crises; });
        });
    };
    CrisisListComponent.prototype.onSelect = function (crisis) {
        this.selectedId = crisis.id;
        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
        //当我们访问 危机中心 时，当前路径是 /crisis-center ，所以我们只要把 危机 的 id 添加到现有路径中就可以了。
        //当路由器导航时，它使用当前路径 /crisis-center 并追加上此 id 。如果 id 为 1 ，结果路径就是 /crisis-center/1
    };
    CrisisListComponent = __decorate([
        core_1.Component({
            template: "\n    <ul class=\"items\">\n      <li *ngFor=\"let crisis of crises\"\n        [class.selected]=\"isSelected(crisis)\"\n        (click)=\"onSelect(crisis)\">\n        <span class=\"badge\">{{crisis.id}}</span> {{crisis.name}}\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService, router_1.ActivatedRoute, router_1.Router])
    ], CrisisListComponent);
    return CrisisListComponent;
}());
exports.CrisisListComponent = CrisisListComponent;
//# sourceMappingURL=crisis-list.component.js.map