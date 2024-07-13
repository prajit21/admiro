import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { customSwitch } from '../../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-custom-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-switch.component.html',
  styleUrl: './custom-switch.component.scss'
})
export class CustomSwitchComponent {

  public customData = customSwitch;

}
