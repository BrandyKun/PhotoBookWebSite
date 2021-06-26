import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { AlbumService } from './album.service';
import { IPhoto } from '../shared/models/photo';

import { AlbumParams } from '../shared/models/albumParams';
import { ITag } from '../shared/models/tag';
import { MasonryOptions } from 'ng-masonry-grid';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  viewerOpen = false;
  photos: IPhoto[];
  tags: ITag[];
  albumParams = new AlbumParams();
  totalCount: number;
  sortOption = [
    {name: 'Alphabaetical', value: 'name'},
    {name: 'Oldest to Newest', value: 'dateAsc'},
    {name: 'Newest to Oldest', value: 'dateDesc'}  
  ];

  public myOptions: MasonryOptions = {
    transitionDuration: '1.s'
  };


  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.getPhotos();

  }

  getPhotos() {
    this.albumService.getPhotos(this.albumParams).subscribe((response) => {
        this.photos = response;
        console.log(this.photos);
        // this.albumParams.pageNumber = response.pageIndex;
        // this.albumParams.pageSize = response.pageSize;
        // this.totalCount = response.count;
      },(error) => {
        console.log(error);
      }
    );
  }

  getTags() {
    this.albumService.getTags().subscribe((response) => {
        this.tags = response;
      },(error) => {
        console.log(error);
      }
    );
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

  // onPageChanged(event:any) {
  //   this.albumParams.pageNumber = event.page;
  //   this.getPhotos();
  // }

}
