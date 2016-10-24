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
var filter_text_service_1 = require('../shared/filter-text/filter-text.service');
var HeroesComponent = (function () {
    function HeroesComponent(filterService) {
        this.filterService = filterService;
        this.filteredHeroes = [];
        this.heroes = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' },
            { id: 4, name: 'Tornado' }
        ];
    }
    HeroesComponent.prototype.filterChanged = function (searchText) {
        this.filteredHeroes = this.filterService.filter(searchText, ['id', 'name'], this.heroes);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.filteredHeroes = this.heroes;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toh-heroes',
            templateUrl: 'heroes.component.html'
        }), 
        __metadata('design:paramtypes', [filter_text_service_1.FilterTextService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map