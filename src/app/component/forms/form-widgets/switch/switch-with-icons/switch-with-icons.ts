import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IconSiwtchSizing } from '../../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-switch-with-icons',
  imports: [CommonModule],
  templateUrl: './switch-with-icons.html',
  styleUrl: './switch-with-icons.scss',
})
export class SwitchWithIcons {
  public IconsizeingData = IconSiwtchSizing;
}
