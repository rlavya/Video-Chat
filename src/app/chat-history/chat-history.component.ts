import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatHistoryService } from './chat-history.service';

@Component({
    selector: 'app-chat-history',
    templateUrl: './chat-history.component.html',
    styleUrls: ['./chat-history.component.css'],
    providers: [ChatHistoryService]
})

export class ChatHistoryComponent implements OnInit {
    chats = [];
    userid = 0;
    constructor(private route: ActivatedRoute, private chatlist: ChatHistoryService) {
        this.route.params.subscribe(params => params = params.id);
    }

    ngOnInit() {
        this.userid = parseInt(localStorage.getItem('id'), 0);
        this.chatlist.getchatlist(this.route.params['value'].id).then((data: Array<object>) => {
            this.chats = data;
        });
    }

}
