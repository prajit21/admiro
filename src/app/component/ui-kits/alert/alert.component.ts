import { Component } from '@angular/core';
import *as Data from '../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  public darkAlert = Data.darkThemAlert;
  public LightAlert = Data.lightThemeAlert;

}
