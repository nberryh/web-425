// Name: Nolan Berryhill
// File: base-layout.module.ts
// Date: 12/03/2023
// Description: TS file for base-layout

// Angular specific imports
import { Component } from '@angular/core';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})

// Export BaseLayoutComponent
export class BaseLayoutComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
  }
}
