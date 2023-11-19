// Name: Nolan Berryhill
// File: app.module.ts
// Date: 11/19/2023
// Description: TS file for app

// Angular specific imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Application specific imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Project specific imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

// Declarations and imports for application
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Export AppModule
export class AppModule { }
