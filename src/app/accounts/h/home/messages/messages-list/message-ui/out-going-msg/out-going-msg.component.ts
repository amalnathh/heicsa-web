import { Component, Input, OnInit } from '@angular/core';
import { MessageData } from '../message-ui.component';
@Component({
  selector: 'out-going-msg',
  templateUrl: './out-going-msg.component.html',
  styleUrls: ['./out-going-msg.component.css']
})
export class OutGoingMsgComponent implements OnInit {
  @Input() 'msgData': MessageData
  constructor() { }
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
