import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
