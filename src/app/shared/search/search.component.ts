import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // Dumb component -> Only share and show data

  searchword: string = '';

  @Output() search = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  searchThis() {
    this.search.emit(this.searchword);
  }
}
