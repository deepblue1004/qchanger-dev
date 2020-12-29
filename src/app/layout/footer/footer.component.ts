import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'app/services/events.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public selectedIndex: number;
  public navTabs: NavTab[];

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    // Content for bottom navigation bar
    this.navTabs = [
      new NavTab('home',       '/home'),
      new NavTab('favourites', '/favourites'),
      new NavTab('order',       '/order'),
      new NavTab('account',    '/account')
    ];

    // Tab selection event
    this.eventsService.routeChanged.subscribe(event => {
      this.navTabs.map(t => t.isSelected = t.routePath == event.currentRoute);
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
