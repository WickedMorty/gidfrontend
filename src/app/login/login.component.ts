import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  authError = false;

  constructor(private _auth: AuthService,
              private _route: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.email);
          this._route.navigate(['/residential']);
          this.authError = false;
        },
        err => {
          console.log(err);
          this.authError = true;
        },
      )
  }

}
