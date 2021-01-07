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
      new CategoryItem("restaurant", "emojione:pot-of-food",                  "/"),
      new CategoryItem("bank",       "emojione:bank",                         "/"),
      new CategoryItem("post",       "noto-v1:open-mailbox-with-raised-flag", "/"),
      new CategoryItem("hospital",   "emojione:hospital",                     "/"),
      new CategoryItem("outlet",     "logos:shopify",                         "/"),
      new CategoryItem("telecom",    "fxemoji:cellphone",                     "/"),
      new CategoryItem("event",      "twemoji:circus-tent",                   "/"),
      new CategoryItem("religion",   "fxemoji:church",                      "/"),
      new CategoryItem("government", "emojione:flag-for-singapore",           "/"),
      //new CategoryItem("transpot",   "emojione:station",                    "/"),
      //new CategoryItem("movie",      "emojione:clapper-board",              "/"),
      //new CategoryItem("sport",      "emojione:tennis",                     "/"),
      //new CategoryItem("zoo",        "emojione:leopard",                    "/"),
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
