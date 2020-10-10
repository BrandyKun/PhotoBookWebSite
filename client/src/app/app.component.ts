import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from './shared/models/photo';
import { IPagination } from './shared/models/pagination';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Photobook website';

  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('.burgermenu').on('click', function () {
        $('.mob-nav').fadeToggle(400);
      });
    });
  }
}
