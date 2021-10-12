import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DvdComponent } from './components/dvd/dvd.component';
import { BookComponent } from './components/book/book.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DvdDetailComponent } from './components/dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './components/dvd/dvd-form/dvd-form.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './components/book/book-authors/book-authors.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  {
    path: 'books',
    component: BookComponent,
    children: [
      {
        path: ':index',
        component: BookDetailComponent,
        children: [
          { path: 'authors', component: BookAuthorsComponent }
        ]
      },
    ]
  },
  {
    path: 'electronics',
    loadChildren: () =>
    import('./electronics/electronics.module').then(
      (m) => m.ElectronicsModule
    ),
  },
  { path: '', pathMatch: 'full', redirectTo: '/dvds' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
