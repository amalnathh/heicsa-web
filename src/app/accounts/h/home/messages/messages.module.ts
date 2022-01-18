import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { MatButtonModule } from '@angular/material/button';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import {MessageUiModule} from './messages-list/message-ui/message-ui.module';
import {MatCardModule} from '@angular/material/card';
@NgModule({
    declarations: [MessagesComponent, MessagesListComponent],
    imports: [
        CommonModule,
        MessagesRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatRippleModule,
        MessageUiModule,
        MatCardModule
    ],
    exports: [
    ]
})
export class MessagesModule {
}
