import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (auth().currentUser) {
      console.log('ag true');
      return true;
    }
    this.router.navigateByUrl('/intro');
    console.log('ag false')
    return false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class LoginSignUpAuth implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (auth().currentUser) {
      this.router.navigateByUrl('/home');
      console.log('lsg false')
      return false;
    }
    console.log('lsg true')
    return true;
  }
}
