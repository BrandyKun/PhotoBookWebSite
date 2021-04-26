
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';
import { Router } from '@angular/router';
import { IAppDetails } from 'src/app/shared/models/appDetails';
import { HomeService } from 'src/app/home/home.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUser$: Observable<IUser>
  appDetails:  IAppDetails;
  
  constructor(private accountService: AccountService, private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
    this.getAppDetails();
  }

  logOut(){
    this.accountService.logout();
  }
  getAppDetails() {
    this.homeService.getAppDetails().subscribe((response)=> {
      this.appDetails = response;
    }, error => {
      console.log(error);
    })
  }
}
