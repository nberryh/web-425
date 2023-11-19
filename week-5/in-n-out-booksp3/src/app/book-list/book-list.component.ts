// Name: Nolan Berryhill
// File: book-list.component.ts
// Date: 11/19/2023
// Description: TS file for cbook list

// Angular specific imports
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailDialogComponent } from '../book-detail-dialog/book-detail-dialog.component';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Export for BookListComponent
export class BookListComponent {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook | null = null;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  showBookDetails(isbn: string) {
    // Fetch book details
    const book = this.booksService.getBook(isbn);

    // Open the dialog
    const dialogRef = this.dialog.open(BookDetailDialogComponent, {
      data: { book: book },
      disableClose: true,
      width: '800px',
    });

    // Subscribe to dialog close event
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
