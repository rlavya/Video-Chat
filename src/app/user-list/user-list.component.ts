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
  constructor(private userlist: UserListingService, private user: LoginService ) { }

   ngOnInit() {
        this.userlist.getAll().then((data: Array<object>) => {
          this.users = data;
        });
   }

}
