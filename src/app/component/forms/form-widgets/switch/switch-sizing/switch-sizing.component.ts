import { Component } from '@angular/core';
import { switchSizeing } from '../../../../../shared/data/forms-widgets/switch';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-switch-sizing',
    imports: [CommonModule],
    templateUrl: './switch-sizing.component.html',
    styleUrl: './switch-sizing.component.scss'
})
export class SwitchSizingComponent {

  public sizeingData = switchSizeing;

}
