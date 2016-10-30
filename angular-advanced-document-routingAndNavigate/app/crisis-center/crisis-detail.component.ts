import { Component, OnInit, HostBinding,
         trigger, transition,
         animate, style, state } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Crisis }         from './crisis.service';
import { DialogService }  from '../dialog.service';

@Component({
    template: `
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) { }

    ngOnInit() { 
        this.route.data.forEach((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        });
    }
    
    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    canDeactivate(): Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
        //使用 Router 进行相对导航
        //使用 ActivatedRoute 来告诉路由器我们正在 RouterState(激活路由组成的树) 中的什么地方
        //为 router.navigate 方法中 链接参数数组 后的对象型参数指定 relativeTo 属性
        //路由器就会把我们的导航信息和当前 URL 合并在一起
        //当navigate改为navigateByUrl 方法时，导航 总是 绝对的

    }
}