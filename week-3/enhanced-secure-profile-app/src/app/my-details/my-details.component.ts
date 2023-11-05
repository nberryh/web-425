// Name: Nolan Berryhill
// File: my-details.component.ts
// Description: Details components file
// Date: 10/23/2023

// Import angular
import { Component, OnInit } from '@angular/core';

// Typescript person class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript', '#2023', '#CodingWithAngular', '#ngOmaha'
  ];

  // Person Class Constructor
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

// Export
export class MyDetailsComponent {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Nolan Berryhill", "Pizza", "Yellow");
  }
}
