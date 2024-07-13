import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonStylesBackgroundComponent } from './common-styles-background/common-styles-background.component';

@Component({
  selector: 'app-styles-backgroud',
  standalone: true,
  imports: [CommonModule,CommonStylesBackgroundComponent],
  templateUrl: './styles-backgroud.component.html',
  styleUrl: './styles-backgroud.component.scss'
})
export class StylesBackgroudComponent {

  public DarkBackgrounData = borderData.DarkBackground;
  public LightBackgroundsData = borderData.Lightbackgrounds;
  public ExtendedBackgroundData = borderData.ExtendedBackground;

}
