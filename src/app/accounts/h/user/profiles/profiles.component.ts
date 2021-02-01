import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { database, firestore } from 'firebase';
import { merge } from 'rxjs';
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

  constructor(private router: Router, private aRoute: ActivatedRoute, private ad: AuthData) {
    this.sub = this.aRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    database().ref(`usernames/${this.id}`).once('value', (v) => {
      console.log('success')
      this.userDETAILS = v.val();
    }).then(() => {
      this.dbLoad = true;
    })
  } 

  req() {
    firestore()
    .doc(`heicsa/${this.ad.heicsaUser.uId}/userdata/private/cdata/contactList`)
    .set({[this.key]:this.id},{merge: true})
    .then(() => { this.reqSend = true; })
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
