// Name: Nolan Berryhill
// File: composer.class.ts
// Description: TypeScript for the composer class
// Date: 11/05/2023

// Import IComposer
import { IComposer } from './composer.interface';

// export Composer
export class Composer {
  composers: Array<IComposer>;

  // Create the composers list
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 101, fullName: "John Adams", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Laurie Anderson", genre: "Modern"
      },
      {
        composerId: 103, fullName: "Trisha Brown", genre: "Choregrapher"
      },
      {
        composerId: 104, fullName: "dietrich Buxtehude", genre: "Classical"
      },
    ]
  }

  // Create getComposers for return
  getComposers() {
    return this.composers;
  }

  // Gives limits for getComposers
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
