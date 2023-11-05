// Name: Nolan Berryhill
// File: home.component.ts
// Description: TypeScript for the home component
// Date: 11/05/2023

// Import Component, ActivatedRoute
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Creates and export the home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assignment: string = 'Exercise 3.3 - Passing Data to Routes, Part 2';

  isLoggedIn: Boolean;
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
