import { Component, OnInit } from '@angular/core';
import { FilterTextService } from '../shared/filter-text/filter-text.service';
@Component({
  moduleId: module.id,
  selector: 'toh-heroes',
  templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {
  filteredHeroes: any[] = [];
  constructor(private filterService: FilterTextService) { }
  heroes = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
  ];
  filterChanged(searchText: string) {
    this.filteredHeroes = this.filterService.filter(searchText, ['id', 'name'], this.heroes);
  }
  ngOnInit() {
    this.filteredHeroes = this.heroes;
  }
}
