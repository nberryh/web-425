// Name: Nolan Berryhill
// File: home.component.ts
// Date: 12/03/2023
// Description: TS file for Home

// Imports
import { Component } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  // Transcript variable
  transcriptEntry!: ITranscript

  // Array of selectable grades letters
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

  // Array of transcript
  transcriptEntries: Array<ITranscript> = [];

  // GPA total variable
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }
  // Save entry
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;

  }

  // Calculate Results
  calculateResults() {
    let gpa: number = 0;

    // Loop of calculate GPA
    for (let entry of this.transcriptEntries){
      switch(entry.grade) {
      case 'A': gpa += 4.0; break;
      case 'A-': gpa += 3.7; break;
      case 'B+': gpa += 3.33; break;
      case 'B': gpa += 3.0; break;
      case 'B-': gpa += 2.7; break;
      case 'C+': gpa += 2.3; break;
      case 'C': gpa += 2.0; break;
      case 'C-': gpa += 1.7; break;
      case 'D+': gpa += 1.3; break;
      case 'D': gpa += 1.0; break;
      case 'D-': gpa += 0.7; break;
      case 'F': gpa += 0; break;
      }

      // Calculate GPA
      this.gpaTotal = gpa / this.transcriptEntries.length;
    }
  }

  // Clear entries
  clearEntries(){
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
