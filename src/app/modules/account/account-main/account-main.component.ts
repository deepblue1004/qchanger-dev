import { Router } from '@angular/router';
import { User } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css']
})
export class AccountMainComponent implements OnInit {

  currentUser: CurrentUser;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.createUser().then(user => {
      if (user) {
        this.currentUser = user;
        this.auth.getProfilePic(user.id).then(url => {
          this.currentUser.profileUrl = url;
        });
      }
    }).catch(err => {
      console.error(err);
    });
  }

  login() {
    this.router.navigate(['login'])
  }

  logout() {
    this.auth.logout();
    this.currentUser = null;
  }
}

class CurrentUser extends User {
  profileUrl?: string;
}
