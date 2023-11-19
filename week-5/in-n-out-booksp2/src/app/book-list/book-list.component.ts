// Name: Nolan Berryhill
// File: book-list.component.ts
// Date: 11/19/2023
// Description: TS file for cbook list

// Angular specific imports
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';

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

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
