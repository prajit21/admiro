import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonStylesBackground } from './common-styles-background/common-styles-background';

@Component({
    selector: 'app-styles-backgroud',
    imports: [CommonModule, CommonStylesBackground],
    templateUrl: './styles-backgroud.html',
    styleUrl: './styles-backgroud.scss'
})
export class StylesBackgroud {

  public DarkBackgrounData = borderData.DarkBackground;
  public LightBackgroundsData = borderData.Lightbackgrounds;
  public ExtendedBackgroundData = borderData.ExtendedBackground;

}
