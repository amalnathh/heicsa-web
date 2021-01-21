import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    MatSlideToggleModule
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
