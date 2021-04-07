import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  clicked = false;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  loginWithRedirect() {
    this.clicked = true;
    this.auth.loginWithRedirect();
  }
}
