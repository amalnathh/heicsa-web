import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  LoginToHome = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.router.navigateByUrl('/home').then(r => {
          this.LoginToHome = false;
        });
      } else {
        this.LoginToHome = false;
        localStorage.clear();
      }
    });
  }
}
