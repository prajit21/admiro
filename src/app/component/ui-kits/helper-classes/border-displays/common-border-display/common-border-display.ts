import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-border-display',
  imports: [],
  templateUrl: './common-border-display.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-border-display.scss',
})
export class CommonBorderDisplay {
  readonly data = input<titleData[]>();
}
