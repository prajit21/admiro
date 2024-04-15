import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-styles-borders',
  templateUrl: './styles-borders.component.html',
  styleUrl: './styles-borders.component.scss'
})
export class StylesBordersComponent {
  
  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWidth = borderData.borderWidth;
  public textColors = borderData.TextColor;

}
