import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';
@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
    <router-outlet></router-outlet>
    `
})
export class CrisisListComponent implements OnInit { 
   crises: Crisis[];
  public selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this.service.getCrises()
        .then(crises => this.crises = crises);
    });
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    // Navigate with relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
    //当我们访问 危机中心 时，当前路径是 /crisis-center ，所以我们只要把 危机 的 id 添加到现有路径中就可以了。
    //当路由器导航时，它使用当前路径 /crisis-center 并追加上此 id 。如果 id 为 1 ，结果路径就是 /crisis-center/1
  }

}
