// Name: Nolan Berryhill
// File: home.component.ts
// Date: 12/03/2023
// Description: TS file for Home

// Imports
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//export HomeComponent
export class HomeComponent {

  // Array of selectable grades
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

  // Array of transcript
  transcriptEntries: Array<ITranscript> = [];

  // GPA
  gpaTotal: number = 0;

  // Variable
  transcriptForm!: FormGroup;

  // Constructor
  constructor(private fb: FormBuilder) {
  }

  // OnSubmit function
  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
    this.transcriptEntries.push({
      course: this.form['course'].value,
      grade: this.form['grade'].value
    });

    event.currentTarget.reset();
  }

  // CalculateResults function
  calculateResults() {
    let gpa: number = 0;

    // Loop of letter grade with numeric
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

      // GPA total.
      this.gpaTotal = gpa / this.transcriptEntries.length;
    }
  }

  // Clear function.
  clearEntries(){
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

  // OnInit function
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }

  // Getter form.
  get form() { return this.transcriptForm.controls;}

}
