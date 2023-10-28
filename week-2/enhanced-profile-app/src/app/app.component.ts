import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isLoggedIn defined data type
  isLoggedIn: Boolean = true;
  assignment: string = 'Assignment 2.3 - Data Binding';
}

