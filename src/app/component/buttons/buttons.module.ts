import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ButtonsRoutingModule } from './buttons-routing.module';

import { ButtonsComponent } from './buttons.component';


@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    SharedModule
  ]
})
export class ButtonsModule { }
