import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class ChatHistoryService {

  private chatlistJSON = 'http://localhost:3000/chatlist';

  constructor(private http: Http) { }

  public getchatlist(params) {
    return this.http.get(this.chatlistJSON).map((res: Response) => res.json());
  }
  public postchatlist(params) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.chatlistJSON, params).map((res: Response) => res.json());
  }

}
