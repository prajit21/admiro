import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicInputGroupsComponent } from './basic-input-groups/basic-input-groups.component';
import { ButtonAddonsComponent } from './button-addons/button-addons.component';
import { ButtonsDropdownsComponent } from './buttons-dropdowns/buttons-dropdowns.component';
import { CheckboxesAndRadiosComponent } from './checkboxes-and-radios/checkboxes-and-radios.component';
import { CustomFileInputComponent } from './custom-file-input/custom-file-input.component';
import { CustomFormsComponent } from './custom-forms/custom-forms.component';
import { InputGroupsSizingComponent } from './input-groups-sizing/input-groups-sizing.component';
import { SegmentedButtonsComponent } from './segmented-buttons/segmented-buttons.component';
import { VariationAddonsComponent } from './variation-addons/variation-addons.component';
import { MultipleInputsComponent } from './multiple-inputs/multiple-inputs.component';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [CommonModule, BasicInputGroupsComponent, ButtonAddonsComponent, ButtonsDropdownsComponent
    , CheckboxesAndRadiosComponent, CustomFileInputComponent, CustomFormsComponent, InputGroupsSizingComponent
    , SegmentedButtonsComponent, VariationAddonsComponent, MultipleInputsComponent],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.scss'
})
export class InputGroupComponent {

}
