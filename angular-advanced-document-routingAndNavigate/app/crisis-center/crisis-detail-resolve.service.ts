import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolve implements Resolve<Crisis> {

  constructor(private cs: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Crisis>|boolean {
    let id = +route.params['id'];
    return this.cs.getCrisis(id).then(crisis => {
      if (crisis) {
        return crisis;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return false;
      }
    });
  }

}

//处理 Crisis 数据读取和在 Crisis 不存在时将用户导航出去