import { Component, OnInit, ViewChild } from '@angular/core';
import { IAppDetails } from 'src/app/shared/models/appDetails';
import { HomeService } from 'src/app/home/home.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss']
})
export class AboutEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
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

  submitChanges(id: number) {
    this.homeService.updateAppSettings(this.appDetails).subscribe();
    console.log(this.appDetails);
    // this.editForm.reset(this.appDetails);
  }
}
