import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { LoginModule } from '../accounts/login/login.module';

@NgModule({
  declarations: [IntroComponent],
  imports: [CommonModule, IntroRoutingModule, MatButtonModule, LoginModule],
})
export class IntroModule {}
