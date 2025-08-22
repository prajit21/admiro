import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { customSwitch } from '../../../../../shared/data/forms-widgets/switch';

@Component({
    selector: 'app-custom-switch',
    imports: [CommonModule],
    templateUrl: './custom-switch.html',
    styleUrl: './custom-switch.scss'
})
export class CustomSwitch {

  public customData = customSwitch;

}
