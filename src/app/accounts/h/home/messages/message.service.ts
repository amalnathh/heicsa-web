import { Injectable } from '@angular/core';
export interface contact {
  name: string;
  photoUrl: string;
  msg_Database_Url: string;
}
@Injectable({
  providedIn: 'root',
})
export class MessageService {

  info:contact;
  constructor() {

  }

  // msgDB = firestore().doc(this.info.msg_Database_Url);

}
