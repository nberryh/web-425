// Name: Nolan Berryhill
// File: signin.component.ts
// Description: TypeScript for the signin component
// Date: 11/05/2023

// Import Component and Router
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Creates and export the signin component
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
