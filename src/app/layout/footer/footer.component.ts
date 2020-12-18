import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public selectedIndex: number;
  public navTabs: NavTab[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.navTabs = [
      new NavTab("home",       "/home"),
      new NavTab("favourites", "/favourites"),
      new NavTab("list",       "/list"),
      new NavTab("account",    "/account")
    ];
    console.log(this.router.url);
    // this.navTabs.map(t => t.isSelected = this.router.url);
  }

  switchTab(tabId: number) {
    this.navTabs.map(t => t.isSelected = false);
    this.navTabs[tabId].isSelected = true;
    this.router.navigate([`/${this.navTabs[tabId].routePath}`]);
  }

}

class NavTab {
  public id: number;
  public name: string;
  public routePath: string;
  public isSelected: boolean;

  constructor(name: string, routePath: string) {
    this.name = name;
    this.routePath = routePath;
    this.isSelected = false;
  }
}
