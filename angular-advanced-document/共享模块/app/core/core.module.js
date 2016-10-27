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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var title_component_1 = require('./title.component');
var user_service_1 = require('./user.service');
var user_service_2 = require('./user.service');
var CoreModule = (function () {
    //禁止多次导入CoreModule方法
    // 这个构造函数会要求 Angular 把 CoreModule 注入自身。这看起来像一个危险的循环注入。
    // 确实，如果 Angular 在 当前 注入器中查阅 CoreModule ，这确实会是一个循环引用。 
    // 不过， @SkipSelf 装饰器意味着“在当前注入器的所有祖先注入器中寻找 CoreModule 。”
    // 如果该构造函数在我们所期望的 AppModule 中运行，就没有任何祖先注入器能够提供 CoreModule 的实例，于是注入器会放弃查找
    // 默认情况下，当注入器找不到想找的提供商时，会抛出一个错误。 但 @Optional 装饰器表示找不到该服务也无所谓。 
    // 于是注入器会返回 null ， parentModule 参数也就被赋成了空值，而构造函数没有任何异常。
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule.forRoot = function (config) {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: user_service_2.UserServiceConfig, useValue: config }
            ]
        };
    };
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [title_component_1.TitleComponent],
            exports: [title_component_1.TitleComponent],
            providers: [user_service_1.UserService]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map