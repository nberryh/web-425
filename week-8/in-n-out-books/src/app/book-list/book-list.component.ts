// Name: Nolan Berryhill
// File: book-list.component.ts
// Date: 11/19/2023
// Description: TS file for book list

// Angular specific imports
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailDialogComponent } from '../book-detail-dialog/book-detail-dialog.component';
import { HttpClient } from '@angular/common/http';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Export for BookListComponent
export class BookListComponent {

  books: IBook[] = [];
  isLoading = true;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];

  constructor(private booksService: BooksService, private dialog: MatDialog, private http: HttpClient) {
    this.getBooks();
  }

  private getBooks() {
    this.booksService.getBooks().subscribe(
      (data) => {
        this.books = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching books:', error);
        this.isLoading = false;
      }
    );
  }

  showBookDetails(isbn: string) {
    // Fetch book details
    const book = this.books.find((b) => b.isbn === isbn);

    if (book) {
      const dialogRef = this.dialog.open(BookDetailDialogComponent, {
        data: { book: book },
        disableClose: true,
        width: '800px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'confirm') {

        }
      })
    };

  }
}
