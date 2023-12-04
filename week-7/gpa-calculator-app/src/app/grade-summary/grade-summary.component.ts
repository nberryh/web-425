// Name: Nolan Berryhill
// File: grade-summary.component.ts
// Date: 12/03/2023
// Description: TS file for Grade summary

// Imports
import { Component, OnInit, Input } from '@angular/core';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent {

  // Input variables
  @Input() grade!: string;
  @Input() course!: string;

}
