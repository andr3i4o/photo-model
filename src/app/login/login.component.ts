import { Component } from '@angular/core';
import {ApiService} from '../services/api.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = 'peter@klaven';
  password = 'cityslicka';

  constructor(private api: ApiService, private user: UserService, private router: Router) {}

  tryLogin() {
    this.api.login(this.email, this.password)
      .subscribe(
        r => {
          if (r.token) {
            this.user.setToken(r.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}
