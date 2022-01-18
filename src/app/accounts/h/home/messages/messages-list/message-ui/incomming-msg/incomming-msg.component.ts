import { Component, HostListener, Input, OnInit, AfterViewChecked } from '@angular/core';
import { Messages } from 'src/app/interfaces/message';
import { MessageService } from '../../../message.service';
@Component({
  selector: 'incomming-msg',
  templateUrl: './incomming-msg.component.html',
  styleUrls: ['./incomming-msg.component.css']
})
export class IncommingMsgComponent implements OnInit {
  @Input() 'msgData': Messages
  constructor(public msgSer: MessageService) {
  }
  fuse = true;
  ngAfterViewChecked() {
    if (this.fuse) {
      this.msgSer.msgSeen(this.msgData.t);
      this.fuse = false;
    }
  }
  ngOnInit(): void {
  }

}
