import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class RoleGuard implements CanActivate {
    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.hasUser()){
            return true;
        }
        alert('No tienes permisos')
        return false;
    }
    


    hasUser():boolean{
        return false;
    }
}
