import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../message.service';
import { Messages } from 'src/app/interfaces/message';
import { database } from 'firebase';
import { AuthData } from 'src/app/accounts/services/auth.service';
@Component({
  selector: 'out-going-msg',
  templateUrl: './out-going-msg.component.html',
  styleUrls: ['./out-going-msg.component.css']
})
export class OutGoingMsgComponent implements OnInit {
  @Input() 'msgData': Messages;
  @Input() 'enduserid': string;
  sendBoolean: boolean;

  constructor(public msgSer: MessageService,private data: AuthData) { }

  async SendMessage(){
    this.sendBoolean = false;
    try {
      if(this.msgData.s.sts == 'sending'){
        this.msgData.s.sts = 'send';
        await database().ref(`messages/${this.ucID(this.data.heicsaUser.uId,this.enduserid )}/${this.msgData.t}`).set(this.msgData).then(() => {
       this.sendBoolean = true;
      })
      } else {
        this.sendBoolean = true;
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  ucID(a: string, b: string): string {
    return (a > b) ? (a + '_' + b) : (b + '_' + a);
}
  ngOnInit(): void {
    this.SendMessage();
  }
}
