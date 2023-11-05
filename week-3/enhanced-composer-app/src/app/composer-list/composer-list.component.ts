// Name: Nolan Berryhill
// File: composer-list.module.ts
// Description: TypeScript for the composer list
// Date: 10/29/2023

// import
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

// at Component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export ComposerListComponent
export class ComposerListComponent {


  // Create new composers
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }


}
