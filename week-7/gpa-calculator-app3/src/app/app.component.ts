// Name: Nolan Berryhill
// File: app.component.ts
// Date: 12/03/2023
// Description: TS file for component

// Angular specific imports
import { Component } from '@angular/core';

// selector, templateUrl, styleUrls for Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export for AppComponent
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1";
  }
}
