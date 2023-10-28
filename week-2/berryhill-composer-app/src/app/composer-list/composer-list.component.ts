// Name: Nolan Berryhill
// File: composer-list.module.ts
// Description: TypeScript for the composer list
// Date: 10/29/2023

// import
import { Component, OnInit } from '@angular/core';

// export Composer
export class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export ComposerListComponent
export class ComposerListComponent {
  // Create array
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('John Adams', 'Classical'),
      new Composer('Laurie Anderson', "Modern"),
      new Composer('Trisha Brown', 'Choregrapher'),
      new Composer('dietrich Buxtehude', 'Classical')
    ];
  }


}
