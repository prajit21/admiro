import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CommonBorderstyle } from './common-borderstyle/common-borderstyle';
import * as borderData from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-styles-borders',
  imports: [CommonBorderstyle],
  templateUrl: './styles-borders.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './styles-borders.scss',
})
export class StylesBorders {
  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWidth = borderData.borderWidth;
  public textColors = borderData.TextColor;
}
