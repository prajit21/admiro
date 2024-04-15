import { Component, Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-common-borderstyle',
  templateUrl: './common-borderstyle.component.html',
  styleUrl: './common-borderstyle.component.scss'
})
export class CommonBorderstyleComponent {

  @Input() data: titleData[];

}
