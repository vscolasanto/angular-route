import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Dvd } from '../../../models/dvd.model';
import { DvdService } from '../../../services/dvd.service';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.scss']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd> = new Observable<Dvd>();
  title: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dvdService: DvdService
  ) { }

  ngOnInit(): void {
    let idx = Number(this.activatedRoute.snapshot.params.index);
    this.dvd$ = this.dvdService.get(idx);

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      params.has('title') && (this.title = params.get('title') || '')
    })
    // Se o router estiver na mesma tela, o snapshot não atualizará caso mude o index!
    // console.log('index', this.activatedRoute.snapshot.params.index)
    // console.log("index", this.activatedRoute.snapshot.paramMap.get('index'))

    // Com o subscribe, caso a navegação esteja na mesma tela, a alteração sempre refletirá
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log('index', params.get('index'))
    // })
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }
}
