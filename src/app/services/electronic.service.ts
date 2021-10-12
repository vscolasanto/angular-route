import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Electronic } from '../models/electronic';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private electronic$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronic$.asObservable();

  constructor() {
    timer(1000).subscribe(() => {
      return this.electronic$.next([
        { name: 'electronic 1', brand: 'any brand', description: 'any description', price: 71.8 },
        { name: 'electronic 2', brand: 'any brand', description: 'any description', price: 151.8 },
        { name: 'electronic 3', brand: 'any brand', description: 'any description', price: 11.8 },
        { name: 'electronic 4', brand: 'any brand', description: 'any description', price: 345.2 },
        { name: 'electronic 5', brand: 'any brand', description: 'any description', price: 33.7 },
      ]);
    });
  }

  add(electronic: Electronic) {
    this.electronic$.getValue().push(electronic);
  }

  remove(idx: number) {
    let electronics = this.electronic$.getValue();

    if (idx >= 0 && idx < electronics.length) {
      electronics.splice(idx, 1);
    }
  }

  get(idx: number): Observable<Electronic> {
    return this.electronics$.pipe(
      map(electronics => (idx >= 0 && idx < electronics.length) ? electronics[idx] : {} as Electronic),
      delay(1000)
    )
  }}
