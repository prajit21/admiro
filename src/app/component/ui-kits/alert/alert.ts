import { Component } from '@angular/core';
import *as Data from '../../../shared/data/ui-kits/alert';
import { CommonModule } from '@angular/common';
import { AdditionalContent } from './additional-content/additional-content';
import { AlertWithIcons } from './alert-with-icons/alert-with-icons';
import { CommonTopAlerts } from './common-top-alerts/common-top-alerts';
import { DismissingDarkAlert } from './dismissing-dark-alert/dismissing-dark-alert';
import { DismissingLightAlert } from './dismissing-light-alert/dismissing-light-alert';
import { LeftBorderAlert } from './left-border-alert/left-border-alert';
import { LiveAlert } from './live-alert/live-alert';
import { OutlineAlert } from './outline-alert/outline-alert';

@Component({
    selector: 'app-alert',
    imports: [CommonModule, AdditionalContent, AlertWithIcons,
         CommonTopAlerts, DismissingDarkAlert, DismissingLightAlert, LeftBorderAlert, LiveAlert, OutlineAlert],
    templateUrl: './alert.html',
    styleUrl: './alert.scss'
})
export class Alert {

  public darkAlert = Data.darkThemAlert;
  public LightAlert = Data.lightThemeAlert;

}
