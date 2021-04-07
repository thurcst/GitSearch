import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  isReady = false; // Actualy the state managemant (lol)

  cards: any; // cards for angular material

  user: string = ''; // User (while login system isn't ready)

  content: any; // result from search bar

  // Actual slice from list

  activePageDataChunk: any;
  firstCut: number = 0;
  secondCut: number = 10;

  pageSize: number = 10; // Default page size

  smallList: any[] = [];
  bigList: any[] = [];

  screenType: number = 0;

  @Input() me?: any;
  @Input() repos?: any;
  @Input() followers?: any;
  @Input() actualPage?: number;

  @Output() page = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.content = this.repos;
    this.activePageDataChunk = this.content.slice(0, this.pageSize);
    this.smallList = [
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
        title: 'Followers List',
        cols: 10,
        rows: 2,
        value: null,
        icon: null,
      },
    ];
    this.bigList = [
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
        title: 'Followers List',
        cols: 10,
        rows: 2,
        value: null,
        icon: null,
      },
    ];
    this.isReady = true;

    this.startCards();
  }

  startCards(): void {
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          this.screenType = 1;
          return this.bigList;
        }
        this.screenType = 2;
        return this.smallList;
      })
    );
  }

  onPageChanged(e: any): void {
    // Handle page change
    this.firstCut = e.pageIndex * e.pageSize;
    this.secondCut = this.firstCut + e.pageSize;
    this.activePageDataChunk = this.content.slice(
      this.firstCut,
      this.secondCut
    );
  }

  searchThis(data: any): void {
    // Search for the target on the repository list
    this.content = this.repos;
    this.activePageDataChunk = this.content.slice(0, 10);
    if (data) {
      this.content = this.content.filter(function (
        element: any,
        i: any,
        array: any
      ) {
        let arrayElement = element.name.toLowerCase();
        return arrayElement.includes(data.toLowerCase());
      });
    } else {
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

  redirectTo(link: string) {
    window.location.href = link;
  }

  changePage(value: number) {
    if (this.actualPage != undefined) {
      this.page.emit(this.actualPage + value);
    } else {
      this.page.emit(0);
    }
  }
}
