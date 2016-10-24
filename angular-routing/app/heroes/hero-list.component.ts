import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  // selector: 'my-heroes',
  templateUrl:'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})

export class HeroListComponent implements OnInit{
  heroes: Hero[];
  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.getHeroes();
    this.route.params.forEach((params: Params) => {
        this.selectedId = +params['id'];//把字符串转换成整数
        this.service.getHeroes()
          .then(heroes => this.heroes = heroes);
      });
  }
  isSelected(hero: Hero) { return hero.id === this.selectedId; }

  onSelect(hero: Hero): void {
    // this.selectedHero = hero;
    this.router.navigate(['/hero', hero.id]);
    //示例传多参数
    //this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }
  }
}
