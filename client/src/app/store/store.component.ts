import { IPhoto } from './../shared/models/photo';
import { AlbumParams } from './../shared/models/albumParams';
import { BasketService } from './../basket/basket.service';
import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album/album.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @Input() photo: IPhoto
  photos: IPhoto[];
  albumParams = new AlbumParams();


  constructor(private _albumService: AlbumService, private _basketService: BasketService) { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos() {
    this._albumService.getPhotos(this.albumParams).subscribe((response) => {
        this.photos = response;
      },(error) => {
        console.log(error);
      }
    );
  }

  addItemToBasket(photo: IPhoto) {
    this._basketService.addItemToBasket(photo);
  }

}
