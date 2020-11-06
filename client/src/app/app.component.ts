import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from './shared/models/photo';
import { IPagination } from './shared/models/pagination';
import { AccountService } from './account/account.service';
import { custom } from '../assets/scripts/custom.js';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Photobook website';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    if (token ) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log('loaded user');
      }, error => {
        console.log(error);
      });
    }
  }
}
