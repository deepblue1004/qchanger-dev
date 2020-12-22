import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit {

  public categoryItems: CategoryItem[];

  constructor() { }

  ngOnInit(): void {
    this.categoryItems = [
      new CategoryItem("food",     "emojione:pot-of-food",      "/"),
      new CategoryItem("bank",     "emojione:bank",             "/"),
      new CategoryItem("clinic",   "emojione:hospital",         "/"),
      new CategoryItem("movie",    "emojione:clapper-board",    "/"),
      new CategoryItem("sport",    "emojione:tennis",           "/"),
      new CategoryItem("event",    "emojione:circus-tent",      "/"),
      new CategoryItem("transpot", "emojione:station",          "/"),
      new CategoryItem("zoo",      "emojione:leopard",          "/"),
      new CategoryItem("shopping", "emojione:department-store", "/"),
      new CategoryItem("religion", "emojione:mosque",           "/"),
    ]
  }

}

class CategoryItem {
  public title: string;
  public icon: string;
  public route: string;

  constructor(title: string, icon: string, route: string) {
    this.title = title;
    this.icon = icon;
    this.route = route;
  }
}
