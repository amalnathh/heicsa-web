import { HostListener, Component, Input, OnInit } from '@angular/core';
import { database, storage } from 'firebase';
export interface MessageData {
    msg: string; status: {
        owner: { send: boolean; };
        endUser: { delivered: boolean; seen: boolean; typing: boolean };
    };
    time: string;
}
@Component({
    selector: 'app-message-ui',
    templateUrl: './message-ui.component.html',
    styleUrls: ['./message-ui.component.css']
})
export class MessageUiComponent implements OnInit {
    @Input() 'chatID': string;

    message: any;
    send = false;
    m_data_in: MessageData;
    m_data_out: MessageData;

    constructor() {
        this.m_data_in = {
            msg: `hai its good to see u`,
            status: {
                owner: {
                    send: true,
                },
                endUser: {
                    delivered: true,
                    seen: false,
                    typing: false
                },
            },
            time: '9:47pm'
        }
        this.m_data_out = {
            msg: 'This msg have more than 10 words and more than 30 letters',
            status: {
                owner: {
                    send: true,
                },
                endUser: {
                    delivered: true,
                    seen: false,
                    typing: false
                },
            },
            time: '9:47pm'
        }
    }
    // @HostListener('window:keydown.control.enter', ['$event'])
    // sendShortCut(event: KeyboardEvent) {
    //     event.preventDefault();
    //     this.SendMessage(this.message);
    //     console.log('enna myre bheeshani aano aa oombikooo')
    // }
    // // tslint:disable-next-line:typedef
    // msg() {
    //     this.SendMessage(this.message).then(() => {
    //         this.send = true;
    //     });
    // }

    // async SendMessage(mesg: string): Promise<void> {
        
    //     try {
    //         await database().ref(`accounts/message/${this.chatID}`).set(messages);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }

    ngOnInit(): void {
    }
}
