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

  // async getUser(name: string): Promise<any> {
  //   var user = await this.http
  //     .get(`https://api.github.com/users/${name}`)
  //     .toPromise();
  //   return user;
  // }

  // async getRepos(name: string): Promise<any> {
  //   var repos = await this.http
  //     .get(`https://api.github.com/users/${name}/repos`)
  //     .toPromise();
  //   return repos;
  // }
}
