import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ratio } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-ratio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ratio.component.html',
  styleUrl: './ratio.component.scss'
})
export class RatioComponent {

  public ratioData = Ratio;

}
