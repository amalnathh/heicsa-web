import { Component, OnInit } from '@angular/core';
import { AuthService, AuthData } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  bio: string;
  constructor(
    public as: AuthService,
    public authdata: AuthData,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  closeBack(): void {
    if (this.authdata.c_b) {
      this.router.navigateByUrl('/home');
    } else {
      window.history.back();
    }
    this.authdata.c_b = false;
  }

  ngOnInit(): void { }
}
