import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { pullDownAnimation } from 'app/animations';

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.css'],
  animations: [pullDownAnimation]
})
export class HomeFilterComponent implements OnInit {

  public searchPlaceholder: string;
  public searchKeywords: string;
  public isFilterVisible: boolean;

  private _searchInput: ElementRef;
  @ViewChild('searchInput', { static: false }) set content(content: ElementRef) {
    if (content) { // initially setter gets called with undefined
      this._searchInput = content;
      this._searchInput.nativeElement.focus();
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.searchPlaceholder = "tap here to search"
    this.searchKeywords = "";
    this.isFilterVisible = false;
  }

  showFilterBody() {
    this.isFilterVisible = true;
  }

}
