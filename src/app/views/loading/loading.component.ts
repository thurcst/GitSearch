import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  queryParams: string = '';

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
        this.queryParams = params.code;
      })
      .add(
        this.loginService
          .authorization(this.queryParams)
          .subscribe((response) => {
            console.log(response);
          })
      );
  }
}
