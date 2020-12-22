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
  public filterProperties: FilterProperty[];

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
    this.filterProperties = [
      new FilterProperty("distance", 10, "km"),
      new FilterProperty("waiting time", 60, "min"),
      new FilterProperty("rating", 1, "★")
    ];
    console.log(this.filterProperties);
  }

  showFilterBody() {
    this.isFilterVisible = true;
  }

  hideFilterBody() {
    this.isFilterVisible = false;
  }

  setFilterProperty(id: number, value: any, percent: number) {
    this.filterProperties[id].value = value;
  }
}

class FilterProperty {
  public name: string;
  public value: any;
  public unit: string;

  constructor(name: string, value: any = 0, unit: string) {
    this.name = name;
    this.value = value;
    this.unit = unit;
  }
}
