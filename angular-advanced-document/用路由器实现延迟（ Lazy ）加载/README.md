·app.module.ts:
该模块仍然要导入 ContactModule 模块，以便在应用启动时加载它的路由和组件

该模块不用导入 HeroModule 或 CrisisModule 。 它们将在用户导航到其中的某个路由时，被异步获取并加载。

import AppRoutingModule 模块，该模块用来处理应用路由


·app-routing.module.3.ts:
CrisisModule模块和HeroModule模块的懒加载

惰性加载模块的位置是 字符串 而不是 类型 。 在本应用中，该字符串同时标记出了模块 文件 和模块 类 ，两者用 # 分隔开。

·AppRoutingModule 仅仅 是给应用程序的 根 模块使用的。

永远不要在特性路由模块中调用 RouterModule.forRoot ！

总是在特性路由模块中调用 RouterModule.forChild 。

·contatc.module.ts的改动：

1.它从 contact-routing.module.ts 中导入了 ContactRoutingModule 对象

2.它不再导出 ContactComponent

现在我们改成了通过路由器导航到 ContactComponent ，所以也就没有理由公开它了。
它也不再需要选择器（ selector ）。 也没有模板会再引用 ContactComponent 。它从 AppComponent 模板 中彻底消失了。