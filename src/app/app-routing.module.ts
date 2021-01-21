import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as guard from './auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'login', redirectTo: '/intro', pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then((m) => m.IntroModule),
    canActivate: [guard.LoginSignUpAuth],
  },
  {
    path: 'signup', loadChildren: () => import('./accounts/signup/signup.module').then((m) => m.SignupModule),
    canActivate: [guard.LoginSignUpAuth]
  },
  {
    path: 'home',
    loadChildren: () => import('./accounts/h/home/home.module').then((m) => m.HomeModule),
    canActivate: [guard.AuthGuard]
  },
  {
    path: 'settings', loadChildren: () => import('./accounts/h/settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./accounts/h/home/messages/messages.module').then((m) => m.MessagesModule) 
  }

];
//'./accounts/h/home/messages/messages.module').then((m) => m.MessagesModule)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
