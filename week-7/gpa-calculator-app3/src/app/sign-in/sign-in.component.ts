// Name: Nolan Berryhill
// File: sign-in.component.ts
// Date: 12/03/2023
// Description: TS interface for Sign-In

// Imports
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

// Export SignInComponent
export class SignInComponent {

  signInForm!: FormGroup;
  errorMessage!: string;

  constructor(private router: Router, private CookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: ''
    })
  }

  onSubmit() {
    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signInService.validate(studentId)) {
      this.CookieService.set('session_user', studentId.toString(), 1);
       this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid Student ID';
    }
  }

}
