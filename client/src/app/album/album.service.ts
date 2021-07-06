import { ICollection } from './../shared/models/collection';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination, Pagination } from '../shared/models/pagination';
import { AlbumParams } from '../shared/models/albumParams';
import { ITag } from '../shared/models/tag';
import { map, delay } from 'rxjs/operators';
import { IPhoto } from '../shared/models/photo';
import { environment } from '../../../src/environments/environment';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  baseUrl = environment.apiUrl;
  photos: IPhoto[] = [];
  pagination = new Pagination();
  albumParams = new AlbumParams();

  constructor(private http: HttpClient) {}

  getPhotos() {
   
    let params = new HttpParams();

    if (this.albumParams.tagId !== 0)
      params = params.append('tagId', this.albumParams.tagId.toString());

    if (this.albumParams.collectionId !== 0)
      params = params.append('collectionId', this.albumParams.collectionId.toString());

    if (this.albumParams.search)
      params = params.append('search', this.albumParams.search);
    
    params = params.append('sort', this.albumParams.sort.toString());
    params = params.append('pageIndex', this.albumParams.pageNumber.toString());
    params = params.append('pageSize', this.albumParams.pageSize.toString());

    return this.http
      .get<IPagination>(this.baseUrl+'photo', {observe: 'response', params})
      .pipe(
        map((response) => {
          this.pagination = response.body;
          return this.pagination;
        })
      );
  }

  addPhoto() {
    return this.http.post(this.baseUrl + 'photo/addPhoto', {});
  }

  getTags() {
    return this.http.get<ITag[]>(this.baseUrl + 'photo/tags');
  }
  getCollections() {
    return this.http.get<ICollection[]>(this.baseUrl + 'collection/GetAll');
  }

  getPhoto(id: number) {

    const photo = this.photos.find(p => p.id === id);

    if(photo){
      return of(photo);
    }
    return this.http.get<IPhoto>(this.baseUrl + 'photo/' + id);
  }

  deletePhoto(id: number) {
    return this.http.delete(this.baseUrl + 'photo/' + id)
  }

  setAlbumParams(params: AlbumParams) {
    this.albumParams = params;
  }

  getAlbumParams() {
    return this.albumParams;
  }
}
