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
  timeReturn(ts:any): string {
    var date_ob = new Date(ts);
    var hours = ("0" + date_ob.getHours()).slice(-2)
    var minutes = ("0" + date_ob.getMinutes()).slice(-2);
    var seconds = ("0" + date_ob.getSeconds()).slice(-2);
    return `${hours}:${minutes}`
}
  ngOnInit(): void {
  }

}
