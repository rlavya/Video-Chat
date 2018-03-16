import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../login/login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private user: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    if (this.user.getUserLoggedIn()) {
      this.router.navigate(['/']);
    }
  }
}
