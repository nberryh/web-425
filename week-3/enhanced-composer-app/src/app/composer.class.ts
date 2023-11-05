import { IComposer } from './composer.interface';

// export Composer
export class Composer {
  composers: Array<IComposer>;

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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
