import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MessageService } from "../../message.service";

export interface MessageData {
    m: string;
    s: {
        o: {
            s: boolean;
            I: number
        };
        e: {
            d: boolean;
            s: boolean
        };
    };
    t: number;
}

@Component({
    selector: 'app-message-ui',
    templateUrl: './message-ui.component.html',
    styleUrls: ['./message-ui.component.css']
})
export class MessageUiComponent implements OnInit {
    @ViewChild('msgIn', { static: false })
    msgIn: ElementRef;
    // msgsView: void;
    sub: any;
    mLoadingEnded = false;
    paramData: any;

    constructor(public msgService: MessageService) {
    }

    @HostListener('window:keydown.enter', ['$event'])
    sendShortCut(event: KeyboardEvent): void {
        event.preventDefault();
        this.msgService.msg(this.msgIn.nativeElement.value);
    }

    reset(): void {
        this.msgIn.nativeElement.value = '';
    }
    sendMsg(a: string) {
        this.msgService.msg(a);
        this.reset();
    }
    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    }
}
