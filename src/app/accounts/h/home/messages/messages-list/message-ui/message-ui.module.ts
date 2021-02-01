import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageUiComponent } from './message-ui.component';
import { MessageUiRoutingModule } from './message-ui-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IncommingMsgComponent } from './incomming-msg/incomming-msg.component';
import { OutGoingMsgComponent } from './out-going-msg/out-going-msg.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [MessageUiComponent, IncommingMsgComponent, OutGoingMsgComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        MatTooltipModule,
        MessageUiRoutingModule
    ],
    exports: [
        MessageUiComponent
    ]
})
export class MessageUiModule {
}
