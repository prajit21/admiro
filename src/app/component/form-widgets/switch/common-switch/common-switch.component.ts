import { Component } from '@angular/core';
import { commonSwitch } from '../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-common-switch',
  templateUrl: './common-switch.component.html',
  styleUrl: './common-switch.component.scss'
})
export class CommonSwitchComponent {

  public switchData = commonSwitch;

}
