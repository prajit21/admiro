import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { IconsRoutingModule } from './icons-routing.module';

import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';

@NgModule({
  declarations: [
    FlagIconComponent,
    FontAwesomeComponent,
    IcoIconComponent,
    FeatherIconComponent,
    ThemifyIconComponent,
    WeatherIconComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule
  ]
})
export class IconsModule { }
