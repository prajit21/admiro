import { Component } from '@angular/core';
import * as  borderData from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';
import { CommonBorderDisplayComponent } from './common-border-display/common-border-display.component';

@Component({
  selector: 'app-border-displays',
  standalone: true,
  imports: [CommonModule,CommonBorderDisplayComponent],
  templateUrl: './border-displays.component.html',
  styleUrl: './border-displays.component.scss'
})
export class BorderDisplaysComponent {

  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;

}
