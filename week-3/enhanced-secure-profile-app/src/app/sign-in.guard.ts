// Name: Nolan Berryhill
// File: app.routing.ts
// Description: TypeScript for the app routing
// Date: 11/05/2023

// Import Injector, CanActivate, ActivatedRouteSnapshot, RouterStateShapshot, UrlTree, Router
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

// Creates and export the sign-in guard
@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const isLoggedIn = next.queryParams.isLoggedIn === 'true';

      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }

}
