import { Component, Input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-styles-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-styles-background.component.html',
  styleUrl: './common-styles-background.component.scss'
})
export class CommonStylesBackgroundComponent {

  @Input() data: titleData[];

}
