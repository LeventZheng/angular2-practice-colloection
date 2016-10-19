import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">{{hero.name}}</li>
    </ul>
    <p *ngIf='heroes.length>3'>Here are many heroes!</p>

    <p>{{clickMessage}}</p>
    <button (click)="onClickMe()">Click me!</button>
    
    <input #box (keyup.enter)='onkey(box.value)' (blur)='values=box.value' />
    <p>{{values}}</p>
    `
})
export class AppComponent {
  title:string;
  myHero:Hero;
  heroes:Hero[];

  clickMessage:string;
  onClickMe(){
    this.clickMessage = 'You are my hero!';
  }
  
  values:string = '';
  onkey(value:string){
    this.values += value+ '|'; 
  }

  constructor(){
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }
}
