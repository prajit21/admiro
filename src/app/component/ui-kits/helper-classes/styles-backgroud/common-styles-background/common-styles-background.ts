import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-styles-background',
  imports: [],
  templateUrl: './common-styles-background.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-styles-background.scss',
})
export class CommonStylesBackground {
  readonly data = input<titleData[]>();
}
