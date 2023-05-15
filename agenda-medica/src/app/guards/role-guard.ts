import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

interface RouteData {
  requiredRoles?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let userRole = sessionStorage.getItem('rol');
    switch(userRole){

        case '1': 
        userRole='paciente';
        break;
        case '2': 
        userRole='medico';
        break;
        case '3': 
        userRole='recepcion';
        break;
        case '4': 
        userRole='admin';
        break;

        default:
        userRole='medico';

    }
    console.log(userRole);
    const requiredRoles = (next.data as RouteData).requiredRoles;
    console.log(requiredRoles);
    
    if (requiredRoles && userRole && requiredRoles.includes(userRole)) {
      return true;
    } else {
        sessionStorage.removeItem('rol');
        sessionStorage.removeItem('id');
      return this.router.parseUrl('/login');
    }
  }
  
}

