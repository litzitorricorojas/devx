import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storie, StorieContainer } from '../model/model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StorieService {

  readonly URL: string = 'http://localhost:3000/stories';

  constructor(private http: HttpClient) { }

  getGifs(): Observable<Storie[]> {
    return this.http.get<Storie[]>(this.URL);
  }

  getGif(id: string): Observable<Storie> {
    return this.http.get<Storie>(this.URL + '/' + id);
  }

  postGif(git: Storie): Observable<Storie> {
    return this.http.post<Storie>(this.URL, git);
  }
  updateGif(gif: Storie): Observable<Storie> {
    return this.http.put<Storie>(this.URL + '/' + gif.id, gif);
  }
}
