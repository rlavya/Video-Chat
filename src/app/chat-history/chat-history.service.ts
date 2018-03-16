import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ChatHistoryService {

  private chatlistJSON = 'http://localhost:3000/chatlist';

  constructor(private http: Http) { }

  public getchatlist(params): Promise<Object> {
    this.chatlistJSON = this.chatlistJSON + '?userid=' + params;
    return this.http.get(this.chatlistJSON)
      .toPromise()
      .then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err);
      });
  }

}
