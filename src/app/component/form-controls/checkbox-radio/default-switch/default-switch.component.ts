import { Component } from '@angular/core';
import { defaultswitch } from '../../../../shared/data/form-controls/checkbox-radio';

@Component({
  selector: 'app-default-switch',
  templateUrl: './default-switch.component.html',
  styleUrl: './default-switch.component.scss'
})
export class DefaultSwitchComponent {

  public switches = defaultswitch;

}
