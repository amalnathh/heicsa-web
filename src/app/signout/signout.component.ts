import { Component, OnInit } from '@angular/core';
import {AuthService} from '../accounts/services/auth.service';
@Component({
  selector: 'app-signout',
  template:`<div><p>Signing you out</p></div>`,
  styles:['div:{display: flex;justify-content:center;align-items:center;height:100vh;width:100vw}']
})
export class SignoutComponent implements OnInit {

  constructor(public as: AuthService) { 
    as.SignOut()
  }

  ngOnInit(): void {
    this.as.SignOut()
  }

}
