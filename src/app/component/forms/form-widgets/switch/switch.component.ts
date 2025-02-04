import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonSwitchComponent } from './common-switch/common-switch.component';
import { DisabledOutlineSwitchComponent } from './disabled-outline-switch/disabled-outline-switch.component';
import { CustomSwitchComponent } from './custom-switch/custom-switch.component';
import { SwitchSizingComponent } from './switch-sizing/switch-sizing.component';
import { SwitchWithIconsComponent } from './switch-with-icons/switch-with-icons.component';
import { VariationOutlineSwitchComponent } from './variation-outline-switch/variation-outline-switch.component';

@Component({
    selector: 'app-switch',
    imports: [CommonModule, CommonSwitchComponent, DisabledOutlineSwitchComponent, CustomSwitchComponent, SwitchSizingComponent,
        SwitchWithIconsComponent, VariationOutlineSwitchComponent],
    templateUrl: './switch.component.html',
    styleUrl: './switch.component.scss'
})
export class SwitchComponent {

}
