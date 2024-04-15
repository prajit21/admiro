import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FormWidgetsRoutingModule } from './form-widgets-routing.module';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { TouchspinComponent } from './touchspin/touchspin.component';
import { Select2Component } from './select2/select2.component';
import { DefultSelect2Component } from './select2/defult-select2/defult-select2.component';
import { FullColoredVariantComponent } from './select2/full-colored-variant/full-colored-variant.component';
import { OutlineColorVariantComponent } from './select2/outline-color-variant/outline-color-variant.component';
import { DefaultTouchspinComponent } from './touchspin/default-touchspin/default-touchspin.component';
import { OutlinedTouchspinComponent } from './touchspin/outlined-touchspin/outlined-touchspin.component';
import { IconsWithPrefixPostfixComponent } from './touchspin/icons-with-prefix-postfix/icons-with-prefix-postfix.component';
import { ButtonsWithPrefixPostfixComponent } from './touchspin/buttons-with-prefix-postfix/buttons-with-prefix-postfix.component';
import { RoundedTouchspinComponent } from './touchspin/rounded-touchspin/rounded-touchspin.component';
import { SwitchComponent } from './switch/switch.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { CustomSwitchComponent } from './switch/custom-switch/custom-switch.component';
import { DisabledOutlineSwitchComponent } from './switch/disabled-outline-switch/disabled-outline-switch.component';
import { VariationOutlineSwitchComponent } from './switch/variation-outline-switch/variation-outline-switch.component';
import { SwitchSizingComponent } from './switch/switch-sizing/switch-sizing.component';
import { SwitchWithIconsComponent } from './switch/switch-with-icons/switch-with-icons.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { SimpleTypeaheadComponent } from './typeahead/simple-typeahead/simple-typeahead.component';
import { WikipediaSearchComponent } from './typeahead/wikipedia-search/wikipedia-search.component';
import { OpenOnFocusComponent } from './typeahead/open-on-focus/open-on-focus.component';
import { FormattedResultsComponent } from './typeahead/formatted-results/formatted-results.component';
import { SelectOnExactComponent } from './typeahead/select-on-exact/select-on-exact.component';
import { TemplateForResultsComponent } from './typeahead/template-for-results/template-for-results.component';
import { PreventManualEntryComponent } from './typeahead/prevent-manual-entry/prevent-manual-entry.component';
import { GlobalConfigurationTypeaheadsComponent } from './typeahead/global-configuration-typeaheads/global-configuration-typeaheads.component';
import { ClipboardOnTextInputComponent } from './clipboard/clipboard-on-text-input/clipboard-on-text-input.component';
import { ClipboardOnTextareaComponent } from './clipboard/clipboard-on-textarea/clipboard-on-textarea.component';
import { ClipboardOnParagraphComponent } from './clipboard/clipboard-on-paragraph/clipboard-on-paragraph.component';
import { CopyPortionFromParagraphComponent } from './clipboard/copy-portion-from-paragraph/copy-portion-from-paragraph.component';
import { CommonSwitchComponent } from './switch/common-switch/common-switch.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    TouchspinComponent,
    Select2Component,
    DefultSelect2Component,
    FullColoredVariantComponent,
    OutlineColorVariantComponent,
    DefaultTouchspinComponent,
    OutlinedTouchspinComponent,
    IconsWithPrefixPostfixComponent,
    ButtonsWithPrefixPostfixComponent,
    RoundedTouchspinComponent,
    SwitchComponent,
    ClipboardComponent,
    CustomSwitchComponent,
    DisabledOutlineSwitchComponent,
    VariationOutlineSwitchComponent,
    SwitchSizingComponent,
    SwitchWithIconsComponent,
    TypeaheadComponent,
    SimpleTypeaheadComponent,
    WikipediaSearchComponent,
    OpenOnFocusComponent,
    FormattedResultsComponent,
    SelectOnExactComponent,
    TemplateForResultsComponent,
    PreventManualEntryComponent,
    GlobalConfigurationTypeaheadsComponent,
    ClipboardOnTextInputComponent,
    ClipboardOnTextareaComponent,
    ClipboardOnParagraphComponent,
    CopyPortionFromParagraphComponent,
    CommonSwitchComponent
  ],
  imports: [
    CommonModule,
    FormWidgetsRoutingModule,
    SharedModule,
    ClipboardModule,
    NgSelectModule,
    ReactiveFormsModule ,
    FormsModule
  ]
})
export class FormWidgetsModule { }
