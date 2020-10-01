import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { AlbumService } from './album.service';
import { IPhoto } from '../shared/models/photo';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  masonryImages = [];
  limit = 15;
  
  photos: IPhoto[];

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getPhotos().subscribe((response) => {
      this.photos = response.data;
    });
    this.masonryImages = this.photos;
  }

  removeItem(id: number) {
    // if (this.photos) {
    //   const elem = document.querySelector("#"+id);
    //   this._removeItemSubscription = this.photos.removeItem(elem)
    //       .subscribe((item: MasonryGridItem) => {
    //        if (item) {
    //         let id = item.element.getAttribute('id');
    //         let index = id.split('-')[2];
    //         this.masonryItems.splice(index, 1);
    //        }
          // });
    }
}
