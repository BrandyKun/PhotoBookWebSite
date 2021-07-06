import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from './shared/models/photo';
import { IPagination } from './shared/models/pagination';
import { AccountService } from './account/account.service';
import { custom } from '../assets/scripts/custom.js';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BasketService } from './basket/basket.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Photobook website';
  jwtHelper = new JwtHelperService();


  constructor(private accountService: AccountService, private basketService: BasketService) {}

  ngOnInit() {
    this.loadCurrentUser();
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(()=> {
      }, error => {
        console.log(error);
      })
    }
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
      }, error => {
        console.log(error);
      });
    }
  }
}
