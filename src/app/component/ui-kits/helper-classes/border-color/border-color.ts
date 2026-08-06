import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Bordercolors } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-border-color',
  imports: [],
  templateUrl: './border-color.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './border-color.scss',
})
export class BorderColor {
  public borderColorData = Bordercolors;
}
