import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IconSiwtchSizing } from '../../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-switch-with-icons',
  imports: [],
  templateUrl: './switch-with-icons.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './switch-with-icons.scss',
})
export class SwitchWithIcons {
  public IconsizeingData = IconSiwtchSizing;
}
