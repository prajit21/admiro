import { Component } from '@angular/core';
import { Disabledoutlineswitch } from '../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-disabled-outline-switch',
  templateUrl: './disabled-outline-switch.component.html',
  styleUrl: './disabled-outline-switch.component.scss'
})
export class DisabledOutlineSwitchComponent {

  public disableoutline = Disabledoutlineswitch;

}
