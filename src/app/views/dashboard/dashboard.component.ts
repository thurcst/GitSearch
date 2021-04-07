import { AuthService } from '@auth0/auth0-angular';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  me: any; // Store my infos
  repos: any; // Store my Repos
  followers: any; // Store my followers
  isReady = false; // Actualy the state managemant (lol)
  user: string = ''; // User (while login system isn't ready)

  followersPage: number = 1;

  constructor(private dataService: DataService, public auth: AuthService) {
    this.auth.user$.subscribe((user) => {
      this.user = user.nickname;
      this.startComponent();
    });
  }

  async startComponent(): Promise<void> {
    // Get all data from github Rest API
    await this.dataService.getUsuario(this.user).subscribe((res) => {
      this.me = res;
      console.log(res);
      this.dataService.getRepositories(this.user).subscribe((res) => {
        this.repos = res;
        this.dataService
          .getFollowers(this.user, this.followersPage)
          .subscribe((res) => {
            this.followers = res;
            this.isReady = true;
          });
      });
    });
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
