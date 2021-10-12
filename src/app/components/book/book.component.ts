import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]> = new Observable<Book[]>();

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.books$ = this.bookService.books$;
  }
}
