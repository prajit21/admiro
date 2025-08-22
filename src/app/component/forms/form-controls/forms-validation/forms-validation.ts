import { CommonModule } from '@angular/common';
import { Browser } from './browser/browser';
import { TooltipFormValidation } from './tooltip-form-validation/tooltip-form-validation';
import { ValidationForm } from './validation-form/validation-form';
import { Component } from '@angular/core';

@Component({
    selector: 'app-forms-validation',
    imports: [CommonModule, Browser, TooltipFormValidation, ValidationForm],
    templateUrl: './forms-validation.html',
    styleUrl: './forms-validation.scss'
})
export class FormsValidation {

}
