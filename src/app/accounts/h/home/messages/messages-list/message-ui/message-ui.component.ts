import { Component, Input, OnInit } from '@angular/core';
import { AuthData, AuthService } from '../../../../../services/auth.service';

export interface MessageData {
    m: string;
    s: {
        o: { s: boolean; I: number };
        e: { d: boolean; s: boolean; t: boolean };
    };
    t: number;
}

@Component({
    selector: 'app-message-ui',
    templateUrl: './message-ui.component.html',
    styleUrls: ['./message-ui.component.css']
})
export class MessageUiComponent implements OnInit {
    @Input() 'chatID': string;

    md: MessageData;
    msgToSend: string;
    timeLineOfMessages = [
        {
            m: 'hehe',
            s: {
                o: {
                    s: true,
                    I: 2
                },
                e: {
                    d: false,
                    s: false,
                    t: false
                },
            },
            t: 2435
        },
        {
            m: 'hehehe enna ondeda',
            s: {
                o: {
                    s: true,
                    I: 1
                },
                e: {
                    d: true,
                    s: true,
                    t: false
                },
            },
            t: 2463
        },
        {
            m: 'haa ange ponu',
            s: {
                o: {
                    s: true,
                    I: 2
                },
                e: {
                    d: false,
                    s: false,
                    t: false
                },
            },
            t: 2398
        },
        {
            m: 'hahaha',
            s: {
                o: {
                    s: true,
                    I: 1
                },
                e: {
                    d: true,
                    s: true,
                    t: false
                },
            },
            t: 2233
        }
    ]
    len: number;
    uds: number;
    id1: string;
    id2: string;
    private readonly thisUserIdentifier: number;

    constructor(data: AuthData, service: AuthService) {
        this.timeLineOfMessages.sort(Number)
        this.chatID = data.heicsaUser.uId + '_8janHHkaFr82hLaUkH';
        this.len = this.chatID.length;
        this.uds = this.chatID.indexOf('_');
        this.id1 = this.chatID.slice(0, this.uds);
        this.id2 = this.chatID.slice((this.uds + 1), this.len);
        console.log(this.id2 + '  ' + this.id1);
        if (this.id1 === data.heicsaUser.uId) {
            if (data.heicsaUser.uId > this.id2) {
                this.thisUserIdentifier = 1;
            } else {
                this.thisUserIdentifier = 2;
            }
        } else if (this.id2 === data.heicsaUser.uId) {
            if (data.heicsaUser.uId > this.id1) {
                this.thisUserIdentifier = 1;
            } else {
                this.thisUserIdentifier = 2;
            }
        } else {
            service.SignOut();
        }
    }

    inOut(m: number): boolean {
        return (m === this.thisUserIdentifier);
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
