import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimatedButtonsComponent } from './animated-buttons/animated-buttons.component';
import { BasicRadioCheckboxComponent } from './basic-radio-checkbox/basic-radio-checkbox.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from './custom-radio/custom-radio.component';
import { DefaultCheckboxComponent } from './default-checkbox/default-checkbox.component';
import { DefaultRadioComponent } from './default-radio/default-radio.component';
import { DefaultSwitchComponent } from './default-switch/default-switch.component';
import { ImagesCheckboxComponent } from './images-checkbox/images-checkbox.component';
import { InlineInputTypeComponent } from './inline-input-type/inline-input-type.component';
import { OutlinedCheckboxStyleComponent } from './outlined-checkbox-style/outlined-checkbox-style.component';
import { RadioToggleButtonsComponent } from './radio-toggle-buttons/radio-toggle-buttons.component';
import { ImagesRadioComponent } from './images-radio/images-radio.component';

@Component({
    selector: 'app-checkbox-radio',
    imports: [CommonModule, AnimatedButtonsComponent, BasicRadioCheckboxComponent, CustomCheckboxComponent, CustomRadioComponent,
        DefaultCheckboxComponent, DefaultRadioComponent, DefaultSwitchComponent, ImagesCheckboxComponent, InlineInputTypeComponent, OutlinedCheckboxStyleComponent,
        RadioToggleButtonsComponent, ImagesRadioComponent],
    templateUrl: './checkbox-radio.component.html',
    styleUrl: './checkbox-radio.component.scss'
})
export class CheckboxRadioComponent {

}
