import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
})
export class SearchpageComponent implements OnInit {
  userInfo: any;
  user: string = '';
  repos: any;
  followers: any;
  isReady: boolean = false;

  followersPage: number = 1;

  newSearch: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  search(user: string) {
    this.newSearch = true;
    if (user === '') {
      return;
    }
    this.dataService.getUsuario(this.user).subscribe(
      (usr) => {
        this.userInfo = usr;
        this.dataService.getRepositories(this.user).subscribe((repos) => {
          this.repos = repos;
          this.dataService
            .getFollowers(this.user, this.followersPage)
            .subscribe((res) => {
              this.followers = res;
              this.newSearch = false;
              this.isReady = true;
            });
        });
      },
      (error) => {
        this.userInfo = null;
        this.isReady = false;
      }
    );
  }
  attPage(newPage: number) {
    this.followersPage = newPage;
    this.dataService
      .getFollowers(this.user, this.followersPage)
      .subscribe((res) => {
        this.followers = res;
      });
  }
}
