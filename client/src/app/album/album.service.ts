import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
baseUrl = 'https://localhost:5003/api/';
  
  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<IPagination>(this.baseUrl+'photo?PageSize=50');
  }

  addPhoto() {
    return this.http.post(this.baseUrl + 'photo/addPhoto', {});
  }
}
