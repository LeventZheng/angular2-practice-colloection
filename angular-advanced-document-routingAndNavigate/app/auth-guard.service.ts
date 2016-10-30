import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,   //ActivatedRouteSnapshot 包含了 即将 被激活的路由
  RouterStateSnapshot,      //RouterStateSnapshot 包含了该应用 即将 到达的状态
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  
  //守卫路由，也支持返回observable或promise以支持异步检查
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  //守卫子路由，也支持返回observable或promise以支持异步检查
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}

//RouterStateSnapshot.url 保存用户来自的 URL 并让路由器导航到登录页。 
//这间接导致路由器自动中止了这次导航，我们返回 false 并不是必须的，但这样可以更清楚的表达意图

// CanLoad 守卫来保证只在用户已经登录并尝试访问管理特性区时才加载一次 AdminModule
//