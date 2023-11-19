// Name: Nolan Berryhill
// File: book.service.ts
// Date: 11/19/2023
// Description: TS file for book service

// Imports interfaces
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';
import { IBook } from './book.interface';

// providedIn for injectable
@Injectable({
  providedIn: 'root'
})

// export BooksService
export class BooksService {

  books: Array<IBook>;

  // constructor for this.book
  constructor() {
    this.books = [
      {
        isbn: '0333987234',
        title: 'Storm Front',
        description: 'First story of the dredsen files',
        numOfPages: 355,
        authors: ['Jim Butcher']
      },
      {
        isbn: '0368797214',
        title: 'Proven Guilty',
        description: 'Harry Dredsen must save his friend daughters life',
        numOfPages: 406,
        authors: ['Jim Butcher']
      },
      {
        isbn: '0333945897',
        title: 'Fool Moon',
        description: 'Harry Dredsen fights against the evil forces of a full moon',
        numOfPages: 432,
        authors: ['Jim Butcher']
      },
      {
        isbn: '03374895234',
        title: 'Peace Talks',
        description: 'Can the supernatural force have a productive sit down',
        numOfPages: 348,
        authors: ['Jim Butcher']
      },
      {
        isbn: '8794987234',
        title: 'Battleground',
        description: 'The peace is broken',
        numOfPages: 576,
        authors: ['Jim Butcher']
      },
    ]
  }

  // getBooks observable
  getBooks(): Observable<IBook[]> {
    return of (this.books);
  }

  // getBook array
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
