import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAppDetails } from '../shared/models/appDetails';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAppDetails(): Observable<IAppDetails> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
    
    return this.http.get<IAppDetails>(this.baseUrl + 'pagesettings').pipe(
      map((response) => {
        return response;
      })
    );;
  }

  async updateAppSettings(changedDets : IAppDetails): Promise<void> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

     await this.http.put(this.baseUrl + 'pagesettings', changedDets).toPromise();
  }

  async updateMainLogo(logo : FormData): Promise<string> {

    const logoRespnse = await this.http.post<{url: string}>(this.baseUrl + 'pagesettings/mainLogo', logo).toPromise();

   return logoRespnse.url;
  }
  async updateAboutImage(picture : FormData): Promise<string> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

     const aboutResponse = await this.http.post<{url: string}>(this.baseUrl + 'pagesettings/aboutimg', picture).toPromise();

    return aboutResponse.url;
  }
  async updateContactImage(image : FormData): Promise<string> {
    const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');

     const contactResponse = await this.http.post<{url: string}>(this.baseUrl + 'pagesettings/contactimg', image).toPromise();

     return contactResponse.url; 
  }

}
