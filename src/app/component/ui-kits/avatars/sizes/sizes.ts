import { Component, ChangeDetectionStrategy } from '@angular/core';

import { avatarSize } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-sizes',
  imports: [],
  templateUrl: './sizes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sizes.scss',
})
export class Sizes {
  public SizeData = avatarSize;
}
