// Name: Nolan Berryhill
// File: app.routing.ts
// Description: TypeScript for the app routing
// Date: 11/05/2023

// Import Home, Signin Components and Router
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';

// Export AppRoutes
export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
