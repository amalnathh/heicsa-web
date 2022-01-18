import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { database, firestore } from 'firebase';
import { AuthData } from "../../../services/auth.service";
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  sub: any;
  id: any;
  userDETAILS: any;
  myUsername: string;
  chatID: string;
  dbLoad = false;
  reqSend = false;
  msgthisuser = false;
  key = Date.now();
  isAFriend: any[];

  constructor(private router: Router, private aRoute: ActivatedRoute, private ad: AuthData) {
    this.sub = this.aRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    database().ref(`usernames/${this.id}`).once('value', (v) => {
      console.log(v.val());
      this.userDETAILS = v.val();
    }).then(() => {
      this.dbLoad = true;
      firestore()
        .doc(`heicsa/${this.ad.heicsaUser.uId}/userdata/private/cdata/contactList`).get().then(r => {
          if (r.data() != null) {
            this.isAFriend = Object.values(r.data());
            if (this.isAFriend.includes(this.id)) {
              this.reqSend = true;
            } else {
              this.reqSend = false;
            }
          }
        })
    })
    firestore().doc(`heicsa/${this.ad.heicsaUser.uId}/userdata/private`).get().then(r => {
      this.myUsername = r.data().username;
    })
  }

  // req() {
  //   firestore()
  //     .doc(`heicsa/${this.ad.heicsaUser.uId}/userdata/private/cdata/contactList`)
  //     .set({ [this.key]: this.id }, { merge: true })
  //     .then(() => { this.reqSend = true; })
  // }

  sendMsg() {
    firestore()
      .doc(`heicsa/${this.ad.heicsaUser.uId}/userdata/private/cdata/contactList`)
      .set({ [this.id]: this.key }, { merge: true }).then(() => { console.log('Success') });
    firestore().doc(`heicsa/${this.userDETAILS.uid}/userdata/msgReq`).set({ [this.myUsername]: this.key }, { merge: true });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
