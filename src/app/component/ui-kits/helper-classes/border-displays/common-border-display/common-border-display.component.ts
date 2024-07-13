import { Component, Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-border-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-border-display.component.html',
  styleUrl: './common-border-display.component.scss'
})
export class CommonBorderDisplayComponent {

  @Input() data: titleData[];

}
