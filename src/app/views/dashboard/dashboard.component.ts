import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Store my infos
  me: any;

  // Store my Repos
  repos: any;

  // Actualy the state managemant (lol)
  isReady = false;

  // cards for angular material
  cards: any;

  // User (while login system isn't ready)
  user: string = 'IsaacBernardes';

  // result from search bar
  content: any;

  // Actual slice from list
  activePageDataChunk: any;
  firstCut: number = 0;
  secondCut: number = 4;

  // Default page size
  pageSize: number = 10;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dataService: DataService
  ) {
    this.startComponent().then(() => {
      this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
          if (matches) {
            return [
              {
                title: 'User info',
                cols: 10,
                rows: 2,
                value: {
                  bio: this.me.bio,
                  company: this.me.company,
                  email: this.me.email,
                  location: this.me.location,
                  login: this.me.login,
                  name: this.me.name,
                  img_url: this.me.avatar_url,
                },
                icon: null,
              },
              {
                title: 'Repos',
                cols: 5,
                rows: 1,
                value: this.me.public_repos,
                icon: 'menu_book',
              },
              {
                title: 'Gists',
                cols: 5,
                rows: 1,
                value: this.me.public_gists,
                icon: 'lock',
              },
              {
                title: 'Following',
                cols: 5,
                rows: 1,
                value: this.me.following,
                icon: 'turned_in',
              },
              {
                title: 'Followers',
                cols: 5,
                rows: 1,
                value: this.me.followers,
                icon: 'beenhere',
              },
              {
                title: 'Repo List',
                cols: 10,
                rows: 3,
                value: null,
                icon: null,
              },
            ];
          }

          return [
            {
              title: 'User info',
              cols: 6,
              rows: 2,
              value: {
                bio: this.me.bio,
                company: this.me.company,
                email: this.me.email,
                location: this.me.location,
                login: this.me.login,
                name: this.me.name,
                img_url: this.me.avatar_url,
              },
            },
            {
              title: 'Repos',
              cols: 2,
              rows: 1,
              value: this.me.public_repos,
              icon: 'menu_book',
            },
            {
              title: 'Gists',
              cols: 2,
              rows: 1,
              value: this.me.public_gists,
              icon: 'lock',
            },
            {
              title: 'Following',
              cols: 2,
              rows: 1,
              value: this.me.following,
              icon: 'turned_in',
            },
            {
              title: 'Followers',
              cols: 2,
              rows: 1,
              value: this.me.followers,
              icon: 'beenhere',
            },
            {
              title: 'Repo List',
              cols: 10,
              rows: 3,
              value: null,
              icon: null,
            },
          ];
        })
      );
    });
  }

  async startComponent() {
    // Get all data from github Rest API

    await this.dataService
      .getUser(this.user)
      .then((res) => {
        this.me = res;
        console.log(res);
      })
      .then(() => {
        this.dataService.getRepos(this.user).then((res) => {
          this.repos = res;
          this.content = res;
          this.activePageDataChunk = this.content.slice(0, this.pageSize);
          console.log(res);
          this.isReady = true;
        });
      })
      .catch((e) => console.log(e));
  }

  onPageChanged(e: any) {
    // Handle page change

    this.firstCut = e.pageIndex * e.pageSize;
    this.secondCut = this.firstCut + e.pageSize;
    this.activePageDataChunk = this.content.slice(
      this.firstCut,
      this.secondCut
    );
  }

  searchThis(data: any) {
    // Search for the target on the repository list

    this.content = this.repos;
    if (data) {
      this.content = this.content.filter(function (
        element: any,
        i: any,
        array: any
      ) {
        let arrayElement = element.name.toLowerCase();
        return arrayElement.includes(data);
      });
    } else {
      console.log(this.content);
    }
    if (this.content.length < this.firstCut) {
      this.activePageDataChunk = this.content.slice(0, 5);
    } else {
      this.activePageDataChunk = this.content.slice(
        this.firstCut,
        this.secondCut
      );
    }
  }
}
