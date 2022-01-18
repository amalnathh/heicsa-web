import { Component,HostListener,ElementRef, ViewChild, OnInit} from '@angular/core';
import { MessageService } from "../../message.service";

@Component({
    selector: 'app-message-ui',
    templateUrl: './message-ui.component.html',
    styleUrls: ['./message-ui.component.css']
})
export class MessageUiComponent implements OnInit {
    @ViewChild('msgIn', { static: false })
    msgIn: ElementRef;
    sub: any;
    mLoadingEnded = false;
    paramData: any;
    constructor(public msgService: MessageService) {
    }

    @HostListener('window:keydown.enter', ['$event'])
    sendShortCut(event: KeyboardEvent): void {
        event.preventDefault();
        this.msgService.msg(this.msgIn.nativeElement.value);
        this.reset();
    }

    reset(): void {
        this.msgIn.nativeElement.value = '';
    }
    sendMsg(a: string) {
        this.msgService.msg(a)
        this.scrollToBottom();
        this.reset();
    }
    @ViewChild('scrollMe') scrollMe: ElementRef;
    ngOnInit() { 
        this.scrollToBottom();
    }


    scrollToBottom(): void {
        try {
            this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
        } catch(err) { console.log(err)}                 
    }

    ngOnDestroy(): void {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    }
}
