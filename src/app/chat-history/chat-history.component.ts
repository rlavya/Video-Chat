import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatHistoryService } from './chat-history.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-chat-history',
    templateUrl: './chat-history.component.html',
    styleUrls: ['./chat-history.component.css'],
    providers: [ChatHistoryService]
})

export class ChatHistoryComponent implements OnInit {
    chats = [];
    userid = 0;
    chatUserId = 0;
    messageText = '';

    constructor(private route: ActivatedRoute, private chatlist: ChatHistoryService) {
        this.route.params.subscribe(params => params = params.id);
    }

    ngOnInit() {
        this.userid = parseInt(localStorage.getItem('id'), 0);
        this.chatUserId = this.route.params['value'].id;
        this.chatlist.getchatlist(this.chatUserId).then((data: Array<object>) => {
            this.chats = data;
        });
    }

    sendMessage() {
        const text = this.messageText;
        let id = 0;
        this.chatlist.getchatlist(this.chatUserId).then((data: Array<object>) => {
            id = data.length + 1;
        });
        debugger;
        const datatosend = [];
        datatosend['id'] = id;
        datatosend['msg'] = text;
        datatosend['userid'] = this.userid;
        datatosend['chattingwith'] = this.chatUserId;
        this.chatlist.postchatlist(datatosend);
    }
}
