import { Component, OnInit } from '@angular/core';
import { firestore, database } from 'firebase';
import { AuthData } from '../../../../services/auth.service'
export interface MessagesList { imgUrl: string, name: string, uid: string }
@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  friends: any
  friend: [{ imgUrl: string, name: string, uid: string }];
  b: any;
  uid: string;
  constructor(hu: AuthData) {
    if (hu.heicsaUser) {
      firestore().doc(`accounts/${hu.heicsaUser.uId}/UserData/private`).get().then((result) => {
        this.friends = result.data();
        console.log(this.friends.messages);
        for (let i = 0; i < this.friends.messages.length; i++) {
          this.friendDetails(this.friends.messages[i]).then((result: { imgUrl: string, name: string, uid: string }) => {
            if (this.friend == null) {
              this.friend = [result];
            } else {
              this.friend.push(result);
            }
            if (i == (this.friends.messages.length - 1)) {
              localStorage.setItem("MessagesList", JSON.stringify(this.friend));
            }
          });
        }
      }).catch((err) => { console.log('MessageListComponent' + err) });
    }
  }
  chatID(uid1: string, uid2: string): string {
    if (uid1 < uid2) {
      return uid1 + '_' + uid2;
    }else{
      return uid2 + '_' + uid1;
    }
  }
  async friendDetails(a: string) {
    await database().ref(`usernames/${a}`).once('value', (snapshot) => {
      this.b = snapshot.val();
    }, (err) => { console.log('MessagesListComponent.ts/friendDetails' + err) });
    return this.b;
  }

  ngOnInit() {
  }

}
