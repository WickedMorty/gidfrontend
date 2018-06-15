import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private  _authService: AuthService) {

  }

  getToken() {
    // if(localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
    //   return false;
    // }
    //
    // return true;

    return !!localStorage.getItem('token');
  }
}
