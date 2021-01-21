import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthData } from '../../services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  miniMenu = false;

  constructor(
    public router: Router,
    public AuthSer: AuthService,
    public authdata: AuthData
  ) {
  }

  ngOnInit(): void {
  }
}
