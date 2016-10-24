// Keep the Input import for now, we'll remove it later:
import { Component,  OnInit}       from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }                     from './hero';
import { HeroService }              from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
  // @Input()
  hero:Hero;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,  
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service.getHero(id)
        .then(hero => this.hero = hero);
    });
  }  

  save(): void {
    this.service.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
