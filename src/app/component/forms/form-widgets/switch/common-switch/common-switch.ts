import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { commonSwitch } from '../../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-common-switch',
  imports: [CommonModule],
  templateUrl: './common-switch.html',
  styleUrl: './common-switch.scss',
})
export class CommonSwitch {
  public switchData = commonSwitch;
}
