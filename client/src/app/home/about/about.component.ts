import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { IAppDetails } from '../../shared/models/appDetails';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  appDetails:  IAppDetails;

  constructor(private homeService: HomeService) { }
  
  ngOnInit() {
    this.getAppDetails();
  }

  getAppDetails() {
    this.homeService.getAppDetails().subscribe((response)=> {
      this.appDetails = response;
    }, error => {
      console.log(error);
    })
  }


}
