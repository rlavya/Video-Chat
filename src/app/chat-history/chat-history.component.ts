import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ChatHistoryService } from './chat-history.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css'],
  providers: [ ChatHistoryService ]
})
export class ChatHistoryComponent implements OnInit {
  	chats = []
  	constructor(private route: ActivatedRoute, private chatlist : ChatHistoryService) {
  		this.route.params.subscribe( params => console.log(params.id) );
    }

  	ngOnInit(){
    	this.chatlist.getchatlist().then((data: Array<object>) => {debugger
      		this.chats = data;
    	})
	}

}
