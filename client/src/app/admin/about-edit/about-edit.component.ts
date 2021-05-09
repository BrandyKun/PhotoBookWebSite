import { Component, OnInit, ViewChild } from '@angular/core';
import { IAppDetails } from 'src/app/shared/models/appDetails';
import { HomeService } from 'src/app/home/home.service';
import { NgForm } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss']
})
export class AboutEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  appDetails:  IAppDetails;
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;

  constructor(private homeService: HomeService) { }
  
  ngOnInit() {
    this.getAppDetails();
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
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
