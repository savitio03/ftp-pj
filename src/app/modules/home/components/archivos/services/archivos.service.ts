import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Files } from '../models/res-res';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  //list of the files callen to te api service
  getFiles() {
    return this.http.get<Files>('http://localhost:3000/files');
  }

  //download the file from the api service
  downloadFile(url: string, name: string): Observable<HttpResponse<Blob>> {
    return this.http.get(url, {
      observe: 'response',
      responseType: 'blob',
    });
  }
}
