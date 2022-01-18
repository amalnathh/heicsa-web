import { Component, ElementRef, OnInit } from '@angular/core';
import { database, firestore } from 'firebase';
import { AuthData } from '../../../../services/auth.service';
import * as cjs from 'crypto-js';
import { Random } from '../../../../services/random.service';
import { MessageService } from "../message.service";

export interface MessagesList {
    imgUrl: string;
    name: string;
    uid: string;
}

@Component({
    selector: 'app-messages-list',
    templateUrl: './messages-list.component.html',
    styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
    friendsListFromDb: any;
    friend: [{ imgUrl: string, name: string, uid: string, lastMsg: any, time: number }];
    b: any;
    uid: string;
    messagesListNumber:number;
    messagesLoading= true;
    container: ElementRef;

    constructor(private hu: AuthData, private random: Random, private msgService: MessageService) { 
        this.messagesListNumber = 0;
        this.messagesLoading = true;
        if (hu.heicsaUser) {
            try {
                firestore().doc(`heicsa/${hu.heicsaUser.uId}/userdata/private/cdata/contactList`).get().then((result) => {
                    this.friendsListFromDb = Object.keys(result.data());
                    console.log(this.friendsListFromDb);
                    firestore().doc(`heicsa/${this.hu.heicsaUser.uId}/userdata/msgReq`).get().then(r=>{
                        let abc = Object.keys(r.data());
                        for(let i=0;i<abc.length;i++){
                            this.friendsListFromDb.push(abc[i]);
                        }
                    })
                    for (let i = 0; i < this.friendsListFromDb.length; i++) {
                        this.friendDetails(this.friendsListFromDb[i]).then((result: { imgUrl: string, name: string, uid: string, lastMsg: any, time: number }) => {
                                console.log('starting..');
                                if (this.friend == null) {
                                    this.friend = [result];
                                } else {
                                    this.friend.push(result);
                                }
                                // if (i === (this.friendsListFromDb.length - 1)) {
                                //     localStorage.setItem('MessagesList', JSON.stringify(this.friend));
                                // }
                            });
                    }
                });
            } catch (e) {
                console.log('From constructor ' + e.message);
            }
        }
    }

    encrypt(a: any): string {
        let encryptedData = cjs.AES.encrypt(JSON.stringify(a), this.random.setKey()).toString().replace(/\+/g, 'p1L2u3S').replace(/\//g, 's1L2a3S4h').replace(/=/g, 'e1Q2u3A4l');
        return encryptedData;
    }

    Fa26gsa(a: any): void {
        let b = a;
        this.msgService.hidingList = true;
        this.msgService.clearAndInjectNewUser(this.encrypt(b));
    }

    async friendDetails(a: string): Promise<{ imgUrl?: string, name: string, uid: string, lastMsg: any, time: number }> {
        console.log("start");
        let dbData: { imgUrl?: string, name?: string, uid?: string };
        let mdbData: any;
        try {
            await database().ref(`usernames/${a}`).once('value', (snapshot) => {
                dbData = snapshot.val();
            });
            await database()
                .ref(`/messages/${this.ucID(this.hu.heicsaUser.uId, dbData.uid)}`)
                .limitToLast(1)
                .once('value', (s) => {
                    if (s.val() == null) {
                        mdbData = [ {
                            m: 'Send a message',
                            s: {
                               I: 1,
                               sts: 'send'
                            },
                            t: Date.now()
                        }];
                    } else {
                        mdbData = Object.values(s.val());
                    }
                });

            if (dbData.imgUrl == null) {
                dbData.imgUrl = 'assets/app/home/astronaut.png';
            }
            if (mdbData[0].m.length > 20) {
                mdbData[0].m = mdbData[0].m.slice(0, 20);
            }
            if (mdbData == null) { }
        } catch (error) {
            console.log(error.message);
        }
        this.messagesListNumber++;
        console.log(this.messagesListNumber);
        console.log(this.friendsListFromDb);
        if(this.messagesListNumber == (this.friendsListFromDb.length)){
            this.messagesLoading = false;
        }
        return {
            imgUrl: dbData.imgUrl, name: dbData.name, uid: dbData.uid, lastMsg: mdbData[0].m, time: mdbData[0].t
        };
    }

    timeReturn(ts: any): string {
        let date_ob = new Date(ts);
        let hours = ('0' + date_ob.getHours()).slice(-2);
        let minutes = ('0' + date_ob.getMinutes()).slice(-2);
        return `${hours}:${minutes}`;
    }

    ucID(a: string, b: string): string {
        return (a > b) ? (a + '_' + b) : (b + '_' + a);
    }

    ngOnInit() {
    }
}
