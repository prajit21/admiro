import { Component, Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-border-display',
  templateUrl: './common-border-display.component.html',
  styleUrl: './common-border-display.component.scss'
})
export class CommonBorderDisplayComponent {

  @Input() data: titleData[];

}
