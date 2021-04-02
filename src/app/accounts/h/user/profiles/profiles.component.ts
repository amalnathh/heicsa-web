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
      console.log('success');
      this.userDETAILS = v.val();
    }).then(() => {
      this.dbLoad = true;
      firestore()
        .doc(`heicsa/${this.ad.heicsaUser.uId}/userdata/private/cdata/contactList`).get().then(r => {
          this.isAFriend = Object.values(r.data());
          if (this.isAFriend.includes(this.id)) {
            this.reqSend = true;
          } else {
            this.reqSend = false;
          }
        })
    })
  }

  req() {
    navigator.userAgent
    firestore()
      .doc(`heicsa/${this.ad.heicsaUser.uId}/userdata/private/cdata/contactList`)
      .set({ [this.key]: this.id }, { merge: true })
      .then(() => { this.reqSend = true; })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
