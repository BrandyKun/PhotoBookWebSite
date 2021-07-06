import { ICollection } from './../shared/models/collection';
import { IPhoto } from './../shared/models/photo';
import { AlbumParams } from './../shared/models/albumParams';
import { BasketService } from './../basket/basket.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from '../album/album.service';
import { ITag } from '../shared/models/tag';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  @Input() photo: IPhoto
  photos: IPhoto[];
  tags: ITag[];
  collections: ICollection[];
  totalCount = 0;
  albumParams = new AlbumParams();
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to high', value: 'priceDesc'},
    {name: 'Price: High to low', value: 'priceAsc'},
    {name: 'Added: Newest to Oldest', value: 'dateDesc'},
    {name: 'Added: Oldest to Newest', value: 'dateAsc'}
  ]


  constructor(private _albumService: AlbumService, private _basketService: BasketService) {
    this.albumParams = this._albumService.getAlbumParams();
   }

  ngOnInit() {
    this.getPhotos();
    this.getTags();
    this.getCollection();
  }

  getTags() {
    this._albumService.getTags().subscribe((response) => {
      this.tags = response;
    },(error) => {
      console.log(error);
    });
  }
  getCollection() {
    this._albumService.getCollections().subscribe((response) => {
      this.collections = response;
    },(error) => {
      console.log(error);
    });
  }

  getPhotos() {
    this._albumService.getPhotos().subscribe((response) => {
        this.photos = response.data;
        this.totalCount = response.count;
      },(error) => {
        console.log(error);
      }
    );
  }

  addItemToBasket(photo: IPhoto) {
    this._basketService.addItemToBasket(photo);
  }

  onPageChanged(event: any) {
    const params = this._albumService.getAlbumParams();
    if (params.pageNumber !== event) {
      params.pageNumber = event;
      this._albumService.setAlbumParams(params);
      this.getPhotos();
    }
  }
  onTagSelected(tagId: number) {
    const params = this._albumService.getAlbumParams();
    params.tagId = tagId;
    params.pageNumber = 1;
    this._albumService.setAlbumParams(params);
    this.getPhotos();
  }

  onCollectionSelected(collectionId: number) {
    const params = this._albumService.getAlbumParams();
    params.collectionId = collectionId;
    params.pageNumber = 1;
    this._albumService.setAlbumParams(params);
    this.getPhotos();
  }

  onSortSelected(sort: string) {
    const params = this._albumService.getAlbumParams();
    params.sort = sort;
    this._albumService.setAlbumParams(params);
    this.getPhotos();
  }

  onSearch() {
    const params = this._albumService.getAlbumParams();
    params.search = this.searchTerm.nativeElement.value;
    params.pageNumber = 1;
    this._albumService.setAlbumParams(params);
    this.getPhotos();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.albumParams = new AlbumParams();
    this._albumService.setAlbumParams(this.albumParams);
    this.getPhotos();
  }

}
