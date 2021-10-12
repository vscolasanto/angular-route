import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';

import { BookComponent } from './components/book/book.component';
import { DvdComponent } from './components/dvd/dvd.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DvdDetailComponent } from './components/dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './components/dvd/dvd-form/dvd-form.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './components/book/book-authors/book-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    NotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
