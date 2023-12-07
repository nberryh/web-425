// Name: Nolan Berryhill
// File: book.service.ts
// Date: 12/10/2023
// Description: TS file for book service

// Imports interfaces
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

// providedIn for injectable
@Injectable({
  providedIn: 'root'
})

// export BooksService
export class BooksService {

  private openLibraryUrl = 'https://openlibrary.org/api/books';
  private isbn: string[] = ['0345339681', '0261103571', '9780593099322', '9780261102361', '9780261102378', '9780590302715', '9780316769532', '9780743273565', '9780590405959'];

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    const params = new HttpParams()
    .append('bibkeys', `ISBN:${this.isbn.join(',')}`)
    .append('format', 'json')
    .append('jscmd', 'details');

    return this.http.get<IBook[]>(this.openLibraryUrl, { params });
  }
}
