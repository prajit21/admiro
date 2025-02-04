import { CommonModule } from '@angular/common';
import { BrowserComponent } from './browser/browser.component';
import { TooltipFormValidationComponent } from './tooltip-form-validation/tooltip-form-validation.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-forms-validation',
    imports: [CommonModule, BrowserComponent, TooltipFormValidationComponent, ValidationFormComponent],
    templateUrl: './forms-validation.component.html',
    styleUrl: './forms-validation.component.scss'
})
export class FormsValidationComponent {

}
