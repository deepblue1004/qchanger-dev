import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public selected: number = 0
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  switchTab(tabName: string) {
    if(tabName == "home") {
      this.selected = 0;
    }
    else if(tabName == "favourites") {
      this.selected = 1;
    }
    else if(tabName == "list"){
      this.selected = 2;
    }
    else {
      this.selected = 3;
    }
    this.router.navigate([`/${tabName}`]);
  }

}
