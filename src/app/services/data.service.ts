import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsuario(name: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${name}`);
  }

  getRepositories(name: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${name}/repos`);
  }

  getFollowers(name: string, page: number): Observable<any> {
    return this.http.get<any>(
      `https://api.github.com/users/${name}/followers?per_page=100&page=${page}`
    );
  }
}
