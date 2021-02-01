import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessageUiComponent} from './message-ui.component';

const routes: Routes = [
    {
        path: ':enData', component: MessageUiComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessageUiRoutingModule {
}
