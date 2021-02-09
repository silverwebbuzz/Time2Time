import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage';
import { USER_DETAILS } from 'src/config';
import { CommonService } from '../common/common.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  constructor(public auth: AuthService, private storage: Storage,
    private common: CommonService,
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const checkLogin = this.auth.isAuthenticated();
    console.log('checkLogin',checkLogin);
    if(checkLogin){
      return this.storage.get(USER_DETAILS).then((val)=>{
        console.log('val',val);
        if(val){
          const userpermissionArray = val.userPermission.permission;
          userpermissionArray.push('home');
          const currentMethod = route.data.moduleName;
          if(userpermissionArray.indexOf(currentMethod) !== -1){
            return true;
          }else{
            this.router.navigate(['/error'])
          }
          // if(x == currentMethod){
          //   return true;
          // }else if(x == 'home'){
          //   return true;
          // }else{
          //   return false;
          // }
        }else{
          this.router.navigate(['login']);
        }
      });
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
