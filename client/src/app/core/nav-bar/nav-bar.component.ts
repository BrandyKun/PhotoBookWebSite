import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUser$: Observable<IUser>

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }

  logOut(){
    this.accountService.logout();
  }
}
