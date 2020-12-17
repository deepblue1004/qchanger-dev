import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public selectedIndex: number = 0
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  switchTab(tabName: string, tabId: number) {
    this.selectedIndex = tabId;
    this.router.navigate([`/${tabName}`]);
  }

}
