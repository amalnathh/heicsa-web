import { Injectable } from '@angular/core';
import { database } from 'firebase';
import { AuthData } from 'src/app/accounts/services/auth.service';
import { Messages } from '../../../../interfaces/message';
import { Random } from '../../../services/random.service';
import * as crypto from 'crypto-js';
@Injectable({
    providedIn: 'root',
})
export class MessageService {
    endUser: any;
    sub: any;
    mLoadingEnded = false;
    paramData: any;
    md: Messages;
    msgToSend: string;
    timeLineOfMessages = [];
    thisUserIdentifier: number;
    feed: any;
    hidingList = false
    d = 0;

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
        let md:Messages = {
            m:a,
            s:{
                I:this.thisUserIdentifier,
                sts:'sending'
            },
            t:Date.now()
        }
        if ((a === '') || (a === null) || (a === undefined)) {
        } else { 
            this.timeLineOfMessages.push(md)
        }
    }

  

    ucID(a: string, b: string): string {
        return (a > b) ? (a + '_' + b) : (b + '_' + a);
    }
msgSeen(a:number){
    let d ='seen';
    database().ref(`/messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}/${a}/m/s/sts`).set(d).then(()=>{})
}
    normalTime(a: any): any {
        var date_ob = new Date(a);
        var hours = ("0" + date_ob.getHours()).slice(-2)
        var minutes = ("0" + date_ob.getMinutes()).slice(-2);
        return `${hours}:${minutes}`;
    }
    async getMessages(): Promise<void> {
        if (this.timeLineOfMessages.length === 0) {
            await database()
                .ref(`/messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}`)
                .limitToLast(25)
                .once('value', (s) => {
                    if (s.val() == null) {
                        this.timeLineOfMessages = [{
                            m: 'Say Hai!',
                            s: {
                                I: 1,
                                sts: 'send'
                            },
                            t: Date.now()
                        }];
                    } else {
                        let dataI25a: any = Object.values(s.val());
                        let gg = 'delivered'
                        for (let i = 0; i < (dataI25a.length); i++) {
                            if (!this.inOut(dataI25a[i].s.I)) {
                                if (dataI25a[i].s.sts == 'send') {
                                    database()
                                        .ref(`/messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}/${dataI25a[i].t}/s/sts`).set(gg);
                                }
                            }
                            this.timeLineOfMessages.push(dataI25a[i]);
                        }
                    }
                });
        }

        database()
            .ref(`/messages/${this.ucID(this.data.heicsaUser.uId, this.endUser.uid)}`)
            .limitToLast(1)
            .on('value', (data) => {
                let d: any = Object.values(data.val());
                for (let i = 0; i < d.length; i++) {
                    console.log('d.length is '+d.length)
                    if (this.timeLineOfMessages.includes(d[i])) {
                    } else {
                        if (this.inOut(d[i].s.I)) {
                            console.log('hehe');
                        } else {
                            console.log(d[i]);
                            this.timeLineOfMessages.push(d[i]);
                        }
                    }
                }
            });
    }
}
