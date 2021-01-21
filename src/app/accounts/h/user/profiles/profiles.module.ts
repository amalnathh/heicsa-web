import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilesRoutingModule} from './profiles-routing.module';
import {ProfilesComponent} from './profiles.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MessagesModule} from '../../home/messages/messages.module';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [ProfilesComponent],
    imports: [
        CommonModule,
        ProfilesRoutingModule,
        MatProgressBarModule,
        MessagesModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class ProfilesModule {
}
