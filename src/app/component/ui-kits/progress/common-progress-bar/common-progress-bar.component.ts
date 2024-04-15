import { Component, Input } from '@angular/core';
import { progress } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-common-progress-bar',
  templateUrl: './common-progress-bar.component.html',
  styleUrl: './common-progress-bar.component.scss'
})
export class CommonProgressBarComponent {

  @Input() data: progress[];

}
