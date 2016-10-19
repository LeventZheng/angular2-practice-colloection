import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],       //让我们的应用能使用模板驱动表单的所有特性，包括 ngModel
  declarations: [ AppComponent, HeroFormComponent ],  //把 HeroFormComponent 添加到 ngModule 装饰器的 declarations 列表中。这让 HeroFormComponent 组件在本模块中随处都可访问
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
