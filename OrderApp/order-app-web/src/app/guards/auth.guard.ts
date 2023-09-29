import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../service/users/users.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  userIsInvalid: boolean

  constructor(private readonly usersService: UsersService, private readonly router: Router){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.usersService.invalidUser.subscribe((data)=> {
      console.log(data)
  
      this.userIsInvalid = data
    })
  if(!this.userIsInvalid){
    return true
  } else {
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
    console.log(this.userIsInvalid)
    this.usersService.userLogout()
    return false 
  }


  }

}