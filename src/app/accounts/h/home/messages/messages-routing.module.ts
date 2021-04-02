import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessagesComponent} from './messages.component';

const routes: Routes = [
    {
        path: '', component: MessagesComponent,
        // children: [{
        //     path: ':enData', loadChildren: () => import('./messages-list/message-ui/message-ui.module').then((m) =>
        //         m.MessageUiModule)
        // }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagesRoutingModule {
}
