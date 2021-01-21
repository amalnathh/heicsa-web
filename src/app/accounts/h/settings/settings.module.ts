import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PublicComponent } from './public/public.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [SettingsComponent, PublicComponent, PrivacyComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatRippleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SettingsModule { }
