import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as guard from '../auth.guard';
const routes: Routes = [
  {
    path: 'user/:id', loadChildren: () => import('./h/user/profiles/profiles.module').then((m) => m.ProfilesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule { }
