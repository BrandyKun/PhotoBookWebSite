import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from 'src/app/shared/models/photo';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {
  viewerOpen = false;
  @Input() photo: IPhoto;

  masonryImages = [];
  limit = 15;
  
  photos: IPhoto[];

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    
    
  }

}
