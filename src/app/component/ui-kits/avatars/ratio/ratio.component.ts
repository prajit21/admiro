import { Component } from '@angular/core';
import { Ratio } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrl: './ratio.component.scss'
})
export class RatioComponent {

  public ratioData = Ratio;

}
