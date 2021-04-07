import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
})
export class SearchpageComponent implements OnInit {
  userInfo: any;
  user: string = '';
  repos: any;
  isReady: boolean = false;

  newSearch: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  search(user: string) {
    this.newSearch = true;
    console.log(this.user);
    if (user === '') {
      return;
    }
    this.dataService.getUsuario(this.user).subscribe(
      (usr) => {
        console.log(usr);
        this.userInfo = usr;
        this.dataService.getRepositories(this.user).subscribe((repos) => {
          this.repos = repos;
          this.newSearch = false;
          this.isReady = true;
        });
      },
      (error) => {
        this.userInfo = null;
        console.log(error.ok);
        console.log(error.error.message);
        this.isReady = false;
      }
    );
  }
}
