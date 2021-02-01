import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild ,OnDestroy} from '@angular/core';
import { database } from 'firebase';
import { AuthData } from '../../../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Random } from '../../../../../services/random.service';
import * as crypto from 'crypto-js';
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
export class MessageUiComponent implements OnInit, OnChanges {
    @Input() 'endUser': { imgUrl?: string, name: string, uid: string };
    @ViewChild('msgIn', { static: false })
    msgIn: ElementRef;
    msgsView: void;
    sub: any;
    mLoadingEnded = false;
    paramData: any;
    MessagesListLS = JSON.parse(localStorage.getItem('MessagesList'));
    constructor(private data: AuthData, aRoute: ActivatedRoute, Random: Random) {
        this.sub = aRoute.params.subscribe(params => {
            this.paramData = params.enData.toString().replace(/p1L2u3S/g, '+').replace(/s1L2a3S4h/g, '/').replace(/e1Q2u3A4l/g, '=');
        });
        let endata: any = crypto.AES.decrypt(this.paramData.toString(), Random.setKey());
        this.endUser = JSON.parse(endata.toString(crypto.enc.Utf8));
        this.mLoadingEnded = true;
        if (data.heicsaUser.uId > this.endUser.uid) {
            this.thisUserIdentifier = 1;
        } else {
            this.thisUserIdentifier = 2;
        }
    }

    md: MessageData;
    msgToSend: string;
    timeLineOfMessages = [];
    private readonly thisUserIdentifier: number;
    feed: any;

    inOut(m: number): boolean {
        return (m === this.thisUserIdentifier);
    }

    @HostListener('window:keydown.enter', ['$event'])
    sendShortCut(event: KeyboardEvent): void {
        event.preventDefault();
        this.msg(this.msgIn.nativeElement.value);
    }

    reset(): void {
        this.msgIn.nativeElement.value = '';
    }

    // tslint:disable-next-line:typedef
    async msg(a: string) {
        if ((a === '') || (a === null) || (a === undefined)) {
        } else {
            await this.SendMessage(a);
        }
    }
    async SendMessage(g: string): Promise<void> {
        try {
            let md: MessageData;
            md = {
                m: g,
                s: {
                    o: {
                        s: true,
                        I: this.thisUserIdentifier
                    },
                    e: {
                        d: false,
                        s: false,
                    }
                },
                t: Date.now()
            };
            this.reset();
            await database().ref(`messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}/${md.t}`).set(md);
        } catch (e) {
            console.log(e.message);
        }
    }
    ucID(a: string, b: string) {
        return (a > b) ? (a + '_' + b) : (b + '_' + a);
    }

    timeReturn(ts: any): string {
        var date_ob = new Date(ts);
        var hours = ("0" + date_ob.getHours()).slice(-2);
        var minutes = ("0" + date_ob.getMinutes()).slice(-2);
        var seconds = ("0" + date_ob.getSeconds()).slice(-2);
        return `${hours}:${minutes}`
    }
    getMessages(): void {
        if (this.timeLineOfMessages.length === 0) { 
            database()
            .ref(`/messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}`)
            .limitToLast(25)
            .once('value', (s) => {
                if (s.val() == null) {
                    this.timeLineOfMessages = [{
                        m: 'send a msg',
                        s: {
                            o: {
                                s: true,
                                I: 1
                            },
                            e: {
                                d: false,
                                s: false,
                            }
                        },
                        t: Date.now()
                    }]
                } else {
                    console.log(s.val());
                    let dataI25a = Object.values(s.val());
                    for(let i=0;i<(dataI25a.length-2);i++){
                        this.timeLineOfMessages.push(dataI25a[i])
                    }
                }
            });
        } 
           database()
            .ref(`/messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}`)
            .limitToLast(1)
            .on('value', (data) => {
                console.log(Object.values(data.val()))
                let d = Object.values(data.val())
                for(let i=0;i<d.length;i++){
                   this.timeLineOfMessages.push(d[i]);
                }
            });
     
    }

    ngOnInit(): void {
        this.msgsView = this.getMessages();
    }

    ngOnChanges(): void {
        this.msgsView = this.getMessages();
    }
    ngOnDestroy(){
if(this.sub != null) {
    this.sub.unsubscribe();
  }
    }
}