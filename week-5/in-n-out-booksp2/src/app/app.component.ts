// Name: Nolan Berryhill
// File: app.component.ts
// Date: 11/19/2023
// Description: TS file for component

// Angular specific imports
import { Component } from '@angular/core';

// selector, templateUrl, styleUrls for Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Export for AppComponent
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 5.3 - Data Tables";
  }
}
