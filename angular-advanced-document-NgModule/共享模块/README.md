final

`shared.module.ts
让SharedModule来管理这些共享的素材
更新启动特性模块，导入SharedModule

导入 CommonModule ，因为它的组件需要这些公共指令
它声明并导出了工具性的管道、指令和组件类
它重新导出了 CommonModule 和 FormsModule

通过让 SharedModule 重新导出 CommonModule 和 FormsModule 模块，让声明这些组件的模块，
不用再重复导入 CommonModule 、 FormsModule 和 SharedModule 
于是导入 SharedModule 的模块也同时 免费 获得了 CommonModule 和 FormsModule
SharedModule 本身所声明的组件没绑定过 [(ngModel)]，所以不需要先把它列在 imports 中，只是起到合并导入的作用

`共享模块
设计 SharedModule 的目的在于让 常用 的组件、指令和管道可以被用在 很多 其它模块的组件模板中。
TitleComponent 只被 AppComponent 用了一次，因此没必要共享它
UserService ，是靠 Angular 的依赖注入体系实现的，而不是模块体系，不需要被共享
在整个应用程序中， 只应该有一个 UserService 的实例，并且它 只应该有一个 提供商
不要 在共享模块中把应用级单例添加到 providers 中。 否则如果一个惰性加载模块导入了此共享模块，就会导致它自己也生成一份此服务的实例。


`core.module.ts
UserService 和根目录下的其他组件，收集到单独的CoreModule中，并且 只在应用启动时导入它 一次 ， 而不会在其它地方导入它 。
这样可以避免根模块太大、太乱，从而干净整洁
建议把一次性的类收集到CoreModule中，隐藏其实现细节，AppModule导入CoreModule来获取其能力。

记住：根模块是整个应用的总指挥，不应该插手更多细节。


`用 CoreModule.forRoot 配置核心服务
模块的静态方法 forRoot 可以同时提供并配置服务。 它接收一个服务配置对象，并返回一个 ModuleWithProviders 。这个简单对象具有两个属性：
ngModule - CoreModule 类
providers - 配置好的服务提供商
更精确的说法是， Angular 会先累加所有导入的提供商， 然后才 把它们追加到 @NgModule.providers 中。

只在应用的根模块 AppModule 中调用 forRoot 。 如果在其它模块（特别是惰性加载模块）中调用它则违反了设计意图，并会导致运行时错误。
别忘了 导入 其返回结果，而且不要把它添加到 @NgModule 的其它任何列表中。

`禁止多次导入 CoreModule
只有根模块 AppModule 才能导入 CoreModule 。 如果惰性加载模块导入了它，就会 出问题

惰性模块具有自己的注入器，是根注入器的子注入器，而一般情况下父注入器是空