import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { watch } from '../../../../model';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  urlBase = 'http://localhost:3000/watchs';
  constructor(private http: HttpClient) {}

  getWatchs(): Observable<watch[]> {
    return this.http.get<watch[]>(this.urlBase);
  }
}
