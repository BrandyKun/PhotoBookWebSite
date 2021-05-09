import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAppDetails } from '../shared/models/appDetails';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAppDetails() {
    return this.http.get<IAppDetails>(this.baseUrl + 'pagesettings')
  }

  updateAppSettings(changedDets : IAppDetails) {
    return this.http.put(this.baseUrl + 'pagesettings', changedDets)
  }

}
