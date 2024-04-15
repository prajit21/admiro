import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-border-displays',
  templateUrl: './border-displays.component.html',
  styleUrl: './border-displays.component.scss'
})
export class BorderDisplaysComponent {

  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;

}
