import { Injectable } from '@angular/core';
import { database } from 'firebase';
import { AuthData } from 'src/app/accounts/services/auth.service';
import { MessageData } from './messages-list/message-ui/message-ui.component';
import { Random } from '../../../services/random.service';
import * as crypto from 'crypto-js';
import { defer } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class MessageService {
    endUser: any;
    sub: any;
    mLoadingEnded = false;
    paramData: any;
    md: MessageData;
    msgToSend: string;
    timeLineOfMessages = [];
    thisUserIdentifier: number;
    feed: any;
    hidingList = false
    d = 0;
    sd: any;
    lastMsg: any;
    constructor(private data: AuthData, private Random: Random) {
    }

    decryptingAndInjectingNewUser(a: string): void {
        try {
            console.log('decrypting starts');
            let endata = a.toString().replace(/p1L2u3S/g, '+').replace(/s1L2a3S4h/g, '/').replace(/e1Q2u3A4l/g, '=');
            let dedata = crypto.AES.decrypt(endata, this.Random.setKey());
            console.log('fine ' + endata);
            this.endUser = JSON.parse(dedata.toString(crypto.enc.Utf8));
            console.log('Decoded ' + 'userId = ' + this.endUser.uid);
            this.mLoadingEnded = true;
            if (this.data.heicsaUser.uId > this.endUser.uid) {
                this.thisUserIdentifier = 1;
            } else {
                this.thisUserIdentifier = 2;
            }
            this.getMessages();
        } catch (e) {
            console.log('error occured in decrpytion' + ' ' + e)
        }

    }
    clearAndInjectNewUser(a: any): void {
        this.msgToSend = undefined;
        this.endUser = { imgUrl: undefined, name: undefined, uid: undefined };
        this.timeLineOfMessages = [];
        this.thisUserIdentifier = undefined;
        this.decryptingAndInjectingNewUser(a);
    }

    inOut(m: number): boolean {
        return (m === this.thisUserIdentifier);
    }

    async msg(a: string) {
        this.msgToSend = undefined;
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
            await database().ref(`messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}/${md.t}`).set(md).then(
                () => {
                    let c =23+this.d;
                    this.lastMsg = this.timeLineOfMessages[c];
                    this.timeLineOfMessages.pop();
                    if (this.normalTime(md.t) === this.normalTime(this.lastMsg.t)) {
                        this.lastMsg.t = 8;
                    } else {
                        this.sd = this.normalTime(this.lastMsg.t);
                    }
                    this.timeLineOfMessages.push(md);
                    this.d++
                    this.lastMsg= '';
                }
            );
        } catch (e) {
            console.log(e.message);
        }
    }

    ucID(a: string, b: string): string {
        return (a > b) ? (a + '_' + b) : (b + '_' + a);
    }

    timeReturn(ts: any): boolean {
        if (ts == 8) {
            return true;
        } else {
            return false;
        }
    }
    normalTime(a: any): any {
        var date_ob = new Date(a);
        var hours = ("0" + date_ob.getHours()).slice(-2)
        var minutes = ("0" + date_ob.getMinutes()).slice(-2);
        var seconds = ("0" + date_ob.getSeconds()).slice(-2);
        return `${hours}:${minutes}`;
    }
    async getMessages(): Promise<void> {
        console.log('Get Messages');
        if (this.timeLineOfMessages.length === 0) {
            await database()
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
                        }];
                    } else {
                        // console.log(s.val());
                        let dataI25a = Object.values(s.val());
                        for (let i = 0; i < (dataI25a.length - 2); i++) {
                            this.timeLineOfMessages.push(dataI25a[i]);
                        }
                    }
                });
        }
        this.sd = this.normalTime(this.timeLineOfMessages[0].t);
        for (let i = 0; i < this.timeLineOfMessages.length; i++) {
            if (this.sd === this.normalTime(this.timeLineOfMessages[i].t)) {
                this.timeLineOfMessages[i].t = 8;
            } else {
                this.sd = this.normalTime(this.timeLineOfMessages[i].t)
            }
        }
        database()
            .ref(`/messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}`)
            .limitToLast(1)
            .on('value', (data) => {
                let d: any = Object.values(data.val());
                for (let i = 0; i < d.length; i++) {
                    if (this.timeLineOfMessages.includes(d[i])) {
                    } else {
                        this.timeLineOfMessages.push(d[i]);
                    }
                }
            });
    }
}
