import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination, Pagination } from '../shared/models/pagination';
import { AlbumParams } from '../shared/models/albumParams';
import { ITag } from '../shared/models/tag';
import { map, delay } from 'rxjs/operators';
import { IPhoto } from '../shared/models/photo';
import { environment } from '../../../src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPhotos(albumParams: AlbumParams) {
   
    let params = new HttpParams();

    if (albumParams.tagId !== 0)
      params = params.append('tagId', albumParams.tagId.toString());

    // params = params.append('sort', albumParams.sort.toString());
    // params = params.append('pageIndex', albumParams.pageNumber.toString());
    // params = params.append('pageSize', albumParams.pageSize.toString());

    return this.http
      .get<IPhoto[]>(this.baseUrl+'photo')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  addPhoto() {
    return this.http.post(this.baseUrl + 'photo/addPhoto', {});
  }
  // getPhotos() {
  //   return this.http.get<IPhoto[]>(this.baseUrl+'photo');
  // }
  getTags() {
    return this.http.get<ITag[]>(this.baseUrl + 'photo/tags');
  }

  getPhoto(id: number) {
    return this.http.get<IPhoto>(this.baseUrl + 'photo/' + id);
  }

  deletePhoto(id: number) {
    return this.http.delete(this.baseUrl + 'photo/' + id)
  }
}
