import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Disabledoutlineswitch } from '../../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-disabled-outline-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disabled-outline-switch.component.html',
  styleUrl: './disabled-outline-switch.component.scss'
})
export class DisabledOutlineSwitchComponent {

  public disableoutline = Disabledoutlineswitch;

}
