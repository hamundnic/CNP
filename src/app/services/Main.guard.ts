import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
// tslint:disable-next-line: import-spacing
import {MainServicesService} from './main-services.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class AdminGuard implements CanActivate {
  isAutenticate: boolean;
Auth(isAuth: boolean){


  this.isAutenticate = isAuth;
  return this.isAutenticate;
}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      
    return this.isAutenticate;
  }

}

export class RegisterGuard implements CanActivate {
  isAutenticate: boolean;
  Auth(isAuth: boolean){
    return this.isAutenticate = isAuth;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return this.isAutenticate;
  }
  
}

export class SchoolGuard implements CanActivate {
  isAutenticate: boolean;
  Auth(isAuth: boolean){
    return this.isAutenticate = isAuth;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return this.isAutenticate;
  }
  
}

export class HumanResorcesGuard implements CanActivate {
  isAutenticate: boolean;
  Auth(isAuth: boolean){
    return this.isAutenticate = isAuth;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return this.isAutenticate;
  }
  
}

export class SupervisionGuard implements CanActivate {
  isAutenticate: boolean;
  Auth(isAuth: boolean){
    return this.isAutenticate = isAuth;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return this.isAutenticate;
  }
  
}

export class TeachersGuard implements CanActivate {
  isAutenticate: boolean;
  Auth(isAuth: boolean){
    return this.isAutenticate = isAuth;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return this.isAutenticate;
  }
  
}

export class SettingsGuard implements CanActivate {
  isAutenticate: boolean;
  Auth(isAuth: boolean){
    return this.isAutenticate = isAuth;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return this.isAutenticate;
  }
  
}


