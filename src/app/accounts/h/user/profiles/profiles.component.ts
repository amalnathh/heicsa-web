import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { database } from 'firebase';
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
  constructor(private router: Router, private aRoute: ActivatedRoute, private ad: AuthData) {
    this.sub = this.aRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }
  msgREQ():string {
    if (this.userDETAILS.uid < this.ad.heicsaUser.uId) {
      return this.userDETAILS.uid + '_' + this.ad.heicsaUser.uId;
    } else {
      return this.ad.heicsaUser.uId + '_' + this.userDETAILS.uid;
    }
  }
  req(){
    return 2;
  }
  ngOnInit() {
    database().ref(`usernames/${this.id}`).once('value', (v) => {
      this.userDETAILS = v.val();
    }).then(() => {
      this.dbLoad = true;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
