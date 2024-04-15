import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-styles-backgroud',
  templateUrl: './styles-backgroud.component.html',
  styleUrl: './styles-backgroud.component.scss'
})
export class StylesBackgroudComponent {

  public DarkBackgrounData = borderData.DarkBackground;
  public LightBackgroundsData = borderData.Lightbackgrounds;
  public ExtendedBackgroundData = borderData.ExtendedBackground;

}
