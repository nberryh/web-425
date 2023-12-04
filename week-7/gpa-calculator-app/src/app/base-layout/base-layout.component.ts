// Name: Nolan Berryhill
// File: base-layout.module.ts
// Date: 12/03/2023
// Description: TS file for base-layout

// Angular specific imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})

// Export BaseLayoutComponent
export class BaseLayoutComponent {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator'; }

        signOut() {
          this.cookieService.deleteAll();
          this.router.navigate(['/session/sign-in']);
        }
}
