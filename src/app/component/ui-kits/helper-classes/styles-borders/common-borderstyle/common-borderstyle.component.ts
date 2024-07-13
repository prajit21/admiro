import { Component, Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-borderstyle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-borderstyle.component.html',
  styleUrl: './common-borderstyle.component.scss'
})
export class CommonBorderstyleComponent {

  @Input() data: titleData[];

}
