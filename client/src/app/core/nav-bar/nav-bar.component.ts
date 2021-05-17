
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

  pageSettings: IAppDetails = {
    companyName: '',
    mainLogoImageUrl: '',
    aboutDescription: '',
    aboutPictureUrl: '',
    contactPictureUrl: '',
    favIconUrl: '',
    facebookLink: '',
    instagram: '',
    pinterest: '',
    linkedIn: '',
    twitter: '',
    contactEmail: '',
    contactNumber: '',
    id: 1,
  }
  
  constructor(private accountService: AccountService, private router: Router, private homeService: HomeService) { }
  appSettings$: Observable<IAppDetails> = this.homeService.getAppDetails();

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
    this.appSettings$.subscribe(settings => {
      this.pageSettings.id = settings.id,
        this.pageSettings.aboutDescription = settings.aboutDescription,
        this.pageSettings.aboutPictureUrl = settings.aboutPictureUrl,
        this.pageSettings.companyName = settings.companyName,
        this.pageSettings.contactPictureUrl = settings.contactPictureUrl,
        this.pageSettings.contactEmail = settings.contactEmail,
        this.pageSettings.contactNumber = settings.contactNumber,
        this.pageSettings.mainLogoImageUrl = settings.mainLogoImageUrl,
        this.pageSettings.instagram = settings.instagram,
        this.pageSettings.facebookLink = settings.facebookLink,
        this.pageSettings.linkedIn = settings.linkedIn,
        this.pageSettings.twitter = settings.twitter,
        this.pageSettings.pinterest = settings.pinterest,
        this.pageSettings.favIconUrl = settings.favIconUrl
    });
  }

  logOut(){
    this.accountService.logout();
  }
}
