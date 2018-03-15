import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UserListingService {

  private userlistJSON = 'http://localhost:3000/userlist';

  constructor(private http: Http) { }

  public getAll(): Promise<Object> {
    return this.http.get(this.userlistJSON)
      .toPromise()
      .then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err);
      });
  }

}
