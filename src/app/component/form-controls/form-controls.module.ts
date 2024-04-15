import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
import { FormControlsRoutingModule } from './form-controls-routing.module';

import { BaseInputComponent } from './base-input/base-input.component';
import { SimpleExampleComponent } from './base-input/simple-example/simple-example.component';
import { SizingComponent } from './base-input/sizing/sizing.component';
import { EdgesStyleComponent } from './base-input/edges-style/edges-style.component';
import { FlatStyleComponent } from './base-input/flat-style/flat-style.component';
import { RaiseStyleComponent } from './base-input/raise-style/raise-style.component';
import { BasicInputControlComponent } from './base-input/basic-input-control/basic-input-control.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { DefaultCheckboxComponent } from './checkbox-radio/default-checkbox/default-checkbox.component';
import { DefaultRadioComponent } from './checkbox-radio/default-radio/default-radio.component';
import { CustomCheckboxComponent } from './checkbox-radio/custom-checkbox/custom-checkbox.component';
import { ImagesCheckboxComponent } from './checkbox-radio/images-checkbox/images-checkbox.component';
import { ImagesRadioComponent } from './checkbox-radio/images-radio/images-radio.component';
import { CustomRadioComponent } from './checkbox-radio/custom-radio/custom-radio.component';
import { DefaultSwitchComponent } from './checkbox-radio/default-switch/default-switch.component';
import { InlineInputTypeComponent } from './checkbox-radio/inline-input-type/inline-input-type.component';
import { AnimatedButtonsComponent } from './checkbox-radio/animated-buttons/animated-buttons.component';
import { BasicRadioCheckboxComponent } from './checkbox-radio/basic-radio-checkbox/basic-radio-checkbox.component';
import { RadioToggleButtonsComponent } from './checkbox-radio/radio-toggle-buttons/radio-toggle-buttons.component';
import { OutlinedCheckboxStyleComponent } from './checkbox-radio/outlined-checkbox-style/outlined-checkbox-style.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { ButtonAddonsComponent } from './input-group/button-addons/button-addons.component';
import { CustomFormsComponent } from './input-group/custom-forms/custom-forms.component';
import { CustomFileInputComponent } from './input-group/custom-file-input/custom-file-input.component';
import { SegmentedButtonsComponent } from './input-group/segmented-buttons/segmented-buttons.component';
import { ButtonsDropdownsComponent } from './input-group/buttons-dropdowns/buttons-dropdowns.component';
import { CheckboxesAndRadiosComponent } from './input-group/checkboxes-and-radios/checkboxes-and-radios.component';
import { BasicInputGroupsComponent } from './input-group/basic-input-groups/basic-input-groups.component';
import { VariationAddonsComponent } from './input-group/variation-addons/variation-addons.component';
import { InputGroupsSizingComponent } from './input-group/input-groups-sizing/input-groups-sizing.component';
import { MultipleInputsComponent } from './input-group/multiple-inputs/multiple-inputs.component';
import { MegaOptionsComponent } from './mega-options/mega-options.component';
import { VariationRadioComponent } from './mega-options/variation-radio/variation-radio.component';
import { VariationChecknoxComponent } from './mega-options/variation-checknox/variation-checknox.component';
import { DefaultStyleComponent } from './mega-options/default-style/default-style.component';
import { SolidBorderStyleComponent } from './mega-options/solid-border-style/solid-border-style.component';
import { InlineStyleComponent } from './mega-options/inline-style/inline-style.component';
import { VerticalStyleComponent } from './mega-options/vertical-style/vertical-style.component';
import { HorizontalStyleComponent } from './mega-options/horizontal-style/horizontal-style.component';
import { WithoutBordersStyleComponent } from './mega-options/without-borders-style/without-borders-style.component';
import { OfferBordersStyleComponent } from './mega-options/offer-borders-style/offer-borders-style.component';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { TooltipFormValidationComponent } from './forms-validation/tooltip-form-validation/tooltip-form-validation.component';
import { BrowserComponent } from './forms-validation/browser/browser.component';
import { ValidationFormComponent } from './forms-validation/validation-form/validation-form.component';

@NgModule({
  declarations: [
    BaseInputComponent,
    SimpleExampleComponent,
    SizingComponent,
    BasicInputControlComponent,
    FlatStyleComponent,
    EdgesStyleComponent,
    RaiseStyleComponent,
    CheckboxRadioComponent,
    DefaultCheckboxComponent,
    DefaultRadioComponent,
    CustomCheckboxComponent,
    ImagesCheckboxComponent,
    ImagesRadioComponent,
    CustomRadioComponent,
    DefaultSwitchComponent,
    InlineInputTypeComponent,
    AnimatedButtonsComponent,
    BasicRadioCheckboxComponent,
    RadioToggleButtonsComponent,
    OutlinedCheckboxStyleComponent,
    InputGroupComponent,
    ButtonAddonsComponent,
    CustomFormsComponent,
    CustomFileInputComponent,
    SegmentedButtonsComponent,
    ButtonsDropdownsComponent,
    CheckboxesAndRadiosComponent,
    BasicInputGroupsComponent,
    VariationAddonsComponent,
    InputGroupsSizingComponent,
    MultipleInputsComponent,
    MegaOptionsComponent,
    VariationRadioComponent,
    VariationChecknoxComponent,
    DefaultStyleComponent,
    SolidBorderStyleComponent,
    InlineStyleComponent,
    VerticalStyleComponent,
    HorizontalStyleComponent,
    WithoutBordersStyleComponent,
    OfferBordersStyleComponent,
    FormsValidationComponent,
    TooltipFormValidationComponent,
    BrowserComponent,
    ValidationFormComponent,
  ],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BarRatingModule 
  ]
})
export class FormControlsModule { }
