import {contact} from '../accounts/h/home/messages/message.service';

export interface UserDetailsPublic {
  details: {
    name: string;
    imgUrl: string;
    bio: string;
    userRef: string
  };
  media: {
    storagePath: any
    databasePath: any
  };
  friends: {
    friends: [{ username: string }]
    messages: {
      userRef: string;
      info: contact;
    }
  };

  location: {
    country: string;
    state: string;
    place: string;
  };
  personalInfo: {
    DateOfBirth: any;
    emailId: string;
    education: [{ institution: string; place: string }]
  };
  meta: {
    lastSignIn: any;
    ip: any;
  };
}
