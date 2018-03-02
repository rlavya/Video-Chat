import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class UserListingService {

  public JSONstring: string = './assets/db.json';

  constructor(private http: Http) { }

  public getAll(): Promise<Object> {
    return this.http.get(this.JSONstring)
      .toPromise()
      .then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err);
      });
  }

}
