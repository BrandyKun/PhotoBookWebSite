import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from './shared/models/photo';
import { IPagination } from './shared/models/pagination';
import { AccountService } from './account/account.service';
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
      this.accountService.loadCurrentUser(token).subscribe(()=> {
        console.log('loaded user');
      }, error =>
      console.log(error))
    
  };
}
