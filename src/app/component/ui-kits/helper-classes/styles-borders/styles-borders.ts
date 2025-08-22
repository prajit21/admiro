import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonBorderstyle } from './common-borderstyle/common-borderstyle';

@Component({
    selector: 'app-styles-borders',
    imports: [CommonModule, CommonBorderstyle],
    templateUrl: './styles-borders.html',
    styleUrl: './styles-borders.scss'
})
export class StylesBorders {
  
  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWidth = borderData.borderWidth;
  public textColors = borderData.TextColor;

}
