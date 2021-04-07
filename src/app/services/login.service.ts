import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  client_id = '63a143a8e18dc934055e';
  redirect_uri = 'http://localhost:4200/login/github';
  client_secret = 'c1dc15f49c4297eaa4b519aba76faf144a6950ce';

  login() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}`;
  }

  authorization(code: string) {
    const body = {
      code: code,
      client_id: this.client_id,
      client_secret: this.client_secret,
    };

    console.log(code);
    console.log(JSON.stringify(body));

    return this.http.post(`https://github.com/login/oauth/access_token`, body);
  }
}
