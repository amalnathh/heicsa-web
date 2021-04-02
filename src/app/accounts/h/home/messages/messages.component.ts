import {Component, HostListener, OnInit} from '@angular/core';
import {MessageService} from '../messages/message.service';
@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    constructor(public ms:MessageService) {
    }
    @HostListener('window:history.back',['$event'])
    hideList(event: KeyboardEvent): void {
        event.preventDefault();
        this.ms.hidingList = false;
        window.history.back();
    }
    a = 2;

    ngOnInit(): void {
    }
}
