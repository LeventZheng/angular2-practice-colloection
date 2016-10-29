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
var dialog_service_1 = require('../dialog.service');
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, dialogService) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
    }
    Object.defineProperty(CrisisDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrisisDetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrisisDetailComponent.prototype, "position", {
        get: function () {
            return 'absolute';
        },
        enumerable: true,
        configurable: true
    });
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.editName = data.crisis.name;
            _this.crisis = data.crisis;
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
        //使用 Router 进行相对导航
        //使用 ActivatedRoute 来告诉路由器我们正在 RouterState(激活路由组成的树) 中的什么地方
        //为 router.navigate 方法中 链接参数数组 后的对象型参数指定 relativeTo 属性
        //路由器就会把我们的导航信息和当前 URL 合并在一起
        //当navigate改为navigateByUrl 方法时，导航 总是 绝对的
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "position", null);
    CrisisDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <div *ngIf=\"crisis\">\n    <h3>\"{{editName}}\"</h3>\n    <div>\n      <label>Id: </label>{{crisis.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"save()\">Save</button>\n      <button (click)=\"cancel()\">Cancel</button>\n    </p>\n  </div>\n  ",
            styles: ['input {width: 20em}'],
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.2s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.5s ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateY(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, dialog_service_1.DialogService])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map