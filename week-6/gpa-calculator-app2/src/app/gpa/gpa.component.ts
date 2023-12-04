// Name: Nolan Berryhill
// File: gpa.component.ts
// Date: 12/03/2023
// Description: TS file for GPA

// Imports
import { Component, OnInit, Input } from '@angular/core';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})

export class GpaComponent {

  // GPA input variable.
  @Input() gpaTotal!: number;

}
