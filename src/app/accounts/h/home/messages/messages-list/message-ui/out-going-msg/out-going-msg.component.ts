import { Component, Input, OnInit } from '@angular/core';
import { MessageData } from '../message-ui.component';
@Component({
  selector: 'out-going-msg',
  templateUrl: './out-going-msg.component.html',
  styleUrls: ['./out-going-msg.component.css']
})
export class OutGoingMsgComponent implements OnInit {
@Input() 'msgData':MessageData
  constructor() { }

  ngOnInit(): void {
  }

}
