// Name: Nolan Berryhill
// File: composer-list.component.ts
// Description: TypeScript for the composer list
// Date: 11/11/2023

// import component, IComposer, ComposerService
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

// Creates and export the composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export ComposerListComponent
export class ComposerListComponent implements OnInit {

  //Interface from IComposer
  composers: Array<IComposer>;

  // Create constructor for composers
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }


}
