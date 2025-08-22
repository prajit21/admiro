import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonBorderDisplay } from './common-border-display/common-border-display';

@Component({
    selector: 'app-border-displays',
    imports: [CommonModule, CommonBorderDisplay],
    templateUrl: './border-displays.html',
    styleUrl: './border-displays.scss'
})
export class BorderDisplays {

  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;

}
