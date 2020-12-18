import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { changeTabAnimation } from 'app/animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  animations: [changeTabAnimation]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
