import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    // Content for bottom navigation bar
    this.navTabs = [
      new NavTab('home',       '/home'),
      new NavTab('favourites', '/favourites'),
      new NavTab('list',       '/order'),
      new NavTab('account',    '/account')
    ];

    // Tab selection event
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Use 'urlAfterRedirects' instead of 'url' because it may redirect
      this.navTabs.map(t => t.isSelected = t.routePath == event['urlAfterRedirects'])
    });
  }

  switchTab(tabId: number) {
    this.router.navigate([this.navTabs[tabId].routePath]);
  }

}

class NavTab {
  public name: string;
  public routePath: string;
  public isSelected: boolean;

  constructor(name: string, routePath: string) {
    this.name = name;
    this.routePath = routePath;
    this.isSelected = false;
  }
}
