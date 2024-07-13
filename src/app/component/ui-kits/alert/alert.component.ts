import { Component } from '@angular/core';
import *as Data from '../../../shared/data/ui-kits/alert';
import { CommonModule } from '@angular/common';
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { AlertWithIconsComponent } from './alert-with-icons/alert-with-icons.component';
import { BorderDirectionAlertComponent } from './border-direction-alert/border-direction-alert.component';
import { ColorAlertOutlineComponent } from './color-alert-outline/color-alert-outline.component';
import { CommonTopAlertsComponent } from './common-top-alerts/common-top-alerts.component';
import { DismissingDarkAlertComponent } from './dismissing-dark-alert/dismissing-dark-alert.component';
import { DismissingLightAlertComponent } from './dismissing-light-alert/dismissing-light-alert.component';
import { IconsTextAlertsComponent } from './icons-text-alerts/icons-text-alerts.component';
import { LeftBorderAlertComponent } from './left-border-alert/left-border-alert.component';
import { LiveAlertComponent } from './live-alert/live-alert.component';
import { OutlineAlertComponent } from './outline-alert/outline-alert.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, AdditionalContentComponent, AlertWithIconsComponent, BorderDirectionAlertComponent
    , ColorAlertOutlineComponent, CommonTopAlertsComponent, DismissingDarkAlertComponent, DismissingLightAlertComponent,
    IconsTextAlertsComponent, LeftBorderAlertComponent,LiveAlertComponent,OutlineAlertComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  public darkAlert = Data.darkThemAlert;
  public LightAlert = Data.lightThemeAlert;

}
