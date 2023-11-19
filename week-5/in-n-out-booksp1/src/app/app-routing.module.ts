// Name: Nolan Berryhill
// File: app-routing.module.ts
// Date: 11/19/2023
// Description: TS file for app-routing

// Angular specific imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components inport
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Routes for routing paths
const routes: Routes = [
  {
    path:'',
    component: BookListComponent
  },
  {
    path:'book-list',
    component: BookListComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

// Imports and exports for NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Export the AppRoutingModule
export class AppRoutingModule { }
