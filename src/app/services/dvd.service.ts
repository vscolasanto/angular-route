import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Dvd } from '../models/dvd.model';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvd$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvd$.asObservable();

  constructor() {
    timer(2000).subscribe(() => {
      return this.dvd$.next([
        { title: 'DVD 1', year: 1970, category: 'Romance' },
        { title: 'DVD 2', year: 1958, category: 'Comedy' },
        { title: 'DVD 3', year: 2012, category: 'Horror' },
        { title: 'DVD 4', year: 2020, category: 'Scifi' },
        { title: 'DVD 5', year: 1999, category: 'Thriller' },
      ]);
    });
  }

  add(dvd: Dvd) {
    this.dvd$.getValue().push(dvd);
  }

  remove(idx: number) {
    let dvds = this.dvd$.getValue();

    if (idx >= 0 && idx < dvds.length) {
      dvds.splice(idx, 1);
    }
  }

  get(idx: number): Observable<Dvd> {
    return this.dvds$.pipe(
      map(dvds => (idx >= 0 && idx < dvds.length) ? dvds[idx] : {} as Dvd),
      delay(1000)
    )
  }
}
