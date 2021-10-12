import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private book$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.book$.asObservable();

  constructor() {
    timer(1000).subscribe(() => {
      return this.book$.next([
        { title: 'Book 1', pages: 200, authors: ['Author'] },
        { title: 'Book 2', pages: 434, authors: ['Author'] },
        { title: 'Book 3', pages: 631, authors: ['John Doe'] },
        { title: 'Book 4', pages: 770, authors: ['Nicole'] },
        { title: 'Book 5', pages: 245, authors: ['John Doe', 'Agatha'] },
      ]);
    });
  }

  add(book: Book) {
    this.book$.getValue().push(book);
  }

  remove(idx: number) {
    let books = this.book$.getValue();

    if (idx >= 0 && idx < books.length) {
      books.splice(idx, 1);
    }
  }

  get(idx: number): Observable<Book> {
    return this.books$.pipe(
      map(books => (idx >= 0 && idx < books.length) ? books[idx] : {} as Book),
    )
  }
}
