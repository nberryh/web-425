import { Component } from '@angular/core';
// Name: Nolan Berryhill
// File: app-routing.module.ts
// Description: Routing module for the my-app
// Date: 10/29/2023

// Imports NgModules and Routes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Define routes
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
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
