import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatHistoryService } from './chat-history.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'app-chat-history',
    templateUrl: './chat-history.component.html',
    styleUrls: ['./chat-history.component.css'],
    providers: [ChatHistoryService]
})

export class ChatHistoryComponent implements OnInit, AfterViewChecked {
    chats: any;
    userid = 0;
    chatUserId = 0;
    messageText = '';
    imageUrl = '';
    @ViewChild('focusToLastMsg') private focusContainer: ElementRef;

    constructor(private route: ActivatedRoute, private chatlist: ChatHistoryService, private user: LoginService) {
        this.route.params.subscribe(params => params = params.id);
    }

    ngOnInit() {
        this.userid = parseInt(localStorage.getItem('id'), 0);
        this.chatUserId = parseInt(this.route.params['value'].id, 0);
        this.chatlist.getchatlist(this.chatUserId).subscribe((data) => {
            this.chats = data;
        });
        this.user.getLoggedInUserDetails(this.userid).then((data: Array<object>) => {
            this.imageUrl = data[0]['image'];
        });
    }

    focusToBottom(): void {
        try {
            this.focusContainer.nativeElement.scrollTop = this.focusContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    ngAfterViewChecked() {
        this.focusToBottom();
    }

    sendMessage() {
        const text = this.messageText;
        const imageurl = this.imageUrl;
        let id = 0;
        if (text !== '') {
            this.chatlist.getchatlist(this.chatUserId).subscribe((data) => {
                id = data.length + 1;
                const datatosend = {
                    'id': id,
                    'msg': text,
                    'userid': this.userid,
                    'chattingwith': this.chatUserId,
                    'image': imageurl
                };
                this.chatlist.postchatlist(datatosend).subscribe(res => {
                    this.chatlist.getchatlist(this.chatUserId).subscribe((result) => {
                        this.chats = result;
                        this.messageText = '';
                    });
                });
            });
        }
    }
}
