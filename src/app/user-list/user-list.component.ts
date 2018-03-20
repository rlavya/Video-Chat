import { Component, OnInit } from '@angular/core';
import { UserListingService } from './user-listing.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ UserListingService ]
})
export class UserListComponent implements OnInit {
  users = [];
  userid = 0;
  constructor(private userlist: UserListingService, private user: LoginService ) { }

   ngOnInit() {
        this.userlist.getAll().then((data: Array<object>) => {
          this.userid = parseInt(localStorage.getItem('id'), 0);
          for (let userIndex = 0; userIndex < data.length; userIndex++) {
            if (this.userid === data[userIndex]['chattingto']) {
              this.users.push(data[userIndex]);
            }
          }
          if (this.users.length === 0) {
            this.users.push('empty');
          }
        });
   }
}
