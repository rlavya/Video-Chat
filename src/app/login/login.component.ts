import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  loginform: FormGroup;
  email: FormControl;
  password: FormControl;
  formSubmitted = false;
  correctpswd = false;
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
  }

  createForm() {
    this.loginform = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  loginUser(e) {
    this.formSubmitted = true;
    if (this.loginform.valid) {
      e.preventDefault();
      const username = e.target.elements[0].value;
      const password = e.target.elements[1].value;

      this.login.getUserList().then((data: Array<object>) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i]['email'] === username && data[i]['password'] === password) {
              this.login.setUserLoggedIn();
              this.router.navigate(['/userList']);
          } else {
              this.correctpswd = true;
          }
        }
      });
      return false;
    }
  }
}
