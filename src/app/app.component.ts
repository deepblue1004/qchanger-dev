import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  private _sub = new Subscription();

  constructor(private titleService: Title, private router: Router, private eventsService: EventsService) {
    this.titleService.setTitle(environment.appName);

    this._sub.add(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.eventsService.routeChanged.next(
          { currentRoute: event['urlAfterRedirects'] });
      })
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
}
}
