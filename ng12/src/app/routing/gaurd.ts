import { Injectable, Injector } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

// No need to inject
// 1. CanActivate
export class RoutingGaurd implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return false;
    }
}

// No need to inject
//2. CanActivateChild
export class RoutingChildGaurd implements CanActivateChild{
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return false;
    }
}


// NOTE: Need to inject  <<<< Here

//3. CanDeActivate
//3.1. create interface and implemet in comp.
export interface CanCompExit{
    deActivate : () => boolean | Observable<boolean>
}
//3.2. 
@Injectable({providedIn:'root'})
export class CompExitGaurd implements CanDeactivate<CanCompExit>{
    canDeactivate(
        component: CanCompExit, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
        {
            const r =  component.deActivate();
            if(!r){alert('CanDeActivate :: Cant exit page after Pop. please refresh')}
            return r;
    }
}
//3.3. update Route config array >> 
// canDeActivate = [CompExitGaurd]