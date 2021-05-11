import { ISelectedFile } from './../../shared/components/file-upload/file-upload.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IAppDetails, IAppDetailsView } from 'src/app/shared/models/appDetails';
import { HomeService } from 'src/app/home/home.service';
import { NgForm, NgModel} from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { Observable, combineLatest, merge  } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss']
})
export class AboutEditComponent implements OnInit, AfterViewInit {
  @ViewChild('editForm') editForm: NgForm;
  @ViewChild('mainLogoUpload', {static: true}) logofileUploadModel: NgModel;
  @ViewChild('aboutImgUpload', {static: true}) aboutImgUploadModel: NgModel;
  @ViewChild('contactImgoUpload', {static: true}) contactImgoUploadModel: NgModel;

  mainLogoPreview$: Observable<string>;
  aboutImgPreview$: Observable<string>;
  contactImgPreview$: Observable<string>;

  appDetails:  IAppDetails;
  uploader:FileUploader;
  contactUploader:FileUploader;
  aboutUploader:FileUploader;
  hasBaseDropZoneOver:boolean;

  PageSettings: IAppDetailsView = {
    companyName: '',
    mainLogoImage: null,
    mainLogoImageUrl: '',
    aboutDescription: '',
    aboutPicture: null,
    aboutPictUrl: '',
    contactPicture: null,
    contactPicUrl: '',
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
  

  constructor(private homeService: HomeService) { }
  appSettings$: Observable<IAppDetails>  = this.homeService.getAppDetails();

  private _getImagePreviewStream(fileUploadNgModel: NgModel): Observable<string> {
    const valueChanges$: Observable<ISelectedFile> = fileUploadNgModel.update,
      validationChanges$:Observable<string> = fileUploadNgModel.statusChanges;

      return combineLatest([valueChanges$, validationChanges$])
        .pipe(
          filter(([value, validationStatus]) => validationStatus === 'VALID'),
          map(([value, validationStatus]) => value ? value.objectUrl: '')
        );
  }
  
  ngOnInit() {
    this.appSettings$.subscribe(settings => {
      this.PageSettings.id = settings.id,
      this.PageSettings.aboutDescription = settings.aboutDescription,
      this.PageSettings.aboutPictUrl = settings.aboutPictureUrl,
      this.PageSettings.companyName = settings.companyName,
      this.PageSettings.contactPicUrl = settings.contactPicUrl,
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

  ngAfterViewInit() {
      const mainLogoControl$ = this._getImagePreviewStream(this.logofileUploadModel);

      this.mainLogoPreview$ = 
        merge(
          this.appSettings$
            .pipe(
                takeUntil(mainLogoControl$),
                map<IAppDetails, string>(x => x.mainLogoImageUrl)
            ),
            mainLogoControl$
        );
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  submitChanges(id: number) {
    this.homeService.updateAppSettings(this.appDetails).subscribe();
    console.log(this.appDetails);
    // this.editForm.reset(this.appDetails);
  }
}
