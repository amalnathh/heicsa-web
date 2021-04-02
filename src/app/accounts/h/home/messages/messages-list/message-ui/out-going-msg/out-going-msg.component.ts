import { Component, Input, OnInit } from '@angular/core';
import { MessageData } from '../message-ui.component';
import { MessageService } from '../../../message.service';
@Component({
  selector: 'out-going-msg',
  templateUrl: './out-going-msg.component.html',
  styleUrls: ['./out-going-msg.component.css']
})
export class OutGoingMsgComponent implements OnInit {
  @Input() 'msgData': MessageData
  constructor(public msgSer: MessageService) { }
  ngOnInit(): void {
  }
}
