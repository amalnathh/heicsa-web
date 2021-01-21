import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthData} from '../../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  Dark = true;
  constructor(private router: Router, public authdata: AuthData) {}

  navigate(): void {
    this.authdata.c_b = false;
    this.router.navigateByUrl('/settings');
  }
  ngOnInit(): void {}
}
