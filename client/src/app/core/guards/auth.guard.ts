import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService,
              private router:Router,
              private toastr: ToastrService) {}
    
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    const roles = next.firstChild.data['roles'] as Array<string>;
    if(roles) {
      const match = this.accountService.rolemathc(roles);
      if (match) {
        return of(true);      
      } else {
        this.router.navigate(['photos']);
        this.toastr.error("You Dont have permissions to access this area");
      }
    }
    return  this.accountService.currentUser$.pipe(
      map(auth => {
        if (auth)
        return true;

        this.router.navigate(['account/login'], {queryParams: {returnUrl: state.url}});
      })
    );
  }
  
}
