import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonRoutingModule } from './coming-soon-routing.module';

import { SimpleComingComponent } from './simple-coming/simple-coming.component';
import { ComingBgVideoComponent } from './coming-bg-video/coming-bg-video.component';
import { ComingBgImageComponent } from './coming-bg-image/coming-bg-image.component';


@NgModule({
  declarations: [
    SimpleComingComponent,
    ComingBgVideoComponent,
    ComingBgImageComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule
  ]
})
export class ComingSoonModule { }
