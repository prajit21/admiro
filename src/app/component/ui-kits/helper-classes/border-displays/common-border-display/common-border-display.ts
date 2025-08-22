import { Component, input } from '@angular/core';
import { titleData } from '../../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-border-display',
    imports: [CommonModule],
    templateUrl: './common-border-display.html',
    styleUrl: './common-border-display.scss'
})
export class CommonBorderDisplay {

  readonly data = input<titleData[]>();

}
