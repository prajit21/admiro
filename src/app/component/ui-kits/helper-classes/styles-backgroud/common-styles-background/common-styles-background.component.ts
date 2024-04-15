import { Component, Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-styles-background',
  templateUrl: './common-styles-background.component.html',
  styleUrl: './common-styles-background.component.scss'
})
export class CommonStylesBackgroundComponent {

  @Input() data: titleData[];

}
