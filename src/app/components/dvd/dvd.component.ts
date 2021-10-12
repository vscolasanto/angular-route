import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd.model';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]> = new Observable<Dvd[]>();

  constructor(
    private router: Router,
    private dvdService: DvdService
  ) { }

  ngOnInit(): void {
    this.getAllDvds();
  }

  getAllDvds() {
    this.dvds$ = this.dvdService.dvds$;
  }

  goDetails(index: number, dvd: Dvd) {
    this.router.navigate([`dvds/${index}`, { title: dvd.title }])
  }

  removeDvd(index: number) {
    this.dvdService.remove(index);
  }
}
