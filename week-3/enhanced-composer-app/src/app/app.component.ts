/**
 * Title: app.component.ts
 * Author: Nolan Berryhill
 * Date; 05 November 2023
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.2 - Passing data to Routes, Part 1';
}
