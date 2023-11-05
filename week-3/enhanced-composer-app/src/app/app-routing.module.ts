// Name: Nolan Berryhill
// File: app-routing.module.ts
// Description: Routing module for the app
// Date: 10/29/2023

// Imports Routes and angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';

// Define routes
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
