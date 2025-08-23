import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-styles-background',
  imports: [CommonModule],
  templateUrl: './common-styles-background.html',
  styleUrl: './common-styles-background.scss',
})
export class CommonStylesBackground {
  readonly data = input<titleData[]>();
}
