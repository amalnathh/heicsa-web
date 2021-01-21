import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesRoutingModule} from './messages-routing.module';
import {MessagesComponent} from './messages.component';
import {MessageUiComponent} from './messages-list/message-ui/message-ui.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessagesListComponent} from './messages-list/messages-list.component';
import {MatIconModule} from '@angular/material/icon';
import { IncommingMsgComponent } from './messages-list/message-ui/incomming-msg/incomming-msg.component';
import { OutGoingMsgComponent } from './messages-list/message-ui/out-going-msg/out-going-msg.component';


@NgModule({
    declarations: [MessagesComponent, MessageUiComponent, MessagesListComponent, IncommingMsgComponent, OutGoingMsgComponent],
    imports: [
        CommonModule,
        MessagesRoutingModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule
    ],
    exports: [
        MessageUiComponent
    ]
})
export class MessagesModule {
}
