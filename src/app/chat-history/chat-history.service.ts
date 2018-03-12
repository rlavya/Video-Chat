import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class ChatHistoryService {

  public JSONstring: string = 'http://localhost:3201/chatlist';

  constructor(private http: Http) { }

  public getchatlist(): Promise<Object> {
    return this.http.get(this.JSONstring)
      .toPromise()
      .then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err);
      });
  }

} 
