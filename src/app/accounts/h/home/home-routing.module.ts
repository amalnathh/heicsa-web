import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
 {
   path:'', component:HomeComponent,
   children:[{
     path:'messages',loadChildren:()=>import('../home/messages/messages.module').then((m)=>m.MessagesModule)
   }]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
