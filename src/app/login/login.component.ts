import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(e) {
      e.preventDefault();
      const username = e.target.elements[0].value;
      const password = e.target.elements[1].value;

      this.login.getUserList().then((data: Array<object>) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i]['email'] === username && data[i]['password'] === password) {
                this.login.setUserLoggedIn();
                this.router.navigate(['/userList']);
            }
        }
      });
      return false;
  }

}
