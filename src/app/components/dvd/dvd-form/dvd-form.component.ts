import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.scss']
})
export class DvdFormComponent implements OnInit {

  formDvd = this.fb.group({
    title: [''],
    year: [''],
    category: ['']
  })

  constructor(
    private fb: FormBuilder,
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.dvdService.add(this.formDvd.value);
    this.router.navigate(['/dvds']);
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }
}
