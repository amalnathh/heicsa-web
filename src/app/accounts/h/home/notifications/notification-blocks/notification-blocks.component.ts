import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationH } from "../../../../../interfaces/notification";
@Component({
  selector: 'app-notification-blocks',
  templateUrl: './notification-blocks.component.html',
  styleUrls: ['./notification-blocks.component.css']
})
export class NotificationBlocksComponent implements OnInit {
  @Input() 'Notification': NotificationH;
  constructor(private router: Router) { }
  navigateToOrgin() {
    this.router.navigate([this.Notification.msgPointerUrl])
  }
  ngOnInit(): void {
  }

}
