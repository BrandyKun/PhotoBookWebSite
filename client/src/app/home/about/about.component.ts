import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { IAppDetails } from '../../shared/models/appDetails';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  appDetails:  IAppDetails;

  constructor(private homeService: HomeService) { }
  appSettings$: Observable<IAppDetails> = this.homeService.getAppDetails();

  PageSettings: IAppDetails = {
    companyName: '',
    mainLogoImageUrl: '',
    aboutDescription: '',
    aboutPictureUrl:'',
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
  
  ngOnInit() {
    this.appSettings$.subscribe(settings => {
      this.PageSettings.id = settings.id,
        this.PageSettings.aboutDescription = settings.aboutDescription,
        this.PageSettings.aboutPictureUrl = settings.aboutPictureUrl,
        this.PageSettings.companyName = settings.companyName,
        this.PageSettings.contactPictureUrl = settings.contactPictureUrl,
        this.PageSettings.contactEmail = settings.contactEmail,
        this.PageSettings.contactNumber = settings.contactNumber,
        this.PageSettings.mainLogoImageUrl = settings.mainLogoImageUrl,
        this.PageSettings.instagram = settings.instagram,
        this.PageSettings.facebookLink = settings.facebookLink,
        this.PageSettings.linkedIn = settings.linkedIn,
        this.PageSettings.twitter = settings.twitter,
        this.PageSettings.pinterest = settings.pinterest,
        this.PageSettings.favIconUrl = settings.favIconUrl
    });
  }

  getAppDetails() {
    this.homeService.getAppDetails().subscribe((response)=> {
      this.appDetails = response;
    }, error => {
      console.log(error);
    })
  }


}
