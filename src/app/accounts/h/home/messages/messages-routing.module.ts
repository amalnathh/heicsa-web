import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessagesComponent} from './messages.component';
import {MessageUiComponent} from './messages-list/message-ui/message-ui.component';

const routes: Routes = [
    {
        path: '', component: MessagesComponent,
        children: [{
            path: ':enData', component: MessageUiComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagesRoutingModule {
}
