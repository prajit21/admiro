import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LargeProgressbars } from '../../../../shared/data/ui-kits/progress';

@Component({
    selector: 'app-large-progress-bars',
    imports: [CommonModule],
    templateUrl: './large-progress-bars.component.html',
    styleUrl: './large-progress-bars.component.scss'
})
export class LargeProgressBarsComponent {

  public largeProgressData = LargeProgressbars;

}
