import { PhotoEditComponent } from './../../admin/photo-edit/photo-edit.component';
import { map, mergeMap } from 'rxjs/operators';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhoto } from 'src/app/shared/models/photo';
import { AlbumService } from '../album.service';
import { AlbumParams } from 'src/app/shared/models/albumParams';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-photo-full',
  templateUrl: './photo-full.component.html',
  styleUrls: ['./photo-full.component.scss']
})
export class PhotoFullComponent implements OnInit {
  @Input() open: boolean;
  @Input() photo: IPhoto;
  photos: Array<IPhoto> = [];
  showFlag: boolean = false;
  selectedImageIndex: number = -1;
  albumParams = new AlbumParams();

 

  constructor(private _albumService: AlbumService, private _route: ActivatedRoute, public modalController: ModalController ) { }

  photoId$: Observable<string> = this._route.paramMap.pipe(
    map((paramMap) => paramMap.get("id"))
  );

  photoFull$: Observable<IPhoto> = this.photoId$.pipe(
    mergeMap((id) => 
    this._albumService.getPhoto(parseInt(id)))
  );

  ngOnInit() {
     this.photoFull$.subscribe(photoSet => {
       this.photo = photoSet;
     })
  }

  getPhotos() {
    this._albumService.getPhotos().subscribe((response) => {
      this.photos = response.data;
      // this.albumParams.pageNumber = response.pageIndex;
      // this.albumParams.pageSize = response.pageSize;
      // this.totalCount = response.count;
    },(error) => {
      console.log(error);
    }
  );
  }

  showLightbox(index) {
    this.selectedImageIndex = index;
    this.showFlag = true;
}

closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
}
async openViewer() {
  const modal = await this.modalController.create({
    component: ViewerModalComponent,
    componentProps: {
      src: this.photo.url, // required
      title: 'Silhoutte (Programmatic)', // optional
      text: 'Photo by Mayur Gala on Unsplash', // optional
    },
    cssClass: 'ion-img-viewer', // required
    keyboardClose: true,
    showBackdrop: true,
  });

  return await modal.present();
}
}
