import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MessageData } from '../message-ui.component';
@Component({
  selector: 'incomming-msg',
  templateUrl: './incomming-msg.component.html',
  styleUrls: ['./incomming-msg.component.css']
})
export class IncommingMsgComponent implements OnInit {
  @Input() 'msgData': MessageData
  constructor() { 
  }
  @HostListener('window.onload', ['$event'])
  msgRead() {
    console.log('msg seen')
    this.msgData.s.e.s = true;
  }

  ngOnInit(): void {
  }

}
