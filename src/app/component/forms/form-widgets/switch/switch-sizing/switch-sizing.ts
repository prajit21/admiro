import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { switchSizeing } from '../../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-switch-sizing',
  imports: [CommonModule],
  templateUrl: './switch-sizing.html',
  styleUrl: './switch-sizing.scss',
})
export class SwitchSizing {
  public sizeingData = switchSizeing;
}
