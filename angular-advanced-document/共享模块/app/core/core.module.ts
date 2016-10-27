import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';

import { TitleComponent }    from './title.component';
import { UserService }       from './user.service';
import { UserServiceConfig } from './user.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ TitleComponent ],
  exports:      [ TitleComponent ],
  providers:    [ UserService ]
})
export class CoreModule {
    //禁止多次导入CoreModule方法
    // 这个构造函数会要求 Angular 把 CoreModule 注入自身。这看起来像一个危险的循环注入。
    // 确实，如果 Angular 在 当前 注入器中查阅 CoreModule ，这确实会是一个循环引用。 
    // 不过， @SkipSelf 装饰器意味着“在当前注入器的所有祖先注入器中寻找 CoreModule 。”

    // 如果该构造函数在我们所期望的 AppModule 中运行，就没有任何祖先注入器能够提供 CoreModule 的实例，于是注入器会放弃查找

    // 默认情况下，当注入器找不到想找的提供商时，会抛出一个错误。 但 @Optional 装饰器表示找不到该服务也无所谓。 
    // 于是注入器会返回 null ， parentModule 参数也就被赋成了空值，而构造函数没有任何异常。
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}
