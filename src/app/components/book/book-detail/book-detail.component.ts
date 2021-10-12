import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> = new Observable();
  index!: number;
  authors!: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.book$ = this.activatedRoute.paramMap
      .pipe(
        tap((params: ParamMap) => this.index = Number(params.get('index'))),
        switchMap((params: ParamMap) => this.bookService.get(Number(params.get('index')))),
        tap((b) => this.authors = b ? b.authors : [])
      )

    // Este exemplo abaixo não vai funcionar pois o componente é criado uma unica vez
    // e tem o seu valor atualizado, que só é capturado através do subscribe
    // console.log(this.activatedRoute.snapshot.params.index);
  }

  goAuthors() {
    let url = `/books/${this.index}/authors`
    this.router.navigate([url, { authors: this.authors }])
  }

  remove() {
    this.bookService.remove(this.index);
    this.router.navigateByUrl('books');
  }
}
