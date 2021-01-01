import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  redirectUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.redirectUrl = params['redirectUrl'];
    });
    this.auth.user.subscribe(user => {
      if(user) {
        this.auth.createUser().then(() =>{
          this.router.navigate([`/merchant/${this.redirectUrl}`]);
        });
      }
    })
  }

}
